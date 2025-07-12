import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AILesson, GenerateLessonParams } from '@/types';

// Initialize the Google Gemini AI client server-side
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const params: GenerateLessonParams = await request.json();
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'AI service not configured. Please set GEMINI_API_KEY.' },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
Generate a comprehensive A-Level Mathematics lesson for AQA specification with the following requirements:

Topic: ${params.topic}
Subtopic: ${params.subtopic}
Level: ${params.level}
Prerequisites: ${params.prerequisites.join(', ')}
Difficulty: ${params.difficulty}
Age Group: ${params.ageGroup}

Please generate a structured lesson that includes:
1. A clear title
2. Comprehensive lesson content with mathematical explanations
3. Learning objectives (3-5 objectives)
4. Key points to remember (5-7 points)
5. Worked examples (2-3 examples with detailed solutions)
6. Practice questions (3-5 questions with answers and working steps)

Requirements:
- Use LaTeX notation for mathematical expressions (wrap inline math in $ and display math in $$)
- Ensure content is appropriate for A-Level students (17-18 years old)
- Include real-world applications where relevant
- Provide step-by-step explanations for all worked examples
- Make sure all mathematical notation is properly formatted

Return the response as valid JSON with the following structure:
{
  "title": "string",
  "content": "string (markdown formatted with LaTeX)",
  "learningObjectives": ["string"],
  "keyPoints": ["string"],
  "workedExamples": [
    {
      "question": "string",
      "solution": "string",
      "explanation": "string"
    }
  ],
  "practiceQuestions": [
    {
      "question": "string",
      "answer": "string",
      "workingSteps": ["string"]
    }
  ]
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Try to parse as JSON
    try {
      // First try to parse the entire response as JSON
      const lesson: AILesson = JSON.parse(text);
      return NextResponse.json(lesson);
    } catch (parseError) {
      // If that fails, try to extract JSON from the response
      try {
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          // Clean up the JSON string
          let cleanJson = jsonMatch[0];
          // Fix common JSON issues
          cleanJson = cleanJson.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
          const lesson: AILesson = JSON.parse(cleanJson);
          return NextResponse.json(lesson);
        }
      } catch (secondParseError) {
        console.error('Error parsing AI response:', secondParseError);
        console.log('Raw AI response:', text);
      }
      
      // If JSON parsing fails, create a basic lesson structure
      const lesson: AILesson = {
        title: `${params.subtopic} - ${params.level} Level`,
        content: text,
        learningObjectives: [
          `Understand the fundamentals of ${params.subtopic}`,
          `Apply ${params.subtopic} concepts to solve problems`,
          `Analyze and interpret ${params.subtopic} in real-world contexts`
        ],
        keyPoints: [
          `${params.subtopic} is a key concept in ${params.topic}`,
          'Practice is essential for mastery',
          'Connect new concepts to prior knowledge'
        ],
        workedExamples: [
          {
            question: `Example problem for ${params.subtopic}`,
            solution: 'Step-by-step solution will be provided',
            explanation: 'Detailed explanation of the solution process'
          }
        ],
        practiceQuestions: [
          {
            question: `Practice problem for ${params.subtopic}`,
            answer: 'Answer will be provided',
            workingSteps: ['Step 1', 'Step 2', 'Final answer']
          }
        ]
      };
      return NextResponse.json(lesson);
    }
  } catch (error) {
    console.error('Error generating lesson:', error);
    return NextResponse.json(
      { error: 'Failed to generate lesson' },
      { status: 500 }
    );
  }
}
