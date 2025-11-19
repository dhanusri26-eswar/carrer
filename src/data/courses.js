export const courseRecommendations = {
  engineering: {
    stream: "Engineering",
    courses: [
      {
        name: "B.Tech Computer Science",
        duration: "4 years",
        careers: ["Software Engineer", "Full Stack Developer", "Data Scientist", "System Architect"],
        description: "Core computer science and software development"
      },
      {
        name: "B.Tech Mechanical",
        duration: "4 years",
        careers: ["Mechanical Engineer", "Design Engineer", "Production Manager", "Automobile Engineer"],
        description: "Design and manufacturing of mechanical systems"
      },
      {
        name: "B.Tech Civil",
        duration: "4 years",
        careers: ["Civil Engineer", "Structural Engineer", "Construction Manager", "Urban Planner"],
        description: "Infrastructure and construction engineering"
      },
      {
        name: "B.Tech Electronics & Communication",
        duration: "4 years",
        careers: ["Electronics Engineer", "Telecom Engineer", "Embedded Systems Developer", "VLSI Designer"],
        description: "Electronics and communication systems"
      },
      {
        name: "B.Tech AI & Data Science",
        duration: "4 years",
        careers: ["AI Engineer", "ML Engineer", "Data Scientist", "AI Researcher"],
        description: "Artificial Intelligence and Data Science"
      },
      {
        name: "B.E. through TNEA",
        duration: "4 years",
        careers: ["Various Engineering Roles based on branch"],
        description: "Tamil Nadu Engineering Admissions for Anna University affiliated colleges"
      }
    ]
  },
  medical: {
    stream: "Medical & Healthcare",
    courses: [
      {
        name: "MBBS",
        duration: "5.5 years",
        careers: ["Doctor", "Surgeon", "General Practitioner", "Medical Officer"],
        description: "Bachelor of Medicine and Bachelor of Surgery"
      },
      {
        name: "BDS",
        duration: "5 years",
        careers: ["Dentist", "Oral Surgeon", "Orthodontist", "Dental Researcher"],
        description: "Bachelor of Dental Surgery"
      },
      {
        name: "B.Pharmacy",
        duration: "4 years",
        careers: ["Pharmacist", "Drug Inspector", "Clinical Researcher", "Medical Representative"],
        description: "Study of pharmaceutical sciences"
      },
      {
        name: "B.Sc Nursing",
        duration: "4 years",
        careers: ["Nurse", "Nursing Supervisor", "Clinical Instructor", "Healthcare Manager"],
        description: "Professional nursing education"
      },
      {
        name: "BAMS",
        duration: "5.5 years",
        careers: ["Ayurvedic Doctor", "Wellness Consultant", "Ayurveda Practitioner"],
        description: "Bachelor of Ayurvedic Medicine and Surgery"
      },
      {
        name: "BPT (Physiotherapy)",
        duration: "4.5 years",
        careers: ["Physiotherapist", "Sports Therapist", "Rehabilitation Specialist"],
        description: "Bachelor of Physiotherapy"
      }
    ]
  },
  commerce: {
    stream: "Commerce & Business",
    courses: [
      {
        name: "CA Foundation + Intermediate",
        duration: "4-5 years",
        careers: ["Chartered Accountant", "Financial Advisor", "Auditor", "Tax Consultant"],
        description: "Professional accounting qualification"
      },
      {
        name: "CS Foundation",
        duration: "3-4 years",
        careers: ["Company Secretary", "Legal Advisor", "Compliance Officer"],
        description: "Company law and governance"
      },
      {
        name: "B.Com + MBA",
        duration: "3+2 years",
        careers: ["Business Manager", "Financial Analyst", "Marketing Manager", "HR Manager"],
        description: "Commerce degree followed by management studies"
      },
      {
        name: "BBA",
        duration: "3 years",
        careers: ["Business Executive", "Entrepreneur", "Operations Manager", "Sales Manager"],
        description: "Bachelor of Business Administration"
      },
      {
        name: "B.Com (Banking & Insurance)",
        duration: "3 years",
        careers: ["Bank Officer", "Insurance Advisor", "Financial Planner", "Risk Analyst"],
        description: "Specialized in banking and insurance"
      },
      {
        name: "Integrated BBA+MBA",
        duration: "5 years",
        careers: ["Management Professional", "Business Consultant", "Corporate Executive"],
        description: "Direct path to management career"
      }
    ]
  },
  arts: {
    stream: "Arts & Humanities",
    courses: [
      {
        name: "BA + MA English",
        duration: "3+2 years",
        careers: ["Writer", "Editor", "Content Creator", "English Professor"],
        description: "Literature and language studies"
      },
      {
        name: "B.Des (Design)",
        duration: "4 years",
        careers: ["Graphic Designer", "Fashion Designer", "Product Designer", "UI/UX Designer"],
        description: "Professional design degree from NIFT/NID"
      },
      {
        name: "BA Psychology + MA/M.Phil",
        duration: "3+2 years",
        careers: ["Clinical Psychologist", "Counselor", "HR Specialist", "Therapist"],
        description: "Professional psychology career path"
      },
      {
        name: "BA Mass Communication",
        duration: "3 years",
        careers: ["Journalist", "TV Anchor", "Radio Jockey", "Digital Marketing"],
        description: "Media and communication studies"
      },
      {
        name: "BFA (Fine Arts)",
        duration: "4 years",
        careers: ["Artist", "Art Director", "Animator", "Creative Director"],
        description: "Professional fine arts degree"
      },
      {
        name: "BA LLB (Integrated)",
        duration: "5 years",
        careers: ["Lawyer", "Legal Advisor", "Corporate Lawyer", "Judge"],
        description: "Law career through CLAT"
      }
    ]
  },
  govt: {
    stream: "Government Job Preparation",
    courses: [
      {
        name: "BA/B.Sc/B.Com + UPSC Prep",
        duration: "3 years + preparation",
        careers: ["IAS", "IPS", "IFS", "IRS"],
        description: "Any degree with Civil Services preparation"
      },
      {
        name: "B.Tech/B.E + Engineering Services",
        duration: "4 years + preparation",
        careers: ["Indian Engineering Services", "PSU Jobs", "Technical Government Posts"],
        description: "Engineering degree for technical government positions"
      },
      {
        name: "Any Degree + Banking Exams",
        duration: "3 years + preparation",
        careers: ["Bank PO", "Bank Clerk", "RBI Officer", "Insurance Officer"],
        description: "Banking sector preparation with graduation"
      },
      {
        name: "B.Sc + Railway/SSC",
        duration: "3 years + preparation",
        careers: ["Railway Officer", "SSC CGL Posts", "Central Government Jobs"],
        description: "Science degree with competitive exam preparation"
      },
      {
        name: "BA + TNPSC Preparation",
        duration: "3 years + preparation",
        careers: ["Group 1 Officer", "Deputy Collector", "DSP", "State Services"],
        description: "Tamil Nadu state government services"
      },
      {
        name: "Any Degree + Defence Services",
        duration: "3 years + NDA/CDS",
        careers: ["Army Officer", "Navy Officer", "Air Force Officer"],
        description: "Defence services through NDA/CDS/AFCAT"
      }
    ]
  }
};

// Additional specific recommendations based on quiz sub-paths
export const getSpecificRecommendations = (primaryPath, specificField) => {
  const specificCourses = {
    // Engineering specifics
    cs: ["B.Tech Computer Science", "B.Tech AI & Data Science"],
    mech: ["B.Tech Mechanical", "B.Tech Automobile Engineering"],
    civil: ["B.Tech Civil", "B.Tech Construction Engineering"],
    ece: ["B.Tech ECE", "B.Tech VLSI Design"],
    
    // Medical specifics
    mbbs: ["MBBS", "MD/MS Specializations"],
    bds: ["BDS", "MDS Specializations"],
    pharmacy: ["B.Pharmacy", "M.Pharmacy"],
    nursing: ["B.Sc Nursing", "M.Sc Nursing"],
    
    // Commerce specifics
    ca: ["CA Foundation + Intermediate + Final"],
    cs: ["CS Foundation + Executive + Professional"],
    banking: ["B.Com + Banking Certifications"],
    mba: ["BBA + MBA", "Integrated BBA+MBA"],
    
    // Arts specifics
    literature: ["BA English + MA", "BA Tamil + MA"],
    design: ["B.Des from NIFT", "B.Des from NID"],
    psychology: ["BA Psychology + MA/M.Phil"],
    masscom: ["BA Mass Communication", "BA Journalism"],
    
    // Govt specifics
    upsc: ["Any Degree + UPSC Coaching"],
    banking: ["Any Degree + IBPS/SBI Preparation"],
    railway: ["Any Degree + Railway Exams"],
    defense: ["Any Degree + NDA/CDS"]
  };
  
  return specificCourses[specificField] || [];
};
