/* ────────────────────────────────────────────────────────────────
   Project data. Single source of truth for both the grid on
   index.html and the detail pages rendered by project.html.

   To add a project: append an object here. Nothing else to edit.
   `shot` is a file in assets/shots/. `fit:'contain'` is for phone
   screenshots and diagrams that must not be cropped.
   `link: null` means there is no public URL (internal work).
   ──────────────────────────────────────────────────────────────── */

window.PROJECTS = [
  {
    slug: 'ai-scribe',
    title: 'AI Scribe',
    org: 'Practice EHR',
    group: 'ai',
    category: 'AI Product',
    year: '2026',
    status: 'Live',
    tagline: 'An ambient clinical scribe that writes the note, with instructions the provider sets and section by section regeneration.',
    link: 'https://ai-scribe-pehr.vercel.app',
    shot: 'ai-scribe.jpg',
    fit: 'cover',
    role: 'Product Manager. Requirements, UX flow, prototype',
    timeline: '2026',
    focus: 'Ambient documentation',
    stack: ['Requirements Engineering', 'LLM', 'Figma', 'Prototyping', 'User Stories'],
    overview: [
      'Clinicians spend a large share of every visit typing instead of talking to the patient. AI Scribe listens to the encounter and drafts the clinical note, so the provider reviews and signs rather than authoring from scratch.',
      'I gathered and documented the full requirements for the tool, defined the use cases, coordinated the UI and UX flows, and translated the result into tasks a developer could pick up. The design deliberately keeps the provider in control at every step. Nothing is filed without a human accepting it.'
    ],
    contributions: [
      'Defined which note sections the scribe generates, and made each one individually toggleable so a practice can scope the scribe to how it actually documents.',
      'Designed pre visit instructions the provider sets themselves, so the scribe follows a clinician’s own documentation preferences instead of one global house style.',
      'Specified regeneration of a single section or the whole note after it is finished, so a provider can rewrite one paragraph without discarding the rest.',
      'Covered the full lifecycle in the flow: setup, live capture, pause and resume, background processing, and an unreviewed draft state that survives navigating away.',
      'Translated the requirements into groomed backlog items and user stories for the development team.'
    ]
  },
  {
    slug: 'ai-assistant',
    title: 'In Product AI Assistant',
    org: 'Practice EHR',
    group: 'ai',
    category: 'AI Product',
    year: '2026',
    status: 'Live',
    tagline: 'Redesigned the assistant that ships inside the product, and added AI summaries for patient documents and medications.',
    link: 'https://pehr-documents.vercel.app',
    shot: 'ai-assistant.jpg',
    fit: 'cover',
    role: 'Product Manager. Audit, redesign, prototype',
    timeline: '2026',
    focus: 'Chart aware assistance',
    stack: ['LLM', 'Design System', 'Prototyping', 'REST APIs'],
    overview: [
      'The AI Assistant already shipped in the product, but it sat off to the side of the chart and was not obviously connected to whatever the user was looking at. I audited what it actually did, then redesigned the experience around chart context.',
      'The redesigned panel states what it is reading, whether that is the open chart or the documents list, before it answers. It offers concrete next actions instead of a blank prompt box.'
    ],
    contributions: [
      'Audited the live assistant’s real behaviour and capabilities before proposing changes, rather than designing against an assumption.',
      'Redesigned the assistant entry point and panel, and shipped it into the documents experience.',
      'Made the panel declare its own context, so users know what the answer is grounded in.',
      'Built AI summary prototypes for patient documents and for medications, including a summarize action on each row of the documents table.',
      'Designed an AI Assist concept for the patient portal so the same capability reaches patients, not only staff.'
    ]
  },
  {
    slug: 'surescripts',
    title: 'Electronic Prescribing Certification',
    org: 'Practice EHR',
    group: 'ops',
    category: 'Compliance',
    year: '2026',
    status: 'Internal',
    tagline: 'Surescripts certification workflow documentation and prototype covering 33 ACR flows inside a 24 second budget.',
    link: null,
    shot: 'surescripts.svg',
    fit: 'contain',
    role: 'Product Manager. Author and prototype',
    timeline: '2026',
    focus: 'Standards certification',
    stack: ['Surescripts', 'Requirements Engineering', 'Confluence', 'Prototyping'],
    overview: [
      'Electronic prescribing is a certified integration, not a feature you ship and iterate on. Every message type has a defined acknowledgment contract, and failing it fails certification.',
      'I authored the certification workflow documentation and built an interactive prototype covering 33 live ACR message flows, each of which must be acknowledged within a 24 second budget.'
    ],
    contributions: [
      'Authored the certification workflow documentation used as the reference for the integration.',
      'Mapped all 33 ACR message flows and the acknowledgment each one requires.',
      'Held the design to the 24 second acknowledgment budget, which constrains how much processing can sit in the request path.',
      'Built an interactive prototype so the flows could be walked through and reviewed before development, not just read.'
    ]
  },
  {
    slug: 'calling-agent',
    title: 'Inbound AI Calling Agent',
    org: 'Practice EHR',
    group: 'ai',
    category: 'AI Product',
    year: '2026',
    status: 'Internal',
    tagline: 'A voice agent that handles patient intake on the phone. Specced, workshopped and taken through acceptance testing.',
    link: null,
    shot: 'calling-agent.svg',
    fit: 'contain',
    role: 'Product Manager. Requirements through UAT',
    timeline: '2026',
    focus: 'Voice intake',
    stack: ['Requirements Engineering', 'LLM', 'User Stories', 'UAT'],
    overview: [
      'Front desk staff lose a large part of the day to inbound calls that are mostly structured data collection. This project put a voice agent in front of that. The patient calls, the agent captures intake, and staff receive a structured record instead of a message to call back.',
      'I led it from requirements gathering through delivery, including the acceptance testing that decided whether it was good enough to put in front of patients.'
    ],
    contributions: [
      'Led requirements gathering with the stakeholders who own the front desk workflow.',
      'Authored the functional specifications for the agent’s behaviour and its escalation paths.',
      'Facilitated UI and UX workshops to align clinical, front desk and engineering views of the flow.',
      'Created the user stories the development team worked from.',
      'Managed acceptance testing through to a streamlined patient intake solution.'
    ]
  },
  {
    slug: 'claim-ivr',
    title: 'Claim & IVR Fallback Dashboard',
    org: 'Practice EHR',
    group: 'ops',
    category: 'Healthcare Ops',
    year: '2026',
    status: 'Live',
    tagline: 'A billing call centre console with verification and manual call queues, CPT level outcomes, and work assigned by an admin.',
    link: 'https://claim-ivr-dashboard.vercel.app',
    shot: 'claim-ivr.jpg',
    fit: 'cover',
    role: 'Product Manager. Workflow design',
    timeline: '2026',
    focus: 'Revenue cycle operations',
    stack: ['Revenue Cycle', 'Workflow Design', '835 ERA', 'Prototyping'],
    overview: [
      'When an automated eligibility or claim status check fails, a human has to call the payer. That fallback work was invisible. No queue, no ownership, and no record of what the call established.',
      'This console makes it a managed workflow. Two distinct queues, claims broken down to the CPT line so an agent can see exactly which line was paid and which was denied, and an admin who assigns work to named agents.'
    ],
    contributions: [
      'Separated verification calls from manual claim calls into two queues, because they need different scripts and different skills.',
      'Took the claim detail down to the CPT line, showing paid, denied and the reason, instead of a single status for the whole claim.',
      'Designed assignment from admin to agent so fallback work has a name against it rather than sitting in a shared pile.',
      'Established during discovery that the 835 ERA already carries the code explaining a denial, which means agents were phoning payers for information the practice had already received.'
    ]
  },
  {
    slug: 'jira-dashboard',
    title: 'Jira KPI Dashboard',
    org: 'Practice EHR',
    group: 'ops',
    category: 'Internal Tooling',
    year: '2026',
    status: 'Live',
    tagline: 'Sprint management and team analytics for seven boards, built on the Atlassian Cloud API outside of Jira.',
    link: 'https://jiradashboardpehr.vercel.app',
    shot: 'jira-dashboard.jpg',
    fit: 'cover',
    role: 'Product Manager. Built it',
    timeline: '2026',
    focus: 'Agile delivery analytics',
    stack: ['React', 'Vite', 'Express', 'Atlassian REST API', 'JQL'],
    overview: [
      'I administer Jira across seven teams. Jira’s own dashboards could not answer the questions I was being asked in delivery reviews, so I built the reporting outside Jira on the Atlassian Cloud API.',
      'Each team gets its own dashboard tuned to the work it does. The analytics a Business Analyst needs are not the analytics an implementation team needs.'
    ],
    contributions: [
      'Built a custom sprint management and team analytics dashboard on the Atlassian Cloud REST API, covering all seven boards I administer.',
      'Gave each team its own view rather than forcing one shared definition of progress.',
      'Diagnosed a workflow problem where the Team field was doing double duty as both a handoff baton and a board filter, which left roughly 795 tickets invisible to the development boards.',
      'Used it to run sprint ceremonies and delivery reporting against real numbers instead of anecdote.'
    ]
  },
  {
    slug: 'gitlab-pipeline',
    title: 'Jira to GitLab Deploy Pipeline',
    org: 'Practice EHR',
    group: 'ops',
    category: 'Automation',
    year: '2026',
    status: 'Internal',
    tagline: 'Jira automation rules wired to GitLab webhooks so urgent hotfix releases go out in minutes instead of hours.',
    link: null,
    shot: 'gitlab-pipeline.svg',
    fit: 'contain',
    role: 'Product Manager. Configured the automation',
    timeline: '2026',
    focus: 'Release automation',
    stack: ['Jira Automation', 'GitLab CI/CD', 'Webhooks'],
    overview: [
      'An urgent hotfix used to mean chasing people. Move the ticket, tell someone, wait for a manual deploy. The delay was almost entirely coordination, not engineering.',
      'I configured Jira automation rules linked to GitLab webhooks so that the ticket transition itself triggers the hotfix deployment. Urgent release time went from hours to minutes.'
    ],
    contributions: [
      'Configured Jira automation rules to fire on the transitions that actually represent work being ready to ship.',
      'Wired those rules to GitLab webhooks so the pipeline starts without a human in the loop.',
      'Cut urgent release time from hours to minutes by removing the coordination step rather than speeding up the build.',
      'Kept the team notified automatically so removing the manual handoff did not also remove visibility.'
    ]
  },
  {
    slug: 'kiosk',
    title: 'Patient Check In Kiosk',
    org: 'Practice EHR',
    group: 'design',
    category: 'Product Design',
    year: '2026',
    status: 'Live',
    tagline: 'A six step iPad check in flow for an unattended front desk: identity, demographics, insurance, forms, consents, payment.',
    link: 'https://kiosk-checkin-ipad.vercel.app',
    shot: 'kiosk.jpg',
    fit: 'cover',
    role: 'Product Manager. Flow and UI',
    timeline: '2026',
    focus: 'Self service check in',
    stack: ['Design System', 'Prototyping', 'iPad and Touch'],
    overview: [
      'A check in kiosk has no one standing next to it to explain what to do. Every step has to be self evident, recoverable, and safe to abandon halfway through.',
      'This is the check in experience built for an iPad at the front desk, taking a patient from identifying themselves through to payment in six clearly numbered steps.'
    ],
    contributions: [
      'Designed a six step flow with visible progress, so a patient always knows how much is left.',
      'Gave patients four ways to identify themselves: access code, portal login, new patient, or lookup. A single path excludes someone.',
      'Sized the whole interface for touch on a kiosk rather than shrinking a desktop screen.',
      'Kept an explicit route to a human on screen for anyone who cannot or should not use self service.'
    ]
  },
  {
    slug: 'bodymap',
    title: '3D Anatomical Atlas',
    org: 'Practice EHR',
    group: 'design',
    category: 'Clinical Tooling',
    year: '2026',
    status: 'Live',
    tagline: 'An interactive 3D body map for marking findings during documentation, instead of describing a location in prose.',
    link: 'https://pehr-bodymap.vercel.app',
    shot: 'bodymap.jpg',
    fit: 'cover',
    role: 'Product Manager. Concept and build',
    timeline: '2026',
    focus: 'Structured clinical input',
    stack: ['three.js', 'GLB', 'Prototyping'],
    overview: [
      'Findings with a location, such as a rash, a wound, or a site of pain, get typed as free text. That makes them hard to compare across visits and impossible to query.',
      'This is an interactive 3D atlas where a clinician marks the anatomical site directly. The location becomes structured data captured as a by product of documenting, not a separate coding task.'
    ],
    contributions: [
      'Built an interactive 3D anatomical model that can be rotated and marked in the browser.',
      'Designed it to feed structured location data into the note rather than sitting beside it as a picture.',
      'Kept it inside the product’s visual language so it reads as part of the EHR, not an embedded third party viewer.'
    ]
  },
  {
    slug: 'kpi-bot',
    title: 'Airline KPI Automation Bot',
    org: 'Airblue',
    group: 'data',
    category: 'Data & Automation',
    year: '2023 to 2025',
    status: 'Internal',
    tagline: 'A Python bot that pulls, computes and benchmarks daily airline KPIs against competitors. Over 70% less manual effort.',
    link: null,
    shot: 'kpi-bot.svg',
    fit: 'contain',
    role: 'Revenue Management Data Analyst',
    timeline: 'Feb 2023 to Mar 2025',
    focus: 'Revenue analytics',
    stack: ['Python', 'SQL', 'Tableau', 'Power BI', 'Scikit Learn'],
    overview: [
      'Revenue management decisions were being made against numbers that analysts assembled by hand each morning. Slow, repetitive, and stale by the time anyone acted on them.',
      'I built a Python bot to fetch, calculate and benchmark daily airline KPIs against the competitor set, and put the results into dashboards management could read directly. Manual analyst effort dropped by more than 70%.'
    ],
    contributions: [
      'Built a Python bot to extract, compute and compare daily KPIs against competitor benchmarks, cutting manual reporting effort by over 70%.',
      'Analyzed booking and pricing data to forecast demand and support pricing strategy.',
      'Built regression and classification models for KPI tracking and automated reporting.',
      'Designed Tableau and Power BI dashboards for live revenue monitoring and capacity planning.',
      'Received formal management appreciation for automating the Baggage Revenue Management System.'
    ]
  },
  {
    slug: 'pitstop',
    title: 'Pitstop Record',
    org: 'Personal project',
    group: 'personal',
    category: 'Consumer App',
    year: '2026',
    status: 'Live',
    tagline: 'A car maintenance app that logs oil changes, parts and pending work, and works out what is due next.',
    link: 'https://pitstoprecord.vercel.app',
    shot: 'pitstop.jpg',
    fit: 'contain',
    role: 'Designed and built it',
    timeline: '2026',
    focus: 'Consumer product',
    stack: ['JavaScript', 'PWA', 'three.js', 'Offline first'],
    overview: [
      'Service history for a car lives in a glovebox full of receipts, which means nobody knows when the next oil change is actually due. This app keeps the history and works the due date out for you.',
      'I built it from end to end: the product decisions, the interface, and the code. It is a personal project, but it is a real shipped product with real users, and it is where I try ideas that later show up in my day job.'
    ],
    contributions: [
      'Designed and built the whole app: sign in, car setup, service logging and a pending work list.',
      'Encoded the maintenance rule so the app derives what is due rather than asking the owner to remember it.',
      'Made it work offline first, because a workshop is exactly where signal drops.',
      'Built a catalogue of local parts and services so logging a job is a few taps instead of free typing.',
      'Added an interactive 3D car viewer with paint colour selection for picking your own vehicle.'
    ]
  },
  {
    slug: 'botcro',
    title: 'BotCro',
    org: 'My own venture',
    group: 'personal',
    category: 'AI Voice Agents',
    year: '2026',
    status: 'Live',
    tagline: 'My own company. AI phone agents that answer and place calls, take orders and book appointments, in 40+ languages.',
    link: 'https://www.botcro.com',
    shot: 'botcro.jpg',
    fit: 'cover',
    role: 'Founder. Product, build and go to market',
    timeline: '2026',
    focus: 'Voice AI for small business',
    stack: ['LLM', 'Voice AI', 'Node', 'React', 'Express'],
    overview: [
      'A missed call is a lost customer for a restaurant, a clinic or a salon, and none of them can staff a phone line around the clock. BotCro answers and places calls that sound human, taking orders, booking appointments and qualifying leads on the first ring, 24 hours a day and in more than 40 languages.',
      'This is my own company, so I do all of it: the product decisions, the build, the brand and the selling. It is live with customers across the US, Pakistan, the UAE and Qatar, in restaurants, clinics, salons and real estate.'
    ],
    contributions: [
      'Built the voice agent product itself, covering inbound and outbound calling with sub second replies and a large library of voices.',
      'Built a CRM and social command centre I host myself, with a lead pipeline, an approvals queue, a content studio, a calendar and analytics.',
      'Made the whole publishing system approve first. AI drafts and schedules, but nothing goes out until a human approves it in the queue.',
      'Chose assisted publishing over full automation for personal profiles, because automating those gets real accounts banned. It cost a feature and protected the customer.',
      'Designed and shipped the brand and the marketing site, and run the content pipeline that produces the social output.'
    ]
  }
];
