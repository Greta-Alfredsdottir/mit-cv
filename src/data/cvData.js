export const cvData = {
  personalInfo: {
    name: "Ásthildur Greta Alfredsdóttir",
    title: "Web Developer & IT Specialist",
    subtitle: "Web Developer | IT Support | Finance Apprentice",
    bio: "I can draw upon my many years of experience in customer service and IT support, combined with my knowledge of the healthcare sector. I love figuring out how things connect and don't stop until the problem is solved. I am highly dedicated to my work and always curious to learn about and connect with other people.",
    avatar: "/me.jpg",
    email: "eldvakinn@hotmail.com",
    phone: "+45 31 96 70 91",
    location: "Aalborg, Denmark",
    address: "Tambosundvej 47, 9220 Aalborg Ø",
    website: "https://linkedin.com/in/asthilduralfredsdottir",
    github: "https://github.com/asthildurgreta",
    linkedin: "https://linkedin.com/in/asthilduralfredsdottir",
    twitter: "#",
    resumeUrl: "#",
    extras: [
      "Approved for adult apprentice subsidy (45 DKK per hour)",
      "Available for a 3-week unpaid work placement (VFO)",
      "Driver's license (Category B) and own car"
    ]
  },
  education: [
    {
      institution: "TechCollege",
      degree: "Web Developer",
      period: "2025 - Present",
      location: "Aalborg, Denmark",
      description: "Education and practical training in modern web development frameworks (frontend and backend)."
    },
    {
      institution: "Aalborg Business College (Handelsskole)",
      degree: "Office Administration with Specialty (EUS-5)",
      period: "2023 - 2024",
      location: "Aalborg, Denmark",
      description: "Office administration course specializing in finance, account reconciliation, bookkeeping, and budget management."
    },
    {
      institution: "Techcollege Aalborg",
      degree: "IT Infrastructure Specialist (Datatekniker)",
      period: "2021 - 2023",
      location: "Aalborg, Denmark",
      description: "Vocational education focused on network infrastructure, router/switch configurations, servers, and IT security."
    },
    {
      institution: "Techcollege Aalborg",
      degree: "IT Support Specialist (IT-supporter)",
      period: "2019 - 2021",
      location: "Nørresundby, Denmark",
      gpa: "4 / D (Average Performance)",
      description: "Qualification in user management, client operating systems, hardware diagnostics, and onsite support."
    },
    {
      institution: "EUC Thisted",
      degree: "Data & Communications (Basic Course GF2)",
      period: "2018 - 2019",
      location: "Thisted, Denmark",
      description: "Introduction to IT support and network engineering basics."
    },
    {
      institution: "VUC Thy-Mors",
      degree: "Higher Preparatory Examination (HF)",
      period: "2012 - 2018",
      location: "Thisted, Denmark",
      gpa: "4.0",
      description: "Upper secondary matriculation certificate with a broad academic curriculum."
    },
    {
      institution: "Fjölbrautaskólinn í Ármúla",
      degree: "Medical Secretary (Sundhedsservicesekretær)",
      period: "2004 - 2006",
      location: "Reykjavík, Iceland",
      description: "Specialized healthcare administration program covering medical database records, patient reception, medical Latin, and pharmacology."
    }
  ],
  experience: [
    {
      company: "Tækniskólinn",
      role: "practic as an AI researcher",
      period: "maj-juni 2026",
      location: "Hafnarfjörður, Iceland",
      description: "Making an app using only AI",
      bullets: ["Using Ai to make an app for teachers"

      ],},

    {
      company: "CSO Aalborg Business College",
      role: "Finance Apprentice",
      period: "2023 - 2024",
      location: "Aalborg, Denmark",
      description: "Practical training and administrative duties in bookkeeping, financial accounting, and budgeting.",
      bullets: [
        "Managed daily bookkeeping, account reconciliations, and invoice handling.",
        "Utilized Microsoft Dynamics 365 Business Central for financial data recording.",
        "Prepared budgets and monthly financial performance reports."
      ],
      skills: ["Business Central", "Bookkeeping", "Excel", "Budgeting", "Financial Economics"]
    },
    {
      company: "PC-hjælpen, Techcollege",
      role: "IT Supporter & Customer Service",
      period: "2019 - 2023",
      location: "Aalborg, Denmark",
      description: "Onsite support and technical assistance for students, teachers, and local citizens.",
      bullets: [
        "Provided onsite IT help to users experiencing hardware and networking issues.",
        "Delivered Level 1 & 2 technical troubleshooting and desktop support.",
        "Assisted users remotely using TeamViewer, Microsoft Teams, and Zoom."
      ],
      skills: ["IT Support", "TeamViewer", "Windows Support", "Customer Service", "Microsoft Teams"]
    },
    {
      company: "Hesselholt Fish Import",
      role: "Production Team Member",
      period: "2007 - 2012",
      location: "North Jutland, Denmark",
      description: "Fish fileting, packing, and sorting in a high-speed production line.",
      bullets: [
        "Operated and maintained fish fileting machinery safely.",
        "Ensured compliance with food safety and strict hygiene protocols.",
        "Collaborated efficiently within a multicultural production team."
      ],
      skills: ["Machine Operation", "Quality Control", "Teamwork"]
    },
    {
      company: "Emergency Room (Skadestue)",
      role: "Medical Secretary / Patient Receptionist",
      period: "2005 - 2007",
      location: "Reykjavík, Iceland",
      description: "Patient intake, documentation, and database management in the emergency room in Iceland.",
      bullets: [
        "Managed patient registration and input into electronic health record databases under time constraints.",
        "Coordinated communication between triage nurses, doctors, and incoming patients.",
        "Maintained strict patient confidentiality in accordance with healthcare regulations."
      ],
      skills: ["Patient Registration", "Healthcare Administration", "Communication", "Interdisciplinary Collaboration"]
    },
    {
      company: "Nursing Home (Plejehjem)",
      role: "Caregiver & Shift Scheduler",
      period: "1999 - 2004",
      location: "Reykjavík, Iceland",
      description: "Elderly care assistance and coordination of staff rosters and scheduling in Iceland.",
      bullets: [
        "Provided daily care, assistance, and emotional support to residents.",
        "Created and adjusted weekly shift rosters, handling short-notice sick leaves.",
        "Liaised closely with residents' families and medical practitioners."
      ],
      skills: ["Caregiving", "Shift Scheduling", "Resource Coordination", "Empathy"]
    }
  ],
  projects: [
    {
      id: "web-portfolio",
      title: "Personal Web Portfolio",
      subtitle: "Frontend development in React & SCSS",
      description: "A fully responsive online CV featuring accent color themes, dark mode, and a print-ready layout.",
      longDescription: "Built to demonstrate modern frontend engineering skills. The portfolio utilizes modular React components and SCSS Custom Properties to allow real-time theme customization and a clean, recruitment-friendly printable stylesheet.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400",
      tags: ["React", "SCSS", "Vite", "Responsive Design"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: "powershell-onboarding",
      title: "Automated User Onboarding",
      subtitle: "PowerShell & Active Directory",
      description: "A PowerShell script utility to automate user provisioning and folder permissions in Active Directory.",
      longDescription: "Automates the onboarding workflow by parsing employee registration lists from CSV files, creating Active Directory objects, assigning target security groups, and generating Microsoft 365 mailboxes automatically.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600&h=400",
      tags: ["PowerShell", "Active Directory", "Automation"],
      github: "#",
      live: "#",
      featured: true
    }
  ],
  skills: {
    categories: [
      {
        name: "Web Development (Frontend/Backend)",
        skills: [
          { name: "HTML5 & CSS3 (SCSS)", level: 95 },
          { name: "JavaScript (ES6+)", level: 85 },
          { name: "Frontend Development", level: 88 },
          { name: "SQL Databases", level: 80 },
          { name: "Node.js & Postman", level: 75 }
        ]
      },
      {
        name: "IT Support & Infrastructure",
        skills: [
          { name: "Remote Support (TeamViewer, Teams, Zoom)", level: 95 },
          { name: "Windows Client & Server (AD)", level: 90 },
          { name: "Hardware & PC Troubleshooting", level: 92 },
          { name: "Network Infrastructure Design", level: 82 }
        ]
      },
      {
        name: "Finance & Office Administration",
        skills: [
          { name: "Microsoft Dynamics 365 Business Central", level: 88 },
          { name: "Bookkeeping & General Ledger", level: 85 },
          { name: "Excel, Word & PowerPoint", level: 95 },
          { name: "Budgeting & Financial Economics", level: 85 }
        ]
      },
      {
        name: "Languages & Communication",
        skills: [
          { name: "Icelandic (Native)", level: 100 },
          { name: "Danish (Fluent speech & writing)", level: 92 },
          { name: "English (Fluent speech & writing)", level: 90 },
          { name: "User Support & Instruction", level: 95 }
        ]
      }
    ]
  },
  publications: [],
  certifications: [
    {
      name: "IT Support Specialist (Svendebrev)",
      issuer: "Techcollege Aalborg",
      date: "2021"
    },
    {
      name: "Medical Secretary Diploma (Sundhedsservicesekretær)",
      issuer: "Fjölbrautaskólinn í Ármúla",
      date: "2006"
    }
  ],
  interests: [
    "Web Development & Coding",
    "IT Gadgets & Troubleshooting",
    "Finance & Account Reconciliations",
    "Icelandic Literature",
    "Traveling & Roadtrips"
  ]
};
