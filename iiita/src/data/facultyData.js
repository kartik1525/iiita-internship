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
    homepage: "https://profile.iiita.ac.in/vrij/",
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
    homepage: "https://profile.iiita.ac.in/manish/",
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
    image: "/faculty/kpsingh.jpg",
    researchInterests: [
      "ML & DL",
      "Transfer Learning",
      "Natural Language Processing",
      "Evolutionary Algorithms"
    ],
    email: "kpsingh@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/kpsingh/",
  },

  {
    id: 209,
    department: "IT",
    name: "Prof. S. Venkatesan",
    image: "/faculty/venkat.jpg",
    researchInterests: [
      "Network & Information Security",
      "Cloud Computing and Social Network Privacy",
      "Mobile Agent Security",
      "Blockchain"
    ],
    email: "venkat@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/venkat/",
  },

  {
    id: 210,
    department: "IT",
    name: "Prof. Vijay Chaurasiya",
    image: "/faculty/vijayk.jpg",
    researchInterests: [
      "IoT Protocols and Applications",
      "Wireless Networks",
      "Wireless Sensor Networks",
      "Computer Networks",
    ],
    email: "vijayk@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/vijayk/",
  },

  {
    id: 211,
    department: "IT",
    name: "Dr. Abhishek Vaish",
    image: "/faculty/abhishek.jpg",
    researchInterests: [
      "Information Security",
      "Cyber Law",
      "Risk Management",
      "Network Threat Protection"
    ],
    email: "abhishek@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=abhishek",
  },

  {
    id: 212,
    department: "IT",
    name: "Dr. Triloki Pant",
    image: "/faculty/tpant.jpg",
    researchInterests: [
      "Satellite Image Analysis",
      "Fractal Geometry for Imaging"
    ],
    email: "tpant@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=tpant",
  },

  {
    id: 213,
    department: "IT",
    name: "Dr. Bibhas Ghoshal",
    image: "/faculty/bibhas.jpg",
    researchInterests: [
      "Computer architecture",
      "Computer networks",
      "System software",
      "Compilers",
      "Artificial intelligence"
    ],
    email: "bibhas.ghoshal@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/bibhas.ghoshal/",
  },

  {
    id: 214,
    department: "IT",
    name: "Dr. Navjot Singh",
    image: "/faculty/navjot.jpg",
    researchInterests: [
      "Salient Object Detection",
      "Image Processing",
      "Computer Vision",
      "Machine Learning",
      "Medical Imaging"
    ],
    email: "navjot@iiita.ac.in",
    homepage: "https://sites.google.com/iiita.ac.in/navjotsingh",
  },

  {
    id: 215,
    department: "IT",
    name: "Dr. Muneendra Ojha",
    image: "/faculty/muneendra.jpg",
    researchInterests: [
      "Deep Learning",
      "Machine Learning",
      "Natural Language Processing",
      "Video Analytics",
      "Genetic Algorithms"
    ],
    email: "muneendra@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=muneendra",
  },

  {
    id: 216,
    department: "IT",
    name: "Dr. Shiv Ram Dubey",
    image: "/faculty/srdubey.jpg",
    researchInterests: [
      "Computer Vision",
      "Deep Learning",
      "Image Processing",
      "Biometrics",
      "Medical Imaging"
    ],
    email: "srdubey@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/srdubey/",
  },

  {
    id: 217,
    department: "IT",
    name: "Dr. Mohammed Javed",
    image: "/faculty/javed.jpg",
    researchInterests: [
      "Image Processing",
      "Pattern Recognition",
      "Compressed Domain Processing and Analysis",
      "Big Data Analytics"
    ],
    email: "javed@iiita.ac.in",
    homepage: "https://sites.google.com/site/mohammedjaved2016",
  },

  {
    id: 218,
    department: "IT",
    name: "Dr. Soumyadev Maity",
    image: "/faculty/smaity.jpg",
    researchInterests: [
      "Applied Cryptography",
      "Zero-Knowledge Engineering",
      "Blockchain",
      "Quantum Cryptography",
      "Software Security"
    ],
    email: "soumyadev@iiita.ac.in",
    homepage: "https://sites.google.com/view/soumyadevmaity",
  },

  {
    id: 219,
    department: "IT",
    name: "Dr. Anshu S Anand",
    image: "/faculty/anshu.jpg",
    researchInterests: [
      "Parallel Computing",
      "Distributed Computing",
      "High Performance Computing (HPC)",
      "Computational Science"
    ],
    email: "anshu@iiita.ac.in",
    homepage: "#https://sites.google.com/view/anshusanand/",
  },

  {
    id: 220,
    department: "IT",
    name: "Dr. Nabajyoti Mazumdar",
    image: "/faculty/nabajyoti.jpg",
    researchInterests: [
      "Wireless sensor network",
      "Internet of Things",
      "Cloud Computing",
      "Computer Networks"
    ],
    email: "nabajyoti@iiita.ac.in",
    homepage: "https://vidwan.inflibnet.ac.in/profile/184914",
  },

  {
    id: 221,
    department: "IT",
    name: "Dr. Ranjana Vyas",
    image: "/faculty/ranjana.jpg",
    researchInterests: [
      "Business Intelligence",
      "Data Mining",
      "Information Systems Strategy"
    ],
    email: "ranjana@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=ranjana",
  },

  {
    id: 222,
    department: "IT",
    name: "Dr. Anjali Gautam",
    image: "/faculty/anjali.jpg",
    researchInterests: [
      "Image Processing",
      "Computer Vision",
      "Medical Image Analysis",
      "Deep Learning"
    ],
    email: "anjaligautam@iiita.ac.in",
    homepage: "https://anjaliiitr.github.io/index.html",
  },

  {
    id: 223,
    department: "IT",
    name: "Dr. KM Pooja",
    image: "/faculty/kmpooja.jpg",
    researchInterests: [
      "Information retrieval",
      "Deep Learning",
      "Author name disambiguation",
      "Entity Linking"
    ],
    email: "kmpooja@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=kmpooja",
  },

  {
    id: 224,
    department: "IT",
    name: "Dr. Gaurav Srivastava",
    image: "/faculty/gauravs.jpg",
    researchInterests: [
      "Engineering & Combinatorial Optimization",
      "Vehicle Routing Problems",
      "Swarm Intelligence Techniques"
    ],
    email: "gauravs@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 225,
    department: "IT",
    name: "Dr. Naveen Saini",
    image: "/faculty/naveen.jpg",
    researchInterests: [
      "Text Mining",
      "Scholarly Data Mining",
      "Information Retrieval",
      "Multi-objective optimization"
    ],
    email: "nsaini@iiita.ac.in",
    homepage: "https://sites.google.com/view/nsaini",
  },

  {
    id: 226,
    department: "IT",
    name: "Dr. Randheer Bagi",
    image: "/faculty/randheer.jpg",
    researchInterests: [
      "Deep Learning",
      "Machine Learning",
      "Data Science"
    ],
    email: "randheer@iiita.ac.in",
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=randheer",
  },
  // =======================
  // MANAGEMENT STUDIES FACULTY
  // =======================

  {
    id: 301,
    department: "MS",
    name: "Prof. Madhvendra Misra",
    image: "/faculty/madhvendra.jpg",
    researchInterests: [
      "Strategy",
      "Marketing",
      "Digital transformation",
      "Consumer behavior",
      "Information strategy"
    ],
    email: "madhvendra@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102975",
  },

  {
    id: 302,
    department: "MS",
    name: "Prof. Vijaishri Tewari",
    image: "/faculty/vijayshri.jpg",
    researchInterests: [
      "Human Resource Management",
      "Organizational Behavior",
      "Leadership",
    ],
    email: "vijayshri@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102979",
  },

  {
    id: 303,
    department: "MS",
    name: "Prof. Ranjit Singh",
    image: "/faculty/ranjit.jpg",
    researchInterests: [
      "Behavioural Finance",
      "Portfolio Management",
      "Islamic Finance",
      "Security Analysis"
    ],
    email: "ranjitsingh@iiita.ac.in",
    homepage: "#",
  },

  {
    id: 304,
    department: "MS",
    name: "Prof. Anurika Vaish",
    image: "/faculty/anurika.jpg",
    researchInterests: [
      "Economics",
      "Accounting and Finance",
      "Digital Divide and e-Governance",
      "Operation Management and Related issues"
    ],
    email: "anurika@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102981",
  },

  {
    id: 305,
    department: "MS",
    name: "Prof. Shailendra Kumar",
    image: "/faculty/shailendra.jpg",
    researchInterests: [
      "Operations Management",
      "Corporate Finance",
      "Investment Management"
    ],
    email: "shailendrak@iiita.ac.in",
    homepage: "https://scholar.google.com/citations?user=yC6QT14AAAAJ&hl=en",
  },

  {
    id: 306,
    department: "MS",
    name: "Dr. Pragya Singh",
    image: "/faculty/pragya.jpg",
    researchInterests: [
      "Marketing : Service Marketing & Digital Marketing",
      "Entrepreneurship",
      "Investment Management"
    ],
    email: "pragyabhardwaj@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102977",
  },

  {
    id: 307,
    department: "MS",
    name: "Dr. Shashikant Rai",
    image: "/faculty/shashikant.jpg",
    researchInterests: [
      "Information Systems Identity, Privacy and Trust Management",
      "Data and Policy Management",
      "Perishable Food Product Supply Chain Coordination"
    ],
    email: "shashikant@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102976",
  },

  {
    id: 308,
    department: "MS",
    name: "Dr. Saurabh Mishra",
    image: "/faculty/saurabh.jpg",
    researchInterests: [
      "Conversion Rate Optimization",
      "ORM",
      "E-business",
      "E-marketing",
      "Fuzzy Optimization"
    ],
    email: "saurabhmishra@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102974",
  },

  {
    id: 309,
    department: "MS",
    name: "Dr. Vineet Tiwari",
    image: "/faculty/vineet.jpg",
    researchInterests: [
      "Coal, Energy, Water, and Environment Modeling",
      "Sustainable Management Practices",
      "Operations and Supply Chain & Logistics Management",
    ],
    email: "vineet.tiwari@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102980",
  },

  {
    id: 310,
    department: "MS",
    name: "Dr. Utkarsh Goel",
    image: "/faculty/utkarsh.jpg",
    researchInterests: [
      "Corporate Finance",
      "FinTech",
      "Investments"
    ],
    email: "utkarsh@iiita.ac.in",
    homepage: "https://scholar.google.com/citations?user=OfNqiAkAAAAJ&hl=en",
  },

  {
    id: 311,
    department: "MS",
    name: "Dr. Sudipta Das",
    image: "/faculty/sudipta.jpg",
    researchInterests: [
      "Financial Management",
      "Fixed Income Securities",
      "Investment Management",
      "Financial Econometrics",
    ],
    email: "sudipta.das@iiita.ac.in",
    homepage: "#",
  },
]

export default facultyData