import { Mail, Phone } from "lucide-react"
function Footer() {
  return (
    <footer
      id="contact"
      className="bg-blue-950 text-white pt-20 pb-10 scroll-mt-24"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <h2 className="text-3xl font-bold mb-6 leading-tight">
              IIITA Internship & Credit Export Program 2026
            </h2>

            <p className="text-blue-100 leading-relaxed text-lg">
              The Indian Institute of Information Technology Allahabad
              provides academic, research, and internship opportunities
              for students across India through its Internship and
              Credit Export Activities.
            </p>

          </div>

          {/* Right Side */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-blue-100 leading-relaxed">

              <p>
                In case of any queries, please contact the Office of
                Internship and Credit Export Activities (ICEA), IIIT Allahabad.
              </p>
              <div >

                  <p className="font-semibold text-white mb-4">
                    Faculty Incharge
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2">

                    <div className="flex items-center gap-2">
                      <span>
                        Prof. Sonali Agarwal
                      </span>
                    </div>

                    <a
                      href="mailto:fi.icea@iiita.ac.in"
                      className="flex items-center gap-2 hover:text-white transition underline underline-offset-4"
                    >
                      <Mail size={16} className="text-blue-300" />
                      fi.icea@iiita.ac.in
                    </a>

                  </div>
              <div className="mt-6">
                <p className="font-semibold text-white mb-4">
                  Contact Persons
                </p>

                <div className="space-y-3">

                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <div className="flex items-center gap-2">

                      <span>
                        Mr. Ashok Tripathi :
                      </span>
                      <Phone size={16} className="text-blue-300 flex-shrink-0" />
                      <span>
                        +91-6393891552
                      </span>
                    </div>

                    <a
                      href="mailto:support.iwcs@iiita.ac.in"
                      className="flex items-center gap-2 hover:text-white transition underline underline-offset-4"
                    >
                      <Mail size={16} className="text-blue-300" />
                      support.iwcs@iiita.ac.in
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <div className="flex items-center gap-2">
                      <span>
                        Mr. Pankaj Srivastava :
                      </span>
                      <Phone size={16} className="text-blue-300 flex-shrink-0" />
                      <span>
                        +91-9935510884
                      </span>
                    </div>

                    <a
                      href="mailto:pankajsrivastava@iiita.ac.in"
                      className="flex items-center gap-2 hover:text-white transition underline underline-offset-4"
                    >
                      <Mail size={16} className="text-blue-300" />
                      pankajsrivastava@iiita.ac.in
                    </a>
                  </div>

                </div>

                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900 mt-16 pt-8 text-center text-blue-200">

          © Indian Institute of Information Technology Allahabad.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  )
}

export default Footer