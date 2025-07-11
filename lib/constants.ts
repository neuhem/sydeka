// Application configuration constants

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
