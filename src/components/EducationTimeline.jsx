export default function EducationTimeline() {
  const education = [
    {
      degree: "Bachelor of Communication Science",
      major: "Public Relations",
      institution: "Universitas Indonesia",
      year: "2019 - 2023",
      highlights: [
        "GPA 3.8/4.0",
        "Thesis: 'Digital PR Strategies for Gen Z Engagement'",
        "Head of Student PR Agency",
        "Winner of National PR Case Competition"
      ]
    },
    {
      degree: "Professional Certification",
      major: "Digital Marketing",
      institution: "Google Digital Garage",
      year: "2022",
      highlights: [
        "Fundamentals of Digital Marketing",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Analytics & Measurement"
      ]
    }
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 h-full w-1 bg-indigo-100 transform -translate-x-1/2"></div>

      {/* Education items */}
      <div className="relative space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="md:flex justify-center">
            <div className={`md:w-5/12 p-6 rounded-xl shadow-sm bg-white ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
              <h3 className="text-xl font-bold text-indigo-700">{edu.degree}</h3>
              <p className="text-lg font-semibold text-gray-800">{edu.major}</p>
              <p className="text-gray-600 mb-2">{edu.institution} • {edu.year}</p>
              
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {edu.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
