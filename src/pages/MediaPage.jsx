import PageHeader from '../components/PageHeader'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedCard from '../components/AnimatedCard'

const galleryItems = [
  { label: 'Offshore Rig Operations', category: 'Operations', image: '/images/drilling.jpg' },
  { label: 'Offshore Platform', category: 'Projects', image: '/images/platform.jpg' },
  { label: 'Drilling Rig at Site', category: 'Operations', image: '/images/drillingrig.jpg' },
  { label: 'Pipeline Installations', category: 'Projects', image: '/images/pipeline.jpg' },
  { label: 'Fabrication Yard', category: 'Facilities', image: '/images/fabrication.jpg' },
  { label: 'Industrial Construction', category: 'Projects', image: '/images/construction.jpg' },
  { label: 'Drilling & Well Team', category: 'Team', image: '/images/well.jpg' },
  { label: 'Equipment Commissioning', category: 'Projects', image: '/images/installation.jpg' },
  { label: 'Our People On Site', category: 'Team', image: '/images/manpower.jpg' },
]

const videos = [
  {
    title: 'Company Overview',
    description: 'Our capabilities and track record in the oil and gas industry.',
    video: '/engine.mp4',
  },
  {
    title: 'Safety First',
    description: 'A look at our HSE culture and practices in the field.',
    video: '/engine.mp4',
  },
]

function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="MEDIA"
        title="Gallery & Media"
        description="A glimpse into our operations, team, and projects across Nigeria and the African continent."
      />

      <AnimatedSection className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {['All', 'Operations', 'Projects', 'Facilities', 'Team'].map((cat) => (
              <span key={cat} className="bg-white border border-[#E2E8F0] text-[#64748B] px-5 py-2 rounded-lg text-sm font-semibold">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <AnimatedCard
                key={item.label}
                delay={i * 0.08}
                className="group relative bg-white rounded-xl overflow-hidden border border-[#E2E8F0]"
              >
                <div className="h-60 overflow-hidden">
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
      </AnimatedSection>

      <AnimatedSection className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#0F172A]">Videos</h2>
            <p className="text-[#64748B] mt-4 max-w-2xl mx-auto">
              Watch our operations in motion across the field.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {videos.map((video, i) => (
              <AnimatedCard
                key={video.title}
                delay={i * 0.1}
                className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm"
              >
                <div className="relative h-64 overflow-hidden group cursor-pointer bg-[#0F172A]">
                  <video
                    src={video.video}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#EA580C]/90 rounded-full flex items-center justify-center group-hover:bg-[#EA580C] transition-colors">
                      <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-[#0F172A]">{video.title}</h4>
                  <p className="text-[#64748B] text-sm mt-1">{video.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-8 mt-16 text-center">
            <p className="text-[#64748B] text-sm">
              For media inquiries, case studies, or project imagery, please contact our communications team.
            </p>
            <a
              href="/#contact"
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
    </>
  )
}

export default MediaPage