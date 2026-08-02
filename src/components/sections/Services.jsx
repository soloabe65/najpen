const services = [
  {
    title: 'Fabrication',
    description: 'Steel structure fabrication and welding services',
    icon: (
      <svg className="w-12 h-12 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    title: 'Drilling',
    description: 'Oil and gas drilling operations and management',
    icon: (
      <svg className="w-12 h-12 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M12 8v8M8 12h8" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M12 3a9 9 0 010 18" />
      </svg>
    ),
  },
  {
    title: 'Well Services',
    description: 'Complete well maintenance and intervention services',
    icon: (
      <svg className="w-12 h-12 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    title: 'Construction',
    description: 'Industrial construction and project execution',
    icon: (
      <svg className="w-12 h-12 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M4 8h16" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M8 4v16" />
      </svg>
    ),
  },
  {
    title: 'Installation',
    description: 'Equipment installation and commissioning',
    icon: (
      <svg className="w-12 h-12 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M12 9v6M9 12h6" />
      </svg>
    ),
  },
  {
    title: 'Manpower',
    description: 'HR recruitment and training solutions',
    icon: (
      <svg className="w-12 h-12 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="9" cy="8" r="3" strokeWidth="1.5" />
        <circle cx="15" cy="8" r="3" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeWidth="1.5" d="M3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6" />
      </svg>
    ),
  },
]

import AnimatedSection from '../AnimatedSection'
import AnimatedCard from '../AnimatedCard'

function Services() {
  return (
    <AnimatedSection id="services" className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold text-[#0F172A] mt-2">What We Offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, i) => (
            <AnimatedCard
              key={service.title}
              delay={i * 0.1}
              className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-8 hover:shadow-md transition-shadow border-t-2 border-[#EA580C]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl text-[#0F172A]">{service.title}</h3>
              <p className="text-[#64748B] mt-2">{service.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Services
