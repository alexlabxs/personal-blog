'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b border-terminal-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold brand-gradient hover:brand-bg-hover transition-colors">
              Alex Xiao
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-brand-primary transition-colors">
              首页
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-brand-primary transition-colors">
              博客
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-brand-primary transition-colors">
              项目
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-brand-primary transition-colors">
              关于
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-brand-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-terminal-border">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-brand-primary transition-colors">
                首页
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-brand-primary transition-colors">
                博客
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-brand-primary transition-colors">
                项目
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-brand-primary transition-colors">
                关于
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}