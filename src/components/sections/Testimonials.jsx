import { useState } from 'react'
import AnimatedSection from '../AnimatedSection'

const testimonials = [
  {
    quote: "NAJPEN delivered exceptional drilling services. Their team's professionalism and safety record is unmatched.",
    author: 'John Okafor',
    title: 'CEO, Petrocam Energy',
  },
  {
    quote: 'We partnered with NAJPEN for our fabrication needs. The quality and timely delivery exceeded expectations.',
    author: 'Sarah Adeyemi',
    title: 'Project Director, TotalEnergies',
  },
  {
    quote: 'Reliable, professional, and highly skilled. NAJPEN\'s well services team kept our operations running smoothly.',
    author: 'Michael Obi',
    title: 'Operations Manager, Seplat Energy',
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <AnimatedSection id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">TESTIMONIALS</span>
        <h2 className="text-4xl font-bold text-[#0F172A] mt-2">What Our Clients Say</h2>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-8">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#EA580C] text-xl">★</span>
              ))}
            </div>
            <p className="text-lg text-[#0F172A] italic leading-relaxed">"{t.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold text-[#0F172A]">{t.author}</p>
              <p className="text-sm text-[#64748B]">{t.title}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full border border-[#E2E8F0] hover:bg-[#F8FAFC] transition">
              <svg className="w-5 h-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    i === current ? 'bg-[#EA580C]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button onClick={next} className="p-2 rounded-full border border-[#E2E8F0] hover:bg-[#F8FAFC] transition">
              <svg className="w-5 h-5 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Testimonials
