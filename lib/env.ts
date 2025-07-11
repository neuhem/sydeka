/**
 * Environment configuration with validation
 */

export const env = {
  // Supabase configuration
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  
  // AI Service configuration
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
  
  // App configuration
  NODE_ENV: process.env.NODE_ENV || 'development',
  VERCEL_URL: process.env.VERCEL_URL || '',
} as const

/**
 * Validate required environment variables
 */
export function validateEnv(): void {
  const requiredVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  ] as const

  const missing = requiredVars.filter(
    (varName) => !process.env[varName] || process.env[varName] === 'https://placeholder.supabase.co'
  )

  if (missing.length > 0) {
    console.warn(
      `Warning: Missing environment variables: ${missing.join(', ')}\n` +
      'Some features may not work correctly.'
    )
  }
}

/**
 * Check if Supabase is properly configured
 */
export function isSupabaseConfigured(): boolean {
  return !!(
    env.SUPABASE_URL &&
    env.SUPABASE_ANON_KEY &&
    env.SUPABASE_URL !== 'https://placeholder.supabase.co'
  )
}

/**
 * Check if AI service is configured
 */
export function isAIServiceConfigured(): boolean {
  return !!env.GEMINI_API_KEY
}
