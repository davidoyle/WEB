"use client"

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { BookOpen, Home, Menu, MoreVertical, Target, X } from 'lucide-react'
import ToneToggle from './ToneToggle'

const primaryLinks = [
  { href: '/', label: 'Home', Icon: Home },
  { href: '/start-here', label: 'Start Here', Icon: Target },
  { href: '/stories', label: 'Stories', Icon: BookOpen },
]

const resourceLinks = [
  { href: '/first-30-minutes', label: 'First 30 Minutes' },
  { href: '/documentation', label: 'Docs' },
  { href: '/resources', label: 'Resources' },
  { href: '/pressure-points', label: 'Pressure Points' },
  { href: '/templates', label: 'Email Templates' },
  { href: '/why-silent', label: 'The Cost of Silence' },
  { href: '/how-to-use', label: 'How To Use' },
  { href: '/wcat', label: 'WCAT Armory' },
  { href: '/tell-your-story', label: 'Tell Your Story' },
  { href: '/about', label: "About Worker's Toolkit" },
]

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleToggle = () => setIsMobileMenuOpen((prev) => !prev)
  const handleClose = () => setIsMobileMenuOpen(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white" aria-label="Primary">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-lg font-bold" aria-label="Worker's Toolkit">
            WT
          </span>
          <span className="text-xl font-bold" aria-hidden="true">Worker&apos;s Toolkit</span>
        </div>
        <div className="hidden items-center space-x-4 md:flex">
          {primaryLinks.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className="nav-link">
              <Icon className="mr-1 inline h-4 w-4" aria-hidden="true" /> {label}
            </Link>
          ))}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              <MoreVertical className="mr-2 h-4 w-4" aria-hidden="true" /> Tools &amp; Resources
            </button>
            {isDropdownOpen ? (
              <div className="absolute right-0 mt-2 w-56 rounded-md bg-white py-2 text-gray-900 shadow-lg" role="menu">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-semibold hover:bg-gray-50"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <ToneToggle />
        </div>
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="space-y-1 bg-gray-800 px-2 pb-3 pt-2 md:hidden">
          {primaryLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={handleClose}
              className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
            >
              <Icon className="mr-2 h-4 w-4" aria-hidden="true" /> {label}
            </Link>
          ))}
          <details className="rounded-md bg-gray-900/40 px-3 py-2 text-gray-100" open>
            <summary className="flex cursor-pointer items-center justify-between text-base font-semibold">
              <span>Tools &amp; Resources</span>
            </summary>
            <div className="mt-2 space-y-1" aria-label="Secondary navigation">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
          <div className="px-3 py-2">
            <ToneToggle />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
