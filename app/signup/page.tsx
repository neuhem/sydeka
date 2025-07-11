'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  const { signUp, user } = useAuth()
  const router = useRouter()

  // Redirect if already signed in
  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    if (!name || !email || !password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    const { error } = await signUp(email, password, name)
    
    if (error) {
      setError(error)
      setLoading(false)
    } else {
      setSuccess('Account created successfully! Please check your email to verify your account.')
      setLoading(false)
      // Optionally redirect after a delay
      setTimeout(() => {
        router.push('/signin')
      }, 3000)
    }
  }

  if (user) {
    return (
      <div style={{minHeight: '100vh', padding: '3rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{color: '#f1f5f9', textAlign: 'center'}}>
          <h2>Redirecting...</h2>
        </div>
      </div>
    )
  }

  return (
    <div style={{minHeight: '100vh', padding: '3rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <h1 style={{
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginBottom: '3rem', 
          textAlign: 'center',
          color: '#f1f5f9',
          textShadow: '0 0 20px rgba(96, 165, 250, 0.5)'
        }}>
          Join Sydeka
        </h1>
        
        <div style={{
          background: 'rgba(30, 41, 59, 0.8)',
          padding: '3rem',
          borderRadius: '1rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(100, 116, 139, 0.3)',
          boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#f1f5f9', textAlign: 'center' }}>
            Start Your Journey
          </h3>
          <p style={{ marginBottom: '2rem', color: '#cbd5e1', textAlign: 'center' }}>
            Create your account and unlock world-class education.
          </p>

          {(!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co') && (
            <div style={{
              background: 'rgba(251, 191, 36, 0.1)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginBottom: '1.5rem',
              color: '#fbbf24',
              textAlign: 'center',
              fontSize: '0.9rem'
            }}>
              ⚠️ Authentication not configured. Please set up your Supabase environment variables to enable sign-up functionality.
              <br />
              <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                See SETUP.md for instructions.
              </span>
            </div>
          )}
          
          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginBottom: '1.5rem',
              color: '#fca5a5',
              textAlign: 'center'
            }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '0.5rem',
              padding: '1rem',
              marginBottom: '1.5rem',
              color: '#6ee7b7',
              textAlign: 'center'
            }}>
              {success}
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input 
              type="text" 
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              style={{
                padding: '1rem',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(100, 116, 139, 0.3)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                color: '#f1f5f9',
                backdropFilter: 'blur(5px)',
                opacity: loading ? 0.6 : 1
              }}
            />
            <input 
              type="email" 
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              style={{
                padding: '1rem',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(100, 116, 139, 0.3)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                color: '#f1f5f9',
                backdropFilter: 'blur(5px)',
                opacity: loading ? 0.6 : 1
              }}
            />
            <input 
              type="password" 
              placeholder="Password (min. 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              style={{
                padding: '1rem',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(100, 116, 139, 0.3)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                color: '#f1f5f9',
                backdropFilter: 'blur(5px)',
                opacity: loading ? 0.6 : 1
              }}
            />
            <button 
              type="submit" 
              disabled={loading}
              style={{
                padding: '1rem 2rem',
                background: loading ? 'rgba(100, 116, 139, 0.5)' : 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: loading ? 'none' : '0 4px 12px rgba(16, 185, 129, 0.3)'
              }}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <p style={{ marginTop: '2rem', color: '#94a3b8', textAlign: 'center' }}>
            Already have an account? <Link href="/signin" style={{ color: '#60a5fa', textDecoration: 'none' }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 