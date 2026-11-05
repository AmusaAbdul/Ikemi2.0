import Navbar from "./components/layouts/Navbar"
import Hero from "./components/sections/Hero"
import Services from "./components/sections/Services"
import Gallery from "./components/sections/Gallery"
import About from "./components/sections/About"
import Testimonial from "./components/sections/Testimonials"
import Contact from "./components/sections/Contact"
import Location from "./components/sections/Location"
import Footer from "./components/layouts/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div id="service">
        <Services />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <About />
      <div id="reviews">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="location">
        <Location />
      </div>
      <hr className="border-t border-border mt-15"/>
      <Footer />
    </>
  )
}

export default App
