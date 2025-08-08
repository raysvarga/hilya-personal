export default function Testimonials() {
  const testimonials = [
    {
      quote: "Demonstrated exceptional communication skills and strategic thinking during our marketing project. A quick learner with fresh perspectives.",
      author: "Dr. Sarah Lim",
      position: "Marketing Professor, Universitas Indonesia",
      avatar: "https://placehold.co/100x100"
    },
    {
      quote: "Brought creative ideas to our PR team internship program. Showed strong potential in media relations and event coordination.",
      author: "Michael Tan",
      position: "PR Manager, Fortune 500 Company",
      avatar: "https://placehold.co/100x100"
    },
    {
      quote: "A natural communicator who understands brand messaging well. Contributed valuable content for our social media campaigns.",
      author: "Aisha Rahman",
      position: "Digital Marketing Lead, Tech Startup",
      avatar: "https://placehold.co/100x100"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Professional <span className="text-indigo-600">Endorsements</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
