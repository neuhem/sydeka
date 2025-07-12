import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Gemini AI client server-side
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { question, context, level } = await request.json();
    
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'AI service not configured. Please set GEMINI_API_KEY.' },
        { status: 500 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
As an A-Level Mathematics tutor, provide a clear and detailed explanation for the following question:

Question: ${question}
Context: ${context}
Level: ${level}

Please provide:
1. A step-by-step explanation
2. Mathematical reasoning
3. Any relevant formulas or concepts
4. Tips for solving similar problems

Use LaTeX notation for mathematical expressions (wrap inline math in $ and display math in $$).
Format your response in markdown for easy reading.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();
    
    return NextResponse.json({ explanation });
  } catch (error) {
    console.error('Error generating explanation:', error);
    return NextResponse.json(
      { error: 'Failed to generate explanation' },
      { status: 500 }
    );
  }
}
