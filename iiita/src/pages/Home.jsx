import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Hero from "../sections/Hero"
import Programs from "../sections/Programs"
import FacultySection from "../sections/FacultySection"
import HowToApply from "../sections/HowToApply"
import ImportantDates from "../sections/ImportantDates"

function Home() {
  return (
    <div className="overflow-x-hidden">

      <Navbar />

      <Hero />

      <Programs />

      <HowToApply />

      <ImportantDates />

      <Footer />

    </div>
  )
}

export default Home