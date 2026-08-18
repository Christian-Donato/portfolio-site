export const projectCategories = [
  "Data Analysis",
  "Business Analysis",
  "Business Intelligence",
  "Systems / Technology",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectPreview =
  | "workflow"
  | "assistant"
  | "finance"
  | "rpa"
  | "network"
  | "foodhub";

export type ProjectOrigin = "professional" | "university" | "personal";

export type ProjectLink = {
  label: string;
  href: string;
};

export type InsightBlock = {
  question: string;
  insight: string;
  action: string;
  chart:
    | { type: "kpi"; items: { label: string; value: string; hint?: string }[] }
    | { type: "bar"; title: string; unit?: string; data: { label: string; value: number }[] }
    | {
        type: "hbar";
        title: string;
        unit?: string;
        data: { label: string; value: number }[];
      }
    | {
        type: "line";
        title: string;
        unit?: string;
        data: { label: string; value: number }[];
      }
    | {
        type: "donut";
        title: string;
        data: { label: string; value: number }[];
      }
    | {
        type: "table";
        caption: string;
        headers: string[];
        rows: string[][];
      }
    | {
        type: "image";
        src: string;
        alt: string;
        caption: string;
      };
};

export type Stakeholder = {
  name: string;
  interest: string;
  influence: "High" | "Medium" | "Low";
  need: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  actor: string;
  detail: string;
  pain?: string;
};

export type UserStory = {
  id: string;
  asA: string;
  iWant: string;
  soThat: string;
  acceptance: string[];
};

export type Requirement = {
  id: string;
  type: "Functional" | "Non-functional" | "Data";
  statement: string;
  priority: "Must" | "Should" | "Could";
};

export type Recommendation = {
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  origin: ProjectOrigin;
  /** Extra (non-featured) projects to show on the home page. */
  onHome?: boolean;
  org?: string;
  period?: string;
  problem: string;
  outcome: string;
  tools: string[];
  skills: string[];
  deliverables: string[];
  preview: ProjectPreview;
  links: {
    github?: string;
    dashboard?: string;
    dataset?: string;
    sql?: string;
  };
  caseStudy: {
    problem: string;
    objective: string[];
    dataContext: string;
    approach: string[];
    tools: string[];
    sqlSnippets?: { title: string; caption: string; code: string }[];
    analysis: InsightBlock[];
    findings: string[];
    recommendations: Recommendation[];
    impact: string;
    reflection: string;
    stakeholders?: Stakeholder[];
    currentProcess?: ProcessStep[];
    futureProcess?: ProcessStep[];
    stories?: UserStory[];
    requirements?: Requirement[];
  };
};

export type SkillItem = {
  name: string;
  projectSlug?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
};
