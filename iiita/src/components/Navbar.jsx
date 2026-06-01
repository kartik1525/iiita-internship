import { useState } from "react"
import { Menu, X } from "lucide-react"
import { HashLink } from "react-router-hash-link"

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
                Indian Institute of Information Technology Allahabad
              </h1>

              <p className="text-sm text-gray-600">
                Internship & Credit Export Program 2026
              </p>
              
            </div>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

            <HashLink
              smooth
              to="/#"
              className="hover:text-blue-900 transition"
            >
              Home
            </HashLink>

            <HashLink
              smooth
              to="/#programs"
              className="hover:text-blue-900 transition"
            >
              Programs
            </HashLink>

            <HashLink
              smooth
              to="/faculty"
              className="hover:text-blue-900 transition"
            >
              Faculty Details
            </HashLink>

            <HashLink
              smooth
              to="/#dates"
              className="hover:text-blue-900 transition"
            >
              Dates
            </HashLink>

            <HashLink
              smooth
              to="#contact"
              className="hover:text-blue-900 transition"
            >
              Contact
            </HashLink>

            <HashLink
              smooth
              to="/#apply"
              className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-xl transition"
            >
              Apply Now
            </HashLink>

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

            <HashLink smooth to="/#" onClick={() => setIsOpen(false)}>
              Home
            </HashLink>

            <HashLink smooth to="/#programs" onClick={() => setIsOpen(false)}>
              Programs
            </HashLink>

            <HashLink smooth to="/faculty" onClick={() => setIsOpen(false)}>
              Faculty Details
            </HashLink>

            <HashLink smooth to="/#dates" onClick={() => setIsOpen(false)}>
              Dates
            </HashLink>

            <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>
              Contact
            </HashLink>

            <HashLink
              smooth
              to="/#apply"
              className="bg-blue-900 text-white py-3 rounded-xl text-center"
            >
              Apply Now
            </HashLink>

          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar