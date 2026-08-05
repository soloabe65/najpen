import AnimatedSection from '../AnimatedSection'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <AnimatedSection id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-[#EA580C] uppercase tracking-wider text-sm font-semibold">
            CONTACT US
          </span>
          <h2 className="text-4xl font-bold text-[#0F172A] mt-2">Get In Touch</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-[#E2E8F0] rounded-lg p-3 focus:ring-2 focus:ring-[#EA580C] focus:border-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-[#E2E8F0] rounded-lg p-3 focus:ring-2 focus:ring-[#EA580C] focus:border-transparent outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-[#E2E8F0] rounded-lg p-3 focus:ring-2 focus:ring-[#EA580C] focus:border-transparent outline-none"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border border-[#E2E8F0] rounded-lg p-3 focus:ring-2 focus:ring-[#EA580C] focus:border-transparent outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-[#EA580C] text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              Send Message
            </button>
          </form>
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#EA580C] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-[#0F172A]">Address</p>
                  <p className="text-[#64748B] text-sm">10 Ogbanghankomi Close, Ajamimogha, Warri, Delta State</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#EA580C] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-[#0F172A]">Phone</p>
                  <p className="text-[#64748B] text-sm">+2348033773159</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#EA580C] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-[#0F172A]">Email</p>
                  <p className="text-[#64748B] text-sm">info@najpenglobal.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#EA580C] mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-[#0F172A]">Office Hours</p>
                  <p className="text-[#64748B] text-sm">Mon–Fri: 8am – 5pm</p>
                  <p className="text-[#64748B] text-sm">Sat: 10am – 2pm</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0F172A] text-white p-4 rounded-lg mt-8">
              <p className="font-semibold">Staff Access</p>
              <a href="#" className="text-[#EA580C] text-sm hover:underline">
                Staff Webmail →
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#64748B] hover:bg-[#EA580C] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#64748B] hover:bg-[#EA580C] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center text-[#64748B] hover:bg-[#EA580C] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Contact
