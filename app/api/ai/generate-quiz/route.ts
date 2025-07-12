import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AIQuiz, GenerateQuizParams } from '@/types';

// Initialize the Google Gemini AI client server-side
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const params: GenerateQuizParams = await request.json();
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'AI service not configured. Please set GEMINI_API_KEY.' },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
Generate a comprehensive A-Level Mathematics quiz for AQA specification with the following requirements:

Topic: ${params.topic}
Subtopic: ${params.subtopic}
Level: ${params.level}
Number of Questions: ${params.questionCount}
Difficulty: ${params.difficulty}

Please generate a structured quiz that includes:
1. A clear title
2. Multiple choice questions (4 options each)
3. Detailed explanations for each answer
4. Questions that test understanding, application, and analysis

Requirements:
- Use LaTeX notation for mathematical expressions (wrap inline math in $ and display math in $$)
- Ensure content is appropriate for A-Level students (17-18 years old)
- Include a mix of computational and conceptual questions
- Provide clear explanations for why each answer is correct or incorrect
- Make sure all mathematical notation is properly formatted

Return the response as valid JSON with the following structure:
{
  "title": "string",
  "questions": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctAnswer": number (0-3),
      "explanation": "string"
    }
  ]
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Try to parse as JSON
    try {
      // First try to parse the entire response as JSON
      const quiz: AIQuiz = JSON.parse(text);
      return NextResponse.json(quiz);
    } catch (parseError) {
      // If that fails, try to extract JSON from the response
      try {
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          // Clean up the JSON string
          let cleanJson = jsonMatch[0];
          // Fix common JSON issues
          cleanJson = cleanJson.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
          const quiz: AIQuiz = JSON.parse(cleanJson);
          return NextResponse.json(quiz);
        }
      } catch (secondParseError) {
        console.error('Error parsing AI response:', secondParseError);
        console.log('Raw AI response:', text);
      }
      
      // If JSON parsing fails, create a basic quiz structure
      const quiz: AIQuiz = {
        title: `${params.subtopic} Quiz - ${params.level} Level`,
        questions: [
          {
            question: `What is a key concept in ${params.subtopic}?`,
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 0,
            explanation: 'This is a sample question. AI-generated questions will be more detailed.'
          }
        ]
      };
      return NextResponse.json(quiz);
    }
  } catch (error) {
    console.error('Error generating quiz:', error);
    return NextResponse.json(
      { error: 'Failed to generate quiz' },
      { status: 500 }
    );
  }
}
