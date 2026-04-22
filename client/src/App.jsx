import './App.css'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ProductsSection from './Components/ProductsSection/ProductsSection'
import ContactSection from './Components/ContactSection/ContactSection'
import ProductionProgramSection from './Components/ProductionProgramSection/ProductionProgramSection'
import Navbar from './Components/Navbar/Navbar'
import BetterSection from './Components/BetterSection/BetterSection'
import WhyYookSection from './Components/WhyYookSection/WhyYookSection'
import TeamContact from './Components/TeamContact/TeamContact'

function Layout() {
  const location = useLocation()

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsSection />} />
        <Route path="/100x-better" element={<BetterSection />} />
        <Route path="/why-Yook" element={<WhyYookSection />} />
        <Route path="/team-contact" element={<TeamContact />} />
        

      </Routes>

     
      {location.pathname !== "/team-contact" && <ContactSection />}

      <ProductionProgramSection />
    </>
  )
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App