import React from 'react'

import Hero from '../components/Hero'
import VideoSection from '../components/VideoSection'
import CompaniesSection from '../components/CompaniesSection'
import WorksDone from '../components/WorksDone'
import CertificatesSection from '../components/CertificatesSection'
import MarqueeSlider from '../components/MarqueeSlider'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
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

export default Home