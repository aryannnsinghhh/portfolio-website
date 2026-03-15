// Portfolio Configuration File
// Edit this file to customize your portfolio

export const config = {
  // Personal Information
  personal: {
    name: "Aryan Kumar Singh",
    tagline: "Backend | Data | AI | Python | Java",
    subtitle: "Final Year BTech CSE Student at VIT Vellore",
    description: "A curious CS student who believes data tells better stories than most people do, you just need to know how to listen. I’m passionate about turning messy data into meaningful insights and building solutions that make both users and dashboards happy. With hands-on experience in backend development using Python (FastAPI) and Java, I’ve learned the art of designing, coding, and debugging (and occasionally talking to my code until it cooperates). I thrive in agile teams, enjoy solving real-world problems, and am on a mission to blend logic, creativity, and a dash of humor into every project I take on.",
    email: "aryankrsingh987@gmail.com",
    phone: "+91 9798597633",
    location: "Vellore, India",
    resumeUrl: "drive.google.com/file/d/1afsnUMhsE6-0pHWBDb8QZewcD6oGSa0j",
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
      { name: "SQL" },
      { name: "CQL" },
      { name: "Java" },
      { name: "Javascript" },
      { name: "Python" },
    ],
    "Frameworks & Library": [
      { name: "FastAPI" },
      { name: "React.js" },
    ],
    "Data Analysis & Tools": [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Excel (Advanced)" },
      { name: "Statistical Analysis" },
    ],
    "Visualization": [
      { name: "Power BI" },
      { name: "Tableau" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
    ],
    "Databases & Cloud": [
      { name: "MySQL" },
      { name: "SQL Server" },
      { name: "Cassandra" },
      { name: "AWS Basics" },
    ],
    "Other Tools": [
      { name: "Git & GitHub" },
      { name: "Jupyter Notebook" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "Swagger UI" },
    ],
    "Soft Skills": [
      { name: "Interpersonal Communication" },
      { name: "Teamwork" },
      { name: "Problem Solving" },
      { name: "Adaptability" },
    ],
  },

  // Experience
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Innovatech Technology Solutions Pvt Ltd",
      duration: "May 2025 - July 2025",
      location: "Hyderabad, Telangana (Onsite)",
      link: "https://drive.google.com/file/d/1YvGJGSMxY5ahQ6R5SGqmrJ_cOg4Tv09d/view",
      achievements: [
        "Gained exposure to the SDLC principles working with the backend team, using FastAPI (Python) Framework, building RESTful APIs.",
        "Collaborated with a lively team of developers using Git and Jira in an agile setup, taking part in stand-ups, sprint planning, and code reviews.",
        "Tested and refined APIs through Postman, ensuring everything ran smoothly.",
      ],
    },
  ],

  // Education
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vellore Institute of Technology (VIT)",
      duration: "2022 - 2026",
      location: "Vellore, Tamil Nadu",
    },
    {
      degree: "Schooling (X & XII)",
      institution: "Open Minds - A Birla School, Kankarbagh",
      duration: "2019 & 2021",
      location: "Patna, Bihar",
      details: "CBSE Board",
    },
  ],

  // Projects
  projects: [
    {
      title: "PsyFi – Behavioral Finance Coach",
      description:
        "Built an ML pipeline for financial transaction analysis with data preprocessing, 6 ML models (90%+ accuracy), and LSTM forecasting. Processed 92k+ transactions using Pandas and developed REST APIs with FastAPI integrating Gemini API for personalized finance insights.",
      technologies: [
        "Python",
        "LSTM",
        "FastAPI",
        "Scikit-learn",
        "React.js",
        "Gemini API",
        "Pandas"
      ],
      githubUrl: "https://github.com/aryannnsinghhh/PsiFy",
      liveUrl: "#",
      image: "/project1.jpg",
    },
    {
      title: "Marketing Analysis Dashboard",
      description:
        "Engineered a marketing analytics pipeline using SQL Server, Python, and Power BI. Cleaned data using SQL CTEs, analyzed 1300+ customer reviews with Python, and built an interactive Power BI dashboard with DAX calendar tables for time-based insights.",
      technologies: [
        "SQL",
        "SQL Server",
        "Python",
        "Pandas",
        "Power BI",
        "DAX"
      ],
      githubUrl: "https://github.com/aryannnsinghhh/Marketing-Analytics",
      liveUrl: "#",
      image: "/project2.jpg",
    },
    {
      title: "ResumeWise – Smart Resume Screener",
      description:
        "Built a full-stack AI resume screener with FastAPI backend and React-TypeScript frontend. Implemented MongoDB session handling for 500+ users, secure JWT authentication across 10+ APIs, and Gemini 2.0 integration for resume-job match scoring.",
      technologies: [
        "Python",
        "FastAPI",
        "React.js",
        "TypeScript",
        "MongoDB",
        "Gemini API",
        "JWT",
        "Tailwind CSS"
      ],
      githubUrl: "https://github.com/aryannnsinghhh/ResumeWise",
      liveUrl: "#",
      image: "/project3.jpg",
    },
  ],

  // Certifications & Achievements
  certifications: [
    {
      name: "OCI 2025 AI Foundations Associate",
      link: "https://drive.google.com/file/d/1VKwy2aO9Vfwddt-SMkW570uM_pVTmwpJ/view"
    },
    {
      name: "Microsoft Azure Data Fundamentals",
      link: "https://drive.google.com/file/d/1FjcYlksgnSlnPCm4cxCUvSOg2q8eoJ4G/view"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      link: "https://drive.google.com/file/d/1Tyb_KjKRoQ5RPwazbIgIcaDJDsfgScIz/view"
    },
  ],
};

export default config;
