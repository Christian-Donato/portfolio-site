import type { Project } from "@/lib/types";

/**
 * Add a project by appending an object to this array.
 * Set featured: true on one project to pin it on the home page.
 * Set onHome: true to also show a project under the flagship on home.
 * Set origin to professional, university, or personal.
 */
export const projects: Project[] = [
  {
    slug: "plenti-email-workflow-migration",
    title: "Email Workflow Migration & CRM Optimisation",
    category: "Business Analysis",
    featured: true,
    origin: "professional",
    org: "Plenti",
    period: "2024 – 2025",
    problem:
      "Automated customer emails lived on a legacy platform that was hard to scale, change, and trust during a cutover.",
    outcome:
      "Migrated and rebuilt 300+ automated communication sequences, re-engineered API triggers with zero customer-facing disruption, and used SQL to inform product, operations, and compliance decisions.",
    tools: ["SQL", "APIs", "CRM", "Workflow automation"],
    skills: [
      "Process Improvement",
      "SQL",
      "API Integration & Testing",
      "Workflow Automation",
    ],
    deliverables: [
      "Migrated email workflows",
      "API trigger redesign",
      "SQL analysis",
      "UAT / troubleshooting",
    ],
    preview: "workflow",
    links: {},
    caseStudy: {
      problem:
        "At Plenti (internship, 2024–2025), automated customer communications sat on a platform that was hard to scale and change. Moving 300+ email sequences to a new setup had to happen without customer-facing disruption. This was a process and systems problem as much as a tooling one: the workflows, the API triggers behind them, and the data used to decide what to send all had to move together.",
      objective: [
        "How do we migrate automated communications without disrupting customers?",
        "What does a maintainable sequence look like after the rebuild, not only a copied one?",
        "How should API workflow triggers be redesigned so the new platform fires the same events?",
        "What data do teams need in order to make decisions about the workflows?",
        "How do we test the new automation before and after cutover?",
      ],
      dataContext:
        "This case study is based on my internship at Plenti. It describes the work I did. It does not include client metrics, send volumes, or conversion results that are not on my resume.",
      approach: [
        "Map the existing automated email workflows on the legacy platform before moving them.",
        "Rebuild 300+ sequences rather than lifting them across unchanged.",
        "Re-engineer API workflow triggers so events still fire correctly after the cutover.",
        "Use SQL to extract and analyse data, then present it in a form other teams could use.",
        "Test and troubleshoot the new automation, fixing issues before they reached customers.",
      ],
      tools: ["SQL", "APIs", "CRM", "Workflow automation"],
      analysis: [
        {
          question: "What did the work actually consist of?",
          insight:
            "The migration was not a file export. Sequences had to be rebuilt, triggers had to be rewired, and the data behind decisions had to be queryable. Treating any one of those as an afterthought would have left a fragile cutover.",
          action:
            "Keep process, API behaviour, and data in the same piece of work — not as three separate handoffs.",
          chart: {
            type: "table",
            caption: "Workstreams on this internship",
            headers: ["Workstream", "What I did"],
            rows: [
              [
                "Email sequences",
                "Rebuilt 300+ automated email sequences",
              ],
              [
                "API triggers",
                "Re-engineered API workflow triggers — zero customer-facing disruption",
              ],
              [
                "SQL analysis",
                "Extracted, cleaned, and analysed operational data for product, operations, and compliance",
              ],
              [
                "Testing",
                "Troubleshot automation issues and resolved them before they became customer problems",
              ],
            ],
          },
        },
        {
          question: "Where does this kind of migration usually fail?",
          insight:
            "The happy path — a sequence that already works — is the easy part. The risk is in triggers, edge cases, and the period when two platforms can disagree about the same customer event.",
          action:
            "Put testing and API behaviour on the critical path, not at the end.",
          chart: {
            type: "table",
            caption: "Failure modes this work had to cover",
            headers: ["Risk", "Why it matters", "What I worked on"],
            rows: [
              [
                "Lift-and-shift sequences",
                "Old problems move with the emails",
                "Rebuilt 300+ sequences rather than copying them",
              ],
              [
                "Broken triggers",
                "The template is fine; the send never starts",
                "Re-engineered API workflow triggers",
              ],
              [
                "No shared view of the data",
                "Teams argue about what happened",
                "SQL extracts and analysis for decisions",
              ],
              [
                "Untested cutover",
                "Customers see the failure first",
                "Testing and troubleshooting before and after go-live",
              ],
            ],
          },
        },
      ],
      findings: [
        "A CRM migration is a process redesign. Copying sequences into a new tool would have preserved the same operational problems.",
        "API triggers are part of the customer journey. If they are wrong, the email platform looks broken even when the template is fine.",
        "SQL was the way to answer questions the email tool could not: what is actually happening, in a form other teams can use.",
        "Testing had to cover the workflow, not only the individual email.",
      ],
      recommendations: [
        {
          title: "Redesign, do not only relocate",
          detail:
            "Use a platform change to simplify sequences. A lift-and-shift keeps the old process inside a new logo.",
        },
        {
          title: "Treat triggers as requirements",
          detail:
            "Write down which events should fire which sends before rebuilding. The API contract is the process.",
        },
        {
          title: "Give the business a queryable view",
          detail:
            "Do not leave performance trapped in the email tool. SQL (or an agreed extract) lets other teams inspect the same facts.",
        },
        {
          title: "Test the cutover as a journey",
          detail:
            "UAT should follow a customer event through trigger, sequence, and result — not a single preview send.",
        },
      ],
      impact:
        "The intended outcome was a more maintainable communication operation after the platform transition, with zero customer-facing disruption. No percentage improvement or commercial result is claimed beyond what is on my resume.",
      reflection:
        "If I were doing this again, I would document the event catalogue (which API event means which customer moment) even earlier, and I would keep a simple before/after checklist per sequence so nothing silent-fails in the first week after cutover.",
      currentProcess: [
        {
          id: "C1",
          title: "Customer event",
          actor: "Source system",
          detail: "An event occurs in the business system (for example an account or product change).",
        },
        {
          id: "C2",
          title: "Legacy trigger",
          actor: "Legacy platform",
          detail: "A trigger on the old platform decides whether an email sequence should start.",
          pain: "Logic is tied to a platform that is being retired.",
        },
        {
          id: "C3",
          title: "Sequence send",
          actor: "Legacy email",
          detail: "The customer receives a message from a sequence that is hard to change at scale.",
          pain: "300+ sequences; changes are slow and brittle.",
        },
        {
          id: "C4",
          title: "Limited visibility",
          actor: "Business teams",
          detail: "Questions about what was sent, and why, are difficult to answer outside the tool.",
          pain: "Decisions wait on extracts that are not standard.",
        },
      ],
      futureProcess: [
        {
          id: "F1",
          title: "Customer event",
          actor: "Source system",
          detail: "The same business event occurs. The contract for that event is explicit.",
        },
        {
          id: "F2",
          title: "API trigger",
          actor: "New platform",
          detail: "Re-engineered API workflow triggers start the right sequence on the new platform.",
        },
        {
          id: "F3",
          title: "Rebuilt sequence",
          actor: "New platform",
          detail: "The customer receives a message from a sequence that has been rebuilt and optimised, not only copied.",
        },
        {
          id: "F4",
          title: "SQL view",
          actor: "Analyst / business",
          detail: "SQL is used to extract and present what happened, so other teams can decide with the same facts.",
        },
      ],
    },
  },
  {
    slug: "ai-customer-service-assistant",
    title: "AI Customer Service Assistant",
    category: "Systems / Technology",
    featured: false,
    origin: "personal",
    problem:
      "Support staff had to jump between email, payments, and account tools to answer a single customer enquiry.",
    outcome:
      "A web tool that pulls Gmail and Stripe context, drafts policy-aware replies with ChatGPT, and automates enquiry categorisation so handling needs less manual lookup.",
    tools: [
      "APIs",
      "Webhooks",
      "OAuth",
      "Gmail API",
      "Stripe API",
      "ChatGPT",
    ],
    skills: [
      "API Integration & Testing",
      "Workflow Automation",
      "Requirements Gathering",
      "Process Improvement",
    ],
    deliverables: ["Web app", "API integrations", "Automated draft replies"],
    preview: "assistant",
    links: {},
    caseStudy: {
      problem:
        "Customer support work often starts with an email and then a hunt: payment history in one system, account details in another, and a reply that still has to match company policy. The project was to reduce that lookup loop without pretending a model can replace judgement.",
      objective: [
        "Can we retrieve the email, payment, and account context needed to answer an enquiry in one place?",
        "Can a draft reply be generated from that context plus company policy?",
        "Which enquiries can be categorised automatically so a person is not triaging every message from scratch?",
        "What does a support user need in the UI to authenticate APIs and set rules without an engineer?",
      ],
      dataContext:
        "This is my own build. It connects to Gmail and Stripe APIs for customer emails, payment history, and account details. It uses ChatGPT to draft replies against company policies and product information. No client volume or resolution-time metric is claimed.",
      approach: [
        "Connect Gmail and Stripe through OAuth and APIs so the tool can retrieve the enquiry and the payment context together.",
        "Use webhooks and automation logic to categorise enquiries and start a draft.",
        "Generate replies with ChatGPT, constrained by company policy, product information, and customer context.",
        "Build a lightweight UI for onboarding, API authentication, and support-rule configuration.",
      ],
      tools: [
        "Gmail API",
        "Stripe API",
        "OAuth",
        "Webhooks",
        "ChatGPT",
        "Web app development",
      ],
      analysis: [
        {
          question: "What does a support enquiry actually need?",
          insight:
            "The reply is rarely the hard part. The delay is gathering email thread, payment state, and account facts before anyone can write a safe answer.",
          action:
            "Pull those three sources into one view before generating a draft.",
          chart: {
            type: "table",
            caption: "Inputs the assistant uses",
            headers: ["Source", "What it provides", "Why it is there"],
            rows: [
              ["Gmail API", "Customer email and thread", "The question being asked"],
              ["Stripe API", "Payment history and account details", "Whether the issue is billing, access, or something else"],
              ["Policy / product text", "Allowed answers", "Stops the model inventing a refund rule"],
              ["Support rules", "How to categorise and draft", "Lets an operator configure the workflow"],
            ],
          },
        },
        {
          question: "Where should automation stop?",
          insight:
            "Categorisation and a first draft remove lookup work. Sending without a person still reading the draft would be a different product, and a riskier one.",
          action:
            "Automate retrieve, categorise, and draft. Keep send with the operator.",
          chart: {
            type: "table",
            caption: "What is automated vs held",
            headers: ["Step", "Automated", "Held for a person"],
            rows: [
              ["Fetch email and payment context", "Yes", "—"],
              ["Categorise the enquiry", "Yes", "Override if needed"],
              ["Draft a reply", "Yes", "Edit before send"],
              ["Send to the customer", "No", "Operator confirms"],
            ],
          },
        },
      ],
      findings: [
        "Support work is a data-assembly problem before it is a writing problem.",
        "API auth and rule configuration belong in the product. If only a developer can connect Gmail, the workflow will not be used.",
        "A model is useful once policy and customer context are in the prompt. Without that, it guesses.",
        "Automation that drafts is different from automation that sends. The first is the safer operations change.",
      ],
      recommendations: [
        {
          title: "Start with the lookup, not the chatbot",
          detail:
            "If staff still have to open Stripe and Gmail separately, a generated sentence does not save the process.",
        },
        {
          title: "Put policy in the loop",
          detail:
            "Drafts should be constrained by written policy and product facts, not only by a generic support prompt.",
        },
        {
          title: "Keep a human on send",
          detail:
            "Use the model to remove assembly work. Do not let it close the ticket on its own until the error cost is understood.",
        },
      ],
      impact:
        "The intended outcome is faster, more consistent support handling with less manual lookup. No client deployment result is claimed.",
      reflection:
        "Next I would add an audit log of what context was sent to the model, and a simple accuracy check on categorisation, so the workflow can be improved from evidence rather than from anecdote.",
    },
  },
  {
    slug: "finance-wrapped",
    title: "Finance Wrapped — HomePlanner Open Banking MVP",
    category: "Data Analysis",
    featured: false,
    onHome: true,
    origin: "university",
    org: "HomePlanner · Macquarie University COMP3850 · Team 11",
    period: "2025",
    problem:
      "Prospective homeowners on HomePlanner could not see their financial position from raw bank data. The sponsor needed a consented Open Banking path from bank feed to income, spend, and category insight.",
    outcome:
      "A backend-first MVP using BASIQ Open Banking, PostgreSQL, and a lightweight React demo UI. My work included the /accounts API and an aggregated account–connection–institution response for the frontend.",
    tools: [
      "BASIQ",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Postman",
      "React",
    ],
    skills: [
      "API Integration & Testing",
      "Data Analysis",
      "Requirements Gathering",
      "Dashboarding & Reporting",
    ],
    deliverables: [
      "BASIQ consent flow",
      "/accounts API",
      "Spending snapshot",
      "Sponsor demo",
    ],
    preview: "finance",
    links: {},
    caseStudy: {
      problem:
        "HomePlanner’s purpose is homeownership enablement. A first-time buyer still cannot answer a basic planning question from a bank statement: what comes in, what goes out, and which categories consume the surplus that might become a deposit. Finance Wrapped was a COMP3850 industry project (Team 11, software stream, Deliverable 4 submitted 24 May 2025) to give HomePlanner a standalone MVP that connects to Australian Open Banking via BASIQ, categorises transactions, and shows a financial snapshot — designed so it could later sit inside HomePlanner, not as a live production integration in semester.",
      objective: [
        "How do we retrieve bank data with user consent under the Consumer Data Right, without HomePlanner storing passwords?",
        "What should the MVP actually show a prospective homeowner: income, expenses, net position, or category mix?",
        "Which transaction categories matter for homeownership planning, and what happens to uncategorised spend?",
        "What API shape does the frontend need for accounts, connections, and institutions — one call, or three?",
        "What is in scope for a semester MVP versus what HomePlanner should take after handover?",
      ],
      dataContext:
        "This was a six-person team project with HomePlanner as sponsor. The stack was Node.js and TypeScript, Express, PostgreSQL via Prisma, Docker, and BASIQ’s Open Banking API. Transactions were fetched live from BASIQ and not stored long-term, for legal and privacy reasons. User records (name, email, mobile, basiqId) were persisted locally. The frontend was a lightweight React + Vite demo: login, BASIQ consent, transactions, and a summary/analysis view with a date filter, spending totals, category bars, and uncategorised spend. I did not build the whole product. On Deliverable 4 my logged work included onboarding to the repo and Docker, reviewing BASIQ authentication and data endpoints, testing GET/POST in Postman, building the /accounts route against BASIQ with tests, and a controller that aggregated account, connection, and institution data into a single frontend response. I also joined the sponsor demo and the team retrospective.",
      approach: [
        "Treat the backend as a proxy: HomePlanner (or the demo login) holds the user session; BASIQ holds bank consent. The MVP stores a basiqId, not bank credentials.",
        "Use BASIQ’s hosted consent UI so CDR-style consent is not a custom form we invented.",
        "Fetch transactions on demand with a date range. Do not persist the feed in PostgreSQL in the MVP.",
        "Apply rule-based categories (income, house expenses, utilities, discretionary, recurring) and keep uncategorised spend visible rather than hiding it.",
        "Give the frontend one aggregated accounts payload — account + connection + institution — so the UI is not stitching three API calls.",
        "Work in parallel streams (development and documentation) after a mid-semester resource squeeze, with Trello, pull requests, and a sponsor demo.",
      ],
      tools: [
        "BASIQ Open Banking API",
        "Node.js / TypeScript / Express",
        "PostgreSQL / Prisma",
        "Docker",
        "Postman",
        "React + Vite",
        "GitHub",
        "Trello",
      ],
      analysis: [
        {
          question: "What does a first-time home buyer actually need to see?",
          insight:
            "The SRS scoped the snapshot to income, expenses, net position (income minus expenses), average monthly spend, top three categories, cash-flow direction, and a category breakdown. Predictive affordability and mortgage eligibility were vision, not MVP. Showing a raw transaction list without those aggregates would have left the sponsor with a bank export, not a planning view.",
          action:
            "Lead the demo UI with a financial snapshot and category mix. Keep the transaction list as evidence, not as the first screen.",
          chart: {
            type: "kpi",
            items: [
              { label: "Snapshot", value: "Income vs spend", hint: "Defined period" },
              { label: "Net position", value: "In − out", hint: "Cash-flow sign" },
              { label: "Focus", value: "Top 3 categories", hint: "Rule-based" },
              { label: "Quality check", value: "Uncategorised", hint: "Shown, not hidden" },
            ],
          },
        },
        {
          question: "What did the spending analysis view actually show?",
          insight:
            "The live demo used BASIQ’s merchant / industry labels — Non-Depository Credit, Auxiliary Finance, Supermarkets, Cafes, Fuel, Hospitals — not the five homeownership buckets in the SRS. That is useful and incomplete: a first-time buyer can see where money went, but ‘Non-Depository Credit’ is not yet ‘housing vs discretionary’. The $151,102.13 total and $70,959.00 top bar are from the connected demo/sandbox feed, not a production HomePlanner customer.",
          action:
            "Keep this view as evidence. Map provider categories into the planning buckets, and keep an uncategorised remainder so the snapshot does not look cleaner than the feed.",
          chart: {
            type: "image",
            src: "/projects/finance-wrapped-spending-analysis.png",
            alt: "Finance Wrapped Spending Analysis screen showing total spending of $151,102.13 and a horizontal bar chart of top spending categories, with Non-Depository Credit at $70,959.00",
            caption:
              "MVP Spending Analysis view from the Finance Wrapped demo. Figures are from connected test/sandbox bank data, not a live HomePlanner user.",
          },
        },
        {
          question: "Which categories are useful for homeownership planning?",
          insight:
            "The team did not invent open-ended merchant tags. Predefined buckets were income, house expenses (rent, mortgage), utilities, discretionary (dining, entertainment), and recurring (subscriptions). Groceries and rent also appear in the functional requirements. Uncategorised lines were a first-class chart, because a silent ‘other’ bucket would have made the snapshot look complete when it was not.",
          action:
            "Keep the category list short and planning-oriented. Surface uncategorised spend so HomePlanner can see where rules fail.",
          chart: {
            type: "table",
            caption: "MVP category model (from the scoping / SRS)",
            headers: ["Category", "Examples in the spec", "Why it matters for HomePlanner"],
            rows: [
              ["Income", "Salaries", "Capacity to save a deposit"],
              ["House expenses", "Rent, mortgage", "Housing cost already in the budget"],
              ["Utilities", "Electricity, water", "Non-discretionary load"],
              ["Discretionary", "Dining, entertainment", "The lever a buyer can actually cut"],
              ["Recurring", "Subscriptions", "Commitments that survive a ‘quiet month’"],
              ["Uncategorised", "Missing metadata / ambiguous merchants", "Data-quality exception list"],
            ],
          },
        },
        {
          question: "What API should the frontend call for ‘my accounts’?",
          insight:
            "Account, bank connection, and institution are three BASIQ concepts. Leaving the UI to join them would have leaked provider structure into the demo. My Deliverable 4 work was to expose /accounts with full request handling against BASIQ, then a controller that returned account, connection, and institution together so the frontend could render linked banks in one response.",
          action:
            "Aggregate at the backend boundary. The UI consumes a HomePlanner-shaped payload, not three raw BASIQ resources.",
          chart: {
            type: "table",
            caption: "My D4 contribution versus the wider MVP",
            headers: ["Work", "Owner in the log", "Why it mattered"],
            rows: [
              [
                "/accounts route, BASIQ wiring, tests",
                "Christian Donato",
                "Frontend can list linked accounts from one contract",
              ],
              [
                "Aggregate account + connection + institution",
                "Christian Donato",
                "Stops the UI reconstructing BASIQ’s object graph",
              ],
              [
                "Postman + BASIQ auth/data endpoint review",
                "Christian Donato",
                "Consent and retrieval had to be understood before the route was safe",
              ],
              [
                "Consent flow, Postgres, transactions, summary UI",
                "Team 11",
                "The rest of the MVP around that accounts contract",
              ],
            ],
          },
        },
        {
          question: "What did we refuse to persist?",
          insight:
            "User profile fields and a basiqId lived in PostgreSQL. Transaction history did not. The design note is explicit: live fetch from BASIQ, because storing the feed creates retention and privacy work HomePlanner would have to own. If they later need history beyond BASIQ’s window, that is a legal decision, not an MVP convenience.",
          action:
            "Persist identity and consent linkage. Treat the transaction feed as retrieved, not warehoused, until the sponsor decides retention.",
          chart: {
            type: "table",
            caption: "User entity persisted in Prisma / PostgreSQL",
            headers: ["Field", "Type", "Role"],
            rows: [
              ["id", "int", "Local primary key"],
              ["firstName / lastName", "string", "Demo user identity"],
              ["email", "string (unique)", "Login / contact"],
              ["mobile", "string", "Contact"],
              ["basiqId", "string (optional)", "Link to BASIQ consent and data"],
              ["createdAt / updatedAt", "datetime", "Audit"],
            ],
          },
        },
      ],
      findings: [
        "Open Banking for this product is a consent problem first. The useful object is a basiqId plus a consent URL, not a stored bank password.",
        "A financial snapshot for home buyers is a small set of measures: income, expenses, net position, top categories, and uncategorised remainder.",
        "Rule-based categories are enough for an MVP if uncategorised spend is visible. Hiding exceptions would have overstated data quality.",
        "The frontend should not speak BASIQ. An aggregated /accounts response is the integration contract HomePlanner actually needs.",
        "Transactions as a live fetch, not a warehouse, was a privacy decision. It also means the product cannot do long-range history until someone accepts retention risk.",
      ],
      recommendations: [
        {
          title: "Keep the snapshot, not a bank clone",
          detail:
            "If HomePlanner integrates this, the first screen should stay income, spend, net position, and category mix for a chosen period. A transaction table is supporting evidence.",
        },
        {
          title: "Promote uncategorised to a workflow",
          detail:
            "The SRS already allowed users to edit categories and required flagging ambiguous merchants. That exception list is how categorisation quality improves after handover.",
        },
        {
          title: "Stabilise the accounts contract",
          detail:
            "Treat the aggregated account–connection–institution payload as an interface. BASIQ can change underneath; HomePlanner’s UI should not.",
        },
        {
          title: "Decide transaction retention explicitly",
          detail:
            "Do not start storing the feed ‘for convenience’. CDR, the Privacy Act 1988, and BASIQ’s window are a product decision for the sponsor’s legal owners.",
        },
      ],
      impact:
        "The intended outcome was a demonstrable, dockerised MVP HomePlanner could inspect: consented bank linking, live transactions, rule-based categories, and a summary view — with an accounts API the frontend could actually call. It was not deployed to production users. No customer-count, conversion, or deposit-readiness metric is claimed.",
      reflection:
        "If I were extending this, I would add acceptance tests around the aggregated /accounts payload (missing institution, revoked consent, empty accounts) and a documented mapping from BASIQ category to the five planning buckets. I would also keep the known limitations visible: no production UI, no formal CDR accreditation, no live HomePlanner integration, and no long-term transaction store.",
      stakeholders: [
        {
          name: "HomePlanner (sponsor)",
          interest: "A backend they can later integrate; CDR-aware bank linking",
          influence: "High",
          need: "Modular APIs, Docker delivery, and a demo that shows snapshot value",
        },
        {
          name: "First-time home buyer (future user)",
          interest: "Whether they can save, and what is eating the surplus",
          influence: "High",
          need: "A simple snapshot, not a raw bank export",
        },
        {
          name: "HomePlanner engineers",
          interest: "Stack fit (Node, Docker, Postgres) and a clean boundary with BASIQ",
          influence: "High",
          need: "One accounts contract and consent flow they can own",
        },
        {
          name: "BASIQ",
          interest: "Consented access to bank data",
          influence: "High",
          need: "Correct auth, consent, and retrieval — the system fails if they are down",
        },
        {
          name: "Team 11",
          interest: "A feasible semester MVP and a handover pack",
          influence: "Medium",
          need: "Split of backend vs documentation after the mid-semester squeeze",
        },
      ],
      currentProcess: [
        {
          id: "C1",
          title: "Bank statements",
          actor: "Prospective buyer",
          detail: "Financial position lives in a bank app or PDF.",
          pain: "No homeownership-shaped view.",
        },
        {
          id: "C2",
          title: "Manual tally",
          actor: "Buyer / advisor",
          detail: "Income and rent are reconstructed by hand if at all.",
          pain: "Slow, incomplete, easy to miss recurring costs.",
        },
        {
          id: "C3",
          title: "HomePlanner planning",
          actor: "HomePlanner",
          detail: "Product advice is disconnected from live consented bank behaviour.",
          pain: "Planning without a current snapshot.",
        },
      ],
      futureProcess: [
        {
          id: "F1",
          title: "Consent",
          actor: "User + BASIQ",
          detail: "User connects a bank through BASIQ’s consent UI. Backend stores basiqId only.",
        },
        {
          id: "F2",
          title: "Retrieve",
          actor: "Finance Wrapped backend",
          detail: "Live transaction fetch for a date range. Accounts returned as one aggregated payload.",
        },
        {
          id: "F3",
          title: "Categorise",
          actor: "Processing module",
          detail: "Rule-based buckets plus an uncategorised remainder.",
        },
        {
          id: "F4",
          title: "Snapshot",
          actor: "Demo UI / future HomePlanner",
          detail: "Income, expenses, net position, top categories, cash flow for the chosen period.",
        },
      ],
      stories: [
        {
          id: "US-FW-01",
          asA: "HomePlanner user",
          iWant: "to connect my bank securely",
          soThat: "I can retrieve financial data through the platform",
          acceptance: [
            "Given I am a first-time user, when I connect, then a BASIQ profile is created without a separate BASIQ signup.",
            "Given I am a returning user, when I connect, then my stored basiqId is reused.",
          ],
        },
        {
          id: "US-FW-02",
          asA: "user",
          iWant: "the system to check existing consent before prompting me again",
          soThat: "I am not asked to re-authorise the same account without cause",
          acceptance: [
            "Given valid consent, when I open transactions, then data is retrieved without repeating the full consent flow.",
            "Given expired or revoked consent, when I request data, then I am guided to reconnect.",
          ],
        },
        {
          id: "US-FW-03",
          asA: "user",
          iWant: "to see income, expenses, and category mix for a date range",
          soThat: "I can judge my position without reconstructing it from a raw feed",
          acceptance: [
            "Given categorised transactions, when I open the summary, then income, expenses, and net position are shown for the selected period.",
            "Given uncategorised transactions, when I view analysis, then they appear as their own group rather than disappearing.",
          ],
        },
      ],
      requirements: [
        {
          id: "OB-REQ-1",
          type: "Functional",
          statement:
            "The system must allow a user to securely link a bank account via Open Banking APIs after authentication.",
          priority: "Must",
        },
        {
          id: "OB-REQ-2",
          type: "Functional",
          statement:
            "The system must retrieve transaction data from linked accounts after successful authentication.",
          priority: "Must",
        },
        {
          id: "CAT-REQ-1",
          type: "Functional",
          statement:
            "The system must categorise transactions into predefined buckets (including income, groceries/rent as specified, and the house / utilities / discretionary / recurring model).",
          priority: "Must",
        },
        {
          id: "CAT-REQ-2",
          type: "Functional",
          statement:
            "The system must flag transactions that are difficult to categorise for review.",
          priority: "Should",
        },
        {
          id: "AN-REQ-1",
          type: "Functional",
          statement:
            "The system must calculate total spending and total income over defined periods (e.g. last 30 days, last 12 months).",
          priority: "Must",
        },
        {
          id: "SNAP-REQ-1",
          type: "Functional",
          statement:
            "The system must display a financial snapshot including total income, total expenses, and net financial position.",
          priority: "Must",
        },
        {
          id: "NF-CDR",
          type: "Non-functional",
          statement:
            "Consent and data handling must align with the Privacy Act 1988 and CDR obligations. Formal CDR accreditation was out of MVP scope.",
          priority: "Must",
        },
        {
          id: "ACC-API",
          type: "Data",
          statement:
            "The /accounts endpoint must return account, connection, and institution data in one response for frontend rendering.",
          priority: "Must",
        },
      ],
    },
  },
  {
    slug: "real-estate-rpa-project-plan",
    title: "Real Estate RPA — Project and Risk Plan",
    category: "Business Analysis",
    featured: false,
    origin: "university",
    org: "Macquarie University COMP3770/COMP6770 · Group assignment",
    period: "2026",
    problem:
      "Property managers were losing time to swivel-chair data entry across accounting, maintenance, tenant, and access systems. The organisation needed a plan for cloud RPA that a BA could defend on scope, risk, and payback — not a bot for every process.",
    outcome:
      "A 24-week project and risk plan: SMART objectives, in/out of scope, WBS, critical path, a 12-risk register with three extreme items, and an NPV that stays negative at 25% savings and turns positive at 40%. Group work with Berk Dogan, Ethan Gaspersic, and Nicholas Garbutt. Planning artefact — not a live RPA build.",
    tools: [
      "WBS",
      "Critical path",
      "Risk register",
      "NPV",
      "SMART objectives",
    ],
    skills: [
      "Requirements Gathering",
      "Business Process Mapping",
      "Stakeholder Communication",
      "Risk Management",
      "Cost-Benefit Analysis",
    ],
    deliverables: [
      "Project management plan",
      "Risk register",
      "NPV analysis",
      "Scope and WBS",
    ],
    preview: "rpa",
    links: {},
    caseStudy: {
      problem:
        "In the course scenario, a real estate organisation keeps property, tenant, finance, and access data in separate systems. When a lease is signed or a record changes, staff re-key the same facts across accounting ledgers, maintenance, tenant databases, and building access — the swivel-chair problem. Course material put that admin load at up to 40% of a property manager’s time. Errors, weak audit trails, and peak-season overload follow. The Assignment 2 brief was not to build the bots. It was to take our Assignment 1 16-week RPA plan and turn it into a 24-week, risk-aware, cloud-tested delivery plan a sponsor could approve or stop.",
      objective: [
        "Which administrative workflows are stable and rule-based enough to automate, and which decisions must stay with a person?",
        "What is in scope for a first RPA release, and what would be scope creep (new ERP, AI judgement, automating every department)?",
        "If the team only has 20 hours a week each, how long does a secure cloud rollout actually take?",
        "Which risks would kill the business case if they are treated as a document instead of work on the schedule?",
        "At a conservative 25% saving versus a more realistic 40%, does a ~$200k plan pay back inside three years?",
      ],
      dataContext:
        "University group assignment for COMP3770/COMP6770 Management of IT Systems and Projects (Assignment 2). Authors: Berk Dogan, Christian Donato, Ethan Gaspersic, and Nicholas Garbutt. The organisation and dollar figures are the course case plus industry benchmarks (RPA savings commonly cited at 25–60%; we modelled admin labour at $300,000 a year). Assignment 1 was a 16-week plan at $93,120. Assignment 2 extends that to 24 weeks at about $199,518 including 10% contingency, against a $450,000 ceiling. I did not implement RPA at a named real-estate client. This case study is the planning work: scope, process, risk, and the investment case.",
      approach: [
        "Start from the Assignment 1 baseline, then add risk, cloud readiness, cybersecurity, compliance mapping, and post-deployment review into the same WBS rather than as a sidecar.",
        "Write SMART objectives and an explicit in/out-of-scope list so RPA integrates with existing systems instead of replacing them.",
        "Plan seven phases — initiation, planning, design, development, testing, deployment, monitoring and closure — with stage gates before development and before go-live.",
        "Score twelve risks on a 5×5 likelihood–impact matrix, assign owners, and put mitigation on the Gantt (Week 2 risk workshop through post-deployment handover).",
        "Cost from the bottom up (labour $139,880 + non-labour $41,500), add 10% contingency, and test payback with conservative 25% and realistic 40% annual savings at a 10% discount rate.",
      ],
      tools: [
        "Work breakdown structure",
        "Gantt / critical path",
        "5×5 risk matrix",
        "Bottom-up costing",
        "NPV (3-year, 10% discount)",
        "SMART objectives",
      ],
      analysis: [
        {
          question: "What should the first release actually automate?",
          insight:
            "RPA is a fit where the work is repetitive, digital, and rule-based: tenant updates, lease data, rent reconciliation, maintenance requests, document checks, and syncing the four systems. It is a poor fit where the work is judgement — legal, professional, or one-off. Replacing accounting, maintenance, tenant, or access systems, standing up an ERP, or automating every department in one phase would have turned a bot programme into a transformation programme the $450k ceiling and 24-week calendar cannot carry.",
          action:
            "Automate selected swivel-chair workflows. Keep existing systems. Hold legal and professional judgement with people. Expand only after a one-year benefits review.",
          chart: {
            type: "table",
            caption: "Scope decisions in the Assignment 2 plan",
            headers: ["In scope", "Out of scope", "Why it matters"],
            rows: [
              [
                "Rule-based sync across accounting, maintenance, tenant, and access",
                "Replace those source systems or build an ERP",
                "RPA sits on current tools; it is not a core-system rewrite",
              ],
              [
                "Logs, exception reports, and auditable bot actions",
                "Automating decisions that need legal or professional judgement",
                "Auditability is a real-estate requirement; judgement is not a bot rule",
              ],
              [
                "Cloud setup, IAM, backup, DR, pen-test, and UAT before go-live",
                "Long-term managed services after handover",
                "Security is a gate, not a follow-up ticket",
              ],
              [
                "Staff training, change communication, and operational handover",
                "All departments in phase one",
                "Adoption is an extreme risk; extra bots wait for evidence",
              ],
            ],
          },
        },
        {
          question: "Why did the plan grow from 16 weeks to 24?",
          insight:
            "Assignment 1 costed a 16-week build at $93,120. Assignment 2 is not a padded calendar. Risk workshops, security architecture, compliance mapping, cloud performance tests, and pen-testing are sequential with the bots: you cannot pen-test a design that does not exist, and you should not go live before those gates close. Everyone is at 50% (20 hours a week) because of BAU. Specialist work that cannot overlap stretches the critical path. The revised cost of about $199,518 still sits under $450,000 — the constraint that actually bites is time and attention, not the budget ceiling.",
          action:
            "Schedule security and cloud validation on the critical path. Do not compress them to protect a 16-week date.",
          chart: {
            type: "kpi",
            items: [
              { label: "Assignment 1", value: "16 weeks", hint: "$93,120 baseline" },
              { label: "Assignment 2", value: "24 weeks", hint: "Risk + cloud gates" },
              { label: "Capacity", value: "20 hrs / wk", hint: "50% vs BAU" },
              { label: "Plan cost", value: "$199,518", hint: "Incl. 10% contingency" },
            ],
          },
        },
        {
          question: "Which risks would actually break the business case?",
          insight:
            "Twelve risks were scored. Three are extreme: integration failure (R1, 20), poor data quality (R2, 16), and staff resistance (R4, 16). If bots cannot talk to the four systems, there are no savings. If they copy bad data, they multiply it. If property managers will not use the new path, the 25% workload cut is a spreadsheet. Cyber and privacy risks (R7–R9) sit at 15 — high, not extreme — because tenant and financial data is in the path, which is why least privilege, MFA, and pen-testing are go-live gates rather than a later hardening sprint.",
          action:
            "Treat R1 and R2 in design (mapping, early integration tests, exception reports). Treat R4 from Week 1 (workshops, UAT, role clarity), not as end-of-project training.",
          chart: {
            type: "hbar",
            title: "Risk scores (likelihood × impact)",
            data: [
              { label: "R1 Integration", value: 20 },
              { label: "R2 Data quality", value: 16 },
              { label: "R4 Staff resistance", value: 16 },
              { label: "R6 Cost overrun", value: 15 },
              { label: "R7 Data exposure", value: 15 },
              { label: "R8 Cloud misconfig", value: 15 },
              { label: "R9 Privacy / compliance", value: 15 },
              { label: "R3 Bot failure", value: 12 },
              { label: "R12 Process mismatch", value: 12 },
            ],
          },
        },
        {
          question: "Does the investment pay back on conservative numbers?",
          insight:
            "Admin labour was modelled at $300,000 a year. A 25% cut is $75,000 a year — the low end of published RPA ranges, chosen so the case is not sold on 60%. At 10% discount, three-year present value is $186,514 against $199,518 spent: NPV −$13,004, about 7% short, with break-even in year four. At 40% savings ($120,000 a year) NPV is +$98,905. The project is therefore sensitive to the savings rate, and that rate depends on R1, R2, and R4. Intangible benefits (morale, fewer corrections, faster tenant service, auditability) were listed and not put in the NPV.",
          action:
            "Approve only with stage gates and a one-year benefits review. Do not treat the 40% case as the base case.",
          chart: {
            type: "table",
            caption: "Three-year NPV at 10% discount (course model, not a live client P&L)",
            headers: ["Scenario", "Annual saving", "3-year PV of savings", "NPV vs $199,518"],
            rows: [
              ["Conservative 25%", "$75,000", "$186,514", "−$13,004"],
              ["Realistic 40%", "$120,000", "$298,423", "+$98,905"],
              ["Budget ceiling", "—", "—", "$450,000 approved vs $199,518 planned"],
            ],
          },
        },
        {
          question: "What is the business analyst doing on this team?",
          insight:
            "The plan costs two BAs at $95/hour for requirements, process analysis, business rules, stakeholder workshops, UAT, and workflow validation. That is also how R12 (automating the wrong process) and R4 (resistance) get treated: BAs and real-estate SMEs check the bots against how leasing, rent, maintenance, and access actually work. Cybersecurity is a specialist at control points, not a full-time seat. The BA does not own the architecture, but owns whether the automated path is the real path.",
          action:
            "Keep BAs on process truth, UAT, and audit evidence (R10). Do not reduce them to a requirements document written once in Week 2.",
          chart: {
            type: "table",
            caption: "Delivery roles in the Assignment 2 team (indicative rates from the plan)",
            headers: ["Role", "Focus", "Why it is on the team"],
            rows: [
              ["Business Analysts (×2)", "Process, rules, workshops, UAT", "Stop the bots encoding the wrong work"],
              ["Real Estate SMEs (×2)", "Leasing, rent, maintenance, access", "Domain check on every workflow"],
              ["RPA architect / developer", "Bot design, exceptions, integration", "Build against mapped processes"],
              ["Data / integration specialist", "Mapping, cleansing, sample tests", "Owns extreme risk R2"],
              ["Cybersecurity specialist", "IAM, MFA, pen-test, cloud review", "Checkpoint, not a standing team"],
              ["Operations manager", "Training, adoption, handover", "Owns extreme risk R4 with the BAs"],
            ],
          },
        },
      ],
      findings: [
        "The operational problem is re-keying the same fact across four systems, not a missing property-management product.",
        "RPA is in scope for stable, rule-based admin. Judgement, ERP replacement, and organisation-wide automation are not a first release.",
        "A 24-week critical path is mostly sequencing: part-time people plus security and cloud gates that cannot run in parallel with an unfinished bot.",
        "Integration failure, dirty data, and staff resistance are the three risks that can wipe the savings assumption. The NPV is only as good as those three.",
        "On conservative 25% savings the plan does not recover cost in three years; on 40% it does. That is a reason for gates and a one-year review, not a reason to skip the work.",
      ],
      recommendations: [
        {
          title: "Phase the delivery and hold the gates",
          detail:
            "Do not start development until requirements and process fit are signed. Do not go live until integration, data quality, security, and UAT have closed. Rushing handover is how R1 and R2 land in production.",
        },
        {
          title: "Involve property managers from Week 1",
          detail:
            "Staff resistance is scored extreme. Workshops, UAT, and a clear story of what the role becomes (inspections, portfolio, clients — not re-keying) are the treatment, not a training pack in Week 23.",
        },
        {
          title: "Put extreme risks on the weekly agenda",
          detail:
            "The Project Manager reviews high and extreme items every week. Escalate anything that threatens data, compliance, budget, go-live, or the critical path to the sponsor. A register that is not reviewed is decoration.",
        },
        {
          title: "Prove the cloud path before development depends on it",
          detail:
            "Test environments, IAM, backup, and DR early. Lease-renewal spikes are the reason for cloud scale; misconfiguration (R8) is the reason it cannot be an afterthought.",
        },
        {
          title: "Review actual savings at twelve months before adding bots",
          detail:
            "Compare realised admin-hour reduction to the 25–60% range. Expand to other processes only if the first workflows are stable. Keep AI judgement out until there is a controlled process and an audit trail to learn from.",
        },
      ],
      impact:
        "The intended outcome of the assignment is a sponsor-ready yes/no: technically feasible, inside the $450,000 ceiling, with named risks and a payback that depends on integration, data, and adoption. No bots were deployed. No real-estate client saving is claimed. The figures are the course model.",
      reflection:
        "If I were taking this into a workplace next, I would want one measured as-is baseline (hours and error rates on the four sync paths) before promising 25%. The plan is honest about NPV sensitivity; it is thinner on how those hours would actually be counted after go-live. I would also keep the out-of-scope list in front of every change request — the failure mode of RPA programmes is ‘just one more process’ until the critical path and the risk register no longer match the work.",
      stakeholders: [
        {
          name: "Executive sponsor",
          interest: "Stay inside $450,000; a decision they can defend",
          influence: "High",
          need: "Stage gates, cost tracking, and escalation on extreme risk",
        },
        {
          name: "Property managers and admin staff",
          interest: "Less re-keying without losing control of exceptions",
          influence: "High",
          need: "A workflow that matches real leasing and maintenance work",
        },
        {
          name: "Operations manager",
          interest: "Adoption and a clean handover",
          influence: "High",
          need: "Training, role clarity, and a fallback if bots fail",
        },
        {
          name: "Business analysts",
          interest: "Requirements and process truth through UAT",
          influence: "High",
          need: "Access to SMEs, sample data, and exception scenarios",
        },
        {
          name: "Cybersecurity specialist",
          interest: "Tenant, finance, and property data not leaking via bots",
          influence: "High",
          need: "Least privilege, MFA, logging, and a pen-test before production",
        },
        {
          name: "Tenants (indirect)",
          interest: "Faster, consistent lease and maintenance handling",
          influence: "Low",
          need: "Accurate records and an audit trail — they do not see the bots",
        },
      ],
      currentProcess: [
        {
          id: "C1",
          title: "Event in one system",
          actor: "Property manager / admin",
          detail: "A lease is signed or a tenant, rent, or access record changes in one place.",
          pain: "The fact now has to exist in three other systems as well.",
        },
        {
          id: "C2",
          title: "Re-key to accounting",
          actor: "Admin",
          detail: "The same data is typed into the ledger.",
          pain: "Delay and transcription error.",
        },
        {
          id: "C3",
          title: "Re-key to maintenance and tenant DB",
          actor: "Admin",
          detail: "Maintenance and tenant systems are updated by hand.",
          pain: "Systems diverge; nobody has a single picture.",
        },
        {
          id: "C4",
          title: "Re-key to access control",
          actor: "Admin / building",
          detail: "Access rights are updated separately.",
          pain: "Wrong access or delayed access during turnover.",
        },
        {
          id: "C5",
          title: "Peak-season overload",
          actor: "Property managers",
          detail: "Lease renewals stack on the same swivel-chair path.",
          pain: "Temps or overtime; high-value work (inspections, clients) waits.",
        },
      ],
      futureProcess: [
        {
          id: "F1",
          title: "Event in source system",
          actor: "Property manager",
          detail: "The change is entered once in the system of record.",
        },
        {
          id: "F2",
          title: "Bot sync on mapped rules",
          actor: "RPA bot",
          detail: "Mapped fields update accounting, maintenance, tenant, and access. Every action is logged.",
        },
        {
          id: "F3",
          title: "Exception queue",
          actor: "Admin / BA rules",
          detail: "Non-rule cases, failed validations, and unmapped data stop rather than copy themselves.",
        },
        {
          id: "F4",
          title: "UAT and go-live gates",
          actor: "BA, SME, security",
          detail: "Process fit, data samples, pen-test, and cloud checks close before production.",
        },
        {
          id: "F5",
          title: "High-value work",
          actor: "Property manager",
          detail: "Time moves to inspections, portfolio, and clients. Bots absorb renewal spikes within the cloud capacity plan.",
        },
      ],
      requirements: [
        {
          id: "RPA-F-01",
          type: "Functional",
          statement:
            "The solution must automate selected rule-based tasks: tenant updates, lease data, rent reconciliation support, maintenance requests, document validation, and cross-system sync.",
          priority: "Must",
        },
        {
          id: "RPA-F-02",
          type: "Functional",
          statement:
            "Bots must integrate with existing accounting, maintenance, tenant, and access systems and must not replace them.",
          priority: "Must",
        },
        {
          id: "RPA-F-03",
          type: "Functional",
          statement:
            "Every bot action must produce logs, exception reports, and reviewable audit evidence.",
          priority: "Must",
        },
        {
          id: "RPA-F-04",
          type: "Functional",
          statement:
            "Non-rule and failed records must stop in an exception path with a manual fallback. Judgement-based decisions stay with a person.",
          priority: "Must",
        },
        {
          id: "RPA-NF-01",
          type: "Non-functional",
          statement:
            "Least privilege, MFA, encryption, access logging, and penetration testing must pass before production go-live.",
          priority: "Must",
        },
        {
          id: "RPA-NF-02",
          type: "Non-functional",
          statement:
            "Delivery must stay inside 24 weeks and $450,000, with resource plans based on 20 hours per person per week.",
          priority: "Must",
        },
        {
          id: "RPA-NF-03",
          type: "Non-functional",
          statement:
            "Administrative workload on the selected processes should fall by at least 25% within six months of deployment — a target, not a guaranteed result.",
          priority: "Should",
        },
        {
          id: "RPA-D-01",
          type: "Data",
          statement:
            "Data mapping, cleansing, validation, and sample testing must complete before a workflow is automated, so bots do not copy incorrect records across systems.",
          priority: "Must",
        },
      ],
    },
  },
  {
    slug: "financial-services-wan-security",
    title: "Financial Services WAN — Design and Security Assessment",
    category: "Systems / Technology",
    featured: false,
    origin: "university",
    org: "Macquarie University COMP2270 · Individual assignment",
    period: "2025",
    problem:
      "A financial-services provider with six branches and a data centre needed a WAN that could grow without wasting address space, and a security view of what MPLS does not protect by default.",
    outcome:
      "A VLSM addressing plan, a hub-and-spoke MPLS design simulated in Cisco Packet Tracer, end-to-end connectivity tests to an intranet server, and a seven-asset risk register with CIA-aligned controls. Lab coursework — not a live production network.",
    tools: [
      "Cisco Packet Tracer",
      "VLSM",
      "MPLS (simulated)",
      "ACLs",
      "Risk register",
    ],
    skills: [
      "Network Design",
      "Security Risk Assessment",
      "Risk Management",
      "Requirements Gathering",
    ],
    deliverables: [
      "Addressing plan",
      "Packet Tracer topology",
      "Connectivity tests",
      "Security risk table",
    ],
    preview: "network",
    links: {},
    caseStudy: {
      problem:
        "The COMP2270 brief was a financial-services firm operating from six sites plus a data centre. They needed one intranet they could reach from every branch, address space that would not run out as they added hosts or sites, and a clear view of confidentiality, integrity, and availability on a provider WAN. MPLS moves packets quickly; it does not encrypt them. Treating ‘we bought MPLS’ as a security control would have left tenant-grade financial traffic readable on the carrier path.",
      objective: [
        "How do we size subnets so each site has the hosts it needs now, 20% headroom, and two future sites — without a flat wasted /16?",
        "What WAN shape lets every branch reach the data-centre intranet without every branch being able to see every other branch?",
        "Can the design be proven in Packet Tracer (routing, VLANs, HTTP to the intranet) rather than only drawn?",
        "Which assets actually need controls, and which risks does MPLS leave open?",
      ],
      dataContext:
        "Individual COMP2270 (Networking and Cloud Computing) assignment, submitted 2 November 2025. The client is the unit scenario, not a named bank I deployed for. Task 1 is design and a working Packet Tracer lab: VLSM from 11.189.0.0, WAN links as /30s, MPLS simulated with VLAN 101–106 sub-interfaces on the data-centre router because Packet Tracer has no native MPLS. Task 2 is a security risk table and control discussion. Connectivity evidence in the report is ping and browser access to the intranet server at 11.189.0.1 from site PCs — not a production penetration test.",
      approach: [
        "Build a VLSM table from host counts (plus 20% growth), then assign /26, /27, /28, and /30 prefixes instead of one size for every LAN.",
        "Reserve two /26s for future sites and leave space after 11.189.2.0 for later growth.",
        "Design a hub-and-spoke path: each site router to the data-centre router through a provider MPLS cloud, simulated in Packet Tracer as point-to-point VLAN sub-interfaces.",
        "Configure static routes, a trunk for VLANs 101–106, and an HTTP intranet server, then test from representative PCs at each site.",
        "List assets, risks, and controls, then map them to confidentiality (IPsec, ACLs), integrity (SSH, hardening), and availability (UPS, backups, redundant paths).",
      ],
      tools: [
        "Cisco Packet Tracer",
        "VLSM / CIDR",
        "Static routing",
        "802.1Q VLANs",
        "ACL / SSH (as designed)",
        "Asset–risk–control table",
      ],
      analysis: [
        {
          question: "How tight should each site’s subnet be?",
          insight:
            "Host demand was uneven: the data centre and Site 4 needed room for tens of devices; Sites 1 and 2 needed about ten. A single large mask would have wasted addresses; a single small mask would have blocked the data centre. VLSM matches prefix to need: /26 for the DC and Site 4, /27 for the mid-size branches, /28 for the small ones, /30 for each WAN link (exactly two usable addresses). Twenty percent growth is in each LAN count, and two extra /26s sit in the plan so a seventh and eighth site do not force a redesign.",
          action:
            "Size from host count plus growth. Do not copy-paste /24s. Keep WAN links on /30s.",
          chart: {
            type: "table",
            caption: "VLSM plan from the COMP2270 report (host counts include 20% growth)",
            headers: ["Site", "Hosts planned", "Prefix", "Why that size"],
            rows: [
              ["Data centre LAN", "50+", "/26", "Servers and network devices"],
              ["Site 4", "36", "/26", "Largest branch"],
              ["Future sites A and B", "~40 reserved", "/26 each", "Grow without renumbering"],
              ["Site 5", "23", "/27", "Mid-size LAN"],
              ["Sites 3 and 6", "15 and 14", "/27", "Smaller branches, still /27"],
              ["Sites 1 and 2", "10 each", "/28", "Smallest LANs"],
              ["Core–site WAN links", "2 usable each", "/30", "Point-to-point only"],
            ],
          },
        },
        {
          question: "Why hub-and-spoke MPLS, and what did the lab actually prove?",
          insight:
            "Each branch reaches hosted services through the data centre, not through a full mesh. That is simpler to operate and stops one branch LAN from talking straight to another — useful if a site is compromised. Packet Tracer cannot configure real MPLS, so the lab used VLAN 101–106 sub-interfaces as stand-ins for those virtual circuits, static routes for reachability, and an HTTP server at 11.189.0.1 (gateway 11.189.0.2). The evidence in the report is ICMP and a browser page from every site PC, plus router config output. That proves addressing and routing in the model. It does not prove a carrier MPLS VRF or production QoS.",
          action:
            "Treat the lab as a logical MPLS shape plus a connectivity test. Do not claim a live financial WAN.",
          chart: {
            type: "table",
            caption: "What the Packet Tracer build covered",
            headers: ["Piece", "In the lab", "Limit"],
            rows: [
              [
                "WAN",
                "VLAN 101–106 sub-interfaces on the DC router",
                "Simulation of MPLS, not native label switching",
              ],
              [
                "LAN",
                "Router, switch, three PCs per site with static IPs",
                "Representative hosts, not a full branch inventory",
              ],
              [
                "Intranet",
                "HTTP server 11.189.0.1/26 reachable from all sites",
                "Welcome page test, not an application stack",
              ],
              [
                "Routing",
                "Static routes and a trunk for the simulated WAN VLANs",
                "No dynamic IGP or real MPLS labels",
              ],
            ],
          },
        },
        {
          question: "What does MPLS not give you for a financial-services network?",
          insight:
            "MPLS is a forwarding optimisation. The report is explicit that it does not encrypt by default, so a listener on the provider path can still see payload. The control is IPsec from each branch to the data centre before traffic leaves the site. ACLs restrict which subnets can talk to the intranet; SSH replaces casual management access; unused ports and port security reduce a walk-up on a branch switch. Availability is a separate list: UPS, config backups, redundant DC paths, SNMP on WAN links. Hub-and-spoke plus VLANs also limits east–west movement between branches.",
          action:
            "Buy encryption and access control as controls. Do not file MPLS under ‘secure WAN’ without IPsec (or equivalent) and ACLs.",
          chart: {
            type: "table",
            caption: "Asset–risk–control extract from Task 2",
            headers: ["Asset", "Main risks", "Controls in the plan"],
            rows: [
              [
                "Intranet server (11.189.0.1)",
                "Unauthorised access, breach, DoS",
                "Firewall/ACLs, admin auth, patching, offsite backup",
              ],
              [
                "Data-centre router",
                "Config tampering, routing attacks, single point of failure",
                "Management ACLs, SSH, config backup, redundant link",
              ],
              [
                "MPLS WAN (VLANs 101–106)",
                "Eavesdropping (no default encryption), link failure",
                "IPsec tunnels, SNMP monitoring, backup paths",
              ],
              [
                "Branch routers and switches",
                "Misconfig, unauthorised access, malware",
                "Credentials, disable unused ports, port security, firmware",
              ],
              [
                "Client PCs",
                "Malware, phishing, accidental leaks",
                "Antivirus, auth, VLAN restriction, user training",
              ],
              [
                "Data-centre infrastructure",
                "Power, hardware failure, physical intrusion",
                "UPS, spares, physical security, maintenance",
              ],
              [
                "Network services",
                "Unpatched vulns, DoS",
                "Patching, IDS/IPS, periodic vulnerability assessment",
              ],
            ],
          },
        },
      ],
      findings: [
        "Addressing is a growth decision. VLSM plus reserved /26s is how six sites stay tidy without blocking the next two.",
        "Hub-and-spoke through the data centre simplifies operations and contains a branch compromise better than a flat mesh.",
        "Packet Tracer can prove IP, VLANs, static routing, and HTTP reachability. It cannot stand in for a carrier MPLS service.",
        "MPLS is not a confidentiality control. For a financial-services WAN, IPsec (or equivalent) has to sit on top.",
        "Security work here is CIA mapped onto assets: encrypt the path, restrict who can reach the intranet, and keep the DC from being a silent single point of failure.",
      ],
      recommendations: [
        {
          title: "Keep the DC as the only intranet front door",
          detail:
            "Branches should reach hosted services through the core, not each other. VLAN separation in the lab is the containment idea; in production that is VRF/ACL policy, not hope.",
        },
        {
          title: "Encrypt the provider path",
          detail:
            "Assume MPLS is readable. Terminate IPsec (or a comparable overlay) at the data centre before go-live of anything that carries financial data.",
        },
        {
          title: "Do not leave the core as an unbacked single point",
          detail:
            "The risk table already flags the DC router. Management ACLs, SSH, config backup, and a redundant path are part of the design, not optional extras.",
        },
        {
          title: "Use the addressing plan as a change-control artefact",
          detail:
            "New sites take the reserved /26s and a new /30. Do not improvise a LAN from leftover space after 11.189.2.0 without updating the table.",
        },
      ],
      impact:
        "The intended outcome is a documented, testable lab design: every site can reach the intranet server, the address plan can absorb growth, and security controls are named against CIA rather than assumed from MPLS. No production financial-services network was deployed. No uptime or incident metric is claimed.",
      reflection:
        "If I were taking this into a real change, I would replace static routes with a routing protocol, and I would treat IPsec and ACL hits as test evidence — not only ping and a welcome page. The assignment already separates ‘MPLS for forwarding’ from ‘IPsec for confidentiality’; that distinction is the part I would keep in a BA conversation with infrastructure.",
      stakeholders: [
        {
          name: "Financial-services operator (scenario)",
          interest: "Reach the intranet from every branch; grow without a redesign",
          influence: "High",
          need: "A stable addressing plan and a WAN that does not dump cleartext on the carrier",
        },
        {
          name: "Network / infrastructure",
          interest: "A topology they can configure and troubleshoot",
          influence: "High",
          need: "VLSM table, hub-and-spoke, and explicit WAN simulation limits",
        },
        {
          name: "Security / risk",
          interest: "Confidentiality of financial traffic; contained breaches",
          influence: "High",
          need: "IPsec, ACLs, hardening, and an asset-level risk table",
        },
        {
          name: "Branch staff",
          interest: "Working access to intranet services",
          influence: "Medium",
          need: "Reachability without east–west exposure they did not ask for",
        },
      ],
      requirements: [
        {
          id: "NET-F-01",
          type: "Functional",
          statement:
            "Every branch must reach the data-centre intranet server over the WAN using the assigned addressing plan.",
          priority: "Must",
        },
        {
          id: "NET-F-02",
          type: "Functional",
          statement:
            "Site traffic must be logically separated so one branch cannot directly access another’s LAN.",
          priority: "Must",
        },
        {
          id: "NET-F-03",
          type: "Functional",
          statement:
            "The addressing scheme must include 20% host growth per site and reserved subnets for two future sites.",
          priority: "Must",
        },
        {
          id: "NET-NF-01",
          type: "Non-functional",
          statement:
            "Traffic on the provider WAN must be encrypted (IPsec or equivalent). MPLS forwarding alone is not a confidentiality control.",
          priority: "Must",
        },
        {
          id: "NET-NF-02",
          type: "Non-functional",
          statement:
            "Device management must use SSH and source-restricted access. Unused switch ports must be disabled.",
          priority: "Must",
        },
        {
          id: "NET-D-01",
          type: "Data",
          statement:
            "WAN links use /30 networks; LAN prefixes follow VLSM from recorded host counts. The intranet server is 11.189.0.1/26.",
          priority: "Must",
        },
      ],
    },
  },
  {
    slug: "food-hub-surplus-redistribution",
    title: "The Food Hub — Surplus Food Redistribution",
    category: "Business Analysis",
    featured: false,
    origin: "university",
    org: "Macquarie University MQBS3010 · Individual report (group initiative)",
    period: "2025",
    problem:
      "Campus vendors were throwing out surplus meals while students paid full price next door. The group needed an information system that could list leftover food, take payment, and turn waste into numbers a university could report — without pretending an app is a sustainability strategy on its own.",
    outcome:
      "An individual BIS design for The Food Hub: IPO operating model, app and cloud architecture, relational data (vendors, listings, orders, impact), privacy under the Australian Privacy Principles, and KPIs for waste, carbon, and a target return above 3% in five years. Coursework design — the platform was not deployed to campus vendors.",
    tools: [
      "IPO model",
      "ERD",
      "Process design",
      "BI / KPI design",
      "Privacy (APPs)",
    ],
    skills: [
      "Information Systems Design",
      "Requirements Gathering",
      "Business Process Mapping",
      "Dashboarding & Reporting",
      "Stakeholder Communication",
    ],
    deliverables: [
      "BIS operating model",
      "App / data architecture",
      "ERD (vendors, listings, orders, impact)",
      "Sustainability KPI set",
    ],
    preview: "foodhub",
    links: {},
    caseStudy: {
      problem:
        "University food courts produce surplus at closing while students still need affordable meals. The group initiative, The Food Hub, is a digital and physical channel: campus vendors list leftover food at a discount; students buy and collect it. Too Good To Go is the analogue, not a partner. My MQBS3010 individual report (19 October 2025) was the BIS slice of that initiative — architecture, data, automation, and ethical handling of payments and personal data — so sustainability is something the system can measure, not only claim.",
      objective: [
        "What inputs, processes, and outputs make surplus redistribution an operation rather than a one-off donation stall?",
        "What does the app actually have to do for vendors and students, and what belongs in the cloud versus on a campus server?",
        "Which entities and statuses does the database need so a listing is real-time and a bag cannot be sold twice?",
        "Which numbers would let Macquarie report waste, carbon, and a commercial return — and which are still targets?",
        "What privacy and food-safety controls are required before anyone should trust the platform with payments or meals?",
      ],
      dataContext:
        "Individual report for MQBS3010 Agility and Excellence in Business, inside a group initiative. I did not build a production app. The work is a systems design: IPO model from the group proposal, a mobile/web architecture, a relational model (vendors, food listings with a status field, student orders, impact reports), BI and predictive-analytics intent, and privacy aligned to the Australian Privacy Principles. The financial target in the report is a return greater than 3% within five years. That is a design objective, not a realised result. No kg of food diverted or dollar saving is claimed.",
      approach: [
        "Frame the hub with an Input–Process–Output model so surplus data, storage, and staff map onto sort, list, redistribute, and then onto waste, cost, and community measures.",
        "Specify an app as the transaction channel: vendors post surplus, students see listings, pay, and book pickup — with notifications so food moves before it spoils.",
        "Put the database and vendor APIs on cloud infrastructure so a second campus is a configuration problem, not a new server room.",
        "Design a relational model with listing status as a first-class field, and role-based access plus validation so stock and orders stay consistent.",
        "Define BI views (recovery, carbon, revenue) and automated sustainability reporting so SDG 12 is a dashboard, not a paragraph in a yearbook.",
        "Treat encryption, authentication, and APP compliance as adoption requirements, not a legal appendix.",
      ],
      tools: [
        "Input–Process–Output model",
        "Entity-relationship design",
        "Cloud / API architecture (as specified)",
        "KPI / dashboard design",
        "Australian Privacy Principles",
      ],
      analysis: [
        {
          question: "What is the operating system, not just the slogan?",
          insight:
            "Without an IPO picture, ‘reduce food waste’ is a goal with no workflow. Inputs are surplus records, the app, storage, and staff. Processes are sorting, listing, and handing food over. Outputs are less waste, some cost recovery, and a community effect. The BIS job is to make each step observable: a vendor cannot list what the database does not know, and Macquarie cannot report what the system never stored.",
          action:
            "Run the hub as a closed loop: capture surplus, move it, record the outcome. Do not launch a listing UI with no impact table.",
          chart: {
            type: "table",
            caption: "IPO model used for The Food Hub",
            headers: ["Stage", "What sits here", "If this is missing"],
            rows: [
              [
                "Inputs",
                "Surplus food data, app, storage, staff",
                "Nothing to list, or listings that are already unsafe",
              ],
              [
                "Processes",
                "Sort, list, transact, redistribute",
                "Food still hits the bin; students never see it",
              ],
              [
                "Outputs",
                "Waste reduction, cost recovery, community access",
                "No evidence for SDG 12 or for a 3% return target",
              ],
            ],
          },
        },
        {
          question: "What does the data model have to lock in?",
          insight:
            "The ERD in the report links vendors, food listings, student orders, and impact reports. Status on each bag is the real-time field — available, reserved, collected (or equivalent) — so two students cannot buy the same leftover. Orders are the financial record for profitability reporting. Validation, timestamps, and role-based access are how you stop duplicate stock and keep food-safety traceability. A spreadsheet of ‘meals saved’ that is not tied to listings and orders would not survive an audit.",
          action:
            "Persist listing status and orders as source data. Derive waste and revenue from those tables. Do not type impact numbers in by hand.",
          chart: {
            type: "table",
            caption: "Core entities in the Food Hub data design",
            headers: ["Entity", "Job", "Why it exists"],
            rows: [
              ["Vendor", "Campus food provider", "Who is listing surplus"],
              ["Food listing", "A bag/meal with a status", "Real-time availability; prevents double sale"],
              ["Student order", "Purchase and pickup", "Revenue, cashflow, and who collected what"],
              ["Impact report", "Aggregated waste / carbon / savings", "University and investor-facing disclosure"],
            ],
          },
        },
        {
          question: "Where should the app automate, and where must people stay?",
          insight:
            "Automation in the report is order fulfilment, inventory updates, payment verification, and (as a later capability) temperature sensors that alert when storage leaves a safe band. That removes re-keying and some spoilage. It does not decide which leftover is still safe to sell, or replace vendor judgement at close of service. Predictive analytics — peak times and popular meals — are meant to help vendors cook less surplus, which is a better intervention than redistributing food that should not have been made.",
          action:
            "Automate listing, payment, and status. Keep food-safety calls with people and sensors. Use demand forecasts to cut surplus at source, not only to discount it.",
          chart: {
            type: "table",
            caption: "Automated vs held",
            headers: ["Step", "System", "Person"],
            rows: [
              ["Post surplus listing", "App + database status", "Vendor confirms what is still edible"],
              ["Pay and book pickup", "In-app payment and schedule", "Student collects"],
              ["Stock / demand updates", "Relational updates, notifications", "Vendor adjusts production"],
              ["Temperature / spoilage alerts", "Sensors and automated alerts (specified)", "Staff act when a limit is breached"],
              ["Sustainability report", "Aggregated KPIs from transactions", "Management reads gaps and changes process"],
            ],
          },
        },
        {
          question: "How do you show both a commercial return and a sustainability result?",
          insight:
            "The initiative’s financial target is a return above 3% within five years. BI in the report is food recovered, carbon saved, and revenue — plus forecasts that should shrink overproduction. Those measures only work if they are the same events as the orders table. The risk is a pretty dashboard that is not reconcilable to listings. Privacy sits on the same path: payments and student records need encryption, authentication, and APP-compliant use, or vendors and students will not adopt the channel that generates the data.",
          action:
            "Treat the 3% as a target with a benefits review, not a forecast to print. Put waste, carbon, and revenue on one grain: the completed order. Make APP compliance a go-live gate.",
          chart: {
            type: "kpi",
            items: [
              { label: "Commercial target", value: ">3% return", hint: "Within 5 years — not realised" },
              { label: "Operations KPIs", value: "Recovery / revenue", hint: "From listings and orders" },
              { label: "Environment KPIs", value: "Waste / carbon", hint: "For SDG 12 reporting" },
              { label: "Trust gate", value: "APPs + payments", hint: "Encryption and auth" },
            ],
          },
        },
      ],
      findings: [
        "Food waste on campus is a coordination problem: surplus exists, demand exists, and there is no shared listing of what is still safe to sell.",
        "The useful system is IPO plus a listing status. An app without a data model will double-sell bags or invent impact numbers.",
        "Cloud and APIs are how a second campus is added. On-site servers would make ‘scale’ a facilities project.",
        "Automation should take fulfilment, payments, and alerts. Food safety and production volumes stay with vendors and staff.",
        "A >3% five-year return and SDG 12 reporting are only honest if they are derived from the same completed orders. Privacy is part of that operating model, not a separate ethics essay.",
      ],
      recommendations: [
        {
          title: "Pilot one food court before a multi-campus story",
          detail:
            "Prove listing, payment, pickup, and an impact extract on a small vendor set. Cloud architecture can wait to copy that pattern; it should not arrive before the process works.",
        },
        {
          title: "Make listing status the operational control",
          detail:
            "Available / reserved / collected (or equivalent) must be enforced in the database. That is how you protect food safety, vendor trust, and the revenue number.",
        },
        {
          title: "Report waste and money from the same events",
          detail:
            "Do not maintain a sustainability spreadsheet beside the till. Recovery, carbon, and revenue should roll up from orders so a 3% target can be checked.",
        },
        {
          title: "Put privacy on the go-live checklist",
          detail:
            "Payments and student records need encryption, authentication, and APP-aligned use. Adoption fails if the hub looks like a discount app that is careless with data.",
        },
      ],
      impact:
        "The intended outcome is a BIS design a group could build from: who lists, who buys, what is stored, what is automated, and which KPIs Macquarie could put in a sustainability report. The Food Hub was not launched to campus vendors in this unit. No waste-diverted or return figure is claimed.",
      reflection:
        "If I were taking this into a build next, I would write acceptance criteria on listing status transitions and on the impact extract (one completed order = one recovery row). I would also drop temperature sensors from MVP until a food court is actually listing daily — the first failure mode is empty or stale listings, not a missing IoT probe.",
      stakeholders: [
        {
          name: "Campus food vendors",
          interest: "Move surplus instead of binning it; some cost recovery",
          influence: "High",
          need: "A listing flow that is faster than throwing the food out",
        },
        {
          name: "Students",
          interest: "Cheaper meals that are still safe",
          influence: "High",
          need: "Real-time availability, simple payment, a pickup window",
        },
        {
          name: "Hub administrators",
          interest: "Operations that do not depend on heroic staff",
          influence: "High",
          need: "Status, payments, and a report they did not compile by hand",
        },
        {
          name: "University sustainability / reporting",
          interest: "SDG 12 evidence, not anecdotes",
          influence: "Medium",
          need: "Waste and carbon figures reconcilable to transactions",
        },
        {
          name: "Finance / investors (initiative target)",
          interest: "Whether the hub can return >3% in five years",
          influence: "Medium",
          need: "Order-level revenue and cost, not a slide of projected impact",
        },
      ],
      currentProcess: [
        {
          id: "C1",
          title: "Service winds down",
          actor: "Vendor",
          detail: "Unsold meals sit at close of service.",
          pain: "Surplus has no channel except the bin.",
        },
        {
          id: "C2",
          title: "Food discarded",
          actor: "Vendor / waste",
          detail: "Leftovers are thrown out.",
          pain: "Cost already spent; environmental waste; students still pay full price.",
        },
        {
          id: "C3",
          title: "No shared view",
          actor: "Campus",
          detail: "Students cannot see what is left; the university cannot count it.",
          pain: "Sustainability reporting has nothing operational to stand on.",
        },
      ],
      futureProcess: [
        {
          id: "F1",
          title: "List surplus",
          actor: "Vendor + app",
          detail: "Safe leftover meals are posted with a status of available.",
        },
        {
          id: "F2",
          title: "Buy and book",
          actor: "Student",
          detail: "In-app payment and pickup window. Listing status moves to reserved.",
        },
        {
          id: "F3",
          title: "Collect",
          actor: "Student + vendor",
          detail: "Handover at the stall. Status becomes collected. Order is the financial and impact event.",
        },
        {
          id: "F4",
          title: "Report",
          actor: "BIS / admin",
          detail: "Waste, carbon, and revenue roll up from completed orders for campus reporting.",
        },
      ],
      requirements: [
        {
          id: "FH-F-01",
          type: "Functional",
          statement:
            "Vendors must be able to post surplus meals in real time, including a listing status that prevents a bag being sold twice.",
          priority: "Must",
        },
        {
          id: "FH-F-02",
          type: "Functional",
          statement:
            "Students must be able to view listings, pay in-app, and schedule pickup.",
          priority: "Must",
        },
        {
          id: "FH-F-03",
          type: "Functional",
          statement:
            "The system must record vendors, listings, orders, and impact so waste, carbon, and revenue can be reported from the same events.",
          priority: "Must",
        },
        {
          id: "FH-F-04",
          type: "Functional",
          statement:
            "The system should notify students when relevant surplus is listed so food is collected before it spoils.",
          priority: "Should",
        },
        {
          id: "FH-NF-01",
          type: "Non-functional",
          statement:
            "Payment and personal data must be encrypted, authenticated, and handled in line with the Australian Privacy Principles.",
          priority: "Must",
        },
        {
          id: "FH-NF-02",
          type: "Non-functional",
          statement:
            "Infrastructure should allow additional campuses without a new on-site server build.",
          priority: "Should",
        },
        {
          id: "FH-D-01",
          type: "Data",
          statement:
            "Listing status and time-stamped orders are the source of truth. Impact metrics must be derived, not keyed in separately.",
          priority: "Must",
        },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.featured) ?? projects[0];
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category);
}
