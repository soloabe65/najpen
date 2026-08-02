import PageHeader from '../components/PageHeader'
import About from '../components/sections/About'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'

const milestones = [
  { year: '2008', title: 'Founded in Port Harcourt', text: 'NAJPEN began operations as a specialist fabrication and contracting company serving local operators.' },
  { year: '2013', title: 'Drilling Expansion', text: 'Expanded into drilling and well services, deploying our first managed drilling campaign.' },
  { year: '2017', title: 'ISO 9001 Certification', text: 'Achieved ISO 9001:2015 quality management certification across all operations.' },
  { year: '2021', title: '500+ Projects Delivered', text: 'Crossed 500 completed projects with a consistent 100% safety record.' },
  { year: 'Today', title: 'Pan-African Delivery', text: 'Delivering integrated oil & gas services across Nigeria and the African continent.' },
]

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT US"
        title="Who We Are"
        description="Learn more about NAJPEN GLOBAL INTEGRATED LTD — our history, purpose, values, and the people behind every delivery."
      />

      <About />

      <AnimatedSection className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">OUR STORY</span>
              <h2 className="text-4xl font-bold text-[#0F172A] mt-2">Built on Trust, Delivered with Safety</h2>
              <div className="space-y-4 mt-6 text-[#64748B] leading-relaxed">
                <p>
                  For over 15 years, NAJPEN GLOBAL INTEGRATED LTD has grown from a local fabrication shop into a fully
                  integrated oil and gas service provider. Today we deliver drilling, well services, construction,
                  installation, and manpower solutions to operators across the African continent.
                </p>
                <p>
                  Our reputation is built on two promises: uncompromising safety and on-time delivery. Every one of the
                  500+ projects we have completed carries the same commitment to quality that defined our very first
                  contract.
                </p>
                <p>
                  We invest heavily in our people — the welding teams, drilling crews, engineers, and HSE professionals
                  who make safe operations possible. When you work with NAJPEN, you work with a partner whose only
                  standard is excellence.
                </p>
              </div>
              <div className="border-l-4 border-[#EA580C] bg-white p-5 rounded-r-lg mt-8 shadow-sm">
                <p className="font-semibold text-[#0F172A]">Why Choose NAJPEN</p>
                <p className="text-[#64748B] text-sm mt-1">Every employee goes home safe, every day.</p>
              </div>
            </div>

            <div className="space-y-5">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative pl-8">
                  <div className="absolute left-0 top-2 w-10 h-10 bg-[#EA580C] text-white rounded-full flex items-center justify-center font-bold text-xs shadow">
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 ml-12 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-[#EA580C] font-bold">{m.year}</span>
                      <h3 className="font-semibold text-[#0F172A]">{m.title}</h3>
                    </div>
                    <p className="text-sm text-[#64748B] mt-2">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">OUR VALUES</span>
            <h2 className="text-4xl font-bold text-[#0F172A] mt-2">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { title: 'Safety First', text: 'No job is worth an injury. A goal-zero culture guides every decision and every shift.' },
              { title: 'Integrity', text: 'Transparent pricing, honest reporting, and promises we keep — always.' },
              { title: 'Excellence', text: 'ISO 9001:2015 certified quality with rigorous QA/QC on every deliverable.' },
              { title: 'Partnership', text: 'We grow with our clients, our communities, and the next generation of Nigerian engineers.' },
            ].map((v, i) => (
              <AnimatedCard key={v.title} delay={i * 0.1} className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-8">
                <h3 className="font-semibold text-lg text-[#0F172A]">{v.title}</h3>
                <p className="text-sm text-[#64748B] mt-3 leading-relaxed">{v.text}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default AboutPage