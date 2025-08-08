import EducationTimeline from '../components/EducationTimeline'
import ExperienceCard from '../components/ExperienceCard'

export default function About() {
  const experiences = [
    {
      role: "PR Intern",
      company: "Top Tier PR Agency Jakarta",
      period: "Jan - Jun 2023",
      description: "Assisted in media monitoring, press release writing, and event coordination for corporate clients. Developed skills in crisis communication and stakeholder management.",
      skills: ["Media Relations", "Event Planning", "Press Release Writing"]
    },
    {
      role: "Marketing Communication Assistant",
      company: "Startup E-commerce",
      period: "Jul - Dec 2022",
      description: "Created social media content calendar, managed community engagement, and assisted in influencer marketing campaigns that increased brand awareness by 30%.",
      skills: ["Social Media", "Content Creation", "Influencer Marketing"]
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Marketing Communication & PR Specialist with passion for brand storytelling and strategic communication
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <img 
                src="https://placehold.co/400x500" 
                alt="Professional portrait of young marketing PR specialist in business casual attire, confident expression" 
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Profile</h2>
              <div className="prose text-gray-600 mb-8">
                <p>
                  Fresh graduate with Bachelor's degree in Communication Science, specialization in Public Relations. 
                  Passionate about creating impactful communication strategies that connect brands with their audiences.
                </p>
                <p>
                  Skilled in developing integrated marketing campaigns, media relations, and digital content creation. 
                  Strong interest in corporate communications, brand management, and social media strategy.
                </p>
                <p>
                  Recognized for creative thinking, attention to detail, and ability to work under pressure during 
                  agency internship experiences.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strengths</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Strategic Communication
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Media Relations
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Creative Content Development
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Interests</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Corporate Communications
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Digital Marketing
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Employer Branding
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Professional <span className="text-indigo-600">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Education & <span className="text-indigo-600">Qualifications</span>
          </h2>
          <EducationTimeline />
        </div>
      </section>
    </div>
  )
}
