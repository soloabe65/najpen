import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Projects from '../components/sections/Projects'
import Qhse from '../components/sections/Qhse'
import Media from '../components/sections/Media'
import Testimonials from '../components/sections/Testimonials'
import Clients from '../components/sections/Clients'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Qhse />
      <Media />
      <Testimonials />
      <Clients />
      <Contact />
    </>
  )
}