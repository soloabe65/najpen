import AnimatedSection from '../AnimatedSection'
import AnimatedCard from '../AnimatedCard'

const galleryItems = [
  { label: 'Offshore Rig Operations', category: 'Operations', image: '/images/drilling.jpg' },
  { label: 'Offshore Platform', category: 'Projects', image: '/images/platform.jpg' },
  { label: 'Drilling Rig at Site', category: 'Operations', image: '/images/drillingrig.jpg' },
  { label: 'Fabrication Yard', category: 'Facilities', image: '/images/fabrication.jpg' },
  { label: 'Drilling & Well Team', category: 'Team', image: '/images/well.jpg' },
  { label: 'Equipment Commissioning', category: 'Projects', image: '/images/installation.jpg' },
]

const videos = [
  {
    title: 'Company Overview',
    description: 'Our capabilities and track record in the oil and gas industry.',
  },
  {
    title: 'Safety First',
    description: 'A look at our HSE culture and practices in the field.',
  },
]

function Media() {
  return (
    <AnimatedSection id="media" className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">MEDIA</span>
          <h2 className="text-4xl font-bold text-[#0F172A] mt-2">Photo & Video Gallery</h2>
          <p className="text-[#64748B] mt-4 max-w-2xl mx-auto">
            A glimpse into our operations, team, and projects across Nigeria and the African continent.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">Project Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <AnimatedCard
                key={item.label}
                delay={i * 0.08}
                className="group relative bg-white rounded-xl overflow-hidden border border-[#E2E8F0] cursor-pointer"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-5">
                  <div>
                    <span className="text-xs font-semibold text-[#EA580C] uppercase tracking-wider bg-white/90 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <p className="text-white font-semibold text-sm mt-2">{item.label}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <AnimatedCard
                key={video.title}
                delay={i * 0.1}
                className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0]"
              >
                <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative group cursor-pointer">
                  <div className="w-16 h-16 bg-[#EA580C]/90 rounded-full flex items-center justify-center group-hover:bg-[#EA580C] transition-colors">
                    <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-[#0F172A]">{video.title}</h4>
                  <p className="text-[#64748B] text-sm mt-1">{video.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 mt-16 text-center">
          <p className="text-[#64748B] text-sm">
            For media inquiries, please contact our communications team.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-3 text-[#EA580C] hover:text-orange-600 font-semibold text-sm transition-colors"
          >
            Contact Our Media Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Media