import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Testimonials from "../components/Testimonials/Testimonials"
import About from "../components/About/About"
import Portafolio from "../components/Portafolio/Portafolio"
import Packages from "../components/Packages/Packages"
import Moments from "../components/Moments/Moments"
import Footer from "../components/Footer/Footer"
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonials />
      <About />
      <Portafolio />
      <Packages />
      <Moments />
      <Footer />
    </>
  )
}

export default Home