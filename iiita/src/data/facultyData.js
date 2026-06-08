const facultyData = [
 {
    id: 1,
    name: "Prof. Tapobrata Lahiri",
    department: "AS",
    image: "/faculty/tapobrata.jpg",
    researchInterests: ["Machine Learning", "Artificial Intelligence", "Optimization", "Systems Modelling and Simulation", "Fractal Dimensional Analysis"],
    email: "tlahiri@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/tlahiri/",
  },
  {
    id: 2,
    name: "Prof. Pritish Varadwaj",
    department: "AS",
    image: "/faculty/pritish.jpg",
    researchInterests: ["Systems Biology", "Computational Biology", "Next Gen Sequencing Algorithms","Genomic Big Data Analytics"],
    email: "pritish@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102924",
  },
  {
    id: 3,
    name: "Prof. Ashutosh Mishra",
    department: "AS",
    image: "/faculty/ashutoshm.jpg",
    researchInterests: ["Bioelectrics", "Biomechanics", "Machine Learning"],
    email: "am@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/224079",
  },
  {
    id: 4,
    name: "Prof. Akhilesh Tiwari",
    department: "AS",
    image: "/faculty/akhilesh.jpg",
    researchInterests: ["Photonic Crystals", "Photonic band gap materials", "Left handed materials", "Heat and mass transfer"],
    email: "atiwari@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/atiwari/",
  },
  {
    id: 5,
    name: "Prof. Pramod Kumar",
    department: "AS",
    image: "/faculty/pramod.jpg",
    researchInterests: ["Magnetocaloric effect", "Shape-memory alloy", "Negative magnetization", "Spin wave dynamics", "Strongly correlated electron systems"],
    email: "pkumar@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102935",
  },
  {
    id: 6,
    name: "Prof. Ratan Kumar Saha",
    department: "AS",
    image: "/faculty/ratan.jpg",
    researchInterests: ["Ultrasonic imaging and tissue characterization", "Photoacoustic tissue characterization", "Photoacoustic tomography"],
    email: "ratank.saha@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/ratank.saha/team.html",
  },
  {
    id: 7,
    name: "Prof. Amit Prabhakar",
    department: "AS",
    image: "/faculty/amitp.jpg",
    researchInterests: ["Bio-MEMs", "Nanotechnology", "Microfluidics","Lab-on-Chip Devices","Biosensors"],
    email: "amit@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/amit/home",
  },
  {
    id: 8,
    name: "Prof. Nidhi Mishra",
    department: "AS",
    image: "/faculty/nidhi.jpg",
    researchInterests: [ "QSAR", "Drug Designing", "Drug Discovery", "Synthesis of Novel Drugs", "Cheminformatics", "Nano-composites"],
    email: "nidhimishra@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102923",
  },
  {
    id: 9,
    name: "Dr. Sangeeta Singh",
    department: "AS",
    image: "/faculty/sangeeta.jpg",
    researchInterests: ["Biofilms", "Stem Cells", "Biologicals Characterization", "Pathogens Detection And Characterization"],
    email: "sangeeta@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102926",
  },
  {
    id: 10,
    name: "Dr. Srijit Bhattacharjee",
    department: "AS",
    image: "/faculty/srijit.jpg",
    researchInterests: ["Quantum Field Theory", "Gravitation", "Black Holes", "Cosmology", "Holography"],
    email: "srijitb@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/srijit/",
  },
  {
    id: 11,
    name: "Dr. Sintu Kumar Samanta",
    department: "AS",
    image: "/faculty/sintu.jpg",
    researchInterests: ["Signal transduction in Mycobacterium tuberculosis", "Antimicrobial Resistance"],
    email: "samantasintu@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/samantasintu/",
  },
  {
    id: 12,
    name: "Dr. Abdullah Bin Abu Baker",
    department: "AS",
    image: "/faculty/abdullah.jpg",
    researchInterests: ["Functional Analysis", "Operator Theory"],
    email: "abdullah@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/abdullah/",
  },
  {
    id: 13,
    name: "Dr. Amaresh Kumar Sahoo",
    department: "AS",
    image: "/faculty/amaresh.png",
    researchInterests: ["Nanobiotechnology", "Study of anti-bacterial activity","Development of novel theranostic materials"],
    email: "asaboo@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/asahoo/",
  },
  {
    id: 14,
    name: "Dr. Sumit Kumar Upadhyay",
    department: "AS",
    image: "/faculty/sumit.jpg",
    researchInterests: ["Commutative Algebra", "Group Theory"],
    email: "sumitupadhyay@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/sumitupadhyay/",
  },
  {
    id: 15,
    name: "Dr. Anand Kumar Tiwari",
    department: "AS",
    image: "/faculty/anand.jpg",
    researchInterests: ["Combinatorial Topology"],
    email: "anand@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/anand/index.html",
  },
  {
    id: 16,
    name: "Dr. Sanjeev B.S.",
    department: "AS",
    image: "/faculty/sanjeev.jpeg",
    researchInterests: ["Structural Biology", "Parallel Computing"],
    email: "sanjeev@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102922",
  },
  {
    id: 17,
    name: "Dr. Seema Kushwaha",
    department: "AS",
    image: "/faculty/seema.jpg",
    researchInterests: ["Algebra", "Number Theory"],
    email: "seemak@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/seemak/",
  },
  {
    id: 18,
    name: "Dr. Savitri Joshi",
    department: "AS",
    image: "/faculty/savitri.jpg",
    researchInterests: ["Survival Analysis", "Change Point Problems"],
    email: "savitri.joshi@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/savitri.joshi/",
  },
  {
    id: 19,
    name: "Dr. Upendra Kumar",
    department: "AS",
    image: "/faculty/upendra.jpg",
    researchInterests: ["Experimental Condensed Matter Physics", "Electroceramics", "Renewable Energy Sources"],
    email: "upendrakumar@iiita.ac.in",
    homepage: "https://sites.google.com/view/drupendrakumar/home",
  },
  {
    id: 20,
    name: "Dr. Saurabh Verma",
    department: "AS",
    image: "/faculty/saurabhv.jpg",
    researchInterests: ["Fractal Geometry", "Dimension Theory", "Approximation Theory"],
    email: "saurabhverma@iiita.ac.in",
    homepage: "https://sites.google.com/view/saurabhverma",
  },
  // =======================
  // ECE DEPARTMENT FACULTY
  // =======================
  {
    id: 101,
    department: "ECE",
    name: "Prof. Manish Goswami",
    image: "/faculty/manishg.jpg",
    researchInterests: [
      "Low Power Circuit design",
      "Analog and Mixed Signal VLSI Design",
      "Data Converters",
      "Memory Design"
    ],
    email: "manishgoswami@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/manishgoswami/",
  },

  {
    id: 102,
    department: "ECE",
    name: "Prof. Sanjai Singh",
    image: "/faculty/sanjai.jpg",
    researchInterests: [
      "Structural, Electronic and Optical Properties of Nanostructures",
      "Properties of High Tc Superconducting Materials",
      "Quantum Computing"
    ],
    email: "ssingh@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102944",
  },

  {
    id: 103,
    department: "ECE",
    name: "Prof. Rajat Kumar Singh",
    image: "/faculty/rajat.jpg",
    researchInterests: [
      "Photonic Packet Switch Architecture",
      "Optical Data Storage",
      "Wireless Sensor Network",
      "Optical Networking and Switching",
    ],
    email: "rajatsingh@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/rajatsingh/",
  },

  {
    id: 104,
    department: "ECE",
    name: "Dr. Ashutosh Kumar Singh",
    image: "/faculty/ashutosh.jpg",
    researchInterests: [
      "Wireless Sensor Networks",
      "Adhoc Networks",
      "Automatic Control System",
      "Nonlinear Control"
    ],
    email: "ashutosh_singh@iiita.ac.in",
    homepage: "https://ashutoshsingh.weebly.com/",
  },

  {
    id: 105,
    department: "ECE",
    name: "Dr. Prasanna Kumar Misra",
    image: "/faculty/prasanna.jpg",
    researchInterests: [
      "Analog/RF integrated circuit design",
      "VLSI system design",
      "Memory Design"
    ],
    email: "prasanna@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/prasanna/",
  },

  {
    id: 106,
    department: "ECE",
    name: "Dr. Suneel Yadav",
    image: "/faculty/suneel.jpg",
    researchInterests: [
      "Physical Layer Security",
      "MIMO Systems",
      "Wireless Relaying Techniques",
      "Signal Processing",
    ],
    email: "suneel@iiita.ac.in",
    homepage: "https://sites.google.com/a/iiita.ac.in/suneelyadav/",
  },

  {
    id: 107,
    department: "ECE",
    name: "Dr. Sunny",
    image: "/faculty/sunny.jpg",
    researchInterests: [
      "Novel Sensing Materials","Non-Volatile Memories", "Micro and Nanofabrication", "Photonics",
    ],
    email: "sunnys@iiita.ac.in",
    homepage: "https://scholar.google.com/citations?user=zhCF2jEAAAAJ&hl=en",
  },

  {
    id: 108,
    department: "ECE",
    name: "Dr. Pooja Mishra",
    image: "/faculty/pooja.jpg",
    researchInterests: [
      "Synthetic Aperture Radar (SAR) Polarimetry",
      "Microwave Remote Sensing",
      "Microwave Imaging",
      "Polarimetric Modelling for Earth and Lunar surface",  
      
    ],
    email: "pooja@iiita.ac.in",
    homepage: "https://sites.google.com/iiita.ac.in/pooja-mishra/home?authuser=0",
  },

  {
    id: 109,
    department: "ECE",
    name: "Dr. Sitangshu Bhattacharya",
    image: "/faculty/sitangshu.jpg",
    researchInterests: [
      "Computational Nanoelectronics",
      "Nanoscale energy transport",
      "Nanoscale energy conversions",
    ],
    email: "sitangshu@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/sitangshu/",
  },

  {
    id: 110,
    department: "ECE",
    name: "Dr. Kavindra Kandpal",
    image: "/faculty/kavindra.jpg",
    researchInterests: [
      "Thin-film deposition",
      "Characterization",
      "Semiconductor devices",
      "Display electronics"
    ],
    email: "kavindra@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/kavindra/",
  },

  {
    id: 111,
    department: "ECE",
    name: "Dr. Rekha Verma",
    image: "/faculty/rekha.jpg",
    researchInterests: [
      "Thermo effects in light emitting transistors and photovoltaics",
      "Electrical contact resistance for metal-semiconductor junctions",
      "Electro-thermal analysis in 2-D materials"
    ],
    email: "r.verma@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102945",
  },

  {
    id: 112,
    department: "ECE",
    name: "Dr. Amar Nath Yadav",
    image: "/faculty/amar.jpeg",
    researchInterests: [
      "Microwave circuits", "Millimetre-wave circuits and Antennas."
    ],
    email: "amarnath@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/102937",
  },

  {
    id: 113,
    department: "ECE",
    name: "Dr. Ramesh Kumar Bhukya",
    image: "/faculty/rameshkb.png",
    researchInterests: [
      "Speech Signal Processing",
      "Automatic Speaker Recognition",
      "Emotion Analysis Based on Speech and Image"
    ],
    email: "rkbhukya@iiita.ac.in",
    homepage: "https://profile.iiita.ac.in/rkbhukya/",
  },

  {
    id: 114,
    department: "ECE",
    name: "Dr. Boddepalli Santhi Bhushan",
    image: "/faculty/boddepalli.jpg",
    researchInterests: [
      "Nano/Micro-Electronics",  "Device Modelling", "Energy Conversion and Storage","VLSI Design", "2D and 1D Materials for Device Applications", "Molecular Electronics"
    ],
    email: "sbhushan@iiita.ac.in",
    homepage: "https://scholar.google.com/citations?user=j-TAXk0AAAAJ&hl=en",
  },

  {
    id: 115,
    department: "ECE",
    name: "Dr. Himanshu Maurya",
    image: "/faculty/himanshu.jpg",
    researchInterests: [
      "PolSAR",
      "Satellite Image Processing",
      "Microwave Remote Sensing",
      "SAR Image Classification",
      "Biomass Estimation",
    ],
    email: "hmaurya@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/212612",
  },

  {
    id: 116,
    department: "ECE",
    name: "Dr. Shanti Chandra",
    image: "/faculty/shanti.jpg",
    researchInterests: [
      "Digital & Biomedical Signal Processing",
      "Wavelet and multirate signal processing",
      "Image Processing and Computer Vision",
    ],
    email: "shantichandra@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/123349",
  },

  {
    id: 117,
    department: "ECE",
    name: "Dr. Surya Prakash",
    image: "/faculty/surya.jpg",
    researchInterests: [
      "Embodied AI",
      "MEMS Sensors",
      "Renewable Energy"
    ],
    email: "suryaprakash@iiita.ac.in",
    homepage: "https://sites.google.com/view/dr-surya-prakash/biography",
  },

  {
    id: 118,
    department: "ECE",
    name: "Dr. Radhika Gaur",
    image: "/faculty/radhika.jpg",
    researchInterests: [
      "Device-to-Device (D2D) Communication",
      "NOMA",
      "Internet of Things (IoT)",
      "Resource Optimization",
      "Cooperative Communication",
      "Vehicular Communication"
    ],
    email: "radhika@iiita.ac.in",
    homepage: "https://iiita.irins.org/profile/225177",
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
    homepage: "https://sites.google.com/view/anshusanand/home",
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
    homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=gauravs",
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
    homepage: "https://iiita.irins.org/profile/102978",
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
    homepage: "https://mba.iiita.ac.in/#faculty-detail?id=3",
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
    homepage: "https://mba.iiita.ac.in/#faculty-detail?id=2",
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
    homepage: "https://iiita.irins.org/profile/102971",
  },
  {
  id: 312,
  department: "IT",
  name: "Dr. Jayasree Sengupta",
  image: "/faculty/jayasree.jpg",
  researchInterests: [
    "Network Security",
    "Applied Cryptography",
    "Blockchains",
    "Data Privacy",
    "Post Quantum Cryptography",
    "Edge/Fog Computing",
    "Internet of Things"
  ],
  email: "jayasree@iiita.ac.in",
  homepage: "https://sites.google.com/view/jayasreesengupta/home",
},
{
  id: 313,
  department: "IT",
  name: "Dr. Priyanka Kamboj",
  image: "/faculty/pkamboj.jpg",
  researchInterests: [
    "Software Defined Networking",
    "Internet of Things",
    "Blockchain",
    "Process Mining",
    "Formal Methods and Verification"
  ],
  email: "pkamboj@iiita.ac.in",
  homepage: "https://it.iiita.ac.in/?pg=facultypage&uid=pkamboj",
},
{
  id: 314,
  department: "IT",
  name: "Dr. Nikhilanand Arya",
  image: "/faculty/narya.jpg",
  researchInterests: [
    "Computational Biology and Health Care",
    "Machine Learning",
    "Deep Learning"
  ],
  email: "narya@iiita.ac.in",
  homepage: "https://nikhilaryan92.github.io/nikhilanand_arya/",
},
{
  id: 315,
  department: "IT",
  name: "Dr. Amit Kumar",
  image: "/faculty/amitkumar.jpg",
  researchInterests: [
    "Natural Language Processing",
    "Multimodal Learning",
    "Generative AI",
    "Artificial Intelligence",
    "Quantum Computing"
  ],
  email: "amitkumar@iiita.ac.in",
  homepage: "https://amit0018.github.io/portfolio/",
},
{
  id: 316,
  department: "IT",
  name: "Dr. Kesav Ram Kaza",
  image: "/faculty/krkaza.jpg",
  researchInterests: [
    "Sequential Decision Making Under Uncertainty",
    "Reinforcement Learning",
    "Stochastic Control",
    "Optimization",
    "Cyber-Physical Systems",
    "Robotics",
    "UAV Applications"
  ],
  email: "krkaza@iiita.ac.in",
  homepage: "https://sites.google.com/view/kesavkaza/",
},

{
  id: 317,
  department: "ECE",
  name : "Dr. Kirtan Gopal Panda",
  image : "/faculty/kirtan.jfif",
  researchInterests : ["UAV assisted Network", "5G/6G Network","Wireless Sensor Network", "Control Theory"],
  email : "kgpanda@iiita.ac.in",
  homepage: "https://sites.google.com/view/kirtangopalpanda/home"
}
]

export default facultyData