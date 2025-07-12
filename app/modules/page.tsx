'use client'

import { useState } from 'react'
import HomePage from '@/components/sections/HomePage'
import LessonPage from '@/components/sections/LessonPage'
import { Module } from '@/types'
import { useProgress } from '@/hooks'

export default function ModulesPage() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  const { progress, markLessonComplete, updateQuizScore } = useProgress()

  const handleSelectModule = (module: Module) => {
    setSelectedModule(module)
  }

  const handleBackToModules = () => {
    setSelectedModule(null)
  }

  const handleLessonComplete = (moduleId: string, lessonIndex: number) => {
    markLessonComplete(moduleId, lessonIndex)
    
    // Show completion feedback
    alert(`Lesson ${lessonIndex + 1} completed! Great job!`)
  }

  const handleQuizComplete = (moduleId: string, score: number) => {
    updateQuizScore(moduleId, score)
    
    // Show score feedback
    const gradeMessage = score >= 90 ? 'Excellent work!' : 
                        score >= 70 ? 'Good job!' : 
                        score >= 50 ? 'Keep practicing!' : 'Review the material and try again.'
    
    alert(`Quiz completed! You scored ${score}%. ${gradeMessage}`)
  }

  return (
    <div className="min-h-screen">
      {selectedModule ? (
        <LessonPage 
          module={selectedModule}
          onBack={handleBackToModules}
          onLessonComplete={handleLessonComplete}
          onQuizComplete={handleQuizComplete}
        />
      ) : (
        <HomePage 
          onSelectModule={handleSelectModule}
          progress={progress}
        />
      )}
    </div>
  )
}