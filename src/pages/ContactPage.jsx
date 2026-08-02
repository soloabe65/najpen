import PageHeader from '../components/PageHeader'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Contact Us"
        description="Reach our team for project enquiries, partnerships, or media requests. We respond within one business day."
      />
      <Contact />
    </>
  )
}