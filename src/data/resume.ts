import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const resume = {
  summary:
    "Business Information Systems student with experience in process improvement, workflow automation, SQL analysis, and API-driven systems. I translate business requirements into technical solutions and present the result in a form other teams can use. Seeking graduate BA, operations, or product roles.",
  education: [
    {
      title: site.education.degree,
      org: `${site.education.institution}, Sydney, NSW`,
      period: site.education.period,
      detail: site.education.notes,
    },
    {
      title: "High School Certificate",
      org: "St Pius X College, Sydney, NSW",
      period: "2015 – 2022",
      detail: "",
    },
  ],
  technicalSkills: [
    "SQL",
    "Excel (Pivot Tables, Lookups, Data Cleaning)",
    "Data analysis",
    "Dashboarding & reporting",
    "CRM systems",
    "API integration & testing",
    "Workflow automation",
    "Project coordination (Trello)",
  ],
  businessAnalysisSkills: [
    "Requirements gathering",
    "Business process mapping",
    "Process improvement",
    "UAT",
    "Stakeholder communication",
  ],
  experience: [
    {
      title: "Process Improvement Specialist — Intern",
      org: "Plenti, Sydney, NSW",
      period: "2024 – 2025",
      bullets: [
        "Led end-to-end migration of automated communication workflows, rebuilding 300+ email sequences to improve scalability, reliability, and operational efficiency.",
        "Re-engineered API workflow triggers and automation logic, ensuring a seamless platform transition with zero customer-facing disruption.",
        "Developed and executed SQL queries to extract, clean, and analyse operational datasets, producing insights that informed product, operations, and compliance decisions.",
        "Conducted testing and troubleshooting of automation workflows, identifying root-cause issues and improving system stability.",
        "Collaborated with cross-functional teams to deliver data-driven recommendations that enhanced workflow efficiency and reduced manual intervention.",
      ],
    },
    {
      title: "Educator — Outside School Hours Care",
      org: "Junior Adventures Group, Sydney, NSW",
      period: "May 2026 – current",
      bullets: [
        "Supervise students in after-school programs, ensuring safety, engagement, and smooth daily operations.",
        "Manage activity planning, documentation, and communication with parents and school staff.",
      ],
    },
    {
      title: "Retail Sales Assistant",
      org: "Kmart Australia, Sydney, NSW",
      period: "2022 – 2026",
      bullets: [
        "Delivered high-volume customer service, managed transactions efficiently, and resolved enquiries in a fast-paced retail environment.",
      ],
    },
  ],
  leadership: [
    {
      title: "Peer Support Leader",
      org: "St Pius X College, Sydney, NSW",
      period: "2021 – 2022",
      bullets: [
        "Mentored Year 7 students during transition programs, supporting wellbeing and positive school engagement.",
        "Facilitated small-group activities and built communication, leadership, and conflict-resolution skills.",
      ],
    },
  ],
  certifications: [] as { name: string; issuer: string; year: string }[],
  projects: projects.map((project) => ({
      title: project.title,
      category: project.category,
      summary: project.outcome,
      slug: project.slug,
      origin: project.origin,
    })),
  otherProjects: [
    {
      title: "Music Discovery Web App",
      tools: "JavaScript, HTML/CSS",
      summary:
        "Web application that retrieves and displays music data using public APIs, with search, filtering, and playlist features.",
    },
    {
      title: "2D Game Development",
      tools: "Unity, C#, asset design",
      summary:
        "Multiple 2D games with custom mechanics, UI systems, original sprite assets, gameplay logic, and state management.",
    },
  ],
};
