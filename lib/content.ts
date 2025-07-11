import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Lesson, Quiz, LessonMeta } from '@/types'

const contentDirectory = path.join(process.cwd(), '..', 'content')

// Recursively find all markdown files in a directory
function findMarkdownFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = []
  
  if (!fs.existsSync(dir)) {
    return files
  }

  const items = fs.readdirSync(dir)
  
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    
    if (stat.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath, baseDir))
    } else if (item.endsWith('.md')) {
      files.push(fullPath)
    }
  }
  
  return files
}

// Generate slug from file path
function generateSlug(filePath: string, baseDir: string): string {
  const relativePath = path.relative(baseDir, filePath)
  const slug = relativePath.replace(/\.md$/, '').replace(/\\/g, '/').replace(/\//g, '-')
  return slug
}

export function getAllLessons(): Lesson[] {
  const lessonsDirectory = path.join(contentDirectory, 'lessons')
  
  if (!fs.existsSync(lessonsDirectory)) {
    return []
  }

  const markdownFiles = findMarkdownFiles(lessonsDirectory)
  const lessons = markdownFiles
    .filter(filePath => !filePath.includes('quiz'))
    .map(filePath => {
      const slug = generateSlug(filePath, lessonsDirectory)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        meta: data as LessonMeta,
        content,
        filePath,
      }
    })

  return lessons.sort((a, b) => a.meta.title.localeCompare(b.meta.title))
}

export function getAllQuizzes(): Quiz[] {
  const lessonsDirectory = path.join(contentDirectory, 'lessons')
  
  if (!fs.existsSync(lessonsDirectory)) {
    return []
  }

  const markdownFiles = findMarkdownFiles(lessonsDirectory)
  const quizzes = markdownFiles
    .filter(filePath => filePath.includes('quiz'))
    .map(filePath => {
      const slug = generateSlug(filePath, lessonsDirectory)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        meta: data as (LessonMeta & { lessonFile: string; timeLimit: number; totalQuestions: number }),
        content,
        filePath,
      }
    })

  return quizzes.sort((a, b) => a.meta.title.localeCompare(b.meta.title))
}

export function getLessonBySlug(slug: string): Lesson | null {
  try {
    const allLessons = getAllLessons()
    return allLessons.find(lesson => lesson.slug === slug) || null
  } catch (error) {
    return null
  }
}

export function getQuizBySlug(slug: string): Quiz | null {
  try {
    const allQuizzes = getAllQuizzes()
    return allQuizzes.find(quiz => quiz.slug === slug) || null
  } catch (error) {
    return null
  }
}

export function getLessonsBySubject(subject: string): Lesson[] {
  const allLessons = getAllLessons()
  return allLessons.filter(lesson => lesson.meta.subject === subject)
}

export function getLessonsByLevel(level: string): Lesson[] {
  const allLessons = getAllLessons()
  return allLessons.filter(lesson => lesson.meta.level === level)
}

export function getLessonsByYear(year: string): Lesson[] {
  const allLessons = getAllLessons()
  return allLessons.filter(lesson => lesson.meta.year === year)
}

export function getLessonsByModule(module: string): Lesson[] {
  const allLessons = getAllLessons()
  return allLessons.filter(lesson => lesson.meta.module === module)
}

export function getALevelMathematicsLessons(): Lesson[] {
  const allLessons = getAllLessons()
  return allLessons.filter(lesson => 
    lesson.meta.subject === 'mathematics' && 
    lesson.meta.level === 'a-level'
  )
}

export function getALevelMathematicsStructure() {
  const aLevelLessons = getALevelMathematicsLessons()
  
  const structure: Record<string, Record<string, Record<string, Lesson[]>>> = {
    'AS Year 1': {
      'Pure Mathematics 1': {
        'Algebra and Functions': [],
        'Functions': [],
        'Coordinate Geometry': [],
        'Sequences and Series': [],
        'Trigonometry': [],
        'Differentiation': [],
        'Integration': [],
      },
      'Statistics 1': {
        'Statistical Sampling': [],
        'Data Presentation': [],
        'Probability': [],
        'Statistical Distributions': [],
      }
    },
    'A2 Year 2': {
      'Pure Mathematics 2': {
        'Algebraic Methods': [],
        'Functions and Graphs': [],
        'Sequences and Series': [],
        'Trigonometry': [],
        'Exponentials and Logarithms': [],
        'Differentiation': [],
        'Integration': [],
        'Numerical Methods': [],
        'Vectors': [],
      },
      'Statistics 2': {
        'Statistical Distributions': [],
        'Hypothesis Testing': [],
        'Correlation and Regression': [],
      },
      'Mechanics': {
        'Kinematics': [],
        'Forces and Newton\'s Laws': [],
        'Projectile Motion': [],
        'Momentum and Impulse': [],
      }
    }
  }
  
  // Organize lessons by year, subject, and module
  aLevelLessons.forEach(lesson => {
    const year = lesson.meta.year || 'AS Year 1'
    const module = lesson.meta.module || 'Other'
    
    if (structure[year]) {
      const yearStructure = structure[year]
      
      // Find the appropriate section based on module
      Object.keys(yearStructure).forEach(sectionKey => {
        const section = yearStructure[sectionKey]
        if (section[module]) {
          section[module].push(lesson)
        }
      })
    }
  })
  
  return structure
}

export function getPrerequisites(lesson: Lesson): Lesson[] {
  const allLessons = getAllLessons()
  const prerequisites = lesson.meta.prerequisites || []
  
  return allLessons.filter(l => 
    prerequisites.some(prereq => 
      l.slug.includes(prereq) || 
      l.meta.title.toLowerCase().includes(prereq.toLowerCase()) ||
      l.meta.tags.some(tag => tag.toLowerCase().includes(prereq.toLowerCase()))
    )
  )
}

export function getRelatedLessons(lesson: Lesson): Lesson[] {
  const allLessons = getAllLessons()
  
  return allLessons.filter(l => 
    l.slug !== lesson.slug &&
    l.meta.subject === lesson.meta.subject &&
    l.meta.level === lesson.meta.level &&
    l.meta.module === lesson.meta.module
  ).slice(0, 5)
}

export function searchLessons(query: string): Lesson[] {
  const allLessons = getAllLessons()
  const searchTerm = query.toLowerCase()
  
  return allLessons.filter(lesson => 
    lesson.meta.title.toLowerCase().includes(searchTerm) ||
    lesson.meta.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    lesson.content.toLowerCase().includes(searchTerm)
  )
}

export function getLessonProgress(completedLessons: string[]): {
  total: number
  completed: number
  percentage: number
  byYear: Record<string, { total: number; completed: number; percentage: number }>
} {
  const aLevelLessons = getALevelMathematicsLessons()
  const total = aLevelLessons.length
  const completed = completedLessons.length
  
  const byYear: Record<string, { total: number; completed: number; percentage: number }> = {}
  
  aLevelLessons.forEach(lesson => {
    const year = lesson.meta.year || 'AS Year 1'
    if (!byYear[year]) {
      byYear[year] = { total: 0, completed: 0, percentage: 0 }
    }
    
    byYear[year].total++
    if (completedLessons.includes(lesson.slug)) {
      byYear[year].completed++
    }
  })
  
  Object.keys(byYear).forEach(year => {
    byYear[year].percentage = (byYear[year].completed / byYear[year].total) * 100
  })
  
  return {
    total,
    completed,
    percentage: (completed / total) * 100,
    byYear
  }
} 