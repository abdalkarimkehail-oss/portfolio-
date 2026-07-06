import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Tools from './components/Tools'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="grain-overlay" />
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <Experience />
      <Tools />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}
