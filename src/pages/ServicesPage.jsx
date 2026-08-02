import PageHeader from '../components/PageHeader'
import Services from '../components/sections/Services'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'

const processSteps = [
  {
    step: '01',
    title: 'Consult & Scope',
    text: 'We start by understanding your asset, objectives, and constraints to define a clear, compliant scope of work.',
  },
  {
    step: '02',
    title: 'Plan & Engineer',
    text: 'Detailed method statements, schedules, and engineering documentation — approved against your HSE standards.',
  },
  {
    step: '03',
    title: 'Execute & Monitor',
    text: 'Our crews deliver on location with daily HSE briefings, full QA/QC inspection, and transparent reporting.',
  },
  {
    step: '04',
    title: 'Deliver & Support',
    text: 'Commissioning, handover documentation, and post-project support that keeps your operations running.',
  },
]

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="WHAT WE DO"
        title="Our Services"
        description="End-to-end oil & gas services — from fabrication and drilling to construction, installation, and manpower."
      />

      <Services />

      <AnimatedSection className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">HOW WE WORK</span>
            <h2 className="text-4xl font-bold text-[#0F172A] mt-2">Our Delivery Process</h2>
            <p className="text-[#64748B] mt-4 max-w-2xl mx-auto">
              A disciplined, four-stage approach that keeps every project safe, on scope, and on schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((p, i) => (
              <AnimatedCard key={p.step} delay={i * 0.1} className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-sm">
                <span className="text-5xl font-bold text-[#EA580C]/20">{p.step}</span>
                <h3 className="font-semibold text-lg text-[#0F172A] mt-4">{p.title}</h3>
                <p className="text-sm text-[#64748B] mt-3 leading-relaxed">{p.text}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">WHY PARTNER WITH US</span>
              <h2 className="text-4xl font-bold text-[#0F172A] mt-2">A Single Partner for Your Full Project Lifecycle</h2>
              <p className="text-[#64748B] mt-6 leading-relaxed">
                From the fabrication yard to the wellhead and beyond, NAJPEN brings every capability needed to plan,
                build, and operate your assets — under one accountable team and one uncompromising safety standard.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 mt-8 bg-[#EA580C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#D4550A] transition-colors"
              >
                Discuss Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Integrated Delivery', text: 'Six service lines under one accountable team.' },
                { title: 'Local Expertise', text: 'Indigenous contractor with deep Nigerian knowledge.' },
                { title: 'Certified Quality', text: 'ISO 9001:2015 compliant processes end to end.' },
                { title: 'Proven Safety', text: 'Goal-zero record across 500+ completed projects.' },
              ].map((item, i) => (
                <AnimatedCard key={item.title} delay={i * 0.1} className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#EA580C] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-[#0F172A]">{item.title}</h3>
                      <p className="text-sm text-[#64748B] mt-1">{item.text}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default ServicesPage