import { useState } from 'react'
import PortfolioModal from './PortfolioModal'

export default function PortfolioItem({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
        <div className="relative overflow-hidden h-48">
          <img
            src={item.image}
            alt={`${item.title} campaign showcase`}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
            <span className="text-white text-sm bg-indigo-600 px-3 py-1 rounded-full">
              {item.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium group"
          >
            View case study
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <PortfolioModal 
          item={item} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  )
}
