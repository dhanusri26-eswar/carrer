export const careerPaths = [
  {
    id: 1,
    title: "Software Engineer",
    category: "Technology",
    description: "Design, develop, and maintain software applications and systems",
    requiredEducation: ["B.Tech Computer Science", "BCA", "B.Sc Computer Science", "MCA"],
    skills: ["Programming", "Problem Solving", "Database Management", "Web Development"],
    averageSalary: "₹6-12 LPA",
    growthProspects: "Excellent",
    companies: ["TCS", "Infosys", "Google", "Microsoft", "Wipro"],
    icon: "💻"
  },
  {
    id: 2,
    title: "Doctor",
    category: "Healthcare",
    description: "Diagnose and treat illnesses, injuries, and health conditions",
    requiredEducation: ["MBBS", "MD", "MS"],
    skills: ["Medical Knowledge", "Patient Care", "Communication", "Decision Making"],
    averageSalary: "₹8-20 LPA",
    growthProspects: "Excellent",
    companies: ["AIIMS", "Apollo Hospitals", "Fortis", "Max Healthcare"],
    icon: "👨‍⚕️"
  },
  {
    id: 3,
    title: "Teacher/Professor",
    category: "Education",
    description: "Educate students and help them develop knowledge and skills",
    requiredEducation: ["B.Ed", "M.Ed", "M.A./M.Sc. + NET", "Ph.D"],
    skills: ["Subject Knowledge", "Communication", "Patience", "Leadership"],
    averageSalary: "₹3-8 LPA",
    growthProspects: "Good",
    companies: ["Government Schools", "Private Schools", "Universities", "Coaching Centers"],
    icon: "👩‍🏫"
  },
  {
    id: 4,
    title: "Chartered Accountant",
    category: "Finance",
    description: "Manage financial accounts, provide tax advice, and audit financial statements",
    requiredEducation: ["B.Com + CA", "CA Foundation + Intermediate + Final"],
    skills: ["Accounting", "Taxation", "Auditing", "Financial Analysis"],
    averageSalary: "₹7-15 LPA",
    growthProspects: "Excellent",
    companies: ["Big 4 (Deloitte, PwC, EY, KPMG)", "Banks", "MNCs"],
    icon: "📊"
  },
  {
    id: 5,
    title: "Civil Engineer",
    category: "Engineering",
    description: "Design, build, and maintain infrastructure projects",
    requiredEducation: ["B.Tech Civil Engineering", "M.Tech Civil"],
    skills: ["Structural Design", "Project Management", "AutoCAD", "Site Management"],
    averageSalary: "₹4-10 LPA",
    growthProspects: "Good",
    companies: ["L&T", "DLF", "Shapoorji Pallonji", "Government PWD"],
    icon: "🏗️"
  },
  {
    id: 6,
    title: "Data Scientist",
    category: "Technology",
    description: "Analyze complex data to help organizations make better decisions",
    requiredEducation: ["B.Tech/B.Sc + Data Science Certification", "M.Sc Statistics", "M.Tech"],
    skills: ["Python/R", "Machine Learning", "Statistics", "Data Visualization"],
    averageSalary: "₹8-20 LPA",
    growthProspects: "Excellent",
    companies: ["Amazon", "Flipkart", "Analytics Companies", "Banks"],
    icon: "📈"
  },
  {
    id: 7,
    title: "Lawyer",
    category: "Law",
    description: "Represent clients in legal matters and provide legal advice",
    requiredEducation: ["LLB", "BA LLB", "LLM"],
    skills: ["Legal Knowledge", "Communication", "Research", "Critical Thinking"],
    averageSalary: "₹4-15 LPA",
    growthProspects: "Good",
    companies: ["Law Firms", "Corporate Legal Departments", "Courts", "Independent Practice"],
    icon: "⚖️"
  },
  {
    id: 8,
    title: "Marketing Manager",
    category: "Business",
    description: "Develop marketing strategies and manage promotional activities",
    requiredEducation: ["BBA", "MBA Marketing", "B.Com + MBA"],
    skills: ["Marketing Strategy", "Digital Marketing", "Communication", "Analytics"],
    averageSalary: "₹6-15 LPA",
    growthProspects: "Very Good",
    companies: ["HUL", "P&G", "Amazon", "Flipkart", "Ad Agencies"],
    icon: "📱"
  },
  {
    id: 9,
    title: "Government Officer (IAS/IPS)",
    category: "Government",
    description: "Serve in administrative and police services",
    requiredEducation: ["Any Bachelor's Degree + UPSC"],
    skills: ["Leadership", "Decision Making", "Public Administration", "Communication"],
    averageSalary: "₹6-12 LPA + Perks",
    growthProspects: "Excellent",
    companies: ["Government of India", "State Governments"],
    icon: "🏛️"
  },
  {
    id: 10,
    title: "Entrepreneur",
    category: "Business",
    description: "Start and run your own business ventures",
    requiredEducation: ["Any Degree (BBA/B.Tech preferred)", "MBA (optional)"],
    skills: ["Business Planning", "Leadership", "Risk Taking", "Innovation"],
    averageSalary: "Variable",
    growthProspects: "Unlimited Potential",
    companies: ["Self-Employed", "Startups", "Family Business"],
    icon: "🚀"
  }
];

export const categories = [...new Set(careerPaths.map(career => career.category))].sort();
