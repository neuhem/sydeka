import { getLessonBySlug, getAllLessons } from '@/lib/content'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface LessonPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const lessons = getAllLessons()
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }))
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params
  const lesson = getLessonBySlug(slug)

  if (!lesson) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {lesson.meta.subject}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
              {lesson.meta.level}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{lesson.meta.title}</h1>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
            <span>⏱️ {lesson.meta.estimatedTime} minutes</span>
            {lesson.meta.prerequisites.length > 0 && (
              <span>📚 Prerequisites: {lesson.meta.prerequisites.join(', ')}</span>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {lesson.meta.tags.map((tag: string) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>,
              p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-1">{children}</ol>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-4">
                  {children}
                </blockquote>
              ),
              code: ({ className, children }) => {
                const isInline = !className
                return isInline ? (
                  <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>
                ) : (
                  <code className={`block bg-gray-100 p-4 rounded-lg overflow-x-auto ${className}`}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {lesson.content}
          </ReactMarkdown>
        </div>

        {/* AI Mentor Chat Placeholder */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">🤖 AI Mentor Chat</h3>
          <p className="text-gray-600 mb-4">
            Need help with this lesson? Ask your AI mentor any questions about the concepts covered.
          </p>
          <div className="bg-white p-4 rounded border">
            <p className="text-sm text-gray-500 italic">
              AI Mentor integration coming soon! This will provide personalized explanations, 
              generate practice problems, and answer your questions about the lesson content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 