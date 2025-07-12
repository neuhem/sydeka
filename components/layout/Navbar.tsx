"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useThemeContext } from "@/lib/theme-context";
import { APP_CONFIG, NAVIGATION_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();
  const { theme, toggleTheme, isInitialized } = useThemeContext();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          {APP_CONFIG.name}
        </Link>

        <div className="nav-links">
          {NAVIGATION_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          {isInitialized && (
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          )}
          
          {loading ? (
            <div className="btn btn-secondary">Loading...</div>
          ) : user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Welcome, {user.user_metadata?.name || user.email}
              </span>
              <button 
                onClick={handleSignOut}
                className="btn btn-secondary"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link href="/signin" className="btn btn-secondary">Sign In</Link>
              <Link href="/signup" className="btn btn-primary">Sign Up</Link>
            </div>
          )}
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ≡
        </button>
      </div>
    </nav>
  );
} 