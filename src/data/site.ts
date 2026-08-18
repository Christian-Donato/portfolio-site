/**
 * Personal details for Christian Donato.
 * GitHub is still empty — add it here when you have a public URL.
 */
export const site = {
  url: "https://example.com",
  name: "Christian Donato",
  shortName: "Donato",
  role: "Graduate Business Analyst",
  headline:
    "I turn business problems into data-driven decisions and practical solutions.",
  supporting:
    "Business Information Systems student. I interned at Plenti on workflow automation, API-driven systems, and SQL analysis, and I am looking for graduate BA, operations, or product roles.",
  availability: "Open to graduate BA, operations, and product roles",
  location: "Sydney, NSW",
  email: "christian.donato.dev@gmail.com",
  phone: "0423 738 881",
  linkedinUrl: "https://www.linkedin.com/in/christian-donato/",
  githubUrl: "",
  resumeFile: "/resume.pdf",
  targeting: ["Business Analyst", "Operations"],
  education: {
    degree: "Bachelor of Commerce — Business Information Systems",
    institution: "Macquarie University",
    period: "2023 – 2026",
    notes:
      "Distinction-level performance across BIS and analysis units. Coursework includes data analysis, database systems, information systems design, business process modelling, project management, and statistics for business.",
  },
  seo: {
    title: "Graduate Business Analyst",
    description:
      "Christian Donato is a Business Information Systems student and Plenti intern targeting graduate Business Analyst, operations, and product roles. SQL, process improvement, APIs, and workflow automation.",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export const processSteps = [
  { n: "01", label: "Problem" },
  { n: "02", label: "Understand" },
  { n: "03", label: "Analyse" },
  { n: "04", label: "Insight" },
  { n: "05", label: "Recommend" },
] as const;
