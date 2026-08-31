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
    slug: 'ai-scribe-mobile',
    title: 'AI Scribe Mobile',
    org: 'Practice EHR',
    group: 'ai',
    category: 'Mobile Product',
    year: '2026',
    status: 'Live',
    tagline: 'The scribe rebuilt as a real mobile app, covering capture, transcript, review and background processing on a phone.',
    link: 'https://ai-scribe-mobile.vercel.app',
    shot: 'ai-scribe-mobile.jpg',
    fit: 'contain',
    role: 'Product Manager. Design translation and build',
    timeline: '2026',
    focus: 'Mobile clinical capture',
    stack: ['React Native', 'Expo', 'expo router', 'TypeScript', 'Figma'],
    overview: [
      'Documentation does not happen at a desk. This is the AI Scribe experience rebuilt as a native mobile app from the design system’s mobile Figma library, one codebase targeting iOS and Android.',
      'The mobile version had to solve problems the desktop one does not. A provider walks away mid encounter, takes a call, or loses signal. Capture therefore has to be interruptible and resumable rather than one uninterrupted session.'
    ],
    contributions: [
      'Translated the mobile design frames into a working application, screen by screen, against the source Figma rather than an approximation of it.',
      'Built the full capture lifecycle for a phone: visit details, scribe setup, live recording, transcript review, processing, resume later, and a background state.',
      'Kept a single codebase for iOS and Android so the flow does not diverge between platforms.',
      'Carried the AI suggestions and scribe settings surfaces across from the desktop product so behaviour stays consistent.'
    ]
  },
  {
    slug: 'ai-visit-summary',
    title: 'AI Visit Summary',
    org: 'Practice EHR',
    group: 'ai',
    category: 'AI Product',
    year: '2026',
    status: 'Live',
    tagline: 'Turns a signed clinical note into plain language the patient can actually read. The provider reviews it before release.',
    link: 'https://ai-visit-summary.vercel.app',
    shot: 'ai-visit-summary.jpg',
    fit: 'cover',
    role: 'Product Manager. End to end flow design',
    timeline: '2026',
    focus: 'Patient communication',
    stack: ['LLM', 'Prototyping', 'Clinical Workflow', 'Multi language'],
    overview: [
      'A progress note is written for other clinicians and for billing. Patients receive it and understand almost none of it. This feature generates a plain language version of the visit and releases it to the patient portal.',
      'The important design decision is the gate. The summary is generated after sign off and shown to the provider first. Nothing reaches the patient until a clinician has read it and pressed release, because an AI summary of a medical encounter is not a place for silent automation.'
    ],
    contributions: [
      'Designed the whole path: Open Visit status, sign off confirmation, generated progress note, print preview, AI summary, provider edit, release to portal.',
      'Made reading level and language selectable, so the same note can be issued at a simpler grade level or in the patient’s own language.',
      'Put an explicit provider approval step in front of release. The summary is a draft for a human, never an automatic patient facing message.',
      'Specified a second variant that summarizes a visit which has no clinical note at all, working from the CPT and ICD claim lines instead.'
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
    slug: 'demographics',
    title: 'Demographics & Configure Fields',
    org: 'Practice EHR',
    group: 'design',
    category: 'Product Design',
    year: '2026',
    status: 'Live',
    tagline: 'The patient demographics screen, plus a field editor that lets a practice reorder, require and hide fields.',
    link: 'https://demographics-configure.vercel.app',
    shot: 'demographics.jpg',
    fit: 'cover',
    role: 'Product Manager. Figma to working screen',
    timeline: '2026',
    focus: 'Configurability',
    stack: ['Figma', 'Design System', 'Prototyping'],
    overview: [
      'Demographics is one of the most used screens in the product and one of the most argued about, because every practice wants a slightly different set of fields in a slightly different order.',
      'I built the screen from the design file and added the thing that resolves the argument: a field editor where a practice can drag fields into their own order, mark them required, or hide them entirely.'
    ],
    contributions: [
      'Implemented the demographics screen faithfully from the source design rather than approximating it.',
      'Added a field editor supporting drag to reorder, mark as required, and hide.',
      'Solved the layout problem hiding a field creates. The grid repacks so a hidden field does not leave a hole in the form.',
      'Kept the whole thing inside the shared design system so it matches the rest of the product.'
    ]
  },
  {
    slug: 'patient-portal',
    title: 'Patient Portal',
    org: 'Practice EHR',
    group: 'design',
    category: 'Product Design',
    year: '2026',
    status: 'Live',
    tagline: 'The full patient portal front end running standalone, used to prototype and demo portal features with no backend.',
    link: 'https://pehr-patient-portal.vercel.app',
    shot: 'patient-portal.jpg',
    fit: 'cover',
    role: 'Product Manager. Prototyping harness',
    timeline: '2026',
    focus: 'Patient facing product',
    stack: ['React', 'Design System', 'Prototyping'],
    overview: [
      'Demonstrating a portal change normally means a full environment: backend, database, test patients. That is slow, and it means concepts get discussed in the abstract instead of clicked through.',
      'I got the real portal front end running on its own with the network layer mocked, so any portal concept can be built and demonstrated as a working screen. Balance, messages, appointments, health records and visit summaries all included.'
    ],
    contributions: [
      'Stood up the production portal front end with no backend, so portal work can be prototyped and shown at full fidelity.',
      'Used it as the destination for the AI Visit Summary release flow, so the handoff could be demonstrated from one end to the other.',
      'Prototyped an AI Assist concept for patients inside the real portal shell rather than in a mockup.'
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
    slug: 'ai-noshow',
    title: 'AI Show Up Likelihood',
    org: 'Practice EHR',
    group: 'ai',
    category: 'ML Feature',
    year: '2026',
    status: 'Live',
    tagline: 'No show risk scored inline across three scheduling views, with a tooltip that explains every individual score.',
    link: 'https://pehr-ai-noshow.vercel.app',
    shot: 'ai-noshow.jpg',
    fit: 'cover',
    role: 'Product Manager. Feature design',
    timeline: '2026',
    focus: 'Explainable ML in the UI',
    stack: ['Machine Learning', 'SHAP', 'Scheduling', 'Prototyping'],
    overview: [
      'A no show costs a slot that could have gone to someone else. A model can flag the risk, but a bare percentage next to a patient’s name is not something front desk staff will act on or trust.',
      'The design surfaces the score where scheduling decisions are already being made, and pairs it with an explanation, for each appointment, of which factors drove it.'
    ],
    contributions: [
      'Put the likelihood indicator inline in all three scheduling views instead of hiding it in a separate report.',
      'Attached a SHAP based explanation to every score, so staff can see which factors pushed a specific appointment up or down.',
      'Designed it as decision support. The score informs an overbooking or reminder decision, it never cancels or moves anything on its own.'
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
  }
];
