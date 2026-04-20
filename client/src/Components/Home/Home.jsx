import React from 'react'
import HeroSection from '../Hero/Hero'
import Videosection from '../Videosection/Videosection'
import ThirdSection from '../ThirdSection/ThirdSection'
import FourthSection from '../FourthSection/FourthSection'
import ContactSection from '../ContactSection/ContactSection'
import ProductionProgramSection from '../ProductionProgramSection/ProductionProgramSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <Videosection />
        <ThirdSection />
        <FourthSection />
        <ContactSection />
        <ProductionProgramSection />
    </div>
  )
}

export default Home