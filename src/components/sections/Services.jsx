const services = [
  {
    title: 'Fabrication',
    description: 'Steel structure fabrication and welding services',
    image: '/images/fabrication.jpg',
  },
  {
    title: 'Drilling',
    description: 'Oil and gas drilling operations and management',
    image: '/images/drilling.jpg',
  },
  {
    title: 'Well Services',
    description: 'Complete well maintenance and intervention services',
    image: '/images/well.jpg',
  },
  {
    title: 'Construction',
    description: 'Industrial construction and project execution',
    image: '/images/construction.jpg',
  },
  {
    title: 'Installation',
    description: 'Equipment installation and commissioning',
    image: '/images/installation.jpg',
  },
  {
    title: 'Manpower',
    description: 'HR recruitment and training solutions',
    image: '/images/manpower.jpg',
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
              className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] overflow-hidden hover:shadow-md transition-shadow border-t-2 border-[#EA580C]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="font-semibold text-xl text-[#0F172A]">{service.title}</h3>
                <p className="text-[#64748B] mt-2">{service.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Services
