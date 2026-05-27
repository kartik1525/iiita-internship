import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"

const steps = [
  {
    title: "Contact Faculty Member",
    description:
      "Students should directly contact the faculty member through email. Applicants are advised to visit the respective academic department website for faculty details.",
    button: "Faculty Details",
    link: "<website-link>",
  },
  {
    title: "Online Registration",
    description:
      "After receiving consent from the prospective supervisor, students are required to register online along with the supervisor's consent.",
    button: "Application Form",
    link: "<google-form-link>",
  },
  {
    title: "Registration Fee",
    description:
      "The registration fee must be deposited during the submission of the registration form.",
  },
  {
    title: "Upload Documents",
    description:
      "Students must upload a bonafide student certificate from their parent institute on the institute letterhead while filling out the application form.",
  },
  {
    title: "Accommodation",
    description:
      "IIIT Allahabad provides hostel accommodation for interns opting for physical mode. Students may also arrange accommodation outside the campus at their own responsibility.",
  },
  {
    title: "Fee Refund Policy",
    description:
      "If a student is unable to join after registration, refund of the registration fee will be admissible after deduction of 30% plus applicable service charges as per institute rules.",
  },
]

function HowToApply() {
  return (
    <section
      id="apply"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <SectionTitle
          title="How to Apply"
          subtitle="Follow the complete application procedure carefully before submitting your registration."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12"
        >

          <div className="space-y-8">

            {steps.map((step, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition duration-300"
              >
                <div className="flex items-start gap-5">

                  {/* Number */}
                  <div className="min-w-[55px] h-[55px] rounded-full bg-blue-900 text-white flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {step.button && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-5 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition"
                      >
                        {step.button}
                      </a>
                    )}

                  </div>

                </div>
              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default HowToApply