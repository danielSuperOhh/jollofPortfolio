import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import CompaniesSection from './components/CompaniesSection'
import CustomCursor from './components/CustomCursor'
import WorksDone from './components/WorksDone'
import CertificatesSection from './components/CertificatesSection'
import MarqueeSlider from './components/MarqueeSlider'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Hero />
      <VideoSection />
      <CompaniesSection />
      <WorksDone />
      <CertificatesSection />
      <MarqueeSlider />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default App