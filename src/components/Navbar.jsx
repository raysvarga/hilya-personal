import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-700">
              Portofolio<span className="text-blue-500"> Hilya</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-indigo-600 transition">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-indigo-600 transition">About</Link>
            <Link to="/portfolio" className="text-gray-800 hover:text-indigo-600 transition">Portfolio</Link>
            <Link to="/contact" className="text-gray-800 hover:text-indigo-600 transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
