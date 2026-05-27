import { motion } from "framer-motion"
import { FileText, ArrowUpRight } from "lucide-react"
import SectionTitle from "../components/SectionTitle"

const programs = [
  {
    title: "Course Internship (One Semester)",
    link: "<link-to-pdf>",
  },
  {
    title: "Research Internship / Project / Thesis",
    link: "<link-to-pdf>",
  },
  {
    title: "Student Exchange Program with SCES",
    link: "<link-to-pdf>",
  },
  {
    title: "Regular Internship (Summer/Winter)",
    link: "<link-to-pdf>",
  },
]

function Programs() {
  return (
    <section
      id="programs"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <SectionTitle
          title="Types of Internship Programs"
          subtitle="Explore academic, research, and semester exchange opportunities offered by IIITA."
        />

        <div className="grid md:grid-cols-2 gap-8">

          {programs.map((program, index) => (
                <motion.a
                  key={index}
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="group bg-blue-50 border border-transparent hover:border-blue-900 p-8 rounded-3xl shadow-sm hover:shadow-xl transition duration-300"
                >
              <div className="flex items-center justify-between mb-6">

                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                  <FileText className="text-blue-900" />
                </div>

                <ArrowUpRight className="text-blue-900 transition" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 transition">
                {program.title}
              </h3>

              <p className="mt-4 text-gray-600 transition">
                Click to view detailed guidelines and eligibility criteria.
              </p>
            </motion.a>
          ))}

        </div>

        {/* Notes */}
        <div className="mt-16 bg-blue-950 text-white rounded-3xl p-8 md:p-10">

          <h3 className="text-2xl font-bold mb-6">
            Important Notes
          </h3>

          <p className="text-blue-100 leading-relaxed mb-6">
            For Programs A, B and C, the portal is open for registration and the
            program start and end dates shall be aligned with the{" "}

            <a
              href="<academic-calendar-pdf-link>"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold underline underline-offset-4 hover:text-blue-200 transition"
            >
              IIITA Academic Calendar
            </a>.
          </p>

          <p className="text-blue-100 leading-relaxed">
            Program D: Summer (6–8 weeks) is a benchmark internship program of
            IIIT Allahabad and is scheduled to begin from{" "}

            <span className="font-semibold text-white">
              17/04/2026
            </span>.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Programs