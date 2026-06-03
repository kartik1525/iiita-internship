import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"

const steps = [
  {
    title: "Contact Faculty Members",
  },
  {
    title: "Online Registration",
  },
  // {
  //   title: "Registration Fee",
  //   description:
  //     "The registration fee should be deposited during filling-up the registration form only.",
  // },
  // {
  //   title: "Upload Documents",
  //   description:
  //     "Students must upload a bonafide student certificate from their parent institute on institute’s letterhead during filling-up of the application form.",
  // },
  {
    title: "Accommodation",
    description:
      "IIIT-A provides accommodation to the interns in the hostels of the IIIT-A Campus who want to do internship in physical mode. However, one can do the internship in physical mode by arranging lodging/boarding on their own outside the campus. Institute shall not be responsible for the same.",
  },
  {
    title: "Fee Refund Policy",
    description:
      "If a student is unable to join the internship program after being duly registered, refund of the registration fee will be admissible after deduction of 30% + service charges as applicable. Other fee/charges will also be reimbursed as per Institute rules.",
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
                className="border border-gray-100 rounded-2xl p-5 sm:p-6 hover:shadow-md transition duration-300"
              >

                <div className="flex flex-col sm:flex-row items-start gap-5">

                  {/* Step Number */}
                  <div className="min-w-[55px] h-[55px] rounded-full bg-blue-900 text-white flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    <div className="text-gray-600 leading-relaxed">

                      {index === 0 ? (
                        <p>
                          Students should directly contact to the faculty member
                          through email on their email id. For details of faculty
                          members, the applicants are advised to visit the
                          individual Academic Department's{" "}
                          <a
                              href="/#faculty"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                items-center
                                bg-blue-900
                                text-white
                                px-3
                                py-1
                                rounded-lg
                                ml-1
                                hover:bg-blue-800
                                transition
                              "
                            >
                            Here
                          </a>
                        </p>
                      ) : index === 1 ? (
                        <p>
                            After getting the consent from the prospective supervisor, students are
                            required to register online along with the consent of the Supervisor.
                            The link of the Application Format is available{" "}

                            <a
                              href="https://docs.google.com/forms/d/e/1FAIpQLSegDPoIGlpwdCNy2shzP52Bqf4xJygqR7cSsgNn0kRTeQN_vg/viewform"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                items-center
                                bg-blue-900
                                text-white
                                px-3
                                py-1
                                rounded-lg
                                ml-1
                                hover:bg-blue-800
                                transition
                              "
                            >
                              Here
                            </a>
                          </p>
                      ) : (
                        <p>{step.description}</p>
                      )}

                    </div>

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