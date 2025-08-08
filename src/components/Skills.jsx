export default function Skills() {
  const skills = [
    {
      category: "Marketing Communication",
      items: [
        "Brand Strategy Development",
        "Content Marketing",
        "Social Media Management",
        "Digital Advertising",
        "Marketing Campaigns"
      ]
    },
    {
      category: "Public Relations",
      items: [
        "Media Relations",
        "Press Release Writing",
        "Event Management",
        "Crisis Communication",
        "Stakeholder Engagement"
      ]
    },
    {
      category: "Technical Skills",
      items: [
        "Adobe Creative Suite (Basic)",
        "Google Analytics",
        "Hootsuite/Sprout Social",
        "Microsoft Office Suite",
        "Canva & Design Basics"
      ]
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional <span className="text-indigo-600">Skillset</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
