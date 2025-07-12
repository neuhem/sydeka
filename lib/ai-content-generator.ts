import { GoogleGenerativeAI } from "@google/generative-ai";
import { GeneratedModuleContent, Module } from '@/types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export const generateModuleContent = async (module: Module): Promise<GeneratedModuleContent> => {
  try {
    const prompt = `
      Generate a learning module for an AQA A-Level Mathematics student on the topic: "${module.title}".
      The module should focus on these key areas: ${module.description}.

      Please provide the content in a JSON format with the following structure:
      
      {
        "lessons": [
          {
            "title": "Lesson title",
            "content": "HTML content with LaTeX math using $...$ for inline and $$...$$ for display",
            "examples": [
              {
                "problem": "Problem statement with LaTeX",
                "solution": "Step-by-step solution with LaTeX"
              }
            ],
            "practiceProblems": [
              {
                "problemTemplate": "Problem template with \${variableName} placeholders",
                "solutionTemplate": ["Step 1", "Step 2", "Step 3"],
                "parameters": [
                  {
                    "name": "variableName",
                    "min": 1,
                    "max": 10
                  }
                ]
              }
            ]
          }
        ],
        "quiz": [
          {
            "question": "Quiz question with LaTeX if needed",
            "options": ["Option A", "Option B", "Option C", "Option D"],
            "correctAnswerIndex": 0,
            "explanation": "Detailed explanation with LaTeX"
          }
        ]
      }

      Generate 3-5 lessons with 2-3 examples each, 1-2 practice problems per lesson, and 10 quiz questions.
      All mathematical notation must use LaTeX syntax. For inline math, use '$...$'. For display math, use '$$...$$'.
      The content should be clear and suitable for a 17-18 year old student.
      Parameter placeholders should use \${parameterName} format.
      
      Return only the JSON object, no additional text.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const jsonText = response.text();
    
    // Clean up the response (remove markdown code blocks if present)
    const cleanJson = jsonText.replace(/```json\n?|\n?```/g, '').trim();
    const parsedContent = JSON.parse(cleanJson);

    // Basic validation
    if (!parsedContent.lessons || !parsedContent.quiz) {
      throw new Error("Generated content is missing required fields.");
    }
    
    // Add practiceProblems array if it's missing from any lesson
    parsedContent.lessons.forEach((lesson: any) => {
        if (!lesson.practiceProblems) {
            lesson.practiceProblems = [];
        }
    });

    return parsedContent;
  } catch (error) {
    console.error("Error generating module content:", error);
    throw new Error("Failed to generate learning content from AI. Please try again later.");
  }
};

/**
 * Generate practice problem with random parameters
 */
export const generatePracticeProblem = (practiceTemplate: GeneratedModuleContent['lessons'][0]['practiceProblems'][0]) => {
  const values: Record<string, number> = {};
  
  // Generate random values for each parameter
  practiceTemplate.parameters.forEach(param => {
    values[param.name] = Math.floor(Math.random() * (param.max - param.min + 1)) + param.min;
  });

  // Replace placeholders in problem template
  let problem = practiceTemplate.problemTemplate;
  Object.entries(values).forEach(([name, value]) => {
    problem = problem.replace(new RegExp(`\\$\\{${name}\\}`, 'g'), value.toString());
  });

  // Replace placeholders in solution template
  const solution = practiceTemplate.solutionTemplate.map(step => {
    let processedStep = step;
    Object.entries(values).forEach(([name, value]) => {
      processedStep = processedStep.replace(new RegExp(`\\$\\{${name}\\}`, 'g'), value.toString());
    });
    return processedStep;
  });

  return {
    problem,
    solution,
    parameters: values
  };
};

/**
 * Check if AI content generation is available
 */
export const isAIContentGenerationAvailable = (): boolean => {
  return !!process.env.GEMINI_API_KEY;
};
