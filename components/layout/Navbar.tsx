"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { APP_CONFIG, NAVIGATION_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

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
          
          {loading ? (
            <div className="btn btn-primary loading-btn">Loading...</div>
          ) : user ? (
            <div className="navbar-user-section">
              <span className="navbar-welcome-text">
                Welcome, {user.user_metadata?.name || user.email}
              </span>
              <button 
                onClick={handleSignOut}
                className="btn btn-secondary navbar-signout-btn"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="navbar-auth-buttons">
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