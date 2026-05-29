const facultyData = [
 {
    id: 1,
    name: "Prof. Tapobrata Lahiri",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Applied Mathematics", "Data Science", "Optimization"],
    email: "tlahiri@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 2,
    name: "Prof. Pritish Varadwaj",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Bioinformatics", "Computational Biology", "Machine Learning"],
    email: "pritish@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 3,
    name: "Prof. Ashutosh Mishra",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Physics", "Materials Science", "Nanotechnology"],
    email: "am@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 4,
    name: "Prof. Akhilesh Tiwari",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Mathematics", "Statistics", "Optimization"],
    email: "atiwari@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 5,
    name: "Prof. Pramod Kumar",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Applied Mathematics", "Numerical Methods", "Modeling"],
    email: "pkumar@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 6,
    name: "Prof. Ratan Kumar Saha",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Physics", "Quantum Mechanics", "Materials Research"],
    email: "ratank.saha@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 7,
    name: "Prof. Amit Prabhakar",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Physics", "Photonics", "Nanomaterials"],
    email: "amit@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 8,
    name: "Prof. Nidhi Mishra",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Mathematics", "Graph Theory", "Optimization"],
    email: "nidhimishra@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 9,
    name: "Dr. Sangeeta Singh",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Chemistry", "Materials Chemistry", "Nanoscience"],
    email: "sangeeta@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 10,
    name: "Dr. Srijit Bhattacharjee",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Physics", "Condensed Matter Physics", "Nanotechnology"],
    email: "srijitb@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 11,
    name: "Dr. Sintu Kumar Samanta",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Chemistry", "Environmental Science", "Materials Chemistry"],
    email: "samantasintu@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 12,
    name: "Dr. Abdullah Bin Abu Baker",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Mathematics", "Statistics", "Machine Learning"],
    email: "abdullah@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 13,
    name: "Dr. Amaresh Kumar Sahoo",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Physics", "Computational Physics", "Data Analytics"],
    email: "asaboo@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 14,
    name: "Dr. Sumit Kumar Upadhyay",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Applied Mathematics", "Operations Research", "Optimization"],
    email: "sumitupadhyay@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 15,
    name: "Dr. Anand Kumar Tiwari",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Physics", "Theoretical Physics", "Computational Modeling"],
    email: "anand@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 16,
    name: "Dr. Sanjeev B.S.",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Chemistry", "Analytical Chemistry", "Materials Science"],
    email: "sanjeev@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 17,
    name: "Dr. Seema Kushwaha",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Mathematics", "Differential Equations", "Modeling"],
    email: "seemak@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 18,
    name: "Dr. Savitri Joshi",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Physics", "Optics", "Photonics"],
    email: "savitri.joshi@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 19,
    name: "Dr. Upendra Kumar",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Chemistry", "Nanomaterials", "Green Chemistry"],
    email: "upendrakumar@iiita.ac.in",
    homepage: "#",
  },
  {
    id: 20,
    name: "Dr. Saurabh Verma",
    department: "AS",
    image: "/faculty/default.jpg",
    researchInterests: ["Applied Mathematics", "Machine Learning", "Data Analytics"],
    email: "saurabhverma@iiita.ac.in",
    homepage: "#",
  },
  // =======================
  // ECE DEPARTMENT FACULTY
  // =======================
  {
    id: 101,
    department: "ECE",
    name: "Prof. Manish Goswami",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Signal Processing",
      "Wireless Communication",
      "Embedded Systems",
    ],
    email: "manishgoswami@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 102,
    department: "ECE",
    name: "Prof. Sanjai Singh",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Computer Networks",
      "Wireless Networks",
      "IoT",
    ],
    email: "ssingh@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 103,
    department: "ECE",
    name: "Prof. Rajat Kumar Singh",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Digital Signal Processing",
      "Communication Systems",
      "Machine Learning",
    ],
    email: "rajatsingh@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 104,
    department: "ECE",
    name: "Dr. Ashutosh Kumar Singh",
    image: "/faculty/default.jpg",
    researchInterests: [
      "VLSI Design",
      "Embedded Systems",
      "Signal Processing",
    ],
    email: "ashutosh_singh@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 105,
    department: "ECE",
    name: "Dr. Prasanna Kumar Misra",
    image: "/faculty/default.jpg",
    researchInterests: [
      "IoT",
      "Smart Systems",
      "Wireless Sensor Networks",
    ],
    email: "prasanna@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 106,
    department: "ECE",
    name: "Dr. Suneel Yadav",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Signal Processing",
      "Image Processing",
      "Machine Learning",
    ],
    email: "suneel@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 107,
    department: "ECE",
    name: "Dr. Sunny",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Wireless Communication",
      "5G Networks",
      "Signal Processing",
    ],
    email: "sunnys@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 108,
    department: "ECE",
    name: "Dr. Pooja Mishra",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Embedded Systems",
      "IoT",
      "Cyber Physical Systems",
    ],
    email: "pooja@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 109,
    department: "ECE",
    name: "Dr. Sitangshu Bhattacharya",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Signal Processing",
      "Machine Learning",
      "Pattern Recognition",
    ],
    email: "sitangshu@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 110,
    department: "ECE",
    name: "Dr. Kavindra Kandpal",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Communication Systems",
      "Wireless Networks",
      "IoT",
    ],
    email: "kavindra@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 111,
    department: "ECE",
    name: "Dr. Rekha Verma",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Image Processing",
      "Computer Vision",
      "Deep Learning",
    ],
    email: "r.verma@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 112,
    department: "ECE",
    name: "Dr. Amar Nath Yadav",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Embedded Systems",
      "Microprocessors",
      "VLSI",
    ],
    email: "amarnath@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 113,
    department: "ECE",
    name: "Dr. Ramesh Kumar Bhukya",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Analytics",
    ],
    email: "rkbhukya@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 114,
    department: "ECE",
    name: "Dr. Boddepalli Santhi Bhushan",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Signal Processing",
      "Biomedical Signal Processing",
      "Deep Learning",
    ],
    email: "sbhushan@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 115,
    department: "ECE",
    name: "Dr. Himanshu Maurya",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Wireless Communication",
      "5G Networks",
      "Network Security",
    ],
    email: "hmaurya@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 116,
    department: "ECE",
    name: "Dr. Shanti Chandra",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Computer Networks",
      "Cloud Computing",
      "Distributed Systems",
    ],
    email: "shantichandra@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 117,
    department: "ECE",
    name: "Dr. Surya Prakash",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Signal Processing",
      "Communication Systems",
      "Machine Learning",
    ],
    email: "suryaprakash@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 118,
    department: "ECE",
    name: "Dr. Radhika Gaur",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Embedded Systems",
      "IoT",
      "Sensor Networks",
    ],
    email: "radhika@iiita.ac.in",
    homepage: "#",
  },
  // =======================
  // IT DEPARTMENT FACULTY
  // =======================
  {
    id: 201,
    department: "IT",
    name: "Prof. Anupam Agarwal",
    image: "/faculty/anupam.jpg",
    researchInterests: [
      "Image & Vision Processing",
      "Computer Graphics and Virtual Reality",
      "Human-Computer Interaction",
    ],
    email: "anupam@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/anupam/",
  },

  {
    id: 202,
    department: "IT",
    name: "Prof. Shekhar Verma",
    image: "/faculty/sverma.jpg",
    researchInterests: [
      "Wireless Networks",
      "Cryptography",
      "Wireless Sensor Networks",
      "Multimedia",
    ],
    email: "sverma@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=sverma",
  },

  {
    id: 203,
    department: "IT",
    name: "Prof. Vrijendra Singh",
    image: "/faculty/vrij.jpg",
    researchInterests: [
      "Independent Component Analysis",
      "Biomedical Analysis",
      "Artificial Neural Networks",
      "Data Mining",
    ],
    email: "vrij@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=vrij",
  },

  {
    id: 204,
    department: "IT",
    name: "Prof. Pavan Chakraborty",
    image: "/faculty/pavan.jpg",
    researchInterests: [
      "Human Gait Analysis",
      "Human Prosthetics",
      "Graphics and Visual Computing",
      "Robotics & Instrumentation"
    ],
    email: "pavan@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=pavan",
  },

  {
    id: 205,
    department: "IT",
    name: "Prof. Manish Kumar",
    image: "/faculty/manish.jpg",
    researchInterests: [
      "Big Data Analytics",
      "Machine Learning",
      "IoT & Smart City applications",
      "Wireless Sensor Networks"
    ],
    email: "manish@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=manish",
  },

  {
    id: 206,
    department: "IT",
    name: "Prof. Satish Kumar Singh",
    image: "/faculty/sks.jpg",
    researchInterests: [
      "Data Compression",
      "Image Processing",
      "Histopathology Image Analysis",
      "Biometrics",
      "Machine and Deep Learning"
    ],
    email: "sk.singh@iiita.ac.in",
    homepage: "https://cvbl.iiita.ac.in/sks/",
  },

  {
    id: 207,
    department: "IT",
    name: "Prof. Sonali Agarwal",
    image: "/faculty/sonali.jpg",
    researchInterests: [
      "Stream Analytics",
      "Big Data",
      "Artificial Intelligence",
      "Healthcare Analytics",
    ],
    email: "sonali@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/sonali/",
  },

  {
    id: 208,
    department: "IT",
    name: "Prof. Krishna Pratap Singh",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Artificial Intelligence",
      "Computer Vision",
      "Pattern Recognition",
    ],
    email: "kpsingh@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 209,
    department: "IT",
    name: "Prof. S. Venkatesan",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Computer Networks",
      "Network Security",
      "IoT",
    ],
    email: "venkat@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 210,
    department: "IT",
    name: "Prof. Vijay Chaurasiya",
    image: "/faculty/vijayk.jpg",
    researchInterests: [
      "Machine Learning",
      "Artificial Intelligence",
      "Computer Vision",
    ],
    email: "vijayk@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 211,
    department: "IT",
    name: "Dr. Abhishek Vaish",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Cloud Computing",
      "Cyber Security",
      "Blockchain",
    ],
    email: "abhishek@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 212,
    department: "IT",
    name: "Dr. Triloki Pant",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Data Science",
      "Machine Learning",
      "Optimization",
    ],
    email: "tpant@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 213,
    department: "IT",
    name: "Dr. Bibhas Ghoshal",
    image: "/faculty/bibhas.jpg",
    researchInterests: [
      "Artificial Intelligence",
      "Deep Learning",
      "Data Analytics",
    ],
    email: "bibhas.ghoshal@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 214,
    department: "IT",
    name: "Dr. Navjot Singh",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Cyber Security",
      "Cryptography",
      "Network Security",
    ],
    email: "navjot@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 215,
    department: "IT",
    name: "Dr. Muneendra Ojha",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Computer Vision",
      "Image Processing",
      "Deep Learning",
    ],
    email: "muneendra@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 216,
    department: "IT",
    name: "Dr. Shiv Ram Dubey",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Computer Vision",
      "Deep Learning",
      "Pattern Recognition",
    ],
    email: "srdubey@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 217,
    department: "IT",
    name: "Dr. Mohammed Javed",
    image: "/faculty/javed.jpg",
    researchInterests: [
      "Data Analytics",
      "Machine Learning",
      "Big Data",
    ],
    email: "javed@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 218,
    department: "IT",
    name: "Dr. Soumyadev Maity",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Natural Language Processing",
      "AI",
      "Machine Learning",
    ],
    email: "soumyadev@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 219,
    department: "IT",
    name: "Dr. Anshu S Anand",
    image: "/faculty/anshu.jpg",
    researchInterests: [
      "Software Engineering",
      "Cloud Computing",
      "Distributed Systems",
    ],
    email: "anshu@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 220,
    department: "IT",
    name: "Dr. Nabajyoti Mazumdar",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Cyber Security",
      "Blockchain",
      "Cryptography",
    ],
    email: "nabajyoti@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 221,
    department: "IT",
    name: "Dr. Ranjana Vyas",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Human Computer Interaction",
      "UX",
      "Software Engineering",
    ],
    email: "ranjana@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 222,
    department: "IT",
    name: "Dr. Anjali Gautam",
    image: "/faculty/anjali.jpg",
    researchInterests: [
      "Machine Learning",
      "Data Science",
      "AI",
    ],
    email: "anjaligautam@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 223,
    department: "IT",
    name: "Dr. KM Pooja",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Computer Vision",
      "Image Analysis",
      "Machine Learning",
    ],
    email: "kmpooja@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 224,
    department: "IT",
    name: "Dr. Gaurav Srivastava",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Cyber Security",
      "Cloud Security",
      "Blockchain",
    ],
    email: "gauravs@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 225,
    department: "IT",
    name: "Dr. Naveen Saini",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Mining",
    ],
    email: "nsaini@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 226,
    department: "IT",
    name: "Dr. Randheer Bagi",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Software Engineering",
      "Cloud Computing",
      "DevOps",
    ],
    email: "randheer@iiita.ac.in",
    homepage: "#",
  },
  // =======================
  // MANAGEMENT STUDIES FACULTY
  // =======================

  {
    id: 301,
    department: "MS",
    name: "Prof. Madhvendra Misra",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Marketing",
      "Consumer Behavior",
      "Business Analytics",
    ],
    email: "madhvendra@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 302,
    department: "MS",
    name: "Prof. Vijaishri Tewari",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Human Resource Management",
      "Organizational Behavior",
      "Leadership",
    ],
    email: "vijayshri@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 303,
    department: "MS",
    name: "Prof. Ranjit Singh",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Finance",
      "Financial Markets",
      "Investment Analysis",
    ],
    email: "ranjitsingh@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 304,
    department: "MS",
    name: "Prof. Anurika Vaish",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Marketing",
      "Brand Management",
      "Consumer Research",
    ],
    email: "anurika@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 305,
    department: "MS",
    name: "Prof. Shailendra Kumar",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Operations Management",
      "Supply Chain Management",
      "Decision Sciences",
    ],
    email: "shailendrak@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 306,
    department: "MS",
    name: "Dr. Pragya Singh",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Human Resource Management",
      "Organizational Development",
      "Industrial Relations",
    ],
    email: "pragyabhardwaj@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 307,
    department: "MS",
    name: "Dr. Shashikant Rai",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Finance",
      "Banking",
      "Financial Analytics",
    ],
    email: "shashikant@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 308,
    department: "MS",
    name: "Dr. Saurabh Mishra",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Marketing",
      "Digital Marketing",
      "Consumer Analytics",
    ],
    email: "saurabhmishra@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 309,
    department: "MS",
    name: "Dr. Vineet Tiwari",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Operations Research",
      "Business Analytics",
      "Optimization",
    ],
    email: "vineet.tiwari@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 310,
    department: "MS",
    name: "Dr. Utkarsh Goel",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Entrepreneurship",
      "Innovation Management",
      "Strategic Management",
    ],
    email: "utkarsh@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 311,
    department: "MS",
    name: "Dr. Sudipta Das",
    image: "/faculty/default.jpg",
    researchInterests: [
      "Accounting",
      "Corporate Finance",
      "Financial Management",
    ],
    email: "sudipta.das@iiita.ac.in",
    homepage: "#",
  },
]

export default facultyData