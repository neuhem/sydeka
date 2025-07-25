import { AILesson, AIQuiz, GenerateLessonParams, GenerateQuizParams } from '@/types'

export class AIContentService {
  async generateLesson(params: GenerateLessonParams): Promise<AILesson> {
    console.log('Generating lesson with params:', params);
    
    const response = await fetch('/api/ai/generate-lesson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('API Error:', error);
      throw new Error(error.error || `Failed to generate lesson: ${response.status} ${response.statusText}`);
    }

    const lesson = await response.json();
    console.log('Lesson generated successfully:', lesson.title);
    return lesson;
  }

  async generateQuiz(params: GenerateQuizParams): Promise<AIQuiz> {
    console.log('Generating quiz with params:', params);
    
    const response = await fetch('/api/ai/generate-quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('API Error:', error);
      throw new Error(error.error || `Failed to generate quiz: ${response.status} ${response.statusText}`);
    }

    const quiz = await response.json();
    console.log('Quiz generated successfully:', quiz.title);
    return quiz;
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
