export default function ExperienceCard({ experience }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
          <p className="text-indigo-600 font-medium">{experience.company}</p>
        </div>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
          {experience.period}
        </span>
      </div>
      
      <p className="mt-4 text-gray-600">{experience.description}</p>
      
      <div className="mt-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
