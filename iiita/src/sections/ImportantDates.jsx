import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"

const dates = [
  {
    title: "Starting Date of Application Submission",
    date: "23/03/2026",
  },
  {
    title: "Last Date of Application Submission & Fee Deposit",
    date: "25/05/2026",
  },
  {
    title: "Starting Date of ONLINE Summer Internship (6–8 Weeks)",
    date: "12/05/2026",
  },
  {
    title: "Starting Date of OFFLINE Summer Internship (Physical Mode)",
    date: "25/05/2026",
  },
  {
    title: "Closing Date of Summer Internship",
    date: "15/07/2026",
  },
]

function ImportantDates() {
  return (
    <section
      id="dates"
      className="py-24 bg-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <SectionTitle
          title="Important Dates"
          subtitle="Keep track of all important deadlines and internship schedules."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12"
        >

          <div className="space-y-6">

            {dates.map((item, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
                      {item.title}
                    </h3>
                  </div>

                  <div className="bg-blue-900 text-white px-6 py-3 rounded-xl text-center min-w-[180px] font-semibold shadow-md">
                    {item.date}
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Fee Details Button */}
          <div className="mt-12 text-center">

            <a
              href="/pdf/fee.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl transition duration-300 shadow-lg"
            >
              View Fee Details
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default ImportantDates