export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Strategic Communication &<br />
              <span className="text-indigo-600">Public Relations</span> Specialist
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Fresh graduate with expertise in marketing communication, PR campaigns, 
              media relations, and brand management.
            </p>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <img 
              src="https://placehold.co/600x600" 
              alt="Professional young marketing PR specialist working in modern office with laptop and creative materials" 
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
