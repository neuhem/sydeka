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

export interface Module {
  id: string
  title: string
  description: string
  level: 'AS' | 'A2'
  topics: string[]
  estimatedDuration: number // in hours
}

export interface UserProgress {
  [moduleId: string]: {
    lessonsCompleted: number
    quizScore: number | null
    lastAccessed?: Date
  }
}

export interface GeneratedModuleContent {
  lessons: Array<{
    title: string
    content: string
    examples: Array<{
      problem: string
      solution: string
    }>
    practiceProblems: Array<{
      problemTemplate: string
      solutionTemplate: string[]
      parameters: Array<{
        name: string
        min: number
        max: number
      }>
    }>
  }>
  quiz: Array<{
    question: string
    options: string[]
    correctAnswerIndex: number
    explanation: string
  }>
}
