import { APP_CONFIG } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{ 
      background: 'var(--bg-tertiary)', 
      borderTop: '1px solid var(--border-primary)',
      padding: '2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h3 style={{ 
              color: 'var(--text-primary)', 
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              {APP_CONFIG.name}
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.875rem'
            }}>
              {APP_CONFIG.tagline}
            </p>
          </div>
          <div style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.875rem' 
          }}>
            © 2025 {APP_CONFIG.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
