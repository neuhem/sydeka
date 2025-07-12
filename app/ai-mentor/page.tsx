export default function AIMentor() {
  return (
    <div style={{minHeight: '100vh', padding: '3rem 1rem'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginBottom: '1.5rem', 
          textAlign: 'center',
          color: '#f1f5f9',
          textShadow: '0 0 20px rgba(96, 165, 250, 0.5)'
        }}>
          AI Mentor
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#cbd5e1',
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '600px',
          margin: '0 auto 4rem auto'
        }}>
          Your personal AI tutor that adapts to your learning style and provides instant, personalized guidance.
        </p>
        
        <div style={{
          display: 'grid',
          gap: '3rem',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#f1f5f9'
            }}>
              Meet Your AI Tutor
            </h2>
            
            <div style={{marginBottom: '2rem'}}>
              <h3 style={{color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
                ✓ Personalized Learning Paths
              </h3>
              <p style={{color: '#cbd5e1', marginBottom: '1rem'}}>
                Adapts to your pace and learning style for optimal comprehension.
              </p>
              
              <h3 style={{color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
                ✓ Instant Question Answering
              </h3>
              <p style={{color: '#cbd5e1', marginBottom: '1rem'}}>
                Get immediate help with concepts, problems, and explanations.
              </p>
              
              <h3 style={{color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
                ✓ Progress Tracking
              </h3>
              <p style={{color: '#cbd5e1', marginBottom: '1rem'}}>
                Monitor your learning journey with detailed analytics and insights.
              </p>
            </div>
          </div>
          
          <div style={{
            background: 'rgba(220, 38, 38, 0.1)',
            borderRadius: '1rem',
            padding: '3rem',
            textAlign: 'center',
            border: '1px solid rgba(100, 116, 139, 0.3)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1rem'
            }}>
              🤖
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#f1f5f9',
              marginBottom: '1rem'
            }}>
              AI Assistant Ready
            </h3>
            <p style={{color: '#cbd5e1'}}>
              Available 24/7 to help you master any subject
            </p>
          </div>
        </div>
        
        <div style={{
          background: 'rgba(30, 41, 59, 0.8)',
          padding: '3rem',
          borderRadius: '1rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(100, 116, 139, 0.3)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#f1f5f9'
          }}>
            Start Learning with AI
          </h2>
          <p style={{
            color: '#cbd5e1',
            marginBottom: '2rem',
            fontSize: '1.1rem'
          }}>
            Experience the future of education with our advanced AI mentor system.
          </p>
          <a 
            href="/lessons"
            style={{
              display: 'inline-block',
              background: '#dc2626',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
            }}
          >
            Try AI Mentor Now →
          </a>
        </div>
      </div>
    </div>
  );
} 