// Portfolio Configuration File
// Edit this file to customize your portfolio

export const config = {
  // Personal Information
  personal: {
    name: "Aryan Kumar Singh",
    tagline: "Data Engineer | Analyst",
    subtitle: "Final Year BTech CSE Student at VIT Vellore",
    description: "A curious CS student who believes data tells better stories than most people do, you just need to know how to listen. I’m passionate about turning messy data into meaningful insights and building solutions that make both users and dashboards happy. With hands-on experience in backend development using Python (FastAPI) and Java, I’ve learned the art of designing, coding, and debugging (and occasionally talking to my code until it cooperates). I thrive in agile teams, enjoy solving real-world problems, and am on a mission to blend logic, creativity, and a dash of humor into every project I take on.",
    email: "aryankrsingh987@gmail.com",
    phone: "+91 9798597633",
    location: "Hyderabad, India",
    resumeUrl: "https://drive.google.com/file/d/17U7ZFZ5jykoo18LoAjG9QPof8ZetrMrh/view",
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

  // Projects - You can add your projects here later
  projects: [
    {
      title: "Marketing Performance & Customer Insights Dashboard",
      description: "Built a data pipeline using SQL Server, Python, and Power BI to analyze customer reviews and marketing performance. Applied VADER sentiment analysis with NLTK to categorize customer feedback. Designed an interactive dashboard that helps marketing teams uncover trends, measure performance, and make data-driven decisions.",
      technologies: ["Power BI", "SQL Server", "Python", "DAX", "NLTK", "VADER"],
      githubUrl: "https://github.com/aryannnsinghhh/Marketing-Analytics",
      liveUrl: "#",
      image: "/project1.jpg", // Add project images later
    },
    {
      title: "Sentiment Analysis Using Python",
      description: "Created a sentiment analysis model in Python to classify tweets as positive or negative using NLTK and Scikit-learn. Implemented data cleaning, text preprocessing, and TF-IDF vectorization before training a Logistic Regression model for sentiment prediction. The project demonstrates strong data handling, NLP, and machine learning integration for real-world text analytics.",
      technologies: ["Python", "Pandas", "NLTK", "Scikit-learn", "TF-IDF", "Logistic Regression"],
      githubUrl: "https://github.com/aryannnsinghhh/Sentiment-Analysis-Using-Py",
      liveUrl: "#",
      image: "/project2.jpg",
    },
    {
      title: "Master Chef",
      description: "Developed an AI-powered recipe generator using React, TailwindCSS, and Hugging Face's Mistral-7B model that crafts personalized recipes from user ingredients. Designed a clean, responsive interface adaptable across all devices, integrated real-time API calls for instant recipe generation, and added ingredient management features.",
      technologies: ["React", "TailwindCSS", "Hugging Face's Mistral-7B model", "API Integration"],
      githubUrl: "https://github.com/aryannnsinghhh/Master-Chef",
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
