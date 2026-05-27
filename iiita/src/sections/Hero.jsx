import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center pt-28">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-900 font-semibold mb-4 tracking-wide uppercase">
            Indian Institute of Information Technology Allahabad
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Internship & Credit Export Program 2026
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            The Indian Institute of Information Technology Allahabad (IIITA)
            is pleased to extend an invitation for internship applications
            from dedicated undergraduate and postgraduate students across India.
            Our programs combine academic excellence with practical research
            exposure under various newly introduced categories.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            {/* Apply Button */}
            <a
              href="/#apply"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl transition shadow-lg"
            >
              Apply Now
            </a>

            {/* Explore Programs Button */}
            <a
              href="/#programs"
              className="border border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-2xl transition"
            >
              Explore Programs
            </a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-300 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="/dept1.jpg"
            alt="IIITA Campus"
            className="relative rounded-3xl shadow-2xl w-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero