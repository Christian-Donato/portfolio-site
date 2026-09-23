import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "data",
    title: "Data",
    description: "Get the numbers clean, then make them answer a business question.",
    items: [
      { name: "SQL", projectSlug: "plenti-email-workflow-migration" },
      { name: "Excel (Pivot Tables, Lookups, Data Cleaning)" },
      { name: "Data Analysis", projectSlug: "plenti-email-workflow-migration" },
      { name: "Dashboarding & Reporting", projectSlug: "finance-wrapped" },
    ],
  },
  {
    id: "business-analysis",
    title: "Business analysis",
    description: "Turn a messy process into a question, a requirement, and a next step.",
    items: [
      { name: "Requirements Gathering", projectSlug: "finance-wrapped" },
      { name: "Business Process Mapping", projectSlug: "plenti-email-workflow-migration" },
      { name: "Process Improvement", projectSlug: "plenti-email-workflow-migration" },
      { name: "Risk Management", projectSlug: "real-estate-rpa-project-plan" },
      { name: "Cost-Benefit Analysis", projectSlug: "real-estate-rpa-project-plan" },
      { name: "UAT", projectSlug: "plenti-email-workflow-migration" },
      { name: "Stakeholder Communication", projectSlug: "plenti-email-workflow-migration" },
      { name: "Information Systems Design", projectSlug: "food-hub-surplus-redistribution" },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    description: "Enough technical fluency to work with data, systems, and delivery teams.",
    items: [
      { name: "CRM Systems", projectSlug: "plenti-email-workflow-migration" },
      { name: "API Integration & Testing", projectSlug: "finance-wrapped" },
      { name: "Workflow Automation", projectSlug: "plenti-email-workflow-migration" },
      { name: "Git / GitHub", projectSlug: "finance-wrapped" },
      { name: "Project Coordination (Trello)", projectSlug: "finance-wrapped" },
      { name: "Full-stack product systems", projectSlug: "dossiergen" },
      { name: "OAuth and third-party APIs", projectSlug: "dossiergen" },
      { name: "Realtime product systems", projectSlug: "after-hours" },
      { name: "Network Design", projectSlug: "financial-services-wan-security" },
      { name: "Security Risk Assessment", projectSlug: "financial-services-wan-security" },
    ],
  },
];
