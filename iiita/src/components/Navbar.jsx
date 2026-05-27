import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            
            <img
                src="/logo.png"
                alt="IIITA Logo"
                className="w-12 h-12 object-contain"
            />

            <div>
              <h1 className="text-lg md:text-xl font-bold text-blue-950 leading-tight">
                IIITA Internship
              </h1>

              <p className="text-sm text-gray-600">
                Credit Export Program 2026
              </p>
              
            </div>
          </div>

          
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <a
              href="#"
              className="hover:text-blue-900 transition"
            >
              Home
            </a>

            <a
              href="/#programs"
              className="hover:text-blue-900 transition"
            >
              Programs
            </a>

            <a
              href="/faculty"
              className="hover:text-blue-900 transition"
            >
              Faculty Details
            </a>

            <a
              href="/#dates"
              className="hover:text-blue-900 transition"
            >
              Dates
            </a>

            <a
              href="/#apply"
              className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-xl transition"
            >
              Apply Now
            </a>
          </div>  

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4 text-gray-700 font-medium">
            <a href="#">Home</a>
            <a href="#programs">
              Programs
            </a>
            <a href="/faculty">
              Faculty Details
            </a>
            <a href="#dates">
              Dates
            </a>
            <a
              href="#apply"
              className="bg-blue-900 text-white py-3 rounded-xl text-center"
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar