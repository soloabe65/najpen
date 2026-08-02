const logos = ['Chevron', 'Shell', 'ExxonMobil', 'TotalEnergies', 'Seplat', 'NNPC']

import AnimatedSection from '../AnimatedSection'

function Clients() {
  return (
    <AnimatedSection className="bg-[#F8FAFC] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl font-bold text-[#0F172A] mt-2">Trusted By Industry Leaders</h2>
        </div>
        <div
          className="overflow-hidden relative"
          onMouseEnter={(e) => {
            const inner = e.currentTarget.querySelector('[data-scroll]')
            if (inner) inner.style.animationPlayState = 'paused'
          }}
          onMouseLeave={(e) => {
            const inner = e.currentTarget.querySelector('[data-scroll]')
            if (inner) inner.style.animationPlayState = 'running'
          }}
        >
          <div
            data-scroll
            className="whitespace-nowrap"
            style={{
              animation: 'scrollLogos 20s linear infinite',
              display: 'inline-block',
            }}
          >
            {[...logos, ...logos].map((company, i) => (
              <span
                key={`${company}-${i}`}
                className="inline-flex items-center justify-center w-32 h-16 mx-4 bg-gray-200 rounded-lg text-sm font-semibold text-[#64748B]"
              >
                {company}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent pointer-events-none" />
        </div>
      </div>
      <style>{`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </AnimatedSection>
  )
}

export default Clients
