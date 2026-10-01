export interface PersonalInfo {
  name: string;
  degree: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  birthDate: string;
  email: string;
  phone: string;
  linkedin: string; // TODO: Add specific profile username slug (CV lists generic "Linkedin.com")
  github: string | null; // TODO: Add GitHub username/profile if available (not present in CV)
  cvPdfPath: string;
  avatarUrl: string | null; // TODO: Add personal portrait photo (not present in CV)
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  logoUrl?: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  period: string;
  score: string;
  logoUrl?: string;
  certifications: string[];
  languageScore: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  tags: string[];
  featured: boolean;
  demoUrl: string | null; // TODO: Add live demo / video documentation link
  repoUrl: string | null; // TODO: Add repository link
}

export interface ActivityItem {
  id: string;
  title: string;
  organizer: string;
  year: string;
  role: string;
  description: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: "Professional" | "Workshop" | "Seminar" | "Language";
  logoUrl?: string | null;
  credentialId: string | null; // TODO: Add official credential ID
  credentialUrl: string | null; // TODO: Add credential verification URL
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; icon: string }[];
}

export const personalInfo: PersonalInfo = {
  name: "Tiar Rizky Budiyono",
  degree: "A.Md.T.",
  role: "Industrial Electronics & Automation Engineer",
  headline: "Engineering Reliable Automation, IoT Support, and Control Systems",
  summary:
    "Diploma graduate in Industrial Electronics Engineering from Politeknik Negeri Jakarta with hands-on industrial experience in IoT support, electrical panel wiring, and sensor-microcontroller control systems (PLC, ESP32, Arduino). Experienced in data-driven troubleshooting to improve operational reliability and manufacturing efficiency.",
  location: "Bekasi, Indonesia",
  birthDate: "September 9, 2005",
  email: "tiarrizkybudiyono@gmail.com",
  phone: "+62 896-3696-9742",
  linkedin: "https://linkedin.com", // TODO: Add specific LinkedIn handle
  github: null, // TODO: Add GitHub profile URL
  cvPdfPath: "/docs/cv.pdf",
  avatarUrl: "/images/profile.png",
};

export const experiences: ExperienceItem[] = [
  {
    id: "akebono-workshop",
    role: "Workshop Electric (Internship)",
    company: "PT Akebono Brake Astra",
    location: "DKI Jakarta, Indonesia",
    period: "Sep 2025 - Dec 2025",
    type: "Internship",
    logoUrl: "/images/logos/akebono.jpg",
    bullets: [
      "Executed electrical wiring and panel assembly (Main Panel, Inverter Panel, Remote I/O, Push Button, Terminal Panel) for industrial machinery including RC Warehouse Casting, Tightening Bleeder, and Vacuum Exhaust systems.",
      "Performed electrical installation on automated conveyor lines, integrating 3-phase motors, photoelectric sensors, limit switches, and pneumatic cylinders.",
      "Conducted electrical troubleshooting on production floor machinery and industrial robots to maintain uninterrupted manufacturing operations.",
      "Interpreted technical wiring schematics and mechanical assembly blueprints as exact benchmarks for panel construction.",
      "Operated electrical workshop fabrication machinery including drills, grinders, saws, and vernier calipers for custom panel fitting.",
      "Completed rigorous Safety Dojo and Maintenance Dojo programs covering hazard mitigation, K3 protocols, and circuit wiring, earning official certification from PT Akebono.",
      "Assisted factory relocation logistics from Jakarta to Karawang through machinery staging and workshop materials dispatch.",
    ],
  },
  {
    id: "akebono-iot",
    role: "IoT Support (Internship)",
    company: "PT Akebono Brake Astra",
    location: "DKI Jakarta, Indonesia",
    period: "Dec 2021 - Apr 2022",
    type: "Internship",
    logoUrl: "/images/logos/akebono.jpg",
    bullets: [
      "Developed an RFID-based field operator attendance verification system in direct collaboration with senior technical mentors.",
      "Configured and assembled Human Machine Interface (HMI) terminal hardware deployed directly at operator workstations.",
      "Managed visual kanban card registration and real-time inventory tracking to support line operations, auditing input-output tallies.",
      "Performed hardware diagnostics and display monitor replacements across active production zones.",
      "Executed troubleshooting routines while maintaining strict compliance with workplace Occupational Health and Safety (K3) standards.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "pnj",
    institution: "Politeknik Negeri Jakarta",
    degree: "Associate Degree (D3)",
    major: "Industrial Electronics Engineering",
    period: "2023 - 2026",
    score: "GPA: 3.56 / 4.00",
    logoUrl: "/images/logos/pnj.png",
    certifications: [
      "Certified Instrumentation Technician - Badan Nasional Sertifikasi Profesi (BNSP) 2026",
    ],
    languageScore: "TOEFL Score: 830",
  },
  {
    id: "smkn5",
    institution: "SMKN 5 Kota Bekasi",
    degree: "Vocational High School Diploma",
    major: "Industrial Electronics",
    period: "2020 - 2023",
    score: "Final Grade: 83.13 / 100.00",
    logoUrl: "/images/logos/smkn5.jpg",
    certifications: [
      "Electronic Control System Operator - Lembaga Sertifikasi Profesi (LSP) 2022",
    ],
    languageScore: "TOEIC Score: 390",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "final-project-trainer-kit",
    title: "ESP32 Dual-Control DC Motor Trainer Kit with 3D Digital Twin",
    category: "Control Systems & IoT",
    year: "2026",
    summary:
      "Advanced educational trainer kit featuring dual-control DC motor architecture running PID-Fuzzy algorithms with interactive 3D digital twin telemetry.",
    description:
      "Designed and developed as a comprehensive final capstone project at Politeknik Negeri Jakarta. The trainer kit provides an advanced experimental platform for control engineering coursework. Built around the ESP32 microcontroller, it incorporates hybrid PID-Fuzzy logic algorithms for robust speed and position control, while streaming operational parameters to a synchronized 3D digital twin model for real-time visualization.",
    tags: ["ESP32", "PID-Fuzzy", "Digital Twin 3D", "Control Systems", "IoT"],
    featured: true,
    demoUrl: null, // TODO: Add demo video link if available
    repoUrl: null, // TODO: Add repository link if available
  },
  {
    id: "logic-gates-training-module",
    title: "Digital Logic Gates Practical Training Module",
    category: "Educational Hardware",
    year: "2024",
    summary:
      "Comprehensive hardware trainer board integrating discrete logic gates with visual LED state indicators for practical digital electronics education.",
    description:
      "Engineered an educational trainer module to support hands-on laboratory experiments in Digital Electronics. The hardware integrates standard logic gate ICs (AND, OR, NOT, NAND, NOR, XOR) with dedicated input switches and visual LED status indicators, providing students with immediate tactile and visual verification of Boolean logic states.",
    tags: ["Digital Logic", "PCB Design", "Circuit Analysis", "Educational Hardware"],
    featured: false,
    demoUrl: null, // TODO: Add demo link
    repoUrl: null, // TODO: Add repo link
  },
  {
    id: "microcontroller-temperature-monitor",
    title: "Classroom Ambient Temperature Monitor",
    category: "Embedded Systems",
    year: "2024",
    summary:
      "Microcontroller-driven room climate monitoring device using DHT11, I2C LCD interface, and status LEDs programmed in Arduino IDE.",
    description:
      "Designed an ambient monitoring instrument deployed for classroom temperature surveillance. Utilizes an Arduino microcontroller paired with a calibrated DHT11 digital sensor, displaying real-time Celsius readouts on an I2C 16x2 LCD screen alongside color-coded threshold indicator LEDs for visual alerts.",
    tags: ["Arduino", "DHT11 Sensor", "I2C LCD", "Embedded C++", "Instrumentation"],
    featured: false,
    demoUrl: null, // TODO: Add demo link
    repoUrl: null, // TODO: Add repo link
  },
  {
    id: "power-supply-9vdc",
    title: "9 VDC Linear Regulated Power Supply",
    category: "Power Electronics",
    year: "2024",
    summary:
      "Custom regulated bench power supply built from component-level transformer, bridge rectifier, and voltage regulator stages with electrical safety protections.",
    description:
      "Engineered a stable 9 VDC power supply unit from ground up for sensitive electronic devices. The engineering scope encompassed schematic calculation, transformer selection, bridge rectification, filtering capacitor sizing, and IC voltage regulation, built with strict adherence to workshop electrical safety standards.",
    tags: ["Power Electronics", "Transformers", "Voltage Regulators", "Electrical Safety"],
    featured: false,
    demoUrl: null, // TODO: Add demo link
    repoUrl: null, // TODO: Add repo link
  },
];

export const activities: ActivityItem[] = [
  {
    id: "etime-2025",
    title: "Panitia E-TIME 2025 (Creative Media Division)",
    organizer: "Himpunan Mahasiswa Elektro Politeknik Negeri Jakarta (HME PNJ)",
    year: "2025",
    role: "Creative Media Committee Member",
    description:
      "Contributed to the annual national-scale electrical engineering competition by designing brand visual identity, editing promotional video assets, and handling photography documentation, receiving official certificate of recognition.",
  },
  {
    id: "scada-seminar-2025",
    title: "SCADA Technology in Industrial Automation Seminar",
    organizer: "Program Studi Teknik Otomasi Listrik Industri (TOLI)",
    year: "2025",
    role: "Certified Participant",
    description:
      "Participated in specialized technical seminar covering modern Supervisory Control and Data Acquisition (SCADA) implementations, telemetry networks, and industrial automation architectures.",
  },
  {
    id: "sports-committee-2024",
    title: "Panitia Olahraga Elektro (Equipment Division)",
    organizer: "Department of Electrical Engineering PNJ",
    year: "2024",
    role: "Equipment Logistics Staff",
    description:
      "Coordinated sports tournament logistics, venue staging across multiple athletic facilities, and equipment inventory management for student athletic matches.",
  },
  {
    id: "community-service-2024",
    title: "Community Outreach & Orphanage Charity Service",
    organizer: "Social Community Outreach Program",
    year: "2024",
    role: "Volunteer Contributor",
    description:
      "Participated in charitable youth outreach by providing educational motivation, activity facilitation, and financial aid to support children in community orphan care.",
  },
];

export const certificates: CertificateItem[] = [
  {
    id: "cert-bnsp-2026",
    title: "Certified Instrumentation Technician (Teknisi Instrumentasi)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2026",
    category: "Professional",
    credentialId: null, // TODO: Add credential ID
    credentialUrl: null, // TODO: Add verification URL
  },
  {
    id: "cert-lsp-2022",
    title: "Electronic Control System Operator (Operator Sistem Pengendali Elektronika)",
    issuer: "Lembaga Sertifikasi Profesi (LSP)",
    year: "2022",
    category: "Professional",
    credentialId: null, // TODO: Add credential ID
    credentialUrl: null, // TODO: Add verification URL
  },
  {
    id: "cert-akebono-dojo",
    title: "Safety Dojo & Maintenance Dojo Industrial Certification",
    issuer: "PT Akebono Brake Astra",
    year: "2025",
    category: "Workshop",
    logoUrl: "/images/logos/akebono.jpg",
    credentialId: null, // TODO: Add credential ID
    credentialUrl: null, // TODO: Add verification URL
  },
  {
    id: "cert-scada-seminar",
    title: "Industrial Automation SCADA Technology Certification",
    issuer: "Teknik Otomasi Listrik Industri (TOLI)",
    year: "2025",
    category: "Seminar",
    credentialId: null, // TODO: Add credential ID
    credentialUrl: null, // TODO: Add verification URL
  },
  {
    id: "cert-etime-committee",
    title: "Official Organizing Committee - E-TIME National Competition",
    issuer: "HME Politeknik Negeri Jakarta",
    year: "2025",
    category: "Workshop",
    credentialId: null, // TODO: Add credential ID
    credentialUrl: null, // TODO: Add verification URL
  },
  {
    id: "cert-toefl",
    title: "English Proficiency Assessment - TOEFL (Score: 830)",
    issuer: "Institutional Testing Program",
    year: "2026",
    category: "Language",
    credentialId: null, // TODO: Add credential ID
    credentialUrl: null, // TODO: Add verification URL
  },
  {
    id: "cert-toeic",
    title: "English Communication Assessment - TOEIC (Score: 390)",
    issuer: "Educational Testing Service",
    year: "2023",
    category: "Language",
    credentialId: null, // TODO: Add credential ID
    credentialUrl: null, // TODO: Add verification URL
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Industrial Automation & Controls",
    description: "Factory floor automation, sensor networks, and relay control systems",
    skills: [
      { name: "Automation Systems", icon: "cog" },
      { name: "Instrumentation", icon: "zap" },
      { name: "Industrial Control", icon: "cpu" },
      { name: "Pneumatics & Hydraulics", icon: "wrench" },
      { name: "Wiring Diagram Schematics", icon: "document" },
      { name: "Sensor & Actuator Calibration", icon: "lightning" },
      { name: "RFID & HMI Configuration", icon: "terminal" },
      { name: "Industrial Kanban Logistics", icon: "box" },
    ],
  },
  {
    title: "Microcontrollers & Hardware",
    description: "Embedded controllers, physical computing, and prototype trainer boards",
    skills: [
      { name: "ESP32", icon: "cpu" },
      { name: "Arduino", icon: "cpu" },
      { name: "Raspberry Pi", icon: "cpu" },
      { name: "PLC (Programmable Logic Controller)", icon: "terminal" },
      { name: "Motor 3-Phase Installation", icon: "cog" },
      { name: "Photoelectric & Limit Sensors", icon: "eye" },
    ],
  },
  {
    title: "Software & Engineering Tools",
    description: "CAD simulation, embedded programming, and office suites",
    skills: [
      { name: "Visual Studio Code", icon: "terminal" },
      { name: "Arduino IDE", icon: "code" },
      { name: "NI Multisim", icon: "zap" },
      { name: "Proteus Design Suite", icon: "cpu" },
      { name: "Microsoft Office (Word, Excel, PowerPoint)", icon: "file" },
      { name: "Google Workspace", icon: "document" },
    ],
  },
  {
    title: "Workshop & Testing Equipment",
    description: "Precision electrical tools and fabrication machinery",
    skills: [
      { name: "Digital Multimeter", icon: "zap" },
      { name: "Soldering Station", icon: "wrench" },
      { name: "Vernier Calipers", icon: "wrench" },
      { name: "Hand & Electric Drills", icon: "wrench" },
      { name: "Angle Grinder & Saws", icon: "cog" },
    ],
  },
  {
    title: "Core Competencies & Languages",
    description: "Professional workplace execution, safety culture, and languages",
    skills: [
      { name: "Root Cause Troubleshooting", icon: "wrench" },
      { name: "Data-Driven Problem Solving", icon: "document" },
      { name: "Occupational Safety (K3 Standards)", icon: "award" },
      { name: "Cross-Functional Team Collaboration", icon: "user" },
      { name: "Bahasa Indonesia (Native)", icon: "link" },
      { name: "English (Proficient)", icon: "link" },
    ],
  },
];

export const marqueeHighlightSkills: string[] = [
  "PLC Troubleshooting",
  "ESP32 Microcontrollers",
  "Arduino Embedded Systems",
  "Industrial Panel Wiring",
  "Sensors & Actuators",
  "PID-Fuzzy Algorithms",
  "3D Digital Twin",
  "Pneumatics & Hydraulics",
  "HMI Deployment",
  "Safety Dojo K3 Certified",
  "BNSP Certified Technician",
  "NI Multisim & Proteus",
];
