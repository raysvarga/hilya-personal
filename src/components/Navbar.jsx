import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-700">
              Hilya Fuady<span className="text-blue-500"> | Portofolio</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-indigo-600 transition">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-indigo-600 transition">About</Link>
            <Link to="/portfolio" className="text-gray-800 hover:text-indigo-600 transition">Portfolio</Link>
            <Link to="/contact" className="text-gray-800 hover:text-indigo-600 transition">Contact</Link>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-indigo-600">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-indigo-600">About</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-indigo-600">Portfolio</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-gray-800 hover:text-indigo-600">Contact</Link>
        </div>
      )}
    </nav>
  )
}
