import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Programs from "./sections/Programs"
import HowToApply from "./sections/HowToApply"
import ImportantDates from "./sections/ImportantDates"
import Footer from "./components/Footer"
function App() {
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

export default App