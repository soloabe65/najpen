import { useState } from 'react'
import AnimatedSection from '../AnimatedSection'
import AnimatedCard from '../AnimatedCard'

const categories = ['All', 'Fabrication', 'Drilling', 'Construction']

const projects = [
  {
    title: 'Offshore Platform Fabrication',
    category: 'Fabrication',
    description: 'Complete steel structure fabrication for offshore platform',
  },
  {
    title: 'Deep Well Drilling Project',
    category: 'Drilling',
    description: 'Successful drilling operations at 5000m depth',
  },
  {
    title: 'Pipeline Construction',
    category: 'Construction',
    description: 'Cross-country pipeline installation and testing',
  },
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <AnimatedSection id="projects" className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">
            COMPLETED PROJECTS
          </span>
          <h2 className="text-4xl font-bold text-[#0F172A] mt-2">Our Track Record</h2>
        </div>
        <div className="flex justify-center gap-3 mt-10">
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
            <AnimatedCard key={project.title} delay={i * 0.1} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1" />
                  <path strokeLinecap="round" strokeWidth="1" d="M3 9h18M9 3v18" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#0F172A]">{project.title}</h3>
                <p className="text-[#64748B] text-sm mt-2">{project.description}</p>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mt-4">
                  100% Complete
                </span>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Projects
