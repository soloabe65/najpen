import AnimatedSection from '../AnimatedSection'
import CountUp from '../CountUp'

function About() {
  const stats = [
    { end: 15, suffix: '+', label: 'Years of Experience' },
    { end: 500, suffix: '+', label: 'Projects Completed' },
    { end: 50, suffix: '+', label: 'Team Members' },
    { end: 100, suffix: '%', label: 'Safety Record' },
  ]

  return (
    <AnimatedSection id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">
              ABOUT US
            </span>
            <h2 className="text-4xl font-bold text-[#0F172A] mt-2">
              15+ Years of Excellence in Oil & Gas
            </h2>
            <p className="text-[#64748B] mt-6 leading-relaxed">
              NAJPEN GLOBAL INTEGRATED LTD is a leading indigenous oil and gas service company
              headquartered in Port Harcourt, Nigeria. With over 15 years of industry experience,
              we deliver world-class services in fabrication, drilling, well services, construction,
              installation, and manpower recruitment across the African continent.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-4 py-2 mt-6">
              <svg className="w-5 h-5 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold text-[#0F172A]">ISO 9001:2015 CERTIFIED</span>
            </div>
            <div className="border-l-4 border-[#EA580C] bg-[#F8FAFC] p-4 rounded-r-lg mt-6">
              <p className="font-semibold text-[#0F172A]">100% Safety Record</p>
              <p className="text-[#64748B] text-sm">QHSE Compliant Operations</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#F8FAFC] rounded-xl p-8 text-center border border-[#E2E8F0]">
                <p className="text-4xl font-bold text-[#EA580C]">
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2} />
                </p>
                <p className="text-[#64748B] text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About
