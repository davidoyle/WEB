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
    ]
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
    ]
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
    ]
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
    ]
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
    title: "Email to the Minister of Labour",
    to: "To: [Minister's email] Cc: [Your MLA + MLA office email] (optional)",
    content: `Dear Minister [Last Name],
My name is [Your Full Name], a [your age]-year-old [your job title] living in [your city/community]. I am writing regarding the handling of my WorkSafeBC claim ([Claim Number]) and to respectfully request your office's oversight.
[IF you have already contacted your MLA – keep this paragraph]
[MLA [MLA Name], MLA for [Riding], has been assisting me since [month/year] and their office has already contacted WorkSafeBC on my behalf. Despite this, key issues remain unresolved and I appear to have reached an impasse within the existing process.]
[IF you have NOT contacted your MLA – you can use this paragraph instead, or delete it entirely]
[I understand that MLAs and the Minister cannot personally adjudicate individual claims, but I am concerned that the way my claim is being handled may indicate a breakdown in the normal oversight and accountability processes.]
I have attached a short briefing note that summarizes:
- the sequence of events in my claim;
- the specific decisions that have been made that conflict with the medical evidence;
- the impacts on my ability to work and support my family; and
- how attempts at resolution through my case manager and the Board's internal review channels have stalled.
I am requesting your office to:
1) Review the summary to determine whether the handling of my claim suggests a broader issue that requires oversight; and
2) Confirm what steps, if any, your office will take to ensure that WorkSafeBC is applying its policies fairly and accurately in my case.
Thank you for your time and attention. I appreciate any direction or intervention your office can provide to ensure my case receives fair and evidence-based consideration.
Sincerely,
[Your Full Name]
[City/Community]`
  },
  {
    title: "MLA Escalation – Broken Promises",
    to: "To: [MLA email] Cc: [MLA office email]",
    content: `Dear [MLA Name],
I appreciate your office's prior assistance with my WorkSafeBC claim (Claim #[Claim Number]). You wrote on [date] that your office would [quote promise made]. As of today, [specific action] has not occurred. This has left me without [benefits/treatment/income/safety at work], while my medical providers still consider me unfit for [work/regular duties].
I am requesting:
1) Confirmation whether your office contacted WorkSafeBC as promised.
2) If not, an explanation and timeline for when this will occur.
3) If yes, any response from WorkSafeBC so I can address it in my Review/WCAT submissions.
I am attaching a short summary of key dates and documents so your office has an accurate record. Thank you for helping ensure accountability in this process.
Sincerely,
[Your Full Name]
[City/Community]`
  },
  {
    title: "Employer Return-to-Work Pushback",
    to: "To: [Employer/HR contact] Cc: [Case manager], [Union rep if any]",
    content: `Hello [Name],
I am writing regarding my return to work following my injury on [date]. My treating provider has outlined restrictions: [list restrictions]. I have tried to cooperate with proposed duties, but the current plan does not align with these restrictions and appears unsafe.
Could you please:
1) Provide a written description of the duties you propose, including weight limits, postures, repetition, and pace; and
2) Confirm how these duties accommodate my restrictions.
I have copied WorkSafeBC so they are aware of the challenges in returning to safe work. I want to return, but not at the expense of worsening my injury.
Thank you,
[Your Name]
[Claim #]`
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
        caseNumber: "2004-06686",
        year: "2004",
        title: "Injury with no clear diagnosis still compensable",
        description: "Shows how a claim can be accepted as a personal injury under s.5(1) even without a definitive medical diagnosis by focusing on mechanism and evidence.",
        strategyMoves: [
          "Don’t rely on 'it happened at work and I felt awful' — build a coherent medical theory of the condition",
          "Get a doctor to explicitly tie cause to work, not just document symptoms",
          "Focus arguments on mechanism and evidence rather than a perfect label"
        ],
        portableStrategy: "Even without a clean diagnosis, combine a clear mechanism with a medical opinion linking work to causation to ground acceptability under s.5(1)."
      },
      {
        caseNumber: "2004-05173",
        year: "2004",
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
        caseNumber: "2004-04737",
        year: "2004",
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
        caseNumber: "2003-00254",
        year: "2003",
        title: "Wasp sting at work",
        description: "Worker stung grabbing wood; WCAT applied the s.5(4) presumption and found it compensable because the work activity exposed the worker to that risk.",
        strategyMoves: [
          "Invoke the statutory presumption (s.5(4)) once course of employment is shown",
          "Emphasize how job duties increased exposure to wasps beyond everyday life"
        ],
        portableStrategy: "For 'freak event' injuries, lead with where/while the worker was working and how duties created a higher-than-normal exposure to the risk."
      },
      {
        caseNumber: "2007-02958",
        year: "2007",
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
        caseNumber: "2006-01779",
        year: "2006",
        title: "Cumulative effects & Board jurisdiction",
        description: "Confirms the Board must adjudicate entitlement based on cumulative effects of prior injuries, not just single incidents, and can’t ignore relevant court cases.",
        strategyMoves: [
          "Force decision-makers to take jurisdiction over cumulative injuries instead of slicing issues into isolated episodes",
          "Map issues tightly to Review Division jurisdiction to show improper refusals"
        ],
        portableStrategy: "When the Board/Review tries to narrow the issue, insist they address the overall disability picture rather than isolated incidents."
      },
      {
        caseNumber: "2004-02912",
        year: "2004",
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
        caseNumber: "A2101129",
        year: "2021",
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
        year: "2011",
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
        caseNumber: "A1900037",
        year: "2019",
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
        caseNumber: "2015-01712",
        year: "2015",
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
        year: "2014",
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
        year: "2014",
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
        year: "2014",
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
        year: "2017",
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
        year: "2007",
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
        year: "2007",
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
        year: "2009",
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
        year: "2008",
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
        year: "2004",
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
        year: "2006",
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
        year: "2004",
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
        year: "2004",
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
        year: "2006",
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
        year: "2004",
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
        year: "2004",
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
        year: "2004",
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
        year: "2005",
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
        year: "2007",
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
        year: "2016",
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
        year: "2006",
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
