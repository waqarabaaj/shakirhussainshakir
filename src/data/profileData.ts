export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  institutionSub?: string;
  period: string;
  duration?: string;
  location: string;
  isCurrent?: boolean;
  highlightSummary?: string;
  responsibilities: string[];
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
  badge: string;
}

export interface AwardItem {
  title: string;
  organization?: string;
  year?: string;
  description: string;
  type: 'award' | 'scholarship' | 'leadership';
}

export interface CertificationItem {
  title: string;
  year?: string;
  category: string;
}

export const PROFILE_DATA = {
  name: "Shakir Hussain Shakir",
  headline: "Education Leader | Student Development | Global Engagement",
  subHeadline: "Head Department of Student Affairs | Counselling | Career Development & Global Engagement",
  currentInstitution: "PAK-TURK Maarif International Schools and Colleges",
  heroStatement: "Empowering students, building institutional partnerships, and creating pathways to education, scholarships, careers and global opportunities.",
  location: "Islamabad, Pakistan",
  contact: {
    phone: "+92 309 4445664",
    phoneDisplay: "+92 309 4445664 (Work)",
    linkedIn: "https://www.linkedin.com/in/shakirhussainshakir",
    linkedInDisplay: "linkedin.com/in/shakirhussainshakir",
    portfolio: "https://myresume.cloud/shakir-hussain-shakir",
    portfolioDisplay: "myresume.cloud/shakir-hussain-shakir",
    location: "Islamabad, Pakistan"
  },
  metrics: [
    {
      value: 13000,
      suffix: "+",
      label: "Students Impacted",
      detail: "Social, emotional, psychological, academic, career, personal and professional development across Pakistan"
    },
    {
      value: 27,
      suffix: "",
      label: "Campuses Supported",
      detail: "Multinational educational enterprise network under Turkish Government in Pakistan"
    },
    {
      value: 10,
      suffix: "",
      label: "Major Cities",
      detail: "Nationwide institutional footprint fostering nationwide educational equity"
    },
    {
      value: 20,
      suffix: "+",
      label: "Counselling Officers Led",
      detail: "Direct leadership of dedicated professional student counselling officers"
    }
  ],
  workingDomains: [
    {
      id: "student-affairs",
      title: "Student Affairs Management",
      description: "Direct management of holistic student affairs, student rights, extracurricular structures, welfare and campus life.",
      category: "Student Affairs"
    },
    {
      id: "career-dev",
      title: "Students Career Development Activities",
      description: "Architecting career readiness seminars, mock interviews, industry fairs, resume workshops and career guidance roadmaps.",
      category: "Career & Counselling"
    },
    {
      id: "internships",
      title: "Student Internships",
      description: "Establishing corporate, NGO and institutional internship pipelines to guarantee experiential professional learning.",
      category: "Career & Counselling"
    },
    {
      id: "skills-dev",
      title: "Skills Development Programs",
      description: "Designing demand-driven technical, cognitive, and interpersonal 21st-century skill bootcamps for modern learners.",
      category: "Academic & Training"
    },
    {
      id: "summer-schools",
      title: "Summer School Programs",
      description: "Planning and operating immersive academic and enrichment summer schools that accelerate personal development.",
      category: "Academic & Training"
    },
    {
      id: "counselling",
      title: "Guidance & Counselling Services",
      description: "Leading psycho-social, emotional, academic and career counselling services ensuring student mental wellness and clarity.",
      category: "Career & Counselling"
    },
    {
      id: "global-partnerships",
      title: "Global Engagement & Partnerships",
      description: "Fostering strategic international bilateral linkages, student exchanges, and joint institutional initiatives worldwide.",
      category: "Global Engagement"
    },
    {
      id: "admissions-scholarships",
      title: "National & International Admissions & Scholarships",
      description: "Connecting students to fully funded scholarships, grants, and prestigious undergraduate admissions across the globe.",
      category: "Global Engagement"
    },
    {
      id: "alumni",
      title: "Alumni Engagement",
      description: "Cultivating vibrant alumni networks, mentorship cohorts, annual reunions, and graduate advisory platforms.",
      category: "Student Affairs"
    },
    {
      id: "policy-dev",
      title: "Policy Development & Implementation",
      description: "Authoring comprehensive institutional policies governing student conduct, safeguarding, admissions, and student rights.",
      category: "Governance & Strategy"
    },
    {
      id: "training-dev",
      title: "Training & Development",
      description: "Conducting capacity-building, Training of Trainers (ToT), and continuous professional development for education officers.",
      category: "Academic & Training"
    },
    {
      id: "international-partners",
      title: "Collaboration with International Partners",
      description: "Serving as institutional liaison with diplomatic missions, global educational foundations, and overseas universities.",
      category: "Global Engagement"
    },
    {
      id: "international-exams",
      title: "International Exams Administration (SAT, TR-YÖS)",
      description: "Official coordination, test-center logistics, and student preparatory coaching for SAT and Turkish YÖS exams.",
      category: "Academic & Training"
    },
    {
      id: "complaints-cell",
      title: "Complaints Management Cell",
      description: "Overseeing fair, confidential, and empathetic dispute resolution mechanisms upholding student justice and transparency.",
      category: "Governance & Strategy"
    },
    {
      id: "briefings-hiring",
      title: "Briefings, Reports & Departmental Hiring",
      description: "Direct executive reporting, board briefings, data analytics, and talent acquisition for student affairs professionals.",
      category: "Governance & Strategy"
    }
  ],
  thematicPillars: [
    {
      title: "Student Development",
      tagline: "Human-Centered Growth",
      description: "Working tirelessly for the social, emotional, psychological, academic, career, personal and professional development and well-being of thousands of youth.",
      icon: "Users"
    },
    {
      title: "Global Opportunities",
      tagline: "Connecting Students to the World",
      description: "Forging bilateral partnerships, international exchange avenues, fully funded scholarships, and admissions to top-ranking universities worldwide.",
      icon: "Globe"
    },
    {
      title: "Educational Leadership",
      tagline: "Empowering Teams & Systems",
      description: "Building cross-functional teams, cultivating open-door policies, embracing constructive feedback, and grooming emerging educators into leaders.",
      icon: "ShieldCheck"
    },
    {
      title: "Social Impact & Service",
      tagline: "Equitable Access to Education",
      description: "A longstanding voluntary commitment to serving marginalized and underprivileged communities with mentorship, guidance, and opportunity creation.",
      icon: "HeartHandshake"
    }
  ],
  experiences: [
    {
      id: "maarif",
      role: "Head Department of Student Affairs | Counselling | Career Development & Global Engagement",
      institution: "PAK-TURK Maarif International Schools and Colleges",
      institutionSub: "Multinational Educational Enterprise of the Turkish Government in Pakistan",
      period: "March 2020 – Present",
      duration: "Present",
      location: "Islamabad, Pakistan",
      isCurrent: true,
      highlightSummary: "Mandated to work for the social, emotional, psychological, career, academic, personal and professional development of over 13,000 students across 27 campuses in 10 major cities, leading a team of 20+ Student Counselling Officers.",
      responsibilities: [
        "Direct the comprehensive Student Affairs Department across 27 campuses nationwide in 10 major cities.",
        "Lead a high-performing team of 20+ dedicated professional Student Counselling Officers.",
        "Provide holistic support covering social, emotional, psychological, academic, career, and personal well-being for 13,000+ students.",
        "Establish global engagement partnerships and bilateral pathways to international admissions and scholarships.",
        "Oversee international examination centers and administration, including SAT and TR-YÖS.",
        "Formulate and implement institutional policies governing student services, code of conduct, and safeguarding.",
        "Direct student career development, mock interviews, corporate internship programs, and skills development bootcamps.",
        "Organize national summer school programs, leadership retreats, and student enrichment opportunities.",
        "Spearhead alumni engagement frameworks and parent-institution consultation mechanisms.",
        "Lead departmental recruitment, staff appraisals, executive reporting, and student complaints management."
      ],
      tags: ["Student Affairs", "Leadership", "Global Engagement", "Policy Development", "Counselling"]
    },
    {
      id: "lums",
      role: "Senior Program Officer – Global Partnerships & Student Exchange",
      institution: "Lahore University of Management Sciences (LUMS)",
      institutionSub: "Office of International Affairs",
      period: "April 2018 – March 2020",
      duration: "2 Years",
      location: "Lahore, Pakistan",
      isCurrent: false,
      highlightSummary: "Spearheaded internationalization strategy, bilateral university partnerships, and student exchange mobility at Pakistan's premier research university.",
      responsibilities: [
        "Explored, assessed, initiated and established linkages and partnerships with top-ranking global universities, negotiating financial agreements and cost-free opportunities for students, staff, and faculty.",
        "Created and fostered international activities supporting teaching, learning, research, and global engagement across the university.",
        "Expanded and strengthened the global outreach of LUMS by preparing and guiding its internationalization strategy, serving as focal person for global coordination.",
        "Mentored and counseled students regarding academic, financial, and personal matters involved in the exchange and study abroad process.",
        "Developed, adopted, enforced, oversaw, and implemented policies and procedures on a range of student affairs and international mobility issues.",
        "Facilitated, organized and managed exchange program interviews, student recruitment cycles, and open house informational sessions.",
        "Explored, supported and disseminated scholarship opportunities and initiatives to open doors for students in today's globalized world.",
        "Designed and conducted comprehensive welcoming and departure orientations for incoming international and outgoing local students.",
        "Engaged exchange alumni and utilized their exposure to strengthen and continuously improve bilateral exchange programs.",
        "Developed institutional brochures, digital media content, website assets, and feedback surveys to record exchange experiences."
      ],
      tags: ["International Affairs", "University Partnerships", "Student Exchange", "Scholarships", "Global Mobility"]
    },
    {
      id: "hashoo-training",
      role: "Training Officer – Skills Development",
      institution: "Hashoo Foundation",
      institutionSub: "Skills Development & Youth Empowerment Division",
      period: "January 2017 – March 2018",
      duration: "1 Year 3 Months",
      location: "Lahore, Pakistan",
      isCurrent: false,
      highlightSummary: "Led donor-funded youth and women empowerment programs, vocational training curricula, and employer job placement linkages.",
      responsibilities: [
        "Planned and implemented self-designed and donor-funded skills development training programs for youth and women empowerment.",
        "Developed comprehensive training materials including manuals, schedules, pedagogical frameworks, and work plans.",
        "Monitored skills development training sessions and coordinated with expert resource persons and facilitators.",
        "Communicated and coordinated with international donors regarding new empowerment initiatives and project milestones.",
        "Led marketing, community mobilization campaigns, trainee admissions, counselling, job placement fairs, and graduation ceremonies.",
        "Managed and conducted personal and professional grooming, soft skills sessions, and one-on-one mock interviews for trainees.",
        "Strengthened linkages with industrial employers and built corporate partnerships for job placement and sustainable employability.",
        "Developed financial budgets, monitoring frameworks, and authored donor completion reports, press releases, and progress updates."
      ],
      tags: ["Skills Development", "Youth Empowerment", "Donor Reporting", "Capacity Building", "Job Placement"]
    },
    {
      id: "hashoo-admissions",
      role: "Admission and Counseling Officer",
      institution: "Hashoo Foundation",
      institutionSub: "Student Admissions & Advisory Division",
      period: "February 2015 – May 2017",
      duration: "2 Years 4 Months",
      location: "Lahore, Pakistan",
      isCurrent: false,
      highlightSummary: "Administered student admissions, career advising, application evaluations, and educational workshops.",
      responsibilities: [
        "Explained admission procedures, curricula, and institutional programs to prospective students and parents via consultations.",
        "Participated in the admission decision-making process based on standard foundation policies and criteria.",
        "Conducted in-depth interviews with candidates to understand their career objectives, academic history, and financial background.",
        "Arranged student orientation programs, educational workshops, open houses, school fairs, and graduation ceremonies.",
        "Developed innovative recruitment strategies, enrollment plans, and admission presentations in coordination with senior leadership.",
        "Maintained structured databases of student information and generated analytical progress reports for management."
      ],
      tags: ["Admissions", "Student Counselling", "Educational Workshops", "Recruitment", "Student Advisory"]
    },
    {
      id: "foreign-education",
      role: "Educational Counseling Officer",
      institution: "Foreign Education Services Pakistan",
      institutionSub: "International Education & Advisory",
      period: "June 2014 – February 2015",
      duration: "9 Months",
      location: "Cantt Lahore, Pakistan",
      isCurrent: false,
      highlightSummary: "Guided and counselled students to pursue undergraduate and graduate dreams at world-class universities in the USA and Canada.",
      responsibilities: [
        "Guided, counselled, and motivated students to pursue higher education at world-class universities in developed nations.",
        "Specialized in the recruitment, visa advisory, and admission documentation process for top universities in the USA and Canada.",
        "Drafted official institutional agreements, university liaison reports, and student profile evaluations."
      ],
      tags: ["Study Abroad", "USA & Canada Admissions", "Academic Guidance", "Global Education"]
    }
  ],
  pathwayStages: [
    {
      step: 1,
      stage: "Student",
      title: "Discovering Potential",
      description: "Identifying individual aspirations, strengths, emotional needs, and personal goals through empathetic listening.",
      icon: "Compass"
    },
    {
      step: 2,
      stage: "Education",
      title: "Academic Pathway",
      description: "Aligning curricula, institutional selection, and intellectual rigor with long-term academic excellence.",
      icon: "BookOpen"
    },
    {
      step: 3,
      stage: "Scholarship",
      title: "Securing Funding",
      description: "Democratizing education by navigating merit and need-based financial aid, national, and international grants.",
      icon: "Award"
    },
    {
      step: 4,
      stage: "Exchange",
      title: "Global Exposure",
      description: "Broadening cultural horizons through international semesters, conferences, and bilateral student mobility.",
      icon: "Globe"
    },
    {
      step: 5,
      stage: "Internship",
      title: "Experiential Practice",
      description: "Bridging the academic-workplace divide with high-impact internships, industry mentors, and hands-on projects.",
      icon: "Briefcase"
    },
    {
      step: 6,
      stage: "Career",
      title: "Professional Impact",
      description: "Transitioning into meaningful employment with strong professional grooming, ethical standards, and purpose.",
      icon: "TrendingUp"
    },
    {
      step: 7,
      stage: "Leadership",
      title: "Shaping Future Leaders",
      description: "Returning to mentor others, foster community uplift, lead institutions, and inspire the next generation.",
      icon: "GraduationCap"
    }
  ],
  leadershipPillars: [
    {
      title: "Team Empowerment",
      description: "Equipping team members with autonomy, trust, and resources to innovate and take ownership of student outcomes.",
      icon: "Users"
    },
    {
      title: "Open-Door Dialogue",
      description: "Cultivating psychological safety, welcoming constructive feedback, and maintaining approachable leadership at all tiers.",
      icon: "MessageSquare"
    },
    {
      title: "Strategic Vision",
      description: "Balancing immediate student needs with institutional sustainability, long-term policy vision, and global standards.",
      icon: "Compass"
    },
    {
      title: "Mentorship & Grooming",
      description: "Investing deeply in training future educational leaders, counseling officers, and student mentors.",
      icon: "Award"
    },
    {
      title: "Cross-Functional Collaboration",
      description: "Uniting academic faculties, administration, parents, donors, and international partners around shared student goals.",
      icon: "Share2"
    },
    {
      title: "Culture of Belonging",
      description: "Nurturing an inclusive organizational climate where diversity is celebrated, equity is upheld, and merit prevails.",
      icon: "Heart"
    }
  ],
  areasOfExpertise: [
    { name: "Student Affairs", category: "Student Success", description: "Comprehensive oversight of campus life, welfare, conduct, and student experiences." },
    { name: "Career Development", category: "Student Success", description: "Career counseling, industry readiness bootcamps, and career mapping." },
    { name: "Student Counselling", category: "Student Success", description: "Holistic socio-emotional, psychological, and personal advisory." },
    { name: "Academic Advising", category: "Student Success", description: "Curricular guidance, academic roadmaps, and student performance tracking." },
    { name: "Global Engagement", category: "Global Partnerships", description: "Bilateral international linkages, global outreach, and internationalization." },
    { name: "International Partnerships", category: "Global Partnerships", description: "Negotiating agreements with premier overseas universities and institutions." },
    { name: "Admissions", category: "Student Success", description: "Strategic recruitment, evaluation, and enrollment across national and global levels." },
    { name: "Scholarships", category: "Global Partnerships", description: "Connecting students with merit, cultural exchange, and need-based financial aid." },
    { name: "Student Exchange", category: "Global Partnerships", description: "Bilateral student mobility programs, study abroad orientation, and supervision." },
    { name: "Alumni Engagement", category: "Institutional", description: "Building active alumni networks, mentorship cohorts, and institutional pride." },
    { name: "Youth Development", category: "Social Impact", description: "Empowerment programs, personal grooming, and capacity building for youth." },
    { name: "Training & Development", category: "Institutional", description: "Design and delivery of Training of Trainers (ToT) and staff development." },
    { name: "Policy Development", category: "Governance", description: "Drafting institutional bylaws, safeguarding guidelines, and operational frameworks." },
    { name: "Program Management", category: "Governance", description: "End-to-end execution of complex educational projects from concept to fruition." },
    { name: "Community Mobilization", category: "Social Impact", description: "Engaging grassroots stakeholders, underprivileged families, and community partners." },
    { name: "Strategic Planning", category: "Governance", description: "Long-term institutional roadmap design, resource allocation, and KPI tracking." },
    { name: "Team Leadership", category: "Governance", description: "Building, inspiring, and supervising cross-functional teams of education specialists." },
    { name: "Donor Reporting", category: "Institutional", description: "Authoring data-driven donor updates, analytical reports, and project impact reviews." },
    { name: "Institutional Collaboration", category: "Global Partnerships", description: "Fostering synergy between universities, schools, governments, and civil society." }
  ],
  awards: [
    {
      title: "Best Employee and Performance of the Year 2017 Award",
      organization: "Hashoo Foundation",
      year: "2017",
      description: "Conferred in recognition of outstanding performance, leadership in skills development, and institutional contribution.",
      type: "award"
    },
    {
      title: "Fully Funded Cultural Exchange Scholarship",
      organization: "Troy University / Global UGRAD",
      year: "2013",
      description: "Prestigious fully funded leadership and cultural exchange scholarship program representing Pakistan in the United States.",
      type: "scholarship"
    },
    {
      title: "Hashoo Foundation Merit Scholarship",
      organization: "Hashoo Foundation",
      year: "Merit-Based",
      description: "Awarded on the basis of academic excellence, personal leadership, and commitment to social uplift.",
      type: "scholarship"
    },
    {
      title: "Emerging Alumni Leader",
      organization: "Alumni Association",
      year: "Leadership",
      description: "Recognized for exemplary service in community empowerment, mentorship of youth, and alumni network leadership.",
      type: "leadership"
    }
  ],
  certifications: [
    {
      title: "Training of Trainers for Career Advisors",
      year: "2019",
      category: "Career Advisory & Training"
    },
    {
      title: "Alumni Academy",
      year: "Professional Development",
      category: "Leadership & Community"
    },
    {
      title: "Creative Problem Solving Skills",
      year: "Core Competency",
      category: "Cognitive & Leadership"
    },
    {
      title: "Guidance and Mentoring",
      year: "Professional Training",
      category: "Counselling & Student Support"
    },
    {
      title: "Program Management for Social Entrepreneurship",
      year: "Specialization",
      category: "Project & Impact Management"
    }
  ],
  education: [
    {
      institution: "Troy University",
      degree: "Cultural Exchange Program, Leadership",
      period: "2013",
      details: "Comprehensive academic and leadership exchange program in the United States, fostering cross-cultural diplomacy and organizational leadership.",
      badge: "United States Exchange"
    },
    {
      institution: "Government College University (GCU), Lahore",
      degree: "Bachelor's Degree (Honors)",
      period: "2010 – 2014",
      details: "Premier historic academic institution in Pakistan known for academic distinction, intellectual rigor, and leadership excellence.",
      badge: "Bachelor's Degree (Honors)"
    },
    {
      institution: "Aga Khan Higher Secondary School, Gilgit",
      degree: "High School Diploma, Engineering",
      period: "April 2004 – May 2009",
      details: "Prestigious institution recognized for cultivating academic excellence, ethical character, and service to humanity in northern Pakistan.",
      badge: "High School Diploma"
    }
  ],
  values: [
    { title: "Diversity", description: "Valuing varied cultural, socio-economic, and regional backgrounds as vital sources of institutional strength." },
    { title: "Inclusion", description: "Ensuring every student, educator, and team member feels a deep sense of belonging and voice." },
    { title: "Equity", description: "Providing tailored support so that underprivileged and marginalized learners have an equal opportunity to thrive." },
    { title: "Meritocracy", description: "Upholding transparency, fairness, and excellence as the foundational standards in every selection." },
    { title: "Fairness", description: "Applying uncompromised ethical standards and empathetic justice across all student and team interactions." },
    { title: "Empowerment", description: "Inspiring individuals with the autonomy, confidence, and resources to realize their full human potential." },
    { title: "Open Dialogue", description: "Fostering psychological safety, welcoming constructive debate, and nurturing intellectual curiosity." },
    { title: "Mentorship", description: "Generously sharing knowledge, guidance, and wisdom to illuminate pathways for emerging generations." },
    { title: "Accountability", description: "Upholding complete ownership, data transparency, and responsibility for student outcomes." },
    { title: "Community Service", description: "Voluntarily dedicating personal time, skills, and energy to uplifting marginalized communities." }
  ],
  topSkills: [
    "Expert in Advising and Counseling",
    "Donor Reporting",
    "Well-Equipped with Administrative Skills"
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Urdu", level: "Native / Bilingual" }
  ]
};
