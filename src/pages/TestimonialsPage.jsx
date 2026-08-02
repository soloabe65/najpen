import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'

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
  {
    quote: 'NAJPEN\'s HSE discipline is the best we have seen from an indigenous contractor. Zero compromises, ever.',
    author: 'Amara Eze',
    title: 'HSE Manager, Chevron Nigeria',
  },
  {
    quote: 'Their pipeline construction team completed a 48km trunkline on schedule and without a single re-work.',
    author: 'Tunde Bakare',
    title: 'Asset Development Lead, Shell',
  },
  {
    quote: 'Outstanding manpower supply. Every single personnel deployed was certified, professional, and ready to work.',
    author: 'Ngozi Adeleke',
    title: 'HR Director, ExxonMobil Nigeria',
  },
  {
    quote: 'A partner that treats every milestone like a promise. NAJPEN is our go-to for installation and commissioning.',
    author: 'Emeka Obi',
    title: 'Projects Head, NNPC',
  },
  {
    quote: 'Their maintenance program improved production across our mature fields with zero reportable incidents.',
    author: 'Fatima Bello',
    title: 'Operations Lead, ConocoPhillips',
  },
  {
    quote: 'Professionalism, safety, and results — NAJPEN embodies all three in equal measure.',
    author: 'Dapo Akin',
    title: 'Director, Duke Oil',
  },
]

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="CLIENT VOICE"
        title="Testimonials"
        description="Hear directly from the clients, partners, and project teams we work alongside across the oil and gas industry."
      />

      <AnimatedSection className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedCard
                key={t.author}
                delay={i * 0.08}
                className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-8 flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-5 h-5 text-[#EA580C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#0F172A] leading-relaxed flex-1 italic">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                  <p className="font-semibold text-[#0F172A]">{t.author}</p>
                  <p className="text-sm text-[#64748B]">{t.title}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="bg-[#0F172A] rounded-xl p-8 mt-16 text-center">
            <p className="text-white font-semibold text-lg">
              Trusted by operators across the Nigerian oil & gas landscape.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 mt-4 text-[#EA580C] hover:text-orange-400 font-semibold text-sm transition-colors"
            >
              Partner with us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default TestimonialsPage