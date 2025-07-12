'use client'

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function HomeClient() {
  const { user, loading } = useAuth();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master AQA A-Level Mathematics</h1>
          <p>
            Complete learning platform covering AS Year 1 to A2 Year 2 with comprehensive lessons, 
            interactive quizzes, and AI-powered assistance following the official AQA specification.
          </p>
          <div className="hero-buttons">
            {loading ? (
              <div className="btn btn-primary btn-large loading-btn">
                Loading...
              </div>
            ) : user ? (
              <>
                <Link href="/dashboard" className="btn btn-primary btn-large">
                  Go to Dashboard →
                </Link>
                <Link href="/lessons" className="btn btn-secondary btn-large">
                  Browse Lessons
                </Link>
              </>
            ) : (
              <>
                <Link href="/lessons" className="btn btn-primary btn-large">
                  Start Learning →
                </Link>
                <Link href="/about" className="btn btn-secondary btn-large">
                  Learn More
                </Link>
              </>
            )}
          </div>
          
          {user && (
            <div className="hero-welcome-message">
              <p className="hero-welcome-text">
                Welcome back, {user.user_metadata?.name || user.email}! 
                Ready to continue your A-Level Mathematics journey?
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Course Structure Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Complete AQA A-Level Mathematics Curriculum</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">AS</div>
              <h3>AS Year 1</h3>
              <p>Pure Mathematics 1 covering Algebra, Functions, Coordinate Geometry, Sequences, Trigonometry, Differentiation, and Integration. Plus Statistics 1 with Probability and Distributions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">A2</div>
              <h3>A2 Year 2</h3>
              <p>Advanced Pure Mathematics 2 with Complex Numbers, Vectors, and Numerical Methods. Statistics 2 and Mechanics covering Hypothesis Testing, Kinematics, and Forces.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">QUIZ</div>
              <h3>Interactive Quizzes</h3>
              <p>Test your understanding with comprehensive quizzes after every lesson. Instant feedback and detailed explanations for every question.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">EXAM</div>
              <h3>Exam Preparation</h3>
              <p>Practice with past paper questions, exam-style problems, and detailed mark schemes to maximize your A-Level success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="ai-section">
        <div className="container">
          <div className="ai-content">
            <div className="ai-text">
              <h2>Master Every Topic</h2>
              <p>
                Our comprehensive curriculum covers all AQA A-Level Mathematics topics with 
                detailed explanations, worked examples, and practice problems.
              </p>
              <ul className="ai-features">
                <li>Quadratic Functions & Equations</li>
                <li>Differentiation & Integration</li>
                <li>Trigonometry & Identities</li>
                <li>Statistical Distributions</li>
                <li>Hypothesis Testing</li>
                <li>Mechanics & Projectile Motion</li>
                <li>Complex Numbers</li>
                <li>Parametric Equations</li>
                <li>Vectors & 3D Geometry</li>
              </ul>
            </div>
            <div className="ai-image">
              <div style={{
                background: 'linear-gradient(135deg, var(--bg-accent) 0%, var(--primary-700) 100%)',
                borderRadius: 'var(--radius-lg)',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'var(--text-inverse)',
                boxShadow: 'var(--shadow-lg)'
              }}>
                📚 Mathematics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Mentor Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">AI-Powered Learning Revolution</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">AI</div>
              <h3>AI Content Generator</h3>
              <p>Generate unlimited lessons, quizzes, and practice problems tailored to your specific needs using advanced AI technology.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">STEP</div>
              <h3>Step-by-Step Solutions</h3>
              <p>Detailed explanations for every step of the solution process, helping you understand the method.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">ADAPT</div>
              <h3>Adaptive Learning</h3>
              <p>Personalized learning paths that adapt to your strengths and weaknesses for optimal progress.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">TRACK</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your learning journey with detailed analytics and performance insights.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/ai-lesson-generator" className="btn btn-primary btn-large">
              Try AI Generator →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Ready to Excel in A-Level Mathematics?</h2>
            <p>Join thousands of students achieving their A-Level Mathematics goals with our comprehensive platform.</p>
            <div style={{ marginTop: '2rem' }}>
              {user ? (
                <Link href="/dashboard" className="btn btn-primary btn-large">
                  Continue Learning →
                </Link>
              ) : (
                <Link href="/signup" className="btn btn-primary btn-large">
                  Get Started Today →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
