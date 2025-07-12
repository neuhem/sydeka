import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals-clean.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer-new'
import DevTools from '@/components/ui/DevTools'
import { AuthProvider } from '@/lib/auth-context'
import { ThemeProvider } from '@/lib/theme-context'
import { APP_CONFIG } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${APP_CONFIG.name} - ${APP_CONFIG.tagline}`,
  description: APP_CONFIG.description,
  keywords: [...APP_CONFIG.keywords],
  authors: [{ name: APP_CONFIG.author }],
  openGraph: {
    title: `${APP_CONFIG.name} - ${APP_CONFIG.tagline}`,
    description: APP_CONFIG.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Set theme immediately to prevent flash
              (function() {
                try {
                  const theme = localStorage.getItem('sydeka-theme') || 
                    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.MathJax = {
                tex: {
                  inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
                  displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
                  processEscapes: true,
                  processEnvironments: true
                },
                options: {
                  skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
                }
              };
            `
          }}
        />
        <script async src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
      </head>
      <body className={inter.className}>
        <div className="stars"></div>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            
            <main className="min-h-screen">
              {children}
            </main>
            
            <Footer />
            <DevTools />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 