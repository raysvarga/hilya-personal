import { ArrowUpRight } from "lucide-react";

export default function EducationTimeline() {
  const education = [
    {
      type: "education",
      degree: "Bachelor Of Fisheries",
      major: "Fisheries Technology",
      institution: "Universitas Diponegoro",
      year: "2021 - 2025",
      highlights: [
        "GPA 3.90/4.0",
        "Thesis: 'The Effects of Varying Concentrations of Spirulina platensis Powder on the Characteristics of Solid Soap'",
        "Awardee of the Social Project Grant by Pertamina Foundation with funding of IDR 32 million (2024)",
        "1st Outstanding Student Fisheries and Marine Science Faculty Universitas Diponegoro 2024",
        "Awardee of the Youth Entrepreneurship Funding Program Universitas Diponegoro 2024",
        "Awardee of Karya Salemba Empat Scholarship 2023-2025"
      ]
    },
    {
      type: "qualification",
      degree: "Certificate Of Participation",
      major: "SROI & IKM Training and Assessment For Pertamina Foundation",
      institution: "Pertamina Foundation",
      year: "2025",
      highlights: [],
      links: [
        "https://drive.google.com/file/d/1v4cXFhDFa6qFqqoTi6tmsf98-dPaEcLA/view?usp=sharing"
      ]
    },
    {
      type: "qualification",
      degree: "Certificate Of Competence",
      major: "Digital Marketing",
      institution: "Indonesian Professional Certification Authority",
      year: "2024",
      highlights: [],
      links: [
        "https://drive.google.com/file/d/1kOyDNuySjFmn0RI5e4EqF8YgMw45sIue/view?usp=sharing"
      ]
    }
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 h-full w-1 bg-indigo-100 transform -translate-x-1/2"></div>

      <div className="relative space-y-12">
        {/* Section headers */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-700 md:w-5/12 md:text-right">
            Education
          </h2>
          <h2 className="text-2xl font-bold text-indigo-700 md:w-5/12 md:text-left">
            Qualifications
          </h2>
        </div>

        {/* Education items */}
        {education.map((edu, index) => (
          <div key={index} className="md:flex justify-center">
            <div
              className={`md:w-5/12 p-6 rounded-xl shadow-sm bg-white ${
                edu.type === "education" ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <h3 className="text-xl font-bold text-indigo-700">
                {edu.degree}
              </h3>
              <p className="text-lg font-semibold text-gray-800">{edu.major}</p>
              <p className="text-gray-600 mb-2">
                {edu.institution} • {edu.year}
              </p>

              <div className="mt-4">
                {edu.highlights.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {edu.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {edu.links && edu.links.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Links:</h4>
                    <ul className="space-y-2">
                      {edu.links.map((link, i) => (
                        <li key={i}>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition"
                          >
                            View Certificate{" "}
                            <ArrowUpRight className="ml-1 w-4 h-4" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
