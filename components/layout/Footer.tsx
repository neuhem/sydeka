'use client'

import Link from 'next/link'
import { APP_CONFIG, FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="footer-title text-lg font-semibold mb-4">{APP_CONFIG.name}</h3>
            <p className="footer-text text-sm">
              {APP_CONFIG.description}
            </p>
          </div>
          <div>
            <h4 className="footer-title text-sm font-semibold mb-4">Subjects</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.subjects.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link hover:text-blue-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-title text-sm font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link hover:text-blue-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-title text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link hover:text-blue-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-divider mt-8 pt-8 text-center text-sm">
          <p className="footer-copyright">&copy; {APP_CONFIG.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
