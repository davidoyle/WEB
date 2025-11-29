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
    title: "Work-relatedness & Causation",
    cases: [
      {
        caseNumber: "A1603646",
        year: "2017",
        title: "Slip on icy stairs while working → compensable",
        description: "Worker fell on icy stairs while leaving work; WCAT found the stairs were part of the work environment, so the injury arose out of and in the course of employment.",
        strategyMoves: [
          "Tie the mechanism of injury directly to the work environment",
          "Use photos/maintenance logs to show risk was workplace-created",
          "Show there was no true 'personal errand' break between work and the fall"
        ],
        portableStrategy: "When injury happens on employer property (stairs, parking lot, walkways), argue it's still within course of employment if you're doing ordinary things related to work (leaving shift, retrieving gear)."
      },
      {
        caseNumber: "2003-00254",
        year: "2003",
        title: "Wasp sting at work",
        description: "Worker stung grabbing wood; WCAT applied s.5(4) presumption and found it compensable because the work activity exposed the worker to that risk.",
        strategyMoves: [
          "Invoke the statutory presumption (s.5(4))",
          "Emphasize work-specific exposure that increased risk beyond everyday life"
        ],
        portableStrategy: "For 'freak event' injuries (stings, slips, random objects), lead with where + while the worker was working, and how job duties exposed them to that risk in a way ordinary life doesn't."
      }
    ]
  },
  {
    title: "Pre-existing Conditions & Cumulative Trauma",
    cases: [
      {
        caseNumber: "2004-02912",
        year: "2004",
        title: "No apportionment when causes operate together",
        description: "Medical Review Panel found non-work causes didn't independently produce a portion of disability; they acted together with the work injury. WCAT held the Board couldn't apportion out a non-work share under s.5(1).",
        strategyMoves: [
          "Attack apportionment at the 'independent cause' level",
          "Show that non-work and work factors operated together",
          "Argue that you can't carve out a clean slice of disability caused solely by non-work factors"
        ],
        portableStrategy: "When they try to apportion, force medical witnesses to answer: 'Can you safely say X% of this disability would exist without the work injury?' If the honest answer is 'no,' argue that apportionment is legally improper."
      },
      {
        caseNumber: "A2101129",
        year: "2021",
        title: "Repeated minor incidents = compensable injury",
        description: "Aggravation of a pre-existing condition from a series of incidents over time can still be treated as a personal injury under s.134(1), even if you can't point to one specific moment.",
        strategyMoves: [
          "Frame a series of micro-traumas as one 'personal injury' under s.134(1)",
          "Use detailed chronology + consistent symptom progression",
          "Show each small event nudged the condition along"
        ],
        portableStrategy: "Teach workers to build incident diaries: repeated twinges, minor pulls, etc., that lead up to 'the day it finally went.' Then frame it as cumulative injury from repeated tasks, not just 'degeneration.'"
      }
    ]
  },
  {
    title: "Mental Disorder & Bullying Claims",
    cases: [
      {
        caseNumber: "A1900037",
        year: "2019",
        title: "Mental disorder from series of stressors; refusal to accommodate",
        description: "Sets out the subjective + objective test for mental-disorder claims and says that when an employer refuses to accommodate a condition by denying it exists, that can be a significant workplace stressor.",
        strategyMoves: [
          "Meet the two-part mental-disorder test head-on",
          "Reframe 'refusal to accommodate' as a stressor, not just an 'employment decision'",
          "Argue that outright denial of the worker's condition is abusive and harmful"
        ],
        portableStrategy: "When an employer stonewalls accommodation requests, build a narrative of ongoing, targeted invalidation and its psychological impact, and argue it falls outside the s.5.1(1)(c) exclusion."
      },
      {
        caseNumber: "2014-02791",
        year: "2014",
        title: "Bullying & harassment vs 'just rudeness'",
        description: "Explains that bullying/harassment is a type of interpersonal conflict that must have an element of abusive or threatening behaviour; mere rudeness or thoughtlessness is not enough.",
        strategyMoves: [
          "Define the threshold clearly using OHS and Board guidance",
          "Sort facts into 'real bullying/harassment events' vs 'mere rudeness'",
          "Show the worker's condition tracks the serious events"
        ],
        portableStrategy: "Curate your evidence: highlight repeated, targeted acts (threats, put-downs, undermining) and downplay 'boss is kind of a jerk' noise."
      }
    ]
  },
  {
    title: "Challenging Board Medical Advisors",
    cases: [
      {
        caseNumber: "2006-03608",
        year: "2006",
        title: "Limits on Board Medical Advisors & internal guidelines",
        description: "A Board Medical Advisor's job is to give medical expertise – not interpret and apply policy. The Board can't rely on internal guidelines if that means ignoring binding Board policy.",
        strategyMoves: [
          "Challenge when Board Medical Advisors interpret policy instead of providing medical expertise",
          "Point out when internal guidelines contradict binding Board policy",
          "Focus on the medical advisor's proper role"
        ],
        portableStrategy: "When they're ignoring your specialist and just quoting their own doctor, cite this case to show that their medical advisor overstepped their role by making policy decisions instead of providing medical expertise."
      }
    ]
  },
  {
    title: "Reopenings & New Diagnoses",
    cases: [
      {
        caseNumber: "2004-06682",
        year: "2004",
        title: "New imaging clarifies same condition → reopening allowed",
        description: "CT scan gave a new label, but WCAT held the underlying condition was the same, so the worker was entitled to reopening under s.96(2).",
        strategyMoves: [
          "Label new tests as clarifying, not transforming",
          "Argue the CT/MRI didn't create a new condition, it just gave better detail of the same compensable problem",
          "Tie the significant change to the originally accepted condition"
        ],
        portableStrategy: "Use the decision tree – 'Did the Board already decide this specific condition or entitlement? If yes → reopening. If no → new matter.'"
      }
    ]
  }
];
