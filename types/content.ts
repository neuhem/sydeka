export interface LessonMeta {
  title: string
  subject: string
  level: string
  year?: string
  module?: string
  specification?: string
  prerequisites?: string[]
  estimatedTime: number
  tags: string[]
  difficulty?: string
}

export interface Lesson {
  slug: string
  meta: LessonMeta
  content: string
  filePath: string
}

export interface Quiz {
  slug: string
  meta: LessonMeta & {
    lessonFile: string
    timeLimit: number
    totalQuestions: number
  }
  content: string
  filePath: string
}

export interface AILesson {
  title: string
  content: string
  learningObjectives: string[]
  keyPoints: string[]
  workedExamples: {
    question: string
    solution: string
    explanation: string
  }[]
  practiceQuestions: {
    question: string
    answer: string
    workingSteps: string[]
  }[]
}

export interface AIQuiz {
  title: string
  questions: {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }[]
}

export interface GenerateLessonParams {
  topic: string
  subtopic: string
  level: 'AS' | 'A2'
  prerequisites: string[]
  difficulty: 'foundation' | 'intermediate' | 'advanced'
  ageGroup: string
}

export interface GenerateQuizParams {
  topic: string
  subtopic: string
  level: 'AS' | 'A2'
  questionCount: number
  difficulty: 'foundation' | 'intermediate' | 'advanced'
}
