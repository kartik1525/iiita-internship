import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Hero from "../sections/Hero"
import Programs from "../sections/Programs"
import HowToApply from "../sections/HowToApply"
import ImportantDates from "../sections/ImportantDates"

function Home() {
  const deadline = new Date("2026-06-01T23:59:59")
  const isInternshipClosed = new Date() > deadline

  return (
    <div className="overflow-x-hidden">
      <Navbar />

 

      <Hero />
         {isInternshipClosed && (
  <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 shadow-md">
    <div className="max-w-7xl mx-auto px-6 text-center font-semibold text-lg animate-pulse">
      🚫 Internship Applications are Closed Now. Thank you for your interest.
    </div>
  </div>
)}
      <Programs />
      <HowToApply />
      <ImportantDates />
      <Footer />
    </div>
  )
}

export default Home