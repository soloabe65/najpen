import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'
import CountUp from '../components/CountUp'

const categories = ['All', 'Fabrication', 'Drilling', 'Well Services', 'Construction', 'Installation']

const projects = [
  {
    title: 'Offshore Platform Fabrication',
    category: 'Fabrication',
    image: '/images/platform.jpg',
    year: '2025',
    location: 'Port Harcourt, Nigeria',
    scope: '12,500 MT steel structure',
    description:
      'Complete steel structure fabrication for an offshore production platform, including jacket, deck sections and topside modules delivered ahead of schedule.',
    results: ['Delivered 2 weeks ahead of schedule', 'Zero LTI across 1.2M man-hours'],
  },
  {
    title: 'Deep Well Drilling Project',
    category: 'Drilling',
    image: '/images/drillingrig.jpg',
    year: '2024',
    location: 'Bayelsa State, Nigeria',
    scope: '5,000m true vertical depth',
    description:
      'Successful drilling and completion of a high-angle development well to 5,000m depth, with advanced MWD/LWD and managed pressure drilling techniques.',
    results: ['30-day well time vs 42-day plan', '100% safety record'],
  },
  {
    title: 'Cross-Country Pipeline Construction',
    category: 'Construction',
    image: '/images/pipeline.jpg',
    year: '2024',
    location: 'Delta State, Nigeria',
    scope: '48km onshore trunkline',
    description:
      'Cross-country pipeline installation including stringing, welding, X-ray inspection, hydrostatic testing, and backfilling across difficult terrain.',
    results: ['0.0% repair re-work rate', 'Pipeline commissioned on schedule'],
  },
  {
    title: 'Pumpjack & Wellhead Works',
    category: 'Well Services',
    image: '/images/well.jpg',
    year: '2023',
    location: 'Imo State, Nigeria',
    scope: '24 wellheads serviced',
    description:
      'Routine and intervention well maintenance program covering pumpjack overhaul, wellhead integrity checks, and production optimization across 24 wells.',
    results: ['6.2% production uplift', 'Zero reportable incidents'],
  },
  {
    title: 'Industrial Plant Installation',
    category: 'Installation',
    image: '/images/installation.jpg',
    year: '2023',
    location: 'Lagos, Nigeria',
    scope: 'Compressor train + auxiliaries',
    description:
      'Equipment installation and commissioning of a gas compressor train including alignment, piping tie-ins, electrical works, and performance testing.',
    results: ['Commissioned 11 days early', '100% first-pass functional test'],
  },
  {
    title: 'Structural Steel Fabrication Yard',
    category: 'Fabrication',
    image: '/images/fabrication.jpg',
    year: '2022',
    location: 'Port Harcourt, Nigeria',
    scope: '4,800 MT fabricated',
    description:
      'Fleet-based structural steel fabrication for bridge and skid modules, with full NDT coverage and a dedicated QA/QC program for every weld.',
    results: ['98.7% first-time-acceptance welds', 'Zero lost-time injuries'],
  },
  {
    title: 'Onshore Rig Operations',
    category: 'Drilling',
    image: '/images/drilling.jpg',
    year: '2022',
    location: 'Rivers State, Nigeria',
    scope: '3-well exploration campaign',
    description:
      'Managed drilling operations for a 3-well onshore exploration campaign, from rig move-in through plug & abandonment, under strict HSE controls.',
    results: ['0.00 AFE overrun', 'Zero environmental incident'],
  },
  {
    title: 'Field Workover & Maintenance',
    category: 'Well Services',
    image: '/images/construction.jpg',
    year: '2021',
    location: 'Delta State, Nigeria',
    scope: 'Workover rig + support crews',
    description:
      'Workover and well maintenance services including conformance operations, sand control, and production tubing replacement for mature assets.',
    results: ['Extended economic life of 9 wells', 'Target-free compromise record'],
  },
  {
    title: 'Workforce Mobilisation & Training',
    category: 'Installation',
    image: '/images/manpower.jpg',
    year: '2021',
    location: 'Multiple locations',
    scope: '250+ personnel deployed',
    description:
      'Turnkey manpower supply across welding, instrumentation, and engineering disciplines with HSE pre-mobilisation training and certification.',
    results: ['100% certified personnel', 'Retention rate above 90%'],
  },
]

const stats = [
  { end: 500, suffix: '+', label: 'Projects Delivered' },
  { end: 120, suffix: '+', label: 'Oil & Gas Clients' },
  { end: 15, suffix: '+', label: 'Years in Operation' },
  { end: 100, suffix: '%', label: 'Safety Record' },
]

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      <PageHeader
        eyebrow="OUR PORTFOLIO"
        title="Track Record"
        description="Explore a selection of completed projects across fabrication, drilling, well services, construction, and installation."
      />

      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 text-center border border-[#E2E8F0] shadow-sm">
              <p className="text-4xl font-bold text-[#EA580C]">
                <CountUp end={stat.end} suffix={stat.suffix} duration={2} />
              </p>
              <p className="text-[#64748B] text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <AnimatedSection id="projects" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={
                  activeFilter === cat
                    ? 'bg-[#EA580C] text-white px-5 py-2 rounded-lg text-sm font-semibold transition'
                    : 'bg-gray-200 text-[#64748B] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition'
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filtered.map((project, i) => (
              <AnimatedCard
                key={project.title}
                delay={i * 0.08}
                className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-[#EA580C] font-semibold text-xs uppercase tracking-wider">{project.category}</span>
                      <p className="text-white font-bold text-lg leading-tight">{project.title}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full shrink-0">
                      100% Complete
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-3 text-xs text-[#64748B]">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.scope}</span>
                  </div>
                  <p className="text-sm text-[#64748B] mt-3 leading-relaxed">{project.description}</p>
                  <ul className="mt-4 space-y-2">
                    {project.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-[#0F172A]">
                        <svg className="w-4 h-4 mt-0.5 text-[#EA580C] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}

export default ProjectsPage