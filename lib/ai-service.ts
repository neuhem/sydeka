import { GoogleGenerativeAI } from '@google/generative-ai'
import { AILesson, AIQuiz, GenerateLessonParams, GenerateQuizParams } from '@/types'

// Initialize the Google Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

export class AIContentService {
  private model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  async generateLesson(params: GenerateLessonParams): Promise<AILesson> {
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
}
`;

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Parse the JSON response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No valid JSON found in response');
      }
      
      const parsedResponse = JSON.parse(jsonMatch[0]);
      return parsedResponse as AILesson;
    } catch (error) {
      console.error('Error generating lesson:', error);
      throw new Error('Failed to generate lesson content');
    }
  }

  async generateQuiz(params: GenerateQuizParams): Promise<AIQuiz> {
    const prompt = `
Generate a comprehensive A-Level Mathematics quiz for AQA specification with the following requirements:

Topic: ${params.topic}
Subtopic: ${params.subtopic}
Level: ${params.level}
Question Count: ${params.questionCount}
Difficulty: ${params.difficulty}

Please generate a structured quiz that includes:
1. A clear title
2. Multiple choice questions with 4 options each
3. Detailed explanations for correct answers
4. Mathematical notation using LaTeX (wrap inline math in $ and display math in $$)

Requirements:
- Questions should be appropriate for A-Level students (17-18 years old)
- Include a mix of calculation, application, and conceptual questions
- Ensure all mathematical notation is properly formatted with LaTeX
- Provide clear, educational explanations for each correct answer
- Make sure questions progress from easier to more challenging

Return the response as valid JSON with the following structure:
{
  "title": "string",
  "questions": [
    {
      "question": "string (with LaTeX notation)",
      "options": ["string", "string", "string", "string"],
      "correctAnswer": number (0-3),
      "explanation": "string (detailed explanation with LaTeX)"
    }
  ]
}
`;

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Parse the JSON response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No valid JSON found in response');
      }
      
      const parsedResponse = JSON.parse(jsonMatch[0]);
      return parsedResponse as AIQuiz;
    } catch (error) {
      console.error('Error generating quiz:', error);
      throw new Error('Failed to generate quiz content');
    }
  }

  async generateExplanation(question: string, topic: string): Promise<string> {
    const prompt = `
Provide a detailed step-by-step explanation for the following A-Level Mathematics question:

Topic: ${topic}
Question: ${question}

Please provide:
1. A clear understanding of what the question is asking
2. Step-by-step solution with mathematical working
3. Explanation of the mathematical concepts used
4. Final answer clearly stated

Use LaTeX notation for mathematical expressions (wrap inline math in $ and display math in $$).
Format your response in markdown.

Requirements:
- Make explanations clear and educational
- Include reasoning for each step
- Use proper mathematical notation
- Ensure content is appropriate for A-Level students
`;

    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating explanation:', error);
      throw new Error('Failed to generate explanation');
    }
  }
}

export const aiContentService = new AIContentService();