import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Hero from "../sections/Hero"
import Programs from "../sections/Programs"
import HowToApply from "../sections/HowToApply"
import ImportantDates from "../sections/ImportantDates"

function Home() {
  const isInternshipClosed = new Date() >= new Date(2026, 5, 2)

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {isInternshipClosed && (
          <div className="bg-red-600 text-white text-center px-5 py-8 font-bold text-lg md:text-xl shadow-lg animate-pulse">
            🚫 INTERNSHIP APPLICATIONS FOR SUMMER 2026 ARE CLOSED NOW 🚫
          </div>
        )}

        <Hero />
        <Programs />
        <HowToApply />
        <ImportantDates />
        <Footer />
      </main>
    </div>
  )
}

export default Home