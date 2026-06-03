import { useState } from "react";
import FacultyCard from "../components/FacultyCard";
import facultyData from "../data/facultyData";

const departments = [
  {
    id: "IT",
    label: "Information Technology",
  },
  {
    id: "ECE",
    label: "Electronics & Communication Engineering",
  },
  {
    id: "MS",
    label: "Management Studies",
  },
  {
    id: "AS",
    label: "Applied Science",
  },
];

function FacultySection() {
  const [activeDepartment, setActiveDepartment] = useState("IT");

  const filteredFaculty = facultyData.filter(
    (faculty) => faculty.department === activeDepartment,
  );

  return (
    <section
      id="faculty"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Faculty Details
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Explore faculty members, associated with IIITA Internship and Credit
            Export Program.
          </p>
        </div>

        {/* Department Filter Buttons */}
        <div
          className="
            flex
            md:flex-wrap
            overflow-x-auto
            md:overflow-visible
            gap-3
            justify-start
            md:justify-center
            pb-4
            mb-16
            scrollbar-hide
          "
        >
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(dept.id)}
              className={`
                whitespace-nowrap
                px-6
                md:px-8
                py-3
                rounded-full
                border
                transition-all
                duration-300
                text-sm
                md:text-base
                ${
                  activeDepartment === dept.id
                    ? "bg-blue-900 text-white border-blue-900 shadow-lg"
                    : "bg-white text-blue-600 border-blue-500 hover:bg-blue-50"
                }
              `}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700">
                No faculty available for this department.
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FacultySection;
