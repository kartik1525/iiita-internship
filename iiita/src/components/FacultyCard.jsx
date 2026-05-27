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
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-[#f8f9fb] rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl border border-transparent hover:border-blue-900 transition duration-300"
    >

      {/* Faculty Image */}
      <div className="flex justify-center">

        <div className="p-1 rounded-full bg-gradient-to-r from-blue-700 to-purple-600">
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-white"
          />
        </div>

      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-center text-[#071c46] mt-8 leading-snug">
        {faculty.name}
      </h2>

      {/* Details */}
      <div className="mt-6 space-y-4 text-center text-gray-600 leading-relaxed">

        {faculty.details.map((detail, index) => (
          <p key={index}>
            {detail}
          </p>
        ))}

      </div>

      {/* Email */}
      <div className="flex items-center justify-center gap-3 mt-8">

        <Mail className="text-blue-700" size={20} />

        <a
          href={`mailto:${faculty.email}`}
          className="text-blue-800 font-semibold hover:underline break-all"
        >
          {faculty.email}
        </a>

      </div>

      {/* Homepage Button */}
      <a
        href={faculty.homepage}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 flex items-center justify-center gap-3 bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-2xl transition duration-300 font-semibold"
      >
        <ExternalLink size={20} />

        Personal Homepage
      </a>

    </motion.div>
  )
}

export default FacultyCard