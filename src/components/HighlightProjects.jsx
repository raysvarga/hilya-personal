export default function HighlightProjects() {
  const projects = [
    {
      title: "University Brand Awareness Campaign",
      description: "Led a student team to develop and execute a 3-month campaign to increase enrollment, resulting in 15% higher engagement on social platforms.",
      tags: ["Brand Strategy", "Social Media", "Content Creation"],
      link: "#",
      image: "https://placehold.co/600x400"
    },
    {
      title: "Corporate Social Responsibility Program",
      description: "Coordinated PR activities for a local CSR initiative featuring media partnerships and community events, covered by 5 regional media outlets.",
      tags: ["PR Strategy", "Event Management", "Media Relations"],
      link: "#",
      image: "https://placehold.co/600x400"
    },
    {
      title: "Product Launch Digital Campaign",
      description: "Assisted in developing digital marketing materials and influencer outreach for a new FMCG product launch targeting millennials.",
      tags: ["Digital Marketing", "Influencer Outreach", "Creative Content"],
      link: "#",
      image: "https://placehold.co/600x400"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Featured <span className="text-indigo-600">Campaigns</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Selection of marketing communication and public relations projects I led or contributed to during my academic and professional journey.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
                >
                  View details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/portfolio" 
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            View Full Portfolio
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
