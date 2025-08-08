import { useState } from 'react'
import PortfolioFilter from '../components/PortfolioFilter'
import PortfolioItem from '../components/PortfolioItem'

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Brand Awareness Campaign",
      category: "Marketing",
      description: "University project developing a 360-degree campaign for local fashion brand to increase market share among Gen Z consumers.",
      tags: ["Strategic Planning", "Social Media", "Influencer Marketing"],
      link: "#",
      image: "https://placehold.co/600x400",
      details: {
        objective: "Increase brand awareness by 25% among Gen Z consumers",
        strategy: "Integrated social media and influencer campaign with experiential marketing elements",
        result: "Achieved 35% increase in social engagement and 18% sales lift"
      }
    },
    {
      title: "Media Relations Program",
      category: "Public Relations",
      description: "Press conference coordination and media outreach for product launch including press kit development.",
      tags: ["Press Release", "Media Relations", "Event Management"],
      link: "#",
      image: "https://placehold.co/600x400",
      details: {
        objective: "Secure coverage in top 10 media outlets",
        strategy: "Targeted journalist outreach with customized angles",
        result: "12 major media coverages including 2 national newspapers"
      }
    },
    {
      title: "Crisis Communication Plan",
      category: "Public Relations",
      description: "Developed crisis playbook for potential product recall scenario including key messaging and stakeholder mapping.",
      tags: ["Crisis Management", "Stakeholder Engagement", "Message Development"],
      link: "#",
      image: "https://placehold.co/600x400",
      details: {
        objective: "Prepare organization for potential crisis scenario",
        strategy: "Scenario planning and spokesperson training",
        result: "Executed flawless crisis simulation exercise"
      }
    },
    {
      title: "Social Media Content Strategy",
      category: "Marketing",
      description: "Created 3-month content calendar and engagement strategy for startup's LinkedIn and Instagram platforms.",
      tags: ["Content Planning", "Community Management", "Performance Analytics"],
      link: "#",
      image: "https://placehold.co/600x400",
      details: {
        objective: "Increase engagement by 40%",
        strategy: "Data-driven content optimization",
        result: "Achieved 65% engagement increase and 200% follower growth"
      }
    }
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
