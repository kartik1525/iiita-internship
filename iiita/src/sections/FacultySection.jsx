import FacultyCard from "../components/FacultyCard"
import facultyData from "../data/facultyData"
import SectionTitle from "../components/SectionTitle"

function FacultySection() {
  return (
    <section
      id="faculty"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Title */}
        <SectionTitle
          title="Faculty Coordinators"
          subtitle="Explore faculty members, research supervisors, and academic coordinators associated with the Internship and Credit Export Program."
        />

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {facultyData.map((faculty) => (
            <FacultyCard
              key={faculty.id}
              faculty={faculty}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default FacultySection