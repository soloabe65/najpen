import FloatingPumpjack from '../3d/FloatingPumpjack'

function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, #F1F5F9 1px, #F1F5F9 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, #F1F5F9 1px, #F1F5F9 2px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16 py-20 lg:py-0">
          <div className="flex-1 lg:w-3/5 text-center lg:text-left">
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-[#EA580C] mb-4">
              Oil & Gas Services
            </span>
            <h1 className="font-bold text-5xl lg:text-6xl text-[#0F172A] leading-tight mb-6">
              NAJPEN GLOBAL INTEGRATED LTD
            </h1>
            <p className="text-lg text-[#64748B] max-w-xl mb-8 mx-auto lg:mx-0">
              World-class oil drilling services, engineering and energy solutions, procurement and supply, construction, manpower and human resources services.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 bg-[#EA580C] text-white font-semibold rounded-md hover:bg-[#D4550A] transition-colors"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-[#0F172A] text-[#0F172A] font-semibold rounded-md hover:bg-[#0F172A] hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <FloatingPumpjack />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-[#64748B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero