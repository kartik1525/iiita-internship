import { Mail, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

function FacultyCard({ faculty }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.1 }}
      viewport={{ once: true }}
      className="bg-[#f8f9fb] rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl border border-transparent hover:border-blue-900 transition duration-300 flex flex-col h-full"
    >
      {/* Faculty Image */}
      <div className="flex justify-center">
        <div className="p-1 rounded-full bg-gradient-to-r from-blue-700 to-blue-500">
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-center text-[#071c46] mt-8 leading-snug min-h-[70px]">
        {faculty.name}
      </h2>

      {/* Research Interests */}
      <div className="flex flex-wrap justify-center gap-2 mt-6 min-h-[80px] content-start">
        {faculty.researchInterests.slice(0, 5).map((item, index) => (
          <span
            key={index}
            className="
              bg-blue-50
              border
              border-blue-200
              text-blue-800
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              whitespace-nowrap
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Email */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <Mail
          className="text-blue-700 flex-shrink-0"
          size={20}
        />

        <a
          href={`mailto:${faculty.email}`}
          className="text-blue-800 font-semibold hover:underline text-sm break-all text-center"
        >
          {faculty.email}
        </a>
      </div>

      {/* Push button to bottom */}
      <div className="mt-auto pt-8">
        <a
          href={faculty.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-2xl transition duration-300 font-semibold"
        >
          <ExternalLink size={20} />
          Personal Homepage
        </a>
      </div>
    </motion.div>
  )
}

export default FacultyCard