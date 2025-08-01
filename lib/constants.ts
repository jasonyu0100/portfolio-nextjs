export const personalInfo = {
  name: "Jason Yu",
  email: "jasonyu0100@gmail.com",
  phone: "(+61) 468969042",
  location: "Sydney, Australia",
  title: "Full-Stack Software Engineer",
  summary: "Full-Stack Software Engineer with 5+ years of experience delivering scalable applications across SaaS, AI, and enterprise platforms. Currently pursuing a Master's in Data Science with a focus on machine learning, analytics, and backend systems. Proficient in TypeScript, React, Java, GraphQL, Python, and PostgreSQL. Combines technical depth with a strong product mindset, specializing in AI-driven automation, performance optimization, and user-centric design."
};

export const socialLinks = {
  github: "https://github.com/jasonyu0100",
  linkedin: "https://www.linkedin.com/in/jason-c-yu/",
  vidUp: "https://www.founders.unsw.edu.au/vidup-0",
  sourceNovel: "https://www.sourcenovel.com",
  calendly: "https://calendly.com/jasonyu0100/sourcenovel"
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  frontend: ["React", "Next.js", "GraphQL", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Spring Boot", "PostgreSQL", "REST APIs", "Microservices"],
  tools: ["Git", "Docker", "AWS", "CI/CD", "Playwright", "Jest"],
  concepts: ["Machine Learning", "Data Science", "System Design", "Performance Optimization"]
};

export const workExperience = [
  {
    company: "Haast",
    position: "Fullstack Engineer",
    period: "Jan 2025 – June 2025",
    location: "Remote",
    highlights: [
      "Optimized PostgreSQL queries by 50% with dynamic filters",
      "Built end-to-end testing infrastructure with Playwright"
    ]
  },
  {
    company: "Atlassian",
    position: "Software Engineer",
    period: "Nov 2022 – Aug 2024",
    location: "Sydney, Australia",
    highlights: [
      "Developed GraphQL APIs with Java/Spring Boot",
      "Reduced bugs by 20% through testing and CI improvements"
    ]
  },
  {
    company: "VidUp",
    position: "Founder",
    period: "June 2020 – Nov 2022",
    location: "Sydney, Australia",
    highlights: [
      "Built AI-powered video editing platform",
      "Acquired 300+ creators and optimized backend performance"
    ]
  }
];

export const education = [
  {
    institution: "University of Sydney",
    degree: "Master's in Data Science",
    period: "July 2025 – Present",
    highlights: ["Built neural networks from scratch using Python and NumPy"]
  },
  {
    institution: "University of New South Wales",
    degree: "BSc Computer Science",
    period: "Jan 2020 – Aug 2023",
    highlights: [
      "Organized tech events with Google (5,000+ students)",
      "Raised $30,000+ in grants; 1st at Pearcy Pitch, 2nd at Peter Farrell Cup"
    ]
  }
];

export const projects = [
  {
    name: "SourceNovel",
    description: "Generative fiction platform",
    highlights: [
      "AI-driven story generation",
      "Interactive narrative experiences",
      "Modern web application with real-time features"
    ],
    technologies: ["TypeScript", "React", "Next.js", "Runway", "GPT"],
    link: socialLinks.sourceNovel,
    image: "/source-novel-icon.png"
  },
  {
    name: "VidUp",
    description: "AI-powered video editing platform",
    highlights: [
      "Auto-generated subtitles and recommendations",
      "300+ content creators acquired",
      "Optimized PostgreSQL for high-load scenarios"
    ],
    technologies: ["React", "Python", "AWS", "PostgreSQL", "AI/ML"],
    link: socialLinks.vidUp,
    image: "/vidup-logo.jpeg"
  }
];