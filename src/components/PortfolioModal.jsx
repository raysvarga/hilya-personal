import { useEffect } from 'react'

export default function PortfolioModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="h-64 lg:h-96 w-full overflow-hidden">
            <img
              src={item.image}
              alt={`Detailed view of ${item.title} project`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              {item.category}
            </span>
            {item.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {item.title}
          </h2>
          
          <div className="prose max-w-none text-gray-600 mb-8">
            <p className="text-lg mb-6">{item.description}</p>
            
            <h3 className="font-bold text-gray-900 mb-2">Project Objective</h3>
            <p>{item.details.objective}</p>
            
            <h3 className="font-bold text-gray-900 mt-4 mb-2">Strategy & Approach</h3>
            <p>{item.details.strategy}</p>
            
            <h3 className="font-bold text-gray-900 mt-4 mb-2">Results & Impact</h3>
            <p>{item.details.result}</p>
          </div>

          <div className="flex space-x-4 mt-8">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Back to Portfolio
            </button>
            <a
              href={item.link}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
