import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'AI service not configured. Please set GEMINI_API_KEY in your .env.local file.' 
        },
        { status: 500 }
      );
    }

    // Simple check without making an actual API call
    if (process.env.GEMINI_API_KEY.length < 10) {
      return NextResponse.json(
        { 
          status: 'error', 
          message: 'Invalid API key format. Please check your GEMINI_API_KEY.' 
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      status: 'success',
      message: 'AI service is configured and ready'
    });
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Health check failed' 
      },
      { status: 500 }
    );
  }
}
