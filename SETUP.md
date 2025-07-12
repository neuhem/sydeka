# Sydeka Setup Guide

## Environment Variables

To enable full functionality, you need to set up both Supabase and Google Gemini AI.

### 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Create a new account or sign in
3. Create a new project
4. Wait for the project to be fully initialized

### 2. Get Your Supabase Credentials

From your Supabase project dashboard:

1. Go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")
   - **service_role key** (under "Project API keys") - Keep this secret!

### 3. Set Up Google Gemini AI

1. Go to [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. Create a new API key for Google Gemini
3. Copy the API key (keep it secure!)

### 4. Set Environment Variables

Create a `.env.local` file in the `sydeka` directory with the following content:

```env
# Google Gemini AI API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

**Important:** Replace the placeholder values with your actual credentials.

### 5. Configure Supabase Authentication

In your Supabase dashboard:

1. Go to **Authentication** → **Settings**
2. Configure your site URL:
   - For development: `http://localhost:3000`
   - For production: your actual domain
3. Enable email confirmations if desired
4. Configure any additional auth providers (Google, GitHub, etc.) if needed

### 6. Test the Features

1. Start your development server: `npm run dev`
2. Navigate to `/modules` to see the course structure
3. Click "AI Content" on any module to generate lessons
4. Click "View Module" to enter the interactive lesson interface

## 🎯 New Features in LessonPage

### AI-Generated Content
- Dynamic lesson generation with Google Gemini
- Mathematical expressions with LaTeX support
- Interactive practice problems
- Comprehensive quizzes

### Interactive Learning
- Parameterized practice problems
- Step-by-step solution reveals
- Progress tracking and scoring
- MathJax rendering for mathematical expressions

### Navigation
- Seamless module-to-lesson navigation
- Lesson navigation within modules
- Back to modules functionality
- Progress persistence
2. Navigate to `http://localhost:3000`
3. Try signing up with a new account
4. Check your email for verification (if enabled)
5. Try signing in with your credentials
6. Visit `/dashboard` to see the protected route in action

## Features Implemented

✅ **Full Authentication System**
- User registration with email/password
- User sign-in with email/password
- Automatic session management
- User sign-out functionality

✅ **Protected Routes**
- `/dashboard` - Requires authentication
- Automatic redirect to sign-in page for unauthenticated users
- Automatic redirect to home page for authenticated users accessing sign-in/sign-up

✅ **UI/UX Features**
- Loading states during authentication
- Error handling and display
- Success messages
- Authentication-aware navigation
- Personalized welcome messages

✅ **Security Features**
- Secure session management via Supabase
- Client-side route protection
- Environment variable configuration
- Proper error handling

## Usage Examples

### Protecting a Route
```tsx
import { withAuth } from '@/lib/with-auth'

function MyProtectedComponent() {
  return <div>This content requires authentication</div>
}

export default withAuth(MyProtectedComponent)
```

### Using Authentication in Components
```tsx
import { useAuth } from '@/lib/auth-context'

function MyComponent() {
  const { user, loading, signOut } = useAuth()
  
  if (loading) return <div>Loading...</div>
  if (!user) return <div>Please sign in</div>
  
  return (
    <div>
      Welcome, {user.email}!
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}
```

## Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Check that your environment variables are correctly set
   - Ensure `.env.local` is in the correct directory (`sydeka/.env.local`)
   - Restart your development server after adding environment variables

2. **Authentication not working**
   - Verify your Supabase project is active
   - Check that the site URL is configured correctly in Supabase
   - Ensure you're using the correct API keys

3. **Email confirmation not working**
   - Check your Supabase email settings
   - Verify your email templates are configured
   - Check spam folder for confirmation emails

For more help, check the [Supabase documentation](https://supabase.com/docs/guides/auth) or create an issue in this repository. 