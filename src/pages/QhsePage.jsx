import PageHeader from '../components/PageHeader'
import Qhse from '../components/sections/Qhse'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'

const certifications = [
  { title: 'ISO 9001:2015', text: 'Quality Management Standard', icon: 'Q' },
  { title: 'ISO 45001', text: 'Occupational Health & Safety', icon: 'H' },
  { title: 'ISO 14001', text: 'Environmental Management', icon: 'E' },
  { title: 'NCDMB', text: 'Local Content Compliance', icon: 'N' },
]

const policies = [
  { title: 'QHSE Policy', description: 'Our commitment to quality, health, safety, and the environment.' },
  { title: 'HSE Management Plan', description: 'Systematic approach to managing health, safety, and environmental risks.' },
  { title: 'Environmental Policy', description: 'How we minimise our footprint across every project.' },
  { title: 'Sustainability Report', description: 'Annual reporting on our people, safety, and community impact.' },
]

function QhsePage() {
  return (
    <>
      <PageHeader
        eyebrow="QUALITY · HEALTH · SAFETY · ENVIRONMENT"
        title="QHSE"
        description="Every employee goes home safe, every day. Explore the framework, certifications, and standards behind our goal-zero culture."
      />

      <Qhse />

      <AnimatedSection className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">CERTIFICATIONS</span>
              <h2 className="text-4xl font-bold text-[#0F172A] mt-2">Standards We Operate To</h2>
              <p className="text-[#64748B] mt-6 leading-relaxed">
                Our management systems are aligned with recognised international standards, ensuring that quality,
                safety, and environmental responsibility are engineered into every project — not bolted on.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {certifications.map((c, i) => (
                <AnimatedCard
                  key={c.title}
                  delay={i * 0.1}
                  className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-8 text-center hover:shadow-md transition-shadow"
                >
                  <div className="mx-auto w-14 h-14 bg-[#EA580C] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                    {c.icon}
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mt-4">{c.title}</h3>
                  <p className="text-sm text-[#64748B] mt-1">{c.text}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">DOCUMENTS</span>
            <h2 className="text-4xl font-bold text-[#0F172A] mt-2">Policies & Downloads</h2>
            <p className="text-[#64748B] mt-4 max-w-2xl mx-auto">
              Access our QHSE documentation, policies, and reports. For copies, contact our QHSE department directly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {policies.map((p, i) => (
              <AnimatedCard key={p.title} delay={i * 0.1} className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#EA580C]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0F172A]">{p.title}</h3>
                <p className="text-sm text-[#64748B] mt-2 flex-1">{p.description}</p>
                <a href="#" className="text-[#EA580C] font-semibold text-sm mt-4 hover:text-orange-600 transition-colors">
                  Request a copy →
                </a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default QhsePage