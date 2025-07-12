import { AILesson, AIQuiz, GenerateLessonParams, GenerateQuizParams } from '@/types'

export class AIContentService {
  async generateLesson(params: GenerateLessonParams): Promise<AILesson> {
    const response = await fetch('/api/ai/generate-lesson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to generate lesson');
    }

    return await response.json();
  }

  async generateQuiz(params: GenerateQuizParams): Promise<AIQuiz> {
    const response = await fetch('/api/ai/generate-quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to generate quiz');
    }

    return await response.json();
  }

  async generateExplanation(
    question: string,
    context: string,
    level: 'AS' | 'A2' = 'AS'
  ): Promise<string> {
    const response = await fetch('/api/ai/generate-explanation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, context, level }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to generate explanation');
    }

    const result = await response.json();
    return result.explanation;
  }
}

export const aiContentService = new AIContentService();
