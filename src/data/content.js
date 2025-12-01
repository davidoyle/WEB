export const screwedSituations = [
  {
    title: "I just got hurt / just opened a claim",
    description: "You're early in. Maybe you're still getting paid, maybe not. Things are confusing but not openly hostile yet.",
    indicators: [
      "You were injured at work recently",
      "You've reported it (or you're about to)",
      "You're seeing a doctor/physio but don't really understand what WorkSafeBC is doing with any of it",
      "You have a bad feeling but no smoking gun yet"
    ],
    priorities: [
      "Start a paper trail from day one",
      "Capture every report, appointment, and phone call",
      "Learn what patterns to watch for so you can catch the bullshit early"
    ],
    nextMoves: [
      { text: "Evidence & Documentation Center", section: "documentation" },
      { text: "Tactical Strategy/Pressure Points (Quick Scan)", section: "pressure" }
    ],
    relatedWCATCaseIds: ["wcat-2003-00254", "wcat-2004-05173"]
  },
  {
    title: "I got a bullshit decision letter or they cut my benefits",
    description: "This is where most people land here. You've just been told something like: 'Your condition has resolved' while your knee/back/brain is very clearly not 'resolved.'",
    indicators: [
      "A decision letter that doesn't match your reality",
      "Medical evidence that seems ignored or twisted",
      "A sudden drop in income and a rising sense of panic"
    ],
    priorities: [
      "Do not call just to vent and leave no record",
      "Translate your anger into targeted, written questions",
      "Decide whether to hit back through Review, WCAT, your MLA, or all of the above"
    ],
    nextMoves: [
      { text: "Tactical Strategy/ Pressure Points", section: "pressure" },
      { text: "Email & Letter Templates", section: "templates" },
      { text: "Legal Precedent Armory (Starter WCAT Cases)", section: "wcat" }
    ],
    relatedWCATCaseIds: ["wcat-2006-03608", "wcat-2007-02958"]
  },
  {
    title: "WorkSafeBC / my employer / my MLA is ignoring me or gaslighting me",
    description: "You've been trying to do it 'the polite way,' and now you're getting copy-paste form letters, 'Our records show you haven't...' when you clearly have, and vague replies that dodge every specific question.",
    indicators: [
      "You feel like you're shouting into a void",
      "Nobody answers the exact thing you asked",
      "You're starting to question your own reality"
    ],
    priorities: [
      "Stop begging. Start documenting non-response",
      "Shift from 'please help me' to 'for the record, here's what you're doing'",
      "Move the fight into arenas where records matter: appeals, legislative oversight, complaints"
    ],
    nextMoves: [
      { text: "Tactical Strategy/Pressure Points – Oversight Section", section: "pressure" },
      { text: "Email & Letter Templates – Oversight & Escalation", section: "templates" },
      { text: "Evidence & Documentation Center", section: "documentation" }
    ],
    relatedWCATCaseIds: ["wcat-2009-00149", "wcat-2004-06708-2004-03907"]
  },
  {
    title: "I'm already in Review / WCAT / appeal-land",
    description: "You're past the 'WTF just happened' stage. You've filed (or are about to file) a Review, WCAT appeal, human rights complaint, or you're building your written submission.",
    indicators: [
      "You've got a stack of letters and reports",
      "You know WorkSafeBC is wrong, but you're not sure how to prove it in tribunal language",
      "You're tired as hell and need something you can copy, adapt, and fire"
    ],
    priorities: [
      "Build a clean narrative and timeline out of the chaos",
      "Tie your facts to actual legal principles and WCAT precedent",
      "Make your written submissions sound like someone who knows exactly where the system failed"
    ],
    nextMoves: [
      { text: "Legal Precedent Armory – WCAT Toolkit", section: "wcat" },
      { text: "Evidence & Documentation Center", section: "documentation" },
      { text: "Tactical Strategy/Pressure Points", section: "pressure" }
    ],
    relatedWCATCaseIds: ["wcat-a1900037", "wcat-2006-01779"]
  }
];

export const first30MinutesSteps = [
  {
    title: "Breathe, Don't Call",
    description: "Right now, they have: A written decision, A timestamp, An internal note that says 'letter sent'. You have: Shock, Rage, Zero record of what you're about to do next.",
    donts: [
      "Call your case manager to 'talk it out'",
      "Rant on the phone with no notes",
      "Say 'okay, I understand' just to get off the call"
    ]
  },
  {
    title: "Take a Photo / Screenshot of the Decision",
    description: "Before anything else:",
    actions: [
      "Take a photo of the letter (all pages)",
      "Or a screenshot/PDF of the portal decision",
      "Save it in a folder. Name it something like: 2025-11-26_WorkSafe_Decision_Stop-Wage-Loss.pdf"
    ]
  },
  {
    title: "Start Your Notes: What Changed?",
    description: "In plain language, write:",
    actions: [
      "What the decision says changed (benefits stopped, treatment denied, condition 'resolved')",
      "How it hits you (lost income, treatment cut, work forced when unsafe)",
      "Which evidence they ignored or twisted"
    ]
  },
  {
    title: "Do Not Give Them a Blank Check for Phone Calls",
    description: "When they call or leave voicemails, reply with a short email:",
    template: `"I received your voicemail about [topic]. Please send the details in writing so I can respond accurately and keep my medical providers aligned with your requests."`
  },
  {
    title: "Send One Short Email",
    description: "One tight email is better than five rage calls. Try:",
    template: `"I received the [decision letter/portal notification] dated [date]. I would like to know:\n\n1) What specific evidence was relied on to decide my condition has 'resolved'?\n2) How did you weigh the medical reports from [my doctor(s)] versus the opinion from your internal advisor?\n3) If this decision stands, what is my next step to challenge it, and what is the deadline?"`
  },
  {
    title: "Start a Call Log (Even If You Hate Admin)",
    description: "This turns 'he said/she said' into a record:",
    actions: [
      "Date and time",
      "Who you spoke with",
      "What you asked",
      "What they said or promised"
    ]
  }
];

export const documentationBuckets = [
  {
    title: "Medical Evidence",
    items: [
      "Doctor's notes (GP, specialists, psychiatrists, psychologists)",
      "Physiotherapy/chiro/OT reports",
      "Imaging requests and results (MRI, X-ray, CT, ultrasound)",
      "Functional capacity or work limitation forms",
      "Any 'fit for duty'/'not fit for duty' notes"
    ]
  },
  {
    title: "WorkSafeBC/Agency Documents",
    items: [
      "Claim acceptance/denial letters",
      "Decisions about wage-loss, treatment, return to work, vocational rehab",
      "Any 'we are closing your file' or 'your condition has resolved' letters",
      "Case manager emails",
      "Online portal messages (screenshot them)",
      "Internal forms they send you to fill out"
    ]
  },
  {
    title: "Employer & Workplace Evidence",
    items: [
      "Incident reports/injury reports",
      "Emails or texts about modified duties, schedule changes after injury",
      "Notes of conversations with your supervisor/HR",
      "Write-ups, warnings, 'coaching conversations', discipline letters",
      "Any mention that you're 'not a good fit anymore'"
    ]
  },
  {
    title: "Money & Survival Evidence",
    items: [
      "Pay stubs from before and after the injury",
      "Records of EI, CPP-D, disability benefits, social assistance",
      "Rent/mortgage statements",
      "Overdraft/credit card statements showing when things went sideways",
      "Any notices: eviction threats, collections letters, shut-off notices"
    ]
  }
];

export const pressurePoints = [
  {
    title: "Evidence & Reasons",
    description: "Anytime WorkSafeBC ignores your doctor or physio, leans only on a 'Board doctor' you've never met, declares your injury 'resolved' while your reports say otherwise, or refuses to explain why they believed one piece of evidence and ignored another.",
    whatYoureEntitled: [
      "Have relevant evidence considered",
      "Know what evidence they relied on",
      "Know why they preferred one opinion over another"
    ],
    phrases: [
      "\"What evidence did you rely on to decide that my condition is resolved?\"",
      "\"How did you resolve the difference between your medical advisor's opinion and my treating doctor's opinion?\"",
      "\"Can you please list the medical reports you considered, and explain the weight you gave to each?\""
    ]
  },
  {
    title: "Return-to-Work & Employer Cooperation",
    description: "You're injured and want/need to go back to work, but your employer is ignoring your restrictions, not offering modified duties, showing hostility, or WorkSafeBC is doing nothing while your RTW falls apart.",
    phrases: [
      "\"What specific steps have been taken to work with my employer on a return-to-work plan?\"",
      "\"Has my employer been reminded of their duty to cooperate in returning me to work?\"",
      "\"Can I see the documented return-to-work plan you've agreed on with my employer?\""
    ]
  },
  {
    title: "Retaliation / Prohibited Action",
    description: "Examples: You report an injury and suddenly your hours are cut, you complain about safety and your job disappears, you file a claim and your boss starts icing you out or threatening you.",
    phrases: [
      "\"I believe I am experiencing retaliation related to my injury/claim. Has this been logged as a prohibited action complaint? If so, what is the complaint number?\"",
      "\"If it has not been logged, please confirm how I can file a prohibited action complaint and whether your office will do so based on the information I've already provided.\""
    ]
  },
  {
    title: "\"Your Records Are Wrong\"",
    description: "You hear lines like: 'Our records show you haven't contacted [office],' 'Our records don't show that you raised that complaint,' 'There is no record of that email/call.' But you have screenshots, emails, voicemails, call logs.",
    phrases: [
      "\"Your records appear to be incorrect. On [date], [office/person] contacted me/I contacted them. Attached is [screenshot/voicemail/email] showing this. Please: 1. Confirm that your records will be corrected; and 2. Explain how this discrepancy occurred.\""
    ]
  },
  {
    title: "\"We Don't Do Oversight\"",
    description: "When MLAs or Minister offices refuse to exercise their oversight responsibilities and hide behind 'we can't interfere with WorkSafeBC.'",
    phrases: [
      "\"I am not asking you to personally adjudicate my claim. I am reporting behaviour by WorkSafeBC that appears systemic.\"",
      "\"This is not only a constituency service issue; it is an oversight issue. I am asking whether you will exercise your oversight role over a provincial agency.\""
    ]
  },
  {
    title: "Broken Promises & 'Legitimate Expectations'",
    description: "When officials promise specific actions but never follow through, creating reasonable expectations that aren't met.",
    phrases: [
      "\"On [date], your office wrote that [quote the promise]. That created a clear expectation that this process would go ahead. Could you please confirm whether this action was completed, and if not, explain when and why the decision was changed?\"",
      "\"I would like to record your position accurately regarding your oversight responsibilities.\""
    ]
  }
];

export const emailTemplates = [
  {
    title: "To the Minister of Labour",
    to: "To: [Minister’s email] Cc: [Your MLA + MLA office email] (optional)",
    content: `Dear Minister [Last Name],
My name is [Your Full Name], a [your age]-year-old [your job title] living in [your city /
community]. I am writing regarding the handling of my WorkSafeBC claim ([Claim Number]) and
to respectfully request your office’s oversight.
[IF you have already contacted your MLA – keep this paragraph]
[MLA [MLA Name], MLA for [Riding], has been assisting me since [month/year] and their office
has already contacted WorkSafeBC on my behalf. Despite this, key issues remain unresolved
and I appear to have reached an impasse within the existing process.]
[IF you have NOT contacted your MLA – you can use this paragraph instead, or delete it
entirely]
[I understand that MLAs and the Minister cannot personally adjudicate individual claims, but I
am concerned that the way my claim is being handled may indicate a breakdown in the normal
oversight and accountability processes.]
I have attached a short briefing note that summarizes:
- The timeline of my injury and claim
- The decisions made so far
- New medical or factual evidence that has not been fully addressed
- Specific questions that remain unanswered by WorkSafeBC
In particular, my main concerns are:
- [Example: Termination of wage-loss benefits despite ongoing medical restrictions]
- [Example: Medical evidence from my treating providers has not been addressed in decisions]
- [Example: Delays or refusals to approve reasonable diagnostic tests (such as an MRI)]
- [Example: Lack of clear written reasons answering key questions I have raised]
I am not asking you to decide my claim. Rather, I am asking for your help to ensure that:
- New and relevant evidence is properly considered
- My questions receive clear, written answers
- The processes set out in the Workers Compensation Act and WorkSafeBC policy are properly
followed in my case
If it would assist your office, I can provide copies of:
- Key medical reports (for example, specialist reports, GP forms, diagnostic requisitions)
- Correspondence with WorkSafeBC and/or the Review Division
- Any prior decisions or reasons I have received
I would also appreciate the opportunity to brief a member of your staff by phone or video
conference at your convenience.
My specific requests are:
1. [Example: A written confirmation from WorkSafeBC of the current status of my claim and any
planned reassessment or review.]
2. [Example: A written response to the unanswered questions listed in my briefing note,
including how new medical evidence has been considered.]
3. [Optional: Example: If appropriate, a management-level review to determine whether the
handling of my claim has been consistent with legislation, policy, and basic fairness.]
I know your time is extremely limited, and I am grateful for any attention you or your staff are
able to give this. If you would like any additional information or documentation, I can provide it
within [24–48] hours.
Thank you for your time and for your service to injured workers in British Columbia.
Sincerely,
[Your Full Name]
[Your phone number]
[Your email address]
[Optional: Your home city / riding]`
  },
  {
    title: "To your MLA",
    to: "Subject: WorkSafeBC claim [Claim Number] – request for assistance and oversight",
    content: `Dear [MLA Name],
My name is [Your Full Name]. I live in [your neighbourhood / city] in the riding of [Riding Name].
I am writing to ask for your help and oversight regarding the handling of my WorkSafeBC claim
([Claim Number]).
On [date of injury], I was injured while working as a [job title, e.g., “warehouse worker,” “care
aide,” “concrete cutter”]. Since then, I have been dealing with WorkSafeBC about [very short
summary: e.g., wage-loss benefits, medical treatment, return to work].
At this point, I am struggling with the following issues:
- [Example: My wage-loss benefits were stopped even though my doctor still has me on
restrictions.]
- [Example: Medical reports from my doctor/physiotherapist do not appear to have been
properly considered or explained in the decision.]
- [Example: My employer has not cooperated with return-to-work or modified duties, and I am
not sure what is being done about it.]
- [Example: I have asked clear questions in writing but received no real answers, only repeated
form letters.]
I understand that you cannot personally decide my claim, and I am not asking you to override
WorkSafeBC. I am asking for your help to:
- Make sure my concerns and evidence are being taken seriously, and
- Ensure that WorkSafeBC is following its own rules and obligations in my case.
If your office is able to assist, I would be grateful if you could:
1. Review a short summary of my situation and the key decisions so far; and
2. Ask WorkSafeBC, through the appropriate channels, to provide clear, written answers to the
main questions I have raised.
I can provide:
- Copies of recent decision letters from WorkSafeBC
- Key medical reports (for example, my doctor’s current restrictions)
- A short timeline of what has happened so far
If someone from your office could speak with me by phone or email, I would appreciate the
chance to explain my situation in a bit more detail.
Thank you for taking the time to read this and for the work you do on behalf of people in our
community.
Sincerely,
[Your Full Name]
[Your phone number]
[Your email address]
[Optional: Your home address or at least city/postal code so they can confirm you’re in the
riding]`
  },
  {
    title: "Email to the Entire Legislature",
    to: "Subject: Formal report to all Members – systemic concerns regarding [Agency Name]",
    content: `Dear Honourable Members,
I am writing to you as a citizen providing a formal report on what I believe to be an operational
failure of [Agency Name]. My case (File/Claim #[File or Claim Number]) is offered as a case
study in how legislation, policy, and principles of administrative justice can be undermined in
practice.
The attached file contains [brief description: e.g., “a complete email thread between myself, my
elected representative’s office, and [Agency Name]” / “a summary of decisions and
correspondence to date”]. It serves as real-time, documented evidence of the systemic issues
outlined below.
1. [Heading for Issue Area #1 – e.g., “Evidence Handling and Decision-Making”]
• [Bullet 1 – short, factual description of what happened in this theme]
• [Bullet 2 – another key fact or pattern]
• [Bullet 3 – how this behaviour conflicts with law/policy/fairness, in your view]
2. [Heading for Issue Area #2 – e.g., “Procedural Fairness and Process”]
• [Bullet 1 – arbitrary/contradictory decisions, lack of investigation, etc.]
• [Bullet 2 – failures to follow their own procedures or timelines]
• [Bullet 3 – examples of non-answers or ignored questions]
3. [Heading for Issue Area #3 – e.g., “Oversight and Transparency”]
• [Bullet 1 – inaccurate or incomplete information given to an elected office, if applicable]
• [Bullet 2 – how advocacy through an MLA/MP/etc. was neutralized or redirected into a “void”]
• [Bullet 3 – problems with access to records, FOI, internal notes, or audit logs, if relevant]
The Implications for All [Residents/Workers/Constituents] & for This Legislature
If [Agency Name] can:
• [Short line summarizing Issue Area #1 – e.g., “Disregard or minimize treating/primary
evidence”],
• [Short line summarizing Issue Area #2 – e.g., “Make contradictory decisions without
investigation or explanation”],
• [Short line summarizing Issue Area #3 – e.g., “Provide inaccurate or non-responsive
information to elected offices”],
• [Optional extra line – e.g., “Restrict oversight using internal ‘scope’ rules that it controls
itself”],
then no [worker/constituent] is secure, and the mechanisms of democratic accountability are
weakened.
This is not a dispute over [single outcome or diagnosis].
It is a demonstration that the system’s checks and balances are failing in practice.
The attached material is not just my story; it is a preview of what any Member may encounter
when attempting to oversee this agency on behalf of their constituents.
I am available to provide any further documentation that may assist. My complete file is
available to any Member who wishes to verify this report.
Respectfully,
[Your Full Name]
[City / Community]
File/Claim #[File or Claim Number]
[Phone Number]
[Email Address]`
  },
  {
    title: "Email to the Speaker",
    to: "Subject: For the Speaker’s attention – concerns regarding oversight and [Agency Name]",
    content: `Dear Honourable Speaker [Last Name],
I am writing to you in your capacity as Speaker of the [Name of Legislature], to report issues I
have encountered in how [Agency Name] interacts with Members’ offices and, by extension,
with the Legislature’s oversight function.
My case (File/Claim #[File or Claim Number]) is offered as a case study in systemic patterns,
not as a request for adjudication of my individual matter.
1. [Heading #1 – e.g., “Information Provided to Members”]
• [Brief factual example of incomplete or incorrect information given to an MLA/MP office]
• [Explanation that the Member relied on this information to decide how to proceed]
• [Short line on how this undermines their ability to scrutinize the agency]
2. [Heading #2 – e.g., “Neutralization of Oversight Efforts”]
• [Example of specific, substantive questions raised through a Member’s office]
• [Description of generic, non-responsive, or “out of scope” replies from the agency]
• [Short line on how this channels oversight into narrow, agency-controlled pathways]
3. [Heading #3 – e.g., “Implications for the Legislature”]
• [Short statement about how these practices affect all Members’ ability to assist constituents]
• [Short statement about risk to the Legislature’s scrutiny and accountability role]
• [Optional: link to any particular committee/mandate if you know it, or leave general]
Taken together, these patterns suggest that [Agency Name] can, in practice:
• Provide incomplete or inaccurate information to Members’ offices;
• Limit or avoid meaningful responses to oversight questions; and
• Shape the scope of Member involvement through internal rules that it controls.
This raises concerns not only for my own situation, but for the institution’s ability to hold public
bodies to account.
I respectfully request that your office:
• Consider whether the issues described here may warrant attention through any appropriate
parliamentary mechanism (such as referral to a committee or other process you deem suitable);
and
• Consider ways to ensure that Members are able to obtain accurate, complete information
from [Agency Name] when carrying out their representative and oversight duties.
I have attached a short summary and relevant correspondence between myself, my
representative’s office, and [Agency Name]. I am willing to provide my complete file and any
additional documentation that may assist.
Thank you for your consideration and for your role in safeguarding the integrity of the
Legislature.
Respectfully,
[Your Full Name]
[City / Community]
File/Claim #[File or Claim Number]
[Phone Number]
[Email Address]`
  },
  {
    title: "Email to the Premier",
    to: "Subject: Request for attention – systemic concerns regarding [Agency Name] and oversight",
    content: `Dear Premier [Last Name],
My name is [Your Full Name], and I live in [City / Community]. I am writing to bring to your
attention systemic concerns about how [Agency Name] is operating and how it responds to
oversight from elected representatives.
I am not asking you to decide my individual file. I am asking you, as head of government, to
ensure that public bodies under your government’s responsibility are acting lawfully, fairly, and
in line with your stated commitments to [e.g., fairness, accountability, worker protection, etc.].
Using my case (File/Claim #[File or Claim Number]) as an example, I have observed three main
areas of concern:
1. [Heading #1 – e.g., “Evidence and Decision-Making”]
• [Brief description of how decisions appear inconsistent with treating/primary evidence]
• [Example of internal opinions being preferred without clear reasoning]
• [Note that requests for explanation produced generic or incomplete responses]
2. [Heading #2 – e.g., “Procedural Fairness and Duties”]
• [Example of contradictory decisions, unclear processes, missed timelines, etc.]
• [Description of how duties owed by other parties (e.g., employers, service providers) do not
seem to be enforced]
• [Short line on limited opportunity to respond to new information or errors]
3. [Heading #3 – e.g., “Oversight and Communication with Elected Offices”]
• [Example of incomplete or inaccurate information being given to a representative’s office]
• [Example of substantive questions being labelled “out of scope” or answered in a non-
responsive way]
• [Short line about how this neutralizes the representative’s ability to assist and to scrutinize]
If [Agency Name] can:
• Minimize or ignore treating/primary evidence,
• Make contradictory or poorly explained decisions,
• Fail to enforce duties owed under its governing framework, and
• Provide non-responsive or inaccurate information to Members’ offices without effective
correction,
then both individual citizens and the broader system of democratic accountability are at risk.
My requests to your office are:
1. That you ensure the responsible Minister and ministry are made aware of these documented
concerns and review them;
2. That you seek assurances that [Agency Name] will:
• Improve how it handles evidence, explains decisions, and enforces duties; and
• Review how it communicates with Members’ offices and responds to oversight questions;
and
3. That you consider whether any broader review, directive, or other response is needed to
align [Agency Name]’s practices with your government’s commitments.
I have attached a short summary and key correspondence (including communications with my
representative’s office and [Agency Name]). I am prepared to provide my complete file and any
further documentation your staff may require.
Thank you for your time and for your service to [Jurisdiction].
Respectfully,
[Your Full Name]
[City / Community]
File/Claim #[File or Claim Number]
[Phone Number]
[Email Address]`
  }
];


export const documentationPowerPoints = [
  {
    title: "Documentation is Your Time Machine",
    description: "Your injury and claim will stretch over months or years. Memories blur; staff change. Written records let you go back and prove what happened when."
  },
  {
    title: "It Turns Feelings into Facts",
    description: "\"They don't believe me\" turns into: \"On March 12, I sent Dr. Singh's note restricting lifting to 10 lbs. On April 2, the case manager approved heavy-duty work without addressing that note.\""
  },
  {
    title: "It Makes Appeals Winnable",
    description: "Review Division and WCAT aren't about who sounds more upset. They're about evidence, timelines, and policy. Documents are your ammo."
  }
];

export const whySilentPoints = [
  {
    title: "The System is Designed to Exhaust You",
    description: "Letters are full of: Half-explanations, Policy references with no context, 'If you disagree, you may request...' with 3 different pathways in tiny print. When you're confused enough, silence feels easier than: Admitting you don't understand, Taking a wrong step and being told 'you should have done X instead'"
  },
  {
    title: "You Get Trained to Think You're the Problem",
    description: "When professionals with titles treat you like you're unreasonable, you start to self-censor. You start to think: maybe I AM making too big a deal, maybe this IS how it's supposed to go. It's not."
  },
  {
    title: "They Count on You Not Asking",
    description: "If you don't ask for: What evidence they relied on, Why they preferred one medical opinion over another, What the actual plan is for your return to work, They get to make decisions in the dark."
  }
];

export const engagementPoints = [
  {
    title: "When You Engage With Strategy",
    description: "It's not about being loud; it's about being precise. Every email is a potential exhibit later. Every unanswered question becomes: 'they ignored a relevant factor.'"
  },
  {
    title: "When You Don't Engage",
    description: "Silence feels safer in the moment. But it leaves a blank record. When you challenge a decision, there's nothing to point to except their version of events."
  },
  {
    title: "What Engagement Looks Like",
    description: "Written questions. Documented calls. Timelines. Choosing when to escalate to Review/WCAT/MLA. You're building a case, not begging."
  }
];


export const wcatCategories = [
  {
    title: "Is my injury covered? – Acceptability & causation",
    cases: [
      {
        id: "wcat-2004-06686",
        citation: "WCAT-2004-06686",
        caseNumber: "2004-06686",
        year: 2004,
        bodyPart: "general",
        issueTags: ["acceptability", "causation", "no-clear-diagnosis"],
        shortLabel: "Injury with no clear diagnosis still compensable",
        whenToUse: "Use when the Board questions acceptability because the diagnosis is messy or evolving.",
        facts:
          "Shows how a claim can be accepted as a personal injury under s.5(1) even without a definitive medical diagnosis by focusing on mechanism and evidence.",
        panelCaredAbout: [
          "Consistency between mechanism of injury and medical observations",
          "Presence of a physician opinion tying the condition to work",
          "Reasoned explanation even without a perfect diagnostic label"
        ],
        howToUse: [
          "Don’t rely on 'it happened at work and I felt awful' — build a coherent medical theory of the condition",
          "Get a doctor to explicitly tie cause to work, not just document symptoms",
          "Focus arguments on mechanism and evidence rather than a perfect label"
        ],
        phrasesToSteal: [
          "The absence of a definitive diagnostic label does not defeat acceptability when the mechanism and evidence align.",
          "Weight is given to medical opinions that actually address causation, not just symptom lists."
        ],
        decisionLink: null,
        strategyMoves: [
          "Don’t rely on 'it happened at work and I felt awful' — build a coherent medical theory of the condition",
          "Get a doctor to explicitly tie cause to work, not just document symptoms",
          "Focus arguments on mechanism and evidence rather than a perfect label"
        ],
        portableStrategy: "Even without a clean diagnosis, combine a clear mechanism with a medical opinion linking work to causation to ground acceptability under s.5(1)."
      },
      {
        id: "wcat-2004-05173",
        citation: "WCAT-2004-05173",
        caseNumber: "2004-05173",
        year: 2004,
        bodyPart: "general",
        issueTags: ["course-of-employment", "assessment-injury", "acceptability"],
        phrasesToSteal: [
          "Attendance at an employer-required FCE was part of employment, making the injury compensable.",
          "Work-related testing that is required for advancement attracts coverage even when done off-site."
        ],
        decisionLink: null,
        title: "Injury during Functional Capacity Evaluation (FCE)",
        description: "Worker injured during an employer-required FCE for a promotion; WCAT held it occurred in the course of employment and was compensable.",
        strategyMoves: [
          "Recharacterize the FCE as part of employment, not treatment",
          "Show the employer required attendance (wages, travel, job contingent on participation)",
          "Use RSCM I items #19.40 and #19.41 analogies (like required inoculations) to frame the FCE as work-related"
        ],
        portableStrategy: "Always frame tests or assessments required for employment or promotion as work tasks, not medical treatment."
      },
      {
        id: "wcat-2004-04737",
        citation: "WCAT-2004-04737",
        caseNumber: "2004-04737",
        year: 2004,
        bodyPart: "psych",
        issueTags: ["mental-health", "consequential-injury", "acceptability"],
        phrasesToSteal: [
          "Consequential psychological injuries flowing from a physical assault were accepted under s.5(1).",
          "WCAT preferred a mixed physical/psych framing over the narrower mental-disorder route."
        ],
        decisionLink: null,
        title: "Teacher assaulted; physical + mental injury",
        description: "Teacher assaulted by a student developed acute stress; WCAT compensated the psychological injury under s.5(1) as consequential to the physical injury.",
        strategyMoves: [
          "Reframe mixed physical/psych injuries under s.5(1) instead of the narrower s.5.1 mental-stress route",
          "Lean into multiple causation and show work was a significant contributing factor",
          "Use supportive parts of the Board psychologist’s report to corroborate work-related anxiety/depression"
        ],
        portableStrategy: "When mental health issues flow from a physical injury, argue them under s.5(1) as consequential injuries for broader coverage."
      },
      {
        id: "wcat-2003-00254",
        citation: "WCAT-2003-00254",
        caseNumber: "2003-00254",
        year: 2003,
        bodyPart: "general",
        issueTags: ["presumption", "course-of-employment", "environmental-risk"],
        phrasesToSteal: [
          "Applying the s.5(4) presumption, the sting was compensable because the job increased exposure to that risk.",
          "The work activity created greater-than-normal exposure, satisfying course of employment."
        ],
        decisionLink: null,
        title: "Wasp sting at work",
        description: "Worker stung grabbing wood; WCAT applied the s.5(4) presumption and found it compensable because the work activity exposed the worker to that risk.",
        strategyMoves: [
          "Invoke the statutory presumption (s.5(4)) once course of employment is shown",
          "Emphasize how job duties increased exposure to wasps beyond everyday life"
        ],
        portableStrategy: "For 'freak event' injuries, lead with where/while the worker was working and how duties created a higher-than-normal exposure to the risk."
      },
      {
        id: "wcat-2007-02958",
        citation: "WCAT-2007-02958",
        caseNumber: "2007-02958",
        year: 2007,
        bodyPart: "cardiac",
        issueTags: ["natural-progression", "causation", "internal-condition"],
        phrasesToSteal: [
          "Work factors were a significant trigger of the cardiac event despite pre-existing disease.",
          "Material contribution analysis applied to internal conditions, not just traumatic injuries."
        ],
        decisionLink: null,
        title: "Work-related heart attack (natural causes vs work causes)",
        description: "Detailed analysis of whether a heart attack arose out of and in the course of employment, weighing pre-existing disease against work factors.",
        strategyMoves: [
          "Frame work as the trigger or significant accelerator of a vulnerable system",
          "Use expert evidence to separate baseline cardiac risk from acute work factors (heat, exertion, stress, overtime)",
          "Argue material contribution, not creation of the disease"
        ],
        portableStrategy: "For internal condition cases, argue work triggered or materially worsened an already vulnerable system — backed by cardiology/IME evidence."
      }
    ]
  },
  {
    title: "Pre-existing conditions, degenerative findings & cumulative trauma",
    cases: [
      {
        id: "wcat-2006-01779",
        citation: "WCAT-2006-01779",
        caseNumber: "2006-01779",
        year: 2006,
        bodyPart: "back",
        issueTags: ["cumulative-trauma", "jurisdiction", "pre-existing"],
        phrasesToSteal: [
          "The panel required the Board to consider cumulative effects rather than slicing injuries into isolated events.",
          "Decision-makers cannot ignore relevant court direction when determining entitlement."
        ],
        decisionLink: null,
        title: "Cumulative effects & Board jurisdiction",
        description: "Confirms the Board must adjudicate entitlement based on cumulative effects of prior injuries, not just single incidents, and can’t ignore relevant court cases.",
        strategyMoves: [
          "Force decision-makers to take jurisdiction over cumulative injuries instead of slicing issues into isolated episodes",
          "Map issues tightly to Review Division jurisdiction to show improper refusals"
        ],
        portableStrategy: "When the Board/Review tries to narrow the issue, insist they address the overall disability picture rather than isolated incidents."
      },
      {
        id: "wcat-2004-02912",
        citation: "WCAT-2004-02912",
        caseNumber: "2004-02912",
        year: 2004,
        bodyPart: "back",
        issueTags: ["apportionment", "cumulative-trauma", "pre-existing"],
        phrasesToSteal: [
          "Non-work factors were not independent causes, so no portion could be apportioned away.",
          "Where causes operate together to create one disability, apportionment is improper."
        ],
        decisionLink: null,
        title: "No apportionment when causes operate together",
        description: "Medical Review Panel found non-work causes didn’t independently produce a portion of disability; they acted together with the work injury, so WCAT said no apportionment under s.5(1).",
        strategyMoves: [
          "Attack apportionment by showing non-work factors were not independent causes",
          "Demonstrate work and non-work factors operated together to create one indivisible disability",
          "Anchor arguments in s.5(1) and policy against splitting inseparable causes"
        ],
        portableStrategy: "When apportionment is raised, force medical witnesses to answer whether any disability portion would exist without the work injury; if not, argue apportionment is improper."
      },
      {
        id: "wcat-a2101129",
        citation: "WCAT-A2101129",
        caseNumber: "A2101129",
        year: 2021,
        bodyPart: "back",
        issueTags: ["cumulative-trauma", "pre-existing", "aggravation"],
        phrasesToSteal: [
          "A series of minor events can be treated as one compensable personal injury under s.134(1).",
          "Chronology of repeated strains showed aggravation of a pre-existing condition."
        ],
        decisionLink: null,
        title: "Repeated minor incidents = compensable injury",
        description: "Aggravation of a pre-existing condition from a series of incidents over time treated as a personal injury under s.134(1) even without one dramatic incident.",
        strategyMoves: [
          "Frame micro-traumas as one cumulative personal injury under s.134(1)",
          "Use detailed chronology and symptom progression to link minor events",
          "Identify the point when cumulative effects became disabling"
        ],
        portableStrategy: "Build incident diaries of repeated twinges or pulls leading up to the day it finally went, and frame it as cumulative injury—not just degeneration."
      },
      {
        caseNumber: "2011-01618",
        id: "wcat-2011-01618",
        citation: "WCAT-2011-01618",
        year: 2011,
        bodyPart: "back",
        issueTags: ["degenerative", "reopening", "significant-change"],
        phrasesToSteal: [
          "A significant worsening of the previously accepted degenerative condition justified reopening.",
          "Reopening focused on change within the same condition, not a brand-new diagnosis."
        ],
        decisionLink: null,
        title: "Reopening where a degenerative condition worsens",
        description: "Explains how a claim that accepted a permanent aggravation of a degenerative condition can be reopened when that condition significantly worsens.",
        strategyMoves: [
          "Tie new imaging/clinical changes to the earlier accepted aggravation, not a new disease",
          "Use before/after comparisons of imaging and function",
          "Show significant change in the same condition to trigger s.96.2 reopening"
        ],
        portableStrategy: "Centre reopening arguments on significant change in the already accepted degenerative condition rather than introducing a novel diagnosis."
      }
    ]
  },
  {
    title: "Mental disorder, bullying/harassment & late applications",
    cases: [
      {
        id: "wcat-a1900037",
        citation: "WCAT-A1900037",
        caseNumber: "A1900037",
        year: 2019,
        bodyPart: "psych",
        issueTags: ["mental-health", "accommodation", "significant-stressor"],
        phrasesToSteal: [
          "Refusal to accommodate the disability was treated as a significant workplace stressor.",
          "Met both subjective and objective parts of the mental-disorder test."
        ],
        decisionLink: null,
        title: "Mental disorder from series of stressors; refusal to accommodate",
        description: "Sets out the subjective + objective test for mental-disorder claims and recognizes refusal to accommodate (by denying the condition) as a significant workplace stressor.",
        strategyMoves: [
          "Meet the two-part mental-disorder test head-on (subjective reaction + objective significant stressor)",
          "Reframe refusal to accommodate as a harmful stressor, not a neutral employment decision",
          "Describe ongoing targeted invalidation and its impact"
        ],
        portableStrategy: "When employers stonewall accommodation requests, document the pattern and argue it falls outside the s.5.1(1)(c) exclusion as an abusive stressor."
      },
      {
        id: "wcat-2015-01712",
        citation: "WCAT-2015-01712",
        caseNumber: "2015-01712",
        year: 2015,
        bodyPart: "psych",
        issueTags: ["mental-health", "employment-decision", "causation"],
        phrasesToSteal: [
          "The s.5.1(1)(c) exclusion is not absolute when employment decisions are too remote from the injury.",
          "Focus on the proximate harmful stressors rather than the neutral label of the decision."
        ],
        decisionLink: null,
        title: "Employment-related decisions not always excluded",
        description: "Clarifies the s.5.1(1)(c) exclusion is not absolute; if the employment decision is too remote in the causation chain, entitlement may still exist.",
        strategyMoves: [
          "Attack overbroad use of the 'employment decision' exclusion",
          "Emphasize proximate damaging stressors and context, not just the decision label",
          "Distinguish neutral decisions from patterns of unreasonable conduct"
        ],
        portableStrategy: "Break down specific behaviours to show why they cross into bullying/harassment or unreasonable treatment rather than neutral management decisions."
      },
      {
        caseNumber: "2014-02791",
        id: "wcat-2014-02791",
        citation: "WCAT-2014-02791",
        year: 2014,
        bodyPart: "psych",
        issueTags: ["bullying", "mental-health", "significant-stressor"],
        phrasesToSteal: [
          "Bullying and harassment requires abusive or threatening conduct, not just rudeness.",
          "The worker’s psychological injury tracked the targeted acts, not everyday friction."
        ],
        decisionLink: null,
        title: "Bullying & harassment vs 'just rudeness'",
        description: "Explains bullying/harassment must include abusive or threatening behaviour; mere rudeness or thoughtlessness doesn’t qualify.",
        strategyMoves: [
          "Define the threshold using OHS and Board guidance",
          "Sort facts into real bullying/harassment events versus mere rudeness",
          "Link the worker’s condition to the serious events"
        ],
        portableStrategy: "Curate evidence by highlighting repeated, targeted acts (threats, put-downs, undermining) and downplaying general rudeness."
      },
      {
        caseNumber: "2014-01272",
        id: "wcat-2014-01272",
        citation: "WCAT-2014-01272",
        year: 2014,
        bodyPart: "psych",
        issueTags: ["bullying", "guidelines", "mental-health"],
        phrasesToSteal: [
          "WorkSafeBC’s bullying and harassment guideline was used to satisfy the objective stressor test.",
          "Mapping facts to the guideline showed the conduct met the significant stressor threshold."
        ],
        decisionLink: null,
        title: "Using OHS bullying & harassment guidelines",
        description: "Applies WorkSafeBC’s OHS Guideline to interpret what qualifies as a significant workplace stressor, meeting both objective and subjective standards.",
        strategyMoves: [
          "Import OHS bullying/harassment standards into compensation analysis",
          "Map facts to the guideline to show they meet the definition",
          "Use guidelines to satisfy the objective stressor test"
        ],
        portableStrategy: "Always cite the WorkSafeBC bullying & harassment guideline and map your facts to its bullets to satisfy the objective test."
      },
      {
        caseNumber: "2014-01368",
        id: "wcat-2014-01368",
        citation: "WCAT-2014-01368",
        year: 2014,
        bodyPart: "psych",
        issueTags: ["late-filing", "mental-health", "special-circumstances"],
        phrasesToSteal: [
          "Psychiatric symptoms that impaired filing were special circumstances excusing lateness.",
          "Continuity of symptoms and treatment supported the late application."
        ],
        decisionLink: null,
        title: "Late application where the mental disorder delayed filing",
        description: "Analyzes a late application where the mental disorder itself made timely filing impossible, accepting it as special circumstances.",
        strategyMoves: [
          "Use psychiatric evidence showing symptoms (avoidance, impaired executive function, depression) prevented timely filing",
          "Show continuity of symptoms, treatment, and deterioration despite late paperwork"
        ],
        portableStrategy: "Don’t just say 'I was unwell' — have a doctor explain how the condition interfered with filing to justify late applications."
      },
      {
        caseNumber: "A1701687",
        id: "wcat-a1701687",
        citation: "WCAT-A1701687",
        year: 2017,
        bodyPart: "psych",
        issueTags: ["mental-health", "injury-date", "late-filing"],
        phrasesToSteal: [
          "Injury date is when the worker both reacted psychologically and connected it to work.",
          "That timing can reset limitation periods when delays before realization were reasonable."
        ],
        decisionLink: null,
        title: "Date of injury in mental-disorder claims",
        description: "Explains how to determine the injury date (psychological reaction + connection to work) and assess special circumstances for late filing.",
        strategyMoves: [
          "Define the injury date as the point the worker had a psychological reaction and connected it to work",
          "Use that definition to reset limitation periods when appropriate",
          "Argue delays before that realization were reasonable given the condition"
        ],
        portableStrategy: "For long-running stress, use the moment you realized it was work-related as the injury date to gain breathing room on filing timelines."
      }
    ]
  },
  {
    title: "What counts as a decision? Timelines & Board do-overs",
    cases: [
      {
        caseNumber: "2007-00430",
        id: "wcat-2007-00430",
        citation: "WCAT-2007-00430",
        year: 2007,
        bodyPart: "general",
        issueTags: ["timelines", "decision-status", "communication"],
        phrasesToSteal: [
          "A communication that resolves entitlement is a decision that triggers appeal timelines.",
          "Distinguish findings of fact from appealable decisions when asserting rights."
        ],
        decisionLink: null,
        title: "Finding of fact vs reviewable decision",
        description: "Three-person panel discusses whether a Board communication is just a finding of fact or an appealable decision that triggers timelines.",
        strategyMoves: [
          "Show the communication finally resolved an issue (entitlement, rate, acceptance)",
          "Once it’s a decision, assert appeal rights and applicable limitation periods"
        ],
        portableStrategy: "Whenever you get a vague letter, ask if it decided something; if yes, treat it as appealable and act on timelines."
      },
      {
        caseNumber: "2007-00798",
        id: "wcat-2007-00798",
        citation: "WCAT-2007-00798",
        year: 2007,
        bodyPart: "general",
        issueTags: ["timelines", "decision-status", "communication"],
        phrasesToSteal: [
          "Implementation letters can still be appealable if they resolve entitlement.",
          "Analyze whether the letter changes rights rather than assuming it is informational."
        ],
        decisionLink: null,
        title: "Informational letter vs adjudicative decision",
        description: "Clarifies when a letter implementing a WCAT decision is merely informational versus a new appealable decision.",
        strategyMoves: [
          "Analyze whether the letter changes rights or simply reports implementation",
          "If it resolves entitlement, argue it’s a decision subject to review"
        ],
        portableStrategy: "Push WCAT to label communications as decisions when they resolve issues, even if framed as FYI."
      },
      {
        caseNumber: "2009-00149",
        id: "wcat-2009-00149",
        citation: "WCAT-2009-00149",
        year: 2009,
        bodyPart: "general",
        issueTags: ["communication", "timelines", "appeal-rights"],
        phrasesToSteal: [
          "Simply disclosing file materials is not proper decision communication for limitation purposes.",
          "Timelines do not run until an actual decision is communicated."],
        decisionLink: null,
        title: "Disclosure of file is NOT proper decision communication",
        description: "Holds that simply disclosing a file is not an appropriate method of communicating a decision for timeline purposes.",
        strategyMoves: [
          "Differentiate disclosure from decision communication",
          "Argue timelines don’t run until a decision is properly communicated"
        ],
        portableStrategy: "If you only received file materials, argue the decision wasn’t communicated and timelines haven’t started."
      },
      {
        caseNumber: "2008-03461 / 2008-03567",
        id: "wcat-2008-03461-2008-03567",
        citation: "WCAT-2008-03461 / 2008-03567",
        year: 2008,
        bodyPart: "general",
        issueTags: ["timelines", "communication", "oral-decisions"],
        phrasesToSteal: [
          "Oral and written communications can start clocks at different times — pin down the actual communication date.",
          "Staggered communication does not advance limitation periods before the decision is conveyed."
        ],
        decisionLink: null,
        title: "Oral vs written communication and when time limits start",
        description: "Explains how oral decisions and staggered communications affect when clocks start on review/appeal deadlines.",
        strategyMoves: [
          "Pin down exact communication dates (oral vs written)",
          "Argue limitation periods start when the decision is actually communicated"
        ],
        portableStrategy: "If you only got a phone call or piecemeal info, challenge any claim that the clock started earlier."
      },
      {
        caseNumber: "2004-06708 / 2004-03907",
        id: "wcat-2004-06708-2004-03907",
        citation: "WCAT-2004-06708 / 2004-03907",
        year: 2004,
        bodyPart: "general",
        issueTags: ["communication", "timelines", "reconsideration"],
        phrasesToSteal: [
          "No communication means the s.96(4) 75-day limit never started.",
          "Failure to communicate keeps reconsideration and appeal rights alive."
        ],
        decisionLink: null,
        title: "No communication = no 75-day limit running",
        description: "Hold that if the Board fails to communicate a decision, it isn’t a decision for s.96(4) purposes, so reconsideration and appeal timelines aren’t triggered.",
        strategyMoves: [
          "Show the Board never communicated the decision",
          "Use that to keep reconsideration or appeal rights alive"
        ],
        portableStrategy: "If you were never told, argue the 75-day clock never started and the Board can still reconsider (and you can still challenge)."
      },
      {
        caseNumber: "2006-02121 / 2006-02669",
        id: "wcat-2006-02121-2006-02669",
        citation: "WCAT-2006-02121 / 2006-02669",
        year: 2006,
        bodyPart: "general",
        issueTags: ["reconsideration", "timelines", "communication"],
        phrasesToSteal: [
          "Reconsideration must be communicated within 75 days or it is out of time.",
          "The Board doesn’t get endless do-overs beyond the statutory limit."
        ],
        decisionLink: null,
        title: "75-day limit on Board reconsideration",
        description: "Says the Board cannot reconsider an original decision unless the reconsideration decision is communicated within 75 days; no endless do-overs.",
        strategyMoves: [
          "Cite the strict 75-day statutory deadline",
          "Reject late corrections as ultra vires"
        ],
        portableStrategy: "Use the 75-day rule to block late Board reversals or corrections."
      },
      {
        caseNumber: "2004-03983",
        id: "wcat-2004-03983",
        citation: "WCAT-2004-03983",
        year: 2004,
        bodyPart: "general",
        issueTags: ["reconsideration", "timelines", "appeal-rights"],
        phrasesToSteal: [
          "A second decision issued after 75 days is a fresh, reviewable decision.",
          "Late corrections can be appealed as new decisions."],
        decisionLink: null,
        title: "Second decision after 75 days is reviewable",
        description: "If the Board issues a second decision more than 75 days after the first to correct an error, that second decision is reviewable.",
        strategyMoves: [
          "Treat late 'fix' decisions as new, reviewable decisions",
          "Argue Board policy gaps don’t shield untimely corrections"
        ],
        portableStrategy: "When the Board issues a late second decision, appeal it as a fresh decision."
      },
      {
        caseNumber: "2004-03709",
        id: "wcat-2004-03709",
        citation: "WCAT-2004-03709",
        year: 2004,
        bodyPart: "general",
        issueTags: ["natural-justice", "jurisdiction", "procedural-fairness"],
        phrasesToSteal: [
          "WCAT may take jurisdiction when the Board investigated but failed to decide an issue.",
          "Tribunal can cure certain Review Division procedural unfairness."
        ],
        decisionLink: null,
        title: "WCAT can cure some Review Division natural-justice breaches",
        description: "WCAT can take jurisdiction over an issue the Board investigated but never clearly decided and may cure certain procedural unfairness from Review Division.",
        strategyMoves: [
          "Highlight issues the Board investigated but failed to decide",
          "Invite WCAT to take jurisdiction and remedy Review Division unfairness"
        ],
        portableStrategy: "If Review Division missed an issue, ask WCAT to take it up and cure the procedural gap."
      }
    ]
  },
  {
    title: "Challenging Board medical advisors & internal practice",
    cases: [
      {
        caseNumber: "2006-03608",
        id: "wcat-2006-03608",
        citation: "WCAT-2006-03608",
        year: 2006,
        bodyPart: "general",
        issueTags: ["board-medical-advisor", "policy", "weight-of-evidence"],
        phrasesToSteal: [
          "Board medical advisors provide medical input, not policy interpretation.",
          "Internal guidelines cannot override binding Board policy when weighing opinions."
        ],
        decisionLink: null,
        title: "Limits on Board Medical Advisors & internal guidelines",
        description: "A Board Medical Advisor’s job is to provide medical expertise, not interpret/apply policy; the Board can’t rely on internal guidelines that override binding policy.",
        strategyMoves: [
          "Challenge medical advisors when they stray into policy interpretation",
          "Point out conflicts between internal guidelines and binding Board policy",
          "Scrutinize work simulations and their validity"
        ],
        portableStrategy: "If the Board ignores your specialist and leans on its own doctor, argue the advisor overstepped by making policy calls instead of giving medical evidence."
      }
    ]
  },
  {
    title: "Reopenings & ‘new diagnoses’",
    cases: [
      {
        caseNumber: "2004-06682",
        id: "wcat-2004-06682",
        citation: "WCAT-2004-06682",
        year: 2004,
        bodyPart: "spine",
        issueTags: ["reopening", "imaging", "significant-change"],
        phrasesToSteal: [
          "New imaging clarified the same condition rather than creating a new one, supporting reopening.",
          "Significant change was tied back to the originally accepted condition."
        ],
        decisionLink: null,
        title: "New imaging clarifies same condition → reopening allowed",
        description: "CT scan gave a new label, but WCAT held the underlying condition was the same, allowing reopening under s.96(2).",
        strategyMoves: [
          "Label new tests as clarifying, not transforming",
          "Tie significant change to the originally accepted condition",
          "Argue the CT/MRI didn’t create a new condition, just better detail"
        ],
        portableStrategy: "When new imaging emerges, argue it clarifies the accepted condition so reopening under s.96(2) applies."
      },
      {
        caseNumber: "2004-06831",
        id: "wcat-2004-06831",
        citation: "WCAT-2004-06831",
        year: 2004,
        bodyPart: "general",
        issueTags: ["new-matter", "diagnosis", "reopening"],
        phrasesToSteal: [
          "A brand-new diagnosis that was never adjudicated is a new matter, not a reopening.",
          "Identify whether the specific condition was decided before choosing the path forward."
        ],
        decisionLink: null,
        title: "Truly new diagnosis = new matter, not reopening",
        description: "Explains that a new diagnosis is a new matter if the condition was never adjudicated, not a reopening of a previously decided matter.",
        strategyMoves: [
          "Ask whether the specific condition was previously decided",
          "If not, frame it as a new matter requiring fresh adjudication"
        ],
        portableStrategy: "Use the decision tree: if the condition was decided before, seek reopening; if never decided, argue it’s a new matter."
      },
      {
        caseNumber: "2004-04921 / 2004-04632",
        id: "wcat-2004-04921-2004-04632",
        citation: "WCAT-2004-04921 / 2004-04632",
        year: 2004,
        bodyPart: "general",
        issueTags: ["reopening", "new-matter", "treatment-requests"],
        phrasesToSteal: [
          "Reopening applies only to matters previously decided; new treatments are new matters.",
          "Map each request to whether it was ever adjudicated to pick the right path."
        ],
        decisionLink: null,
        title: "What is a ‘matter previously decided’?",
        description: "Clarify that reopening only applies to matters previously decided; brand-new treatment requests or unadjudicated conditions are new matters.",
        strategyMoves: [
          "Identify whether treatment/body part was previously adjudicated",
          "Direct new matters to fresh adjudication rather than reopening"
        ],
        portableStrategy: "Map each request to whether it was already decided; if not, pursue it as a new matter rather than a reopening."
      }
    ]
  },
  {
    title: "Parking lots, travelling workers & ‘off-route’ situations",
    cases: [
      {
        caseNumber: "2005-01035",
        id: "wcat-2005-01035",
        citation: "WCAT-2005-01035",
        year: 2005,
        bodyPart: "general",
        issueTags: ["parking-lot", "course-of-employment", "presumption"],
        phrasesToSteal: [
          "Injuries in employer-controlled parking lots can attract the s.5(4) presumption.",
          "Returning from lunch kept the worker in the course of employment."
        ],
        decisionLink: null,
        title: "Parking lot injury returning from lunch is compensable",
        description: "Worker hit by a car in employer’s parking lot returning from lunch; WCAT applied s.5(4) presumption and found it compensable.",
        strategyMoves: [
          "Connect the parking lot to employer ownership/control",
          "Show the worker was in the process of returning to work",
          "Invoke s.5(4) presumption once course of employment is established"
        ],
        portableStrategy: "Treat employer-controlled parking lots as part of the work environment when returning to or leaving work."
      },
      {
        caseNumber: "2007-02634",
        id: "wcat-2007-02634",
        citation: "WCAT-2007-02634",
        year: 2007,
        bodyPart: "general",
        issueTags: ["parking-lot", "course-of-employment", "factors"],
        phrasesToSteal: [
          "Parking-lot coverage depends on ownership/control, purpose of activity, and commuting status.",
          "Use a factor checklist to show the injury remained in the course of employment."
        ],
        decisionLink: null,
        title: "Factors for parking-lot injuries",
        description: "Sets out factors WCAT considers for parking-lot injuries and summarizes multiple earlier decisions.",
        strategyMoves: [
          "Systematize factors: lot ownership/control, whether commuting is integral, paid time/status, purpose of activity",
          "Build a multi-point argument that the injury was in the course of employment"
        ],
        portableStrategy: "Turn the factors into a checklist to show the parking-lot injury stays within course of employment."
      },
      {
        caseNumber: "A1601379",
        id: "wcat-a1601379",
        citation: "WCAT-A1601379",
        year: 2016,
        bodyPart: "general",
        issueTags: ["course-of-employment", "good-samaritan", "travelling-worker"],
        phrasesToSteal: [
          "Stopping briefly to render aid was not a substantial deviation from the course of employment.",
          "Professional duties aligned with helping, keeping travelling worker status intact."
        ],
        decisionLink: null,
        title: "Helping an injured stranger still in course of employment",
        description: "Registered nurse stopped to help a stabbed person while returning from dropping off a co-worker; WCAT found no substantial deviation and maintained course of employment status.",
        strategyMoves: [
          "Frame the aid as part of the worker’s professional role, not a personal frolic",
          "Show there was no substantial deviation from the route"
        ],
        portableStrategy: "When actions align with your professional duties and don’t create a major detour, argue you remain in the course of employment."
      },
      {
        caseNumber: "2006-02659",
        id: "wcat-2006-02659",
        citation: "WCAT-2006-02659",
        year: 2006,
        bodyPart: "general",
        issueTags: ["travelling-worker", "course-of-employment", "commuting"],
        phrasesToSteal: [
          "Workers moving between sites are travelling workers even without paid travel time.",
          "Injuries en route stay in the course of employment absent a substantial personal deviation."
        ],
        decisionLink: null,
        title: "Community health workers as travelling workers",
        description: "Confirms workers whose jobs require moving between locations (like community health workers) are treated as travelling workers even if travel time isn’t paid.",
        strategyMoves: [
          "Characterize the worker as a travelling worker because movement between sites is essential",
          "Use that status to argue injuries en route are presumptively work-related absent substantial personal deviation"
        ],
        portableStrategy: "Whenever work involves moving between clients/sites, push the travelling-worker label to keep en-route injuries covered."
      }
    ]
  }
];
