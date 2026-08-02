import AnimatedSection from '../AnimatedSection'
import CountUp from '../CountUp'

const qhseItems = [
  {
    title: 'Quality Management',
    description:
      'ISO 9001:2015 certified. Every project follows rigorous QA/QC procedures from procurement through fabrication to final delivery.',
    icon: (
      <svg className="w-11 h-11 text-[#EA580C]" viewBox="0 0 48 48" fill="none">
        <path d="M19 31l-7 3 4.5 6.5L25 38z" fill="#EA580C" opacity="0.85" />
        <path d="M21 38l1 6 2-1 1-5z" fill="#EA580C" opacity="0.7" />
        <path d="M28 31l6 3-4 6.5L24 38z" fill="#EA580C" opacity="0.85" />
        <path d="M27 38l-1 6-2-1-1-5z" fill="#EA580C" opacity="0.7" />
        <circle cx="24" cy="20" r="12.5" fill="#FFFFFF" stroke="#EA580C" strokeWidth="2.6" />
        <circle cx="24" cy="20" r="8.5" stroke="#EA580C" strokeWidth="1.3" strokeDasharray="2.4 2" opacity="0.5" />
        <path
          d="M18.5 20.3l3.3 3.3 7.2-8.3"
          stroke="#EA580C"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Health & Safety',
    description:
      'Goal-zero safety culture. Comprehensive HSE management system with regular drills, hazard identification, and behavioral-based safety programs.',
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
        <path
          d="M16 6v9a8 8 0 0 0 16 0V6"
          stroke="#EA580C"
          strokeWidth="3"
          strokeLinejoin="round"
          fill="#EA580C"
          fillOpacity="0.12"
        />
        <path d="M9 31.5c10.5 3 21.5 3 32 0" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" />
        <path d="M21 31v-5a3 3 0 0 1 6 0v5" stroke="#EA580C" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M23 2.5v3M28 3l-1.8 2.4" stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Environmental Stewardship',
    description:
      'Minimising ecological footprint through waste management, spill prevention, emissions control, and environmental impact assessments on every project.',
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="28" r="14.5" stroke="#EA580C" strokeWidth="2.6" />
        <ellipse cx="24" cy="28" rx="14.5" ry="3.8" stroke="#EA580C" strokeWidth="1.5" opacity="0.7" />
        <path d="M10.5 21.5a24 24 0 0 0 27 0M10.5 34.5a24 24 0 0 0 27 0" stroke="#EA580C" strokeWidth="1.2" opacity="0.5" />
        <path
          d="M15.5 20.5c.4-6 4-10.8 10.5-12.8-1.8 7.8-5.6 12.2-10.5 12.8z"
          fill="#EA580C"
          fillOpacity="0.12"
          stroke="#EA580C"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M16.5 20c1.6-3.6 4-6.4 9-8.3" stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />
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
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100">
                {item.icon}
              </div>
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