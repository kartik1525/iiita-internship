function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">

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

              <div>
                <p className="font-semibold text-white mb-2">
                  Contact Persons
                </p>

                <p>
                  Mr. Ashok Tripathi: +91-6393891552
                </p>

                <p>
                  Mr. Pankaj Srivastava: +91-9935510884
                </p>

                <p className="mt-2 text-sm text-blue-200">
                  (10 AM to 6 PM)
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-2">
                  Contact Email
                </p>

                <a
                  href="mailto:support.iwcs@iiita.ac.in"
                  className="hover:text-white transition underline underline-offset-4"
                >
                  support.iwcs@iiita.ac.in
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900 mt-16 pt-8 text-center text-blue-200">

          © 2026 Indian Institute of Information Technology Allahabad.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  )
}

export default Footer