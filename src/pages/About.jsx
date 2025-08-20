import EducationTimeline from '../components/EducationTimeline'
import ExperienceCard from '../components/ExperienceCard'
import PassFoto from '../assets/img/passfoto.jpg'

export default function About() {
  const experiences = [
    {
      role: "Marketing Communication",
      company: "Makaira - Semarang",
      period: "Feb 2025 - Present",
      description: "Designed and executed four marketing campaigns to enhance brand awareness and customer engagement. Managed communications with students and local communities while supervising a student team that secured national P2MW funding. Expanded Makaira’s presence to two universities and developed integrated digital and offline communication strategies to strengthen brand positioning.",
      skills: ["Marketing Campaigns", "Community Engagement", "Team Leadership", "Brand Expansion", "Digital Marketing", "Offline Marketing", "Strategic Communication"]
    },
    {
      role: "Leader Social Project PF Muda Kadaya",
      company: "Pertamina Foundation- Semarang",
      period: "Nov 2024 - March 2025",
      description: "Developed branding and marketing strategies for palm sugar products produced by the Women Farmers Group. Expanded product distribution to cafés and retail outlets in Semarang while conducting four entrepreneurship and marketing training sessions to strengthen community capacity.",
      skills: ["Branding Strategy", "Marketing Strategy", "Product Distribution", "Community Development", "Entrepreneurship Training", "Capacity Building"]
    },
    {
      role: "Marketing Staff",
      company: "PT Mitra Distribusi Lestari-  Semarang",
      period: "Dec 2023 - July 2024",
      description: "Managed social media and marketplace presence across TikTok Live, Shopee, and Instagram, generating over 3,500 product sales. Strengthened UMKM branding by mentoring 11 partner brands and managing relationships with 10 souvenir shops. Increased sales through integrated online and offline marketing campaigns.",
      skills: ["Social Media Management", "E-commerce Marketing", "Online Sales", "Brand Mentorship", "Partnership Management", "Digital Marketing", "Offline Marketing", "Marketplace Strategy"]
    },
    {
      role: "Digital Entrepreneur TikTok",
      company: "Content Creator Tiktok - Semarang",
      period: "Jan 2023 - Present",
      description: "Produced and edited over 70 viral content pieces, gaining 670K+ likes and 2.8K followers. Collaborated with more than 20 brands and academic institutions on sponsored campaigns while building a strong personal brand through niche-targeted content and active community engagement.",
      skills: ["Content Creation", "Video Editing", "Social Media Growth", "Brand Collaboration", "Sponsored Campaigns", "Personal Branding", "Community Engagement", "Influencer Marketing"]
    },
    {
      role: "Assistant Project Officer",
      company: "Desa Sejahtera Astra Arrum Samudra - Jepara",
      period: "Aug 2024 - May 2025",
      description: "Spearheaded a branding workshop for 80 UMKM members under DSA Arrum Samudra Jepara. Developed a marketing strategy that resulted in 36 processed products being ready for sale and showcased on a dedicated website.",
      skills: ["Workshop Facilitation", "Branding Strategy", "Marketing Strategy", "Product Development", "Community Empowerment", "Website Showcasing"]
    },
    {
      role: "Facilitator UMKM, Community Development ",
      company: "BUMN PT Inalum - Sumatera Utara",
      period: "Nov 2024 - Des 2024",
      description: "Provided two-week mentoring sessions for 27 food-product UMKM and 114 weaving-product UMKM. Collaborated with Pokdarwis to design two signature t-shirts for Ponot Waterfall as a tourist destination, and planned the development of Ponot Waterfall into a sustainable tourism village supported by Inalum.",
      skills: ["Mentoring", "Community Development", "Product Development", "Tourism Branding", "Sustainable Tourism Planning", "Stakeholder Collaboration"]
    },
    {
      role: "Facilitator for TKMP Mentors",
      company: "Project TKMP Kementerian Tenaga Kerja - Semarang",
      period: "Sept 2024 - Des 2024",
      description: "Developed e-commerce training modules for TKMP beneficiaries in Central Java and conducted field visits to mentors and members in Salatiga and Semarang to support implementation.",
      skills: ["E-commerce Training", "Curriculum Development", "Field Facilitation", "Capacity Building", "Community Support"]
    },
    {
      role: "FOUNDER",
      company: "Krisang Temcy - Semarang",
      period: "Feb 2023 - Apr 2024",
      description: "Led a team of three members and secured awardee funding from Diponegoro University. Achieved over 1,000 monthly sales through events and campus activations while expanding brand awareness via TikTok (189K reach) and 12 offline marketing events.",
      skills: ["Team Leadership", "Project Management", "Event Marketing", "Campus Activation", "Sales Growth", "Brand Awareness", "TikTok Marketing", "Offline Marketing"]
    },
    {
      role: "FOUNDER",
      company: "Fruttago - Semarang",
      period: "Nov 2024 - March 2025",
      description: "Developed business strategy and managed a team of four part-time staff. Sold over 2,000 products of best-selling mango sticky rice products across Rembang and Semarang. Handled marketing campaigns and built partnerships with local distributors.",
      skills: ["Business Strategy", "Team Management", "Sales Growth", "Marketing Campaigns", "Partnership Development", "Food & Beverage Marketing"]
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh graduate from Diponegoro University with proven experience in Marketing Communication, Public Relations, and Digital Content Creation. Skilled in strategy development, digital campaign management, and community engagement to strengthen brand awareness and sales.
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
                src={PassFoto}
                alt="Professional portrait of young marketing PR specialist in business casual attire, confident expression" 
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Profile</h2>
              <div className="prose text-gray-600 mb-8">
                <p>
                  A highly motivated fresh graduate from Diponegoro University with extensive experience in Marketing Communication, Public Relations, and Digital Content Creation. Through academic, organizational, and professional experiences, I have successfully developed marketing strategies, managed digital campaigns, and built strong partnerships with communities, brands, and institutions. Recognized for leadership, creativity, and adaptability, I am passionate about delivering impactful communication strategies that enhance brand visibility, increase sales, and foster community engagement.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strengths</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Marketing Communication Strategy
                    </li>
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Digital Marketing & Content Creation
                    </li>
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Public Relations & Media Relations
                    </li>
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Branding & Product Development
                    </li>
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Public Speaking & Storytelling
                    </li>
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Community Engagement
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Interests</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Corporate Communications
                    </li>
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Digital Campaigns & Social Media Strategy
                    </li>
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Community Development & Sociopreneurship
                    </li>
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Employer Branding
                    </li>
                    <li className="before:content-['✓'] before:text-indigo-500 before:mr-2">
                      Partnership & Networking
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Professional <span className="text-indigo-600">Experience</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}

            {experiences.length % 2 !== 0 && <div></div>}
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
