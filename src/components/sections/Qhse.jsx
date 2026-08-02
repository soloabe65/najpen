import AnimatedSection from '../AnimatedSection'
import CountUp from '../CountUp'

const qhseItems = [
  {
    title: 'Quality Management',
    description:
      'ISO 9001:2015 certified. Every project follows rigorous QA/QC procedures from procurement through fabrication to final delivery.',
    icon: (
      <svg className="w-10 h-10 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Health & Safety',
    description:
      'Goal-zero safety culture. Comprehensive HSE management system with regular drills, hazard identification, and behavioral-based safety programs.',
    icon: (
      <svg className="w-10 h-10 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016M12 3c.688 0 1.366.063 2.025.188"
        />
      </svg>
    ),
  },
  {
    title: 'Environmental Stewardship',
    description:
      'Minimising ecological footprint through waste management, spill prevention, emissions control, and environmental impact assessments on every project.',
    icon: (
      <svg className="w-10 h-10 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M2.25 12l5.25-2.25m0 0L12 21l4.5-11.25m0 0L21.75 12M12 3a9 9 0 010 18 9 9 0 010-18z"
        />
      </svg>
    ),
  },
]

const stats = [
  { end: 0, suffix: '', label: 'Lost Time Incidents (current year)' },
  { end: 15000, suffix: '+', label: 'Safe Man-Hours' },
  { end: 100, suffix: '%', label: 'HSE Training Compliance' },
  { end: 50, suffix: '+', label: 'Risk Assessments Completed' },
]

function Qhse() {
  return (
    <AnimatedSection id="qhse" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">QHSE</span>
          <h2 className="text-4xl font-bold text-[#0F172A] mt-2">Quality, Health, Safety & Environment</h2>
          <p className="text-[#64748B] mt-4 max-w-2xl mx-auto">
            Our QHSE policy is built on a culture of safety, quality excellence, and environmental
            responsibility - embedded in every operation we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {qhseItems.map((item) => (
            <div
              key={item.title}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-8"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-[#0F172A]">{item.title}</h3>
              <p className="text-[#64748B] text-sm mt-3 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#EA580C]">
                <CountUp end={stat.end} suffix={stat.suffix} duration={2} />
              </p>
              <p className="text-[#64748B] text-xs mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0F172A] rounded-xl p-8 mt-16 text-center">
          <p className="text-white font-semibold text-lg">
            Our commitment: Every employee goes home safe, every day.
          </p>
          <p className="text-[#64748B] text-sm mt-2">
            Download our QHSE policy document for more details.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 text-[#EA580C] hover:text-orange-400 font-semibold text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            QHSE Policy (PDF)
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Qhse