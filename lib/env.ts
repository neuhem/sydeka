/**
 * Environment configuration with validation
 */

export const env = {
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
    'GEMINI_API_KEY',
  ] as const

  const missing = requiredVars.filter(
    (varName) => !process.env[varName]
  )

  if (missing.length > 0) {
    console.warn(
      `Warning: Missing environment variables: ${missing.join(', ')}\n` +
      'Some features may not work correctly.'
    )
  }
}

/**
 * Check if AI service is configured
 */
export function isAIServiceConfigured(): boolean {
  return !!env.GEMINI_API_KEY
}
