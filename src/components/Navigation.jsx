import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Clock, FileText, Home, Mail, Menu, Shield, Target, X } from 'lucide-react'

const navLinks = [
  { href: '/#landing', label: 'Home', Icon: Home },
  { href: '/#start-here', label: 'Start Here', Icon: Target },
  { href: '/#first-30', label: 'First 30 Minutes', Icon: Clock },
  { href: '/#documentation', label: 'Docs', Icon: FileText },
  { href: '/#pressure', label: 'Pressure', Icon: Target },
  { href: '/#templates', label: 'Email Templates', Icon: Mail },
  { href: '/#why-silent', label: 'Why Silent', Icon: FileText },
  { href: '/#how-to-use', label: 'How To Use', Icon: BookOpen },
  { href: '/wcat', label: 'WCAT Armory', Icon: BookOpen },
  { href: '/stories', label: 'Tell Your Story', Icon: Mail },
]

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleToggle = () => setIsMobileMenuOpen((prev) => !prev)
  const handleClose = () => setIsMobileMenuOpen(false)

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Shield className="mr-3 h-8 w-8 text-red-500" />
          <span className="text-xl font-bold">Worker&apos;s Toolkit</span>
        </div>
        <div className="hidden items-center space-x-4 md:flex">
          {navLinks.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className="nav-link">
              <Icon className="mr-1 inline h-4 w-4" /> {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="space-y-1 bg-gray-800 px-2 pb-3 pt-2 md:hidden">
          {navLinks.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={handleClose}
              className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
            >
              <Icon className="mr-2 h-4 w-4" /> {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation
