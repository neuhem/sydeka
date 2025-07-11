export default function Subjects() {
  const subjects = [
    {
      name: 'Mathematics',
      description: 'From basic algebra to advanced calculus and beyond',
      icon: 'MATH',
      color: '#3b82f6',
      lessons: 25
    },
    {
      name: 'Physics',
      description: 'Classical mechanics, quantum physics, and modern discoveries',
      icon: 'PHYS',
      color: '#10b981',
      lessons: 18
    },
    {
      name: 'Computer Science',
      description: 'Programming, algorithms, data structures, and AI',
      icon: 'CODE',
      color: '#8b5cf6',
      lessons: 32
    },
    {
      name: 'History',
      description: 'World history, civilizations, and historical analysis',
      icon: 'HIST',
      color: '#f59e0b',
      lessons: 15
    }
  ];

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
          Subject Areas
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#cbd5e1',
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '600px',
          margin: '0 auto 4rem auto'
        }}>
          Explore our comprehensive curriculum across four core disciplines, designed to take you from beginner to expert.
        </p>
        
        <div style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}>
          {subjects.map((subject) => (
            <div key={subject.name} style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '2.5rem',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 116, 139, 0.3)',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: `${subject.color}20`,
                border: `2px solid ${subject.color}`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: subject.color
              }}>
                {subject.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#f1f5f9'
              }}>
                {subject.name}
              </h3>
              
              <p style={{
                color: '#cbd5e1',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                {subject.description}
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '2rem'
              }}>
                <span style={{color: '#94a3b8', fontSize: '0.9rem'}}>
                  {subject.lessons} lessons available
                </span>
              </div>
              
              <a 
                href={`/subjects/${subject.name.toLowerCase().replace(' ', '-')}`}
                style={{
                  display: 'inline-block',
                  background: `linear-gradient(135deg, ${subject.color}, ${subject.color}dd)`,
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  boxShadow: `0 4px 12px ${subject.color}40`
                }}
              >
                Explore {subject.name} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 