import { useState } from 'react'

export default function PortfolioFilter({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Marketing', 'Public Relations']

  const handleFilter = (filter) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <div className="flex justify-center gap-4">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => handleFilter(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeFilter === filter ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
