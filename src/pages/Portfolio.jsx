import { useState } from 'react'
import PortfolioFilter from '../components/PortfolioFilter'
import PortfolioItem from '../components/PortfolioItem'

export default function Portfolio() {
  const portfolioItems = [
    // ... (array portfolioItems sama seperti sebelumnya)
  ]

  const [filteredItems, setFilteredItems] = useState(portfolioItems)

  const handleFilterChange = (filter) => {
    if (filter === 'All') {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter))
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Showcase</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selected marketing communication and public relations projects demonstrating strategic thinking and execution excellence
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioFilter onFilterChange={handleFilterChange} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredItems.map((item, index) => (
              <PortfolioItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
