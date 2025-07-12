// Application configuration constants
import { Module } from '@/types'

export const APP_CONFIG = {
  name: 'Sydeka',
  tagline: 'AI-Powered Learning Platform',
  description: 'The future of learning is here. AI-powered education that makes world-class knowledge accessible to everyone, from high school to graduate level.',
  keywords: ['education', 'learning', 'AI', 'mathematics', 'physics', 'computer science', 'history'],
  author: 'Sydeka Team',
  copyright: '2024 Sydeka. All rights reserved. Making education accessible to all.',
} as const

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/lessons', label: 'Lessons' },
  { href: '/modules', label: 'Modules' },
  { href: '/ai-lesson-generator', label: 'AI Generator' },
  { href: '/about', label: 'About' },
] as const

export const FOOTER_LINKS = {
  subjects: [
    { href: '/subjects/mathematics', label: 'Mathematics' },
    { href: '/subjects/physics', label: 'Physics' },
    { href: '/subjects/computer-science', label: 'Computer Science' },
    { href: '/subjects/history', label: 'History' },
  ],
  platform: [
    { href: '/lessons', label: 'Browse Lessons' },
    { href: '/ai-mentor', label: 'AI Mentor' },
    { href: '/progress', label: 'Track Progress' },
    { href: '/community', label: 'Community' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ],
} as const

export const CURRICULUM_LEVELS = {
  AS: 'AS Year 1',
  A2: 'A2 Year 2',
} as const

export const DIFFICULTY_LEVELS = {
  foundation: 'Foundation',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const

export const AS_MODULES: Module[] = [
  {
    id: 'as-pure-1',
    title: 'Pure Mathematics 1',
    description: 'Algebra, Functions, Coordinate Geometry, and Sequences',
    level: 'AS',
    topics: ['Algebra', 'Functions', 'Coordinate Geometry', 'Sequences'],
    estimatedDuration: 40
  },
  {
    id: 'as-pure-2',
    title: 'Pure Mathematics 2',
    description: 'Trigonometry, Exponentials, and Logarithms',
    level: 'AS',
    topics: ['Trigonometry', 'Exponentials', 'Logarithms'],
    estimatedDuration: 35
  },
  {
    id: 'as-statistics',
    title: 'Statistics',
    description: 'Data Analysis, Probability, and Distributions',
    level: 'AS',
    topics: ['Data Analysis', 'Probability', 'Normal Distribution'],
    estimatedDuration: 30
  },
  {
    id: 'as-mechanics',
    title: 'Mechanics',
    description: 'Kinematics, Forces, and Newton\'s Laws',
    level: 'AS',
    topics: ['Kinematics', 'Forces', 'Newton\'s Laws'],
    estimatedDuration: 25
  }
] as const

export const A2_MODULES: Module[] = [
  {
    id: 'a2-pure-3',
    title: 'Pure Mathematics 3',
    description: 'Advanced Calculus, Differential Equations, and Complex Numbers',
    level: 'A2',
    topics: ['Advanced Calculus', 'Differential Equations', 'Complex Numbers'],
    estimatedDuration: 45
  },
  {
    id: 'a2-pure-4',
    title: 'Pure Mathematics 4',
    description: 'Vectors, Parametric Equations, and Polar Coordinates',
    level: 'A2',
    topics: ['Vectors', 'Parametric Equations', 'Polar Coordinates'],
    estimatedDuration: 40
  },
  {
    id: 'a2-statistics',
    title: 'Statistics 2',
    description: 'Hypothesis Testing, Correlation, and Regression',
    level: 'A2',
    topics: ['Hypothesis Testing', 'Correlation', 'Regression'],
    estimatedDuration: 35
  },
  {
    id: 'a2-mechanics',
    title: 'Mechanics 2',
    description: 'Projectile Motion, Circular Motion, and Simple Harmonic Motion',
    level: 'A2',
    topics: ['Projectile Motion', 'Circular Motion', 'Simple Harmonic Motion'],
    estimatedDuration: 30
  }
] as const
