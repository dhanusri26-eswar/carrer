export const quizQuestions = {
  start: {
    id: 'start',
    question: "What's your primary career interest after 12th?",
    options: [
      { text: "Engineering & Technology", value: "engineering", next: "eng_2" },
      { text: "Medical & Healthcare", value: "medical", next: "med_2" },
      { text: "Commerce & Business", value: "commerce", next: "com_2" },
      { text: "Arts & Humanities", value: "arts", next: "arts_2" },
      { text: "Government Jobs", value: "govt", next: "govt_2" }
    ]
  },

  // Engineering Path
  eng_2: {
    id: 'eng_2',
    question: "Which engineering field interests you most?",
    options: [
      { text: "Computer Science & IT", value: "cs", next: "eng_3_cs" },
      { text: "Mechanical Engineering", value: "mech", next: "eng_3_mech" },
      { text: "Civil Engineering", value: "civil", next: "eng_3_civil" },
      { text: "Electronics & Communication", value: "ece", next: "eng_3_ece" }
    ]
  },

  eng_3_cs: {
    id: 'eng_3_cs',
    question: "Which computer science area excites you?",
    options: [
      { text: "Software Development", value: "software", next: "eng_4" },
      { text: "Artificial Intelligence & ML", value: "ai", next: "eng_4" },
      { text: "Cybersecurity", value: "security", next: "eng_4" },
      { text: "Data Science", value: "data", next: "eng_4" }
    ]
  },

  eng_3_mech: {
    id: 'eng_3_mech',
    question: "Which mechanical field interests you?",
    options: [
      { text: "Automobile Engineering", value: "auto", next: "eng_4" },
      { text: "Aerospace Engineering", value: "aero", next: "eng_4" },
      { text: "Manufacturing & Production", value: "manufacturing", next: "eng_4" },
      { text: "Robotics & Automation", value: "robotics", next: "eng_4" }
    ]
  },

  eng_3_civil: {
    id: 'eng_3_civil',
    question: "Which civil engineering area appeals to you?",
    options: [
      { text: "Construction Management", value: "construction", next: "eng_4" },
      { text: "Structural Engineering", value: "structural", next: "eng_4" },
      { text: "Transportation Engineering", value: "transport", next: "eng_4" },
      { text: "Environmental Engineering", value: "environment", next: "eng_4" }
    ]
  },

  eng_3_ece: {
    id: 'eng_3_ece',
    question: "Which electronics field interests you?",
    options: [
      { text: "Embedded Systems", value: "embedded", next: "eng_4" },
      { text: "VLSI Design", value: "vlsi", next: "eng_4" },
      { text: "Telecommunications", value: "telecom", next: "eng_4" },
      { text: "Signal Processing", value: "signal", next: "eng_4" }
    ]
  },

  // Medical Path
  med_2: {
    id: 'med_2',
    question: "Which medical field are you interested in?",
    options: [
      { text: "MBBS (Doctor)", value: "mbbs", next: "med_3_mbbs" },
      { text: "BDS (Dentistry)", value: "bds", next: "med_3_dental" },
      { text: "Pharmacy", value: "pharmacy", next: "med_3_pharma" },
      { text: "Nursing", value: "nursing", next: "med_3_nursing" }
    ]
  },

  med_3_mbbs: {
    id: 'med_3_mbbs',
    question: "Are you preparing for medical entrance exams?",
    options: [
      { text: "Yes, preparing for NEET", value: "neet_prep", next: "med_4" },
      { text: "Planning to prepare", value: "neet_plan", next: "med_4" },
      { text: "Looking for alternatives", value: "alt_medical", next: "med_4" }
    ]
  },

  med_3_dental: {
    id: 'med_3_dental',
    question: "What interests you about dentistry?",
    options: [
      { text: "General Dentistry Practice", value: "general_dental", next: "med_4" },
      { text: "Oral Surgery", value: "oral_surgery", next: "med_4" },
      { text: "Cosmetic Dentistry", value: "cosmetic", next: "med_4" },
      { text: "Pediatric Dentistry", value: "pediatric", next: "med_4" }
    ]
  },

  med_3_pharma: {
    id: 'med_3_pharma',
    question: "Which pharmacy field interests you?",
    options: [
      { text: "Clinical Pharmacy", value: "clinical", next: "med_4" },
      { text: "Pharmaceutical Research", value: "research", next: "med_4" },
      { text: "Drug Manufacturing", value: "manufacturing", next: "med_4" },
      { text: "Pharmacy Business", value: "business", next: "med_4" }
    ]
  },

  med_3_nursing: {
    id: 'med_3_nursing',
    question: "Which nursing specialization appeals to you?",
    options: [
      { text: "General Nursing", value: "general_nursing", next: "med_4" },
      { text: "Critical Care Nursing", value: "critical_care", next: "med_4" },
      { text: "Pediatric Nursing", value: "pediatric_nursing", next: "med_4" },
      { text: "Community Health", value: "community", next: "med_4" }
    ]
  },

  // Commerce Path
  com_2: {
    id: 'com_2',
    question: "Which commerce field attracts you?",
    options: [
      { text: "Chartered Accountancy (CA)", value: "ca", next: "com_3_ca" },
      { text: "Business Management (BBA/MBA)", value: "mba", next: "com_3_mba" },
      { text: "Banking & Finance", value: "banking", next: "com_3_bank" },
      { text: "Company Secretary (CS)", value: "cs", next: "com_3_cs" }
    ]
  },

  com_3_ca: {
    id: 'com_3_ca',
    question: "What's your plan for CA preparation?",
    options: [
      { text: "Start CA Foundation immediately", value: "ca_foundation", next: "com_4" },
      { text: "B.Com + CA together", value: "bcom_ca", next: "com_4" },
      { text: "Complete graduation first", value: "grad_first", next: "com_4" }
    ]
  },

  com_3_mba: {
    id: 'com_3_mba',
    question: "Which management area interests you?",
    options: [
      { text: "Marketing Management", value: "marketing", next: "com_4" },
      { text: "Finance Management", value: "finance", next: "com_4" },
      { text: "Human Resources", value: "hr", next: "com_4" },
      { text: "Operations Management", value: "operations", next: "com_4" }
    ]
  },

  com_3_bank: {
    id: 'com_3_bank',
    question: "Which banking career appeals to you?",
    options: [
      { text: "Bank PO/Manager", value: "bank_po", next: "com_4" },
      { text: "Investment Banking", value: "investment", next: "com_4" },
      { text: "Financial Analyst", value: "analyst", next: "com_4" },
      { text: "Insurance Sector", value: "insurance", next: "com_4" }
    ]
  },

  com_3_cs: {
    id: 'com_3_cs',
    question: "What attracts you to Company Secretary?",
    options: [
      { text: "Corporate Law", value: "corp_law", next: "com_4" },
      { text: "Company Compliance", value: "compliance", next: "com_4" },
      { text: "Corporate Governance", value: "governance", next: "com_4" }
    ]
  },

  // Arts Path
  arts_2: {
    id: 'arts_2',
    question: "Which arts field interests you most?",
    options: [
      { text: "Literature & Writing", value: "literature", next: "arts_3_lit" },
      { text: "Visual Arts & Design", value: "design", next: "arts_3_design" },
      { text: "Psychology & Counseling", value: "psychology", next: "arts_3_psych" },
      { text: "Mass Communication", value: "masscom", next: "arts_3_media" }
    ]
  },

  arts_3_lit: {
    id: 'arts_3_lit',
    question: "Which literature/writing career appeals to you?",
    options: [
      { text: "Creative Writing/Author", value: "author", next: "arts_4" },
      { text: "Journalism", value: "journalism", next: "arts_4" },
      { text: "Content Writing", value: "content", next: "arts_4" },
      { text: "Teaching Literature", value: "teaching", next: "arts_4" }
    ]
  },

  arts_3_design: {
    id: 'arts_3_design',
    question: "Which design field excites you?",
    options: [
      { text: "Graphic Design", value: "graphic", next: "arts_4" },
      { text: "Fashion Design", value: "fashion", next: "arts_4" },
      { text: "Interior Design", value: "interior", next: "arts_4" },
      { text: "Animation & VFX", value: "animation", next: "arts_4" }
    ]
  },

  arts_3_psych: {
    id: 'arts_3_psych',
    question: "Which psychology area interests you?",
    options: [
      { text: "Clinical Psychology", value: "clinical_psych", next: "arts_4" },
      { text: "Counseling Psychology", value: "counseling", next: "arts_4" },
      { text: "Child Psychology", value: "child_psych", next: "arts_4" },
      { text: "Industrial Psychology", value: "industrial_psych", next: "arts_4" }
    ]
  },

  arts_3_media: {
    id: 'arts_3_media',
    question: "Which media field attracts you?",
    options: [
      { text: "TV/Radio Broadcasting", value: "broadcasting", next: "arts_4" },
      { text: "Digital Media", value: "digital_media", next: "arts_4" },
      { text: "Film Making", value: "film", next: "arts_4" },
      { text: "Advertising", value: "advertising", next: "arts_4" }
    ]
  },

  // Government Jobs Path
  govt_2: {
    id: 'govt_2',
    question: "Which government sector interests you?",
    options: [
      { text: "Civil Services (IAS/IPS)", value: "upsc", next: "govt_3" },
      { text: "Banking (IBPS/SBI)", value: "banking", next: "govt_3" },
      { text: "Railways", value: "railway", next: "govt_3" },
      { text: "Defense Services", value: "defense", next: "govt_3" }
    ]
  },

  govt_3: {
    id: 'govt_3',
    question: "What's your preparation strategy?",
    options: [
      { text: "Full-time preparation", value: "fulltime", next: "govt_4" },
      { text: "Preparation with graduation", value: "with_grad", next: "govt_4" },
      { text: "Join coaching institute", value: "coaching", next: "govt_4" }
    ]
  },

  // Final questions for each path
  eng_4: {
    id: 'eng_4',
    question: "What's most important for your college choice?",
    options: [
      { text: "IITs/NITs (Top ranking)", value: "top_ranking", next: "final" },
      { text: "Good placement record", value: "placement", next: "final" },
      { text: "Affordable fees", value: "affordable", next: "final" },
      { text: "Near home location", value: "location", next: "final" }
    ]
  },

  med_4: {
    id: 'med_4',
    question: "What's your preference for medical college?",
    options: [
      { text: "Government medical college", value: "govt_medical", next: "final" },
      { text: "Private medical college", value: "private_medical", next: "final" },
      { text: "Abroad education", value: "abroad_medical", next: "final" },
      { text: "State quota seats", value: "state_quota", next: "final" }
    ]
  },

  com_4: {
    id: 'com_4',
    question: "What type of college do you prefer?",
    options: [
      { text: "Top commerce college", value: "top_commerce", next: "final" },
      { text: "College with internship", value: "internship", next: "final" },
      { text: "Government college", value: "govt_college", next: "final" },
      { text: "Professional institute", value: "professional", next: "final" }
    ]
  },

  arts_4: {
    id: 'arts_4',
    question: "What's important for your education?",
    options: [
      { text: "Specialized arts college", value: "specialized", next: "final" },
      { text: "University with good faculty", value: "faculty", next: "final" },
      { text: "Practical exposure", value: "practical", next: "final" },
      { text: "Affordable education", value: "affordable", next: "final" }
    ]
  },

  govt_4: {
    id: 'govt_4',
    question: "What's your backup plan?",
    options: [
      { text: "Complete graduation first", value: "graduation", next: "final" },
      { text: "Try private sector also", value: "private", next: "final" },
      { text: "Focus only on govt jobs", value: "only_govt", next: "final" }
    ]
  },

  final: {
    id: 'final',
    question: "When do you plan to start?",
    options: [
      { text: "Immediately", value: "immediate", next: null },
      { text: "Within 3 months", value: "3months", next: null },
      { text: "Within 6 months", value: "6months", next: null },
      { text: "After result", value: "after_result", next: null }
    ]
  }
};

// Helper function to get starting question
export const getStartQuestion = () => quizQuestions.start;

// Helper function to get question by ID
export const getQuestionById = (id) => quizQuestions[id];
