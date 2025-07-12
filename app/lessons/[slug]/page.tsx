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
    <div style={{
      minHeight: '100vh',
      padding: '2rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{maxWidth: '4xl', margin: '0 auto'}}>
        {/* Header */}
        <div style={{marginBottom: '2rem'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
            <span style={{
              padding: '0.5rem 1rem',
              background: 'rgba(239, 68, 68, 0.2)',
              color: '#f87171',
              fontSize: '0.875rem',
              borderRadius: '9999px',
              border: '1px solid rgba(239, 68, 68, 0.3)'
            }}>
              {lesson.meta.subject}
            </span>
            <span style={{
              padding: '0.5rem 1rem',
              background: 'rgba(75, 85, 99, 0.3)',
              color: '#d1d5db',
              fontSize: '0.875rem',
              borderRadius: '9999px',
              border: '1px solid rgba(107, 114, 128, 0.3)'
            }}>
              {lesson.meta.level}
            </span>
          </div>
          
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#f1f5f9'
          }}>
            {lesson.meta.title}
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            fontSize: '0.875rem',
            color: '#d1d5db',
            marginBottom: '1rem'
          }}>
            <span>⏱️ {lesson.meta.estimatedTime} minutes</span>
            {lesson.meta.prerequisites && lesson.meta.prerequisites.length > 0 && (
              <span>📚 Prerequisites: {lesson.meta.prerequisites.join(', ')}</span>
            )}
          </div>
          
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
            {(lesson.meta.tags || []).map((tag: string) => (
              <span key={tag} style={{
                padding: '0.5rem 0.75rem',
                background: 'rgba(55, 65, 81, 0.6)',
                color: '#e5e7eb',
                fontSize: '0.875rem',
                borderRadius: '0.375rem',
                border: '1px solid rgba(75, 85, 99, 0.3)'
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{
          maxWidth: 'none',
          lineHeight: '1.7',
          color: '#e5e7eb'
        }}>
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h1: ({ children }) => (
                <h1 style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginTop: '2rem',
                  marginBottom: '1rem',
                  color: '#f1f5f9',
                  borderBottom: '2px solid #dc2626',
                  paddingBottom: '0.5rem'
                }}>
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginTop: '1.5rem',
                  marginBottom: '0.75rem',
                  color: '#f1f5f9'
                }}>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '500',
                  marginTop: '1rem',
                  marginBottom: '0.5rem',
                  color: '#f1f5f9'
                }}>
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p style={{
                  marginBottom: '1rem',
                  lineHeight: '1.7',
                  color: '#d1d5db'
                }}>
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul style={{
                  listStyle: 'disc',
                  paddingLeft: '1.5rem',
                  marginBottom: '1rem',
                  color: '#d1d5db'
                }}>
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol style={{
                  listStyle: 'decimal',
                  paddingLeft: '1.5rem',
                  marginBottom: '1rem',
                  color: '#d1d5db'
                }}>
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li style={{
                  marginBottom: '0.25rem',
                  color: '#d1d5db'
                }}>
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote style={{
                  borderLeft: '4px solid #dc2626',
                  paddingLeft: '1rem',
                  fontStyle: 'italic',
                  color: '#9ca3af',
                  margin: '1rem 0',
                  background: 'rgba(55, 65, 81, 0.3)',
                  padding: '1rem',
                  borderRadius: '0.375rem'
                }}>
                  {children}
                </blockquote>
              ),
              code: ({ className, children }) => {
                const isInline = !className
                return isInline ? (
                  <code style={{
                    background: 'rgba(55, 65, 81, 0.6)',
                    padding: '0.125rem 0.25rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.875rem',
                    fontFamily: 'monospace',
                    color: '#f87171'
                  }}>
                    {children}
                  </code>
                ) : (
                  <code style={{
                    display: 'block',
                    background: 'rgba(17, 24, 39, 0.8)',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    overflowX: 'auto',
                    fontSize: '0.875rem',
                    fontFamily: 'monospace',
                    color: '#e5e7eb',
                    border: '1px solid rgba(75, 85, 99, 0.3)'
                  }}>
                    {children}
                  </code>
                )
              },
              pre: ({ children }) => (
                <pre style={{
                  background: 'rgba(17, 24, 39, 0.8)',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  overflowX: 'auto',
                  marginBottom: '1rem',
                  border: '1px solid rgba(75, 85, 99, 0.3)'
                }}>
                  {children}
                </pre>
              ),
              table: ({ children }) => (
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginBottom: '1rem',
                  border: '1px solid rgba(75, 85, 99, 0.3)'
                }}>
                  {children}
                </table>
              ),
              th: ({ children }) => (
                <th style={{
                  padding: '0.75rem',
                  background: 'rgba(55, 65, 81, 0.6)',
                  color: '#f1f5f9',
                  fontWeight: '600',
                  textAlign: 'left',
                  border: '1px solid rgba(75, 85, 99, 0.3)'
                }}>
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td style={{
                  padding: '0.75rem',
                  color: '#d1d5db',
                  border: '1px solid rgba(75, 85, 99, 0.3)'
                }}>
                  {children}
                </td>
              ),
            }}
          >
            {lesson.content}
          </ReactMarkdown>
        </div>

        {/* AI Mentor Chat Placeholder */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(17, 24, 39, 0.8)',
          borderRadius: '0.5rem',
          border: '1px solid rgba(75, 85, 99, 0.3)'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '0.75rem',
            color: '#f1f5f9'
          }}>
            🤖 AI Mentor Chat
          </h3>
          <p style={{
            color: '#d1d5db',
            marginBottom: '1rem'
          }}>
            Need help with this lesson? Ask your AI mentor any questions about the concepts covered.
          </p>
          <div style={{
            background: 'rgba(17, 24, 39, 0.6)',
            padding: '1rem',
            borderRadius: '0.375rem',
            border: '1px solid rgba(75, 85, 99, 0.3)'
          }}>
            <p style={{
              fontSize: '0.875rem',
              color: '#9ca3af',
              fontStyle: 'italic'
            }}>
              AI Mentor integration coming soon! This will provide personalized explanations, 
              generate practice problems, and answer your questions about the lesson content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 