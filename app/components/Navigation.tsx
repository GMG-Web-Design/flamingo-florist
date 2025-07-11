'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon, PhoneIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Button } from './Button'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-cream/95 backdrop-blur-sm border-b border-dusty-rose/20 sticky top-0 z-50">
      <div className="max-w-container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <SparklesIcon className="w-8 h-8 text-flamingo-pink" />
            <div>
              <span className="font-display text-2xl font-bold text-deep-navy">Flamingo Florist</span>
              <p className="text-sm text-warm-gray font-medium">30 Years of Making Moments Special</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-deep-navy font-medium hover:text-flamingo-pink transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-flamingo-pink transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <Button size="sm" className="ml-4">
              <PhoneIcon className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dusty-rose/20 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-deep-navy" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-deep-navy" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-dusty-rose/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-deep-navy font-medium hover:text-flamingo-pink transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button size="sm" className="w-full">
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}