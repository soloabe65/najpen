import { Link } from 'react-router-dom'

function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-[#0F172A] pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">{eyebrow}</span>
        <h1 className="text-3xl lg:text-5xl font-bold text-white mt-3">{title}</h1>
        {description && <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto leading-relaxed">{description}</p>}
        <nav className="mt-6 text-sm flex items-center justify-center">
          <Link to="/" className="text-[#94A3B8] hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2 text-[#475569]">/</span>
          <span className="text-[#EA580C] font-semibold">{title}</span>
        </nav>
      </div>
    </section>
  )
}

export default PageHeader