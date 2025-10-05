// Portfolio Configuration File
// Edit this file to customize your portfolio

export const config = {
  // Personal Information
  personal: {
    name: "Aryan Kumar Singh",
    tagline: "Aspiring Data Engineer | Analyst",
    subtitle: "Final Year BTech CSE Student at VIT Vellore",
    description: "A curious CS student who believes data tells better stories than most people do — you just need to know how to listen. I’m passionate about turning messy data into meaningful insights and building solutions that make both users and dashboards happy. With hands-on experience in backend development using Python (FastAPI) and Java, I’ve learned the art of designing, coding, and debugging (and occasionally talking to my code until it cooperates). I thrive in agile teams, enjoy solving real-world problems, and am on a mission to blend logic, creativity, and a dash of humor into every project I take on.",
    email: "aryankrsingh987@gmail.com",
    phone: "+91 9798597633",
    location: "Hyderabad, India",
    resumeUrl: "/AryanKumarSingh_Resume.pdf", // Update this path when you add your resume
  },

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/aryan-singh-11x11y2515/",
    github: "https://github.com/aryannnsinghhh",
    email: "mailto:aryankrsingh987@gmail.com",
  },

  // Color Scheme
  colors: {
    primary: "#4A90E2",
    secondary: "#87CEEB",
    accent: "#3B82F6",
    light: "#F7F9FC",
    darkText: "#2C3E50",
    mutedText: "#6B7280",
  },

  // Skills organized by category
  skills: {
    "Programming Languages": [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 75 },
      { name: "C/C++", level: 70 },
    ],
    "Data Analysis & Tools": [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Excel (Advanced)", level: 80 },
      { name: "Statistical Analysis", level: 85 },
    ],
    "Visualization": [
      { name: "Power BI", level: 85 },
      { name: "Tableau", level: 80 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 80 },
    ],
    "Databases & Cloud": [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "AWS Basics", level: 65 },
    ],
    "Other Tools": [
      { name: "Git & GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "VS Code", level: 90 },
      { name: "Microsoft Office", level: 85 },
    ],
  },

  // Experience from resume
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Innovatech Technology Solutions Pvt Ltd",
      duration: "May 2025 - July 2025",
      location: "Hyderabad, Telangana (Onsite)",
      achievements: [
        "Gained exposure to the SDLC principles working with the backend team, using FastAPI (Python) Framework, building RESTful APIs.",
        "Collaborated with a lively team of developers using Git and Jira in an agile setup, taking part in stand-ups, sprint planning, and code reviews.",
        "Tested and refined APIs through Postman, ensuring everything ran smoothly.",
      ],
    },
  ],

  // Education from resume
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vellore Institute of Technology (VIT)",
      duration: "2022 - 2026",
      location: "Vellore, Tamil Nadu",
      details: "Specialization in Data Science and Analytics",
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Delhi Public School",
      duration: "2021",
      location: "Delhi",
      details: "Science Stream - 92%",
    },
  ],

  // Projects - You can add your projects here later
  projects: [
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Power BI dashboard analyzing sales trends, customer behavior, and revenue patterns across multiple regions.",
      technologies: ["Power BI", "SQL", "Excel", "DAX"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/project1.jpg", // Add project images later
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Machine learning project using K-means clustering to segment customers based on purchasing behavior and demographics.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/project2.jpg",
    },
    {
      title: "Data Pipeline ETL System",
      description: "Built an automated ETL pipeline to extract, transform, and load data from multiple sources into a centralized database.",
      technologies: ["Python", "SQL", "PostgreSQL", "Apache Airflow"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/project3.jpg",
    },
  ],

  // Certifications & Achievements
  certifications: [
    "Google Data Analytics Professional Certificate",
    "Microsoft Power BI Data Analyst Associate",
    "SQL for Data Science - Coursera",
  ],
};

export default config;
