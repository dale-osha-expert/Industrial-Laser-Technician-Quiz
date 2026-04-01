// ---------------------------------------------------------------------------
// Industrial LSO Master Quiz — Base Question Bank
// Questions covering Laser Safety Officer responsibilities and standards.
// ---------------------------------------------------------------------------

import { Question } from "@/lib/types";

export const BASE_QUESTIONS: Question[] = [
  // ── Topic: Laser Basics (Questions 1–12) ─────────────────────────────────

  {
    id: 1,
    topic: "laser-basics",
    difficulty: "easy",
    questionText:
      "True or false? Class 1 systems are considered to be completely safe, all the time.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §3.3.1",
  },
  {
    id: 2,
    topic: "laser-basics",
    difficulty: "easy",
    questionText:
      "True or false? Class 2 systems are considered to be safe as long as the aversion response forces your eye to look away when it is struck by the visible light of the laser.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §3.3.2",
  },
  {
    id: 3,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "Class 3R lasers are hazardous if viewed with what type of reflection?",
    options: [
      { id: "a", text: "Diffuse" },
      { id: "b", text: "Specular" },
      { id: "c", text: "Diffractive" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.3.3",
  },
  {
    id: 4,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "Which of the following laser classifications poses a fire hazard?",
    options: [
      { id: "a", text: "Class 3R" },
      { id: "b", text: "Class 3B" },
      { id: "c", text: "Class 4" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §3.3.5",
  },
  {
    id: 5,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "Who is responsible for classifying a custom-built laser setup?",
    options: [
      { id: "a", text: "The Employer" },
      { id: "b", text: "The LSO" },
      { id: "c", text: "The technician who built it" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.1",
  },
  {
    id: 6,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "Which of the following is the LSO responsible for?",
    options: [
      { id: "a", text: "Managing the safety program" },
      { id: "b", text: "Performing hazard evaluation" },
      { id: "c", text: "Applying control measures" },
      { id: "d", text: "Monitoring compliance" },
      { id: "e", text: "All of the above" },
    ],
    correctOptionId: "e",
    ansiRef: "Z136.1 §4.1.1",
  },
  {
    id: 7,
    topic: "laser-basics",
    difficulty: "hard",
    questionText:
      "Which of the following is NOT part of the Laser Safety Program?",
    options: [
      { id: "a", text: "Training new employees" },
      { id: "b", text: "Training existing employees" },
      { id: "c", text: "Establishing SOPs" },
      { id: "d", text: "Designing custom setups" },
      { id: "e", text: "Implementing hazard controls" },
      { id: "f", text: "Maintaining policies" },
    ],
    correctOptionId: "d",
    ansiRef: "Z136.1 §4.1.2",
  },
  {
    id: 8,
    topic: "laser-basics",
    difficulty: "easy",
    questionText:
      "True or False? The LSO must verify the classification of manufactured laser equipment that is purchased and installed in the facility.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §4.1",
  },
  {
    id: 9,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "The approval of SOPs falls under which category?",
    options: [
      { id: "a", text: "Hazard Evaluation" },
      { id: "b", text: "Environmental Controls" },
      { id: "c", text: "Administrative Controls" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.3.2",
  },
  {
    id: 10,
    topic: "laser-basics",
    difficulty: "easy",
    questionText:
      "Laser work areas should be fitted with which of the following?",
    options: [
      { id: "a", text: "Warning Signs" },
      { id: "b", text: "Laser Classification Labels" },
      { id: "c", text: "Audible Alarms" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    ansiRef: "Z136.1 §4.5",
  },
  {
    id: 11,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "In the event of a suspected injury, what should the LSO do?",
    options: [
      { id: "a", text: "Perform first aid" },
      { id: "b", text: "Send the employee for a medical examination" },
      { id: "c", text: "Wait for the work period to end" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.4.1",
  },
  {
    id: 12,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "In the event of a compliance audit, who should accompany inspectors?",
    options: [
      { id: "a", text: "The LSO" },
      { id: "b", text: "The employer" },
      { id: "c", text: "The facility supervisor" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §4.1.3",
  },

  // ── Topic: Hazard Evaluation (Questions 13–23) ───────────────────────────

  {
    id: 13,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "The hazard classification level of a laser system is based on what?",
    options: [
      { id: "a", text: "Its capability of inducing damage onto any personal, operators or viewers" },
      { id: "b", text: "Level of radiation that is accessible during operation" },
      { id: "c", text: "The beam environment and whether or not it is enclosed" },
      { id: "d", text: "The personnel who may be exposed to it" },
      { id: "e", text: "All of the above" },
    ],
    correctOptionId: "e",
    ansiRef: "Z136.1 §3.3",
  },
  {
    id: 14,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "The hazard evaluation should be performed at what operating condition of the laser?",
    options: [
      { id: "a", text: "The minimum operating radiant output" },
      { id: "b", text: "The nominal operating radiant output" },
      { id: "c", text: "The maximum operating radiant output" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §3.3.1",
  },
  {
    id: 15,
    topic: "hazard-evaluation",
    difficulty: "hard",
    questionText:
      "Which factor is NOT an essential optical measurement metric for determining laser hazard classification?",
    options: [
      { id: "a", text: "Wavelength(s) of operation" },
      { id: "b", text: "Radiant exposure" },
      { id: "c", text: "Electrical system power consumption" },
      { id: "d", text: "Output divergence angle" },
      { id: "e", text: "Exposure aperture size" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §3.3.2",
  },
  {
    id: 16,
    topic: "hazard-evaluation",
    difficulty: "easy",
    questionText:
      "True or False? For CW Lasers, continuous-wave output power and exposure duration determine the hazard classification.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §3.3.3",
  },
  {
    id: 17,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "Which of the following are essential metrics for pulsed lasers?",
    options: [
      { id: "a", text: "Pulse energy" },
      { id: "b", text: "Pulse duration" },
      { id: "c", text: "Pulse repetition frequency" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    ansiRef: "Z136.1 §3.3.4",
  },
  {
    id: 18,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "What defines the boundaries of the Nominal Hazard Zone (NHZ)?",
    options: [
      { id: "a", text: "The area 3 feet surrounding the laser system" },
      { id: "b", text: "The control measures implemented by the LSO" },
      { id: "c", text: "The extents of the building in which the laser is housed" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.9",
  },
  {
    id: 19,
    topic: "hazard-evaluation",
    difficulty: "hard",
    questionText:
      "Which of the following is NOT critical to evaluating the NHZ?",
    options: [
      { id: "a", text: "Determining all possible beam paths" },
      { id: "b", text: "Determining all sources of specular reflection" },
      { id: "c", text: "Determining the MPE of diffuse materials" },
      { id: "d", text: "Determining the minimum operating threshold of the laser" },
      { id: "e", text: "Determining how often the operator will be inside the NHZ" },
      { id: "f", text: "Determining whether collecting optics will be available" },
    ],
    correctOptionId: "d",
    ansiRef: "Z136.1 §4.3.9.1",
  },
  {
    id: 20,
    topic: "hazard-evaluation",
    difficulty: "easy",
    questionText:
      "Rough surfaces produce which type of reflection?",
    options: [
      { id: "a", text: "Diffuse" },
      { id: "b", text: "Specular" },
      { id: "c", text: "Lambertian" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §3.4.1",
  },
  {
    id: 21,
    topic: "hazard-evaluation",
    difficulty: "easy",
    questionText:
      "Smooth surfaces produce which type of reflection?",
    options: [
      { id: "a", text: "Diffuse" },
      { id: "b", text: "Specular" },
      { id: "c", text: "Lambertian" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.4.2",
  },
  {
    id: 22,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "Which type of reflection poses a fire hazard?",
    options: [
      { id: "a", text: "Diffuse" },
      { id: "b", text: "Specular" },
      { id: "c", text: "Lambertian" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §3.4.1",
  },
  {
    id: 23,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "Which type of reflection poses an eye hazard?",
    options: [
      { id: "a", text: "Diffuse" },
      { id: "b", text: "Specular" },
      { id: "c", text: "Lambertian" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.4.2",
  },

  // ── Topic: Control Measures (Questions 24–41) ────────────────────────────

  {
    id: 24,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "Who is the LSO responsible for training?",
    options: [
      { id: "a", text: "Laser Operators" },
      { id: "b", text: "Maintenance/Service Personnel" },
      { id: "c", text: "Observers/visitors (to a lesser extent)" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    ansiRef: "Z136.1 §4.3.1",
  },
  {
    id: 25,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "Which classifications of lasers require a supervisor during operation?",
    options: [
      { id: "a", text: "Class 1" },
      { id: "b", text: "Class 2" },
      { id: "c", text: "Class 3B & Class 4" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.3.1",
  },
  {
    id: 26,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "Laser controlled areas should be fitted with which of the following?",
    options: [
      { id: "a", text: "Warning Signs" },
      { id: "b", text: "Labels with Classification Ratings" },
      { id: "c", text: "Interlocks" },
      { id: "d", text: "Protective Enclosures" },
      { id: "e", text: "All of the above" },
    ],
    correctOptionId: "e",
    ansiRef: "Z136.1 §4.5",
  },
  {
    id: 27,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "True or False? Class 3B and Class 4 lasers systems must be fitted with a key operated master switch (emergency machine off).",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §4.3.10",
  },
  {
    id: 28,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "True or False? Viewing windows should diffuse or absorb the amount of transmitted light to ensure the exposure through the window is below the MPE.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §4.3.7",
  },
  {
    id: 29,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "For beam paths that are enclosed, where should hazard evaluation be performed?",
    options: [
      { id: "a", text: "Only at the output" },
      { id: "b", text: "At every accessible point where light exits the enclosure" },
      { id: "c", text: "One meter from the viewing window" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.5",
  },
  {
    id: 30,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "Emergency Machine Off switches should be fitted where?",
    options: [
      { id: "a", text: "Inside the laser area" },
      { id: "b", text: "Outside of the laser area" },
      { id: "c", text: "Both, so they can be shut off by the operator or by someone outside" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.3.10.2",
  },
  {
    id: 31,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "Laser warning signs should be fitted with which of the following?",
    options: [
      { id: "a", text: "Flashing Lights" },
      { id: "b", text: "Audible Alarms" },
      { id: "c", text: "Either of the two above" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.5.1",
  },
  {
    id: 32,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "Alignment SOPs developed by the LSO should have which of the following?",
    options: [
      { id: "a", text: "Failure mode mitigation methods" },
      { id: "b", text: "Training on alignment steps" },
      { id: "c", text: "Class 1 sources for simulation of alignment steps" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    ansiRef: "Z136.1 §4.3.2.1",
  },
  {
    id: 33,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "True or False? Laser safety goggles work for all wavelength ranges and power ratings.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.2",
  },
  {
    id: 34,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "An OD number of 1 corresponds to which throughput percentage?",
    options: [
      { id: "a", text: "1% (1/100th)" },
      { id: "b", text: "10% (1/10th)" },
      { id: "c", text: "50% (1/2)" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.2.1",
  },
  {
    id: 35,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "Personal protective equipment includes which of the following?",
    options: [
      { id: "a", text: "Laser safety goggles" },
      { id: "b", text: "Smocks or lab coats" },
      { id: "c", text: "Gloves" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    ansiRef: "Z136.1 §4.6",
  },
  {
    id: 36,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "Who is responsible for purchasing the PPE?",
    options: [
      { id: "a", text: "Employer" },
      { id: "b", text: "LSO" },
      { id: "c", text: "Operator" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §4.6.1",
  },
  {
    id: 37,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "Who is responsible for maintaining the PPE?",
    options: [
      { id: "a", text: "Employer" },
      { id: "b", text: "LSO" },
      { id: "c", text: "Operator" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.1",
  },
  {
    id: 38,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "Who is responsible for wearing the PPE?",
    options: [
      { id: "a", text: "Employer" },
      { id: "b", text: "LSO" },
      { id: "c", text: "Operator" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.6.1",
  },
  {
    id: 39,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "Which of the following correctly reflects the hierarchy of control measures for laser safety, from most to least preferred?",
    options: [
      { id: "a", text: "PPE → Administrative Controls → Engineering Controls" },
      { id: "b", text: "Engineering Controls → Administrative Controls → PPE" },
      { id: "c", text: "Administrative Controls → PPE → Engineering Controls" },
      { id: "d", text: "PPE → Engineering Controls → Administrative Controls" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3",
  },
  {
    id: 40,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "Which of the following are required on a laser warning sign message panel for a Laser Controlled Area (LCA)?",
    options: [
      { id: "a", text: "The hazard class of the area" },
      { id: "b", text: "The required optical density and wavelength(s) of laser protective eyewear" },
      { id: "c", text: "The name and contact information for the Laser Safety Officer (LSO) or supervisor" },
      { id: "d", text: "Special precautionary instructions, such as \"Do Not Enter When Light is Illuminated\"" },
      { id: "e", text: "All of the above" },
    ],
    correctOptionId: "e",
    ansiRef: "Z136.1 §4.5.3",
  },
  {
    id: 41,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "Which of the following is the most important reason to select a reputable manufacturer when purchasing a laser cleaning system for outdoor use?",
    options: [
      { id: "a", text: "They offer better pricing on replacement parts" },
      { id: "b", text: "Their equipment is easier to transport" },
      { id: "c", text: "They provide verified technical specifications essential for hazard evaluation" },
      { id: "d", text: "Their systems operate at lower power levels" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.2",
  },

  // ── Topic: Non-Beam Hazards (Questions 42–58) ────────────────────────────

  {
    id: 42,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "True or False? Laser radiation is the only source of hazard from the system.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7",
  },
  {
    id: 43,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "True or False? Class 4 lasers are capable of releasing hazardous chemicals, plasma, and ions into the air.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §7.3",
  },
  {
    id: 44,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "What type of electrical component poses a shock hazard?",
    options: [
      { id: "a", text: "Resistors" },
      { id: "b", text: "Capacitors" },
      { id: "c", text: "Inductors" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.4.1",
  },
  {
    id: 45,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "What type of electrical component poses a thermal hazard?",
    options: [
      { id: "a", text: "Resistors" },
      { id: "b", text: "Capacitors" },
      { id: "c", text: "Inductors" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §7.4.2",
  },
  {
    id: 46,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "True or False? Any fire extinguisher, regardless of its rating, is adequate to maintain safety around a laser system.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.5",
  },
  {
    id: 47,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "Electrical control measures are required for circuits containing what voltage?",
    options: [
      { id: "a", text: "9 V" },
      { id: "b", text: "12 V" },
      { id: "c", text: "Greater Than 50 V" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §7.4",
  },
  {
    id: 48,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "Which control measures contribute to electrical safety?",
    options: [
      { id: "a", text: "Enclosures" },
      { id: "b", text: "Grounding" },
      { id: "c", text: "Indicator Lights" },
      { id: "d", text: "All of the above" },
    ],
    correctOptionId: "d",
    ansiRef: "Z136.1 §7.4.3",
  },
  {
    id: 49,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "High power lasers pose which type of Non-Laser Radiation hazards?",
    options: [
      { id: "a", text: "Radio Waves" },
      { id: "b", text: "X-Rays" },
      { id: "c", text: "Thermal Radiation" },
      { id: "d", text: "Ionizing Radiation" },
      { id: "e", text: "All of the above" },
    ],
    correctOptionId: "e",
    ansiRef: "Z136.1 §7.6",
  },
  {
    id: 50,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "True or False? UV radiation can cause cataracts over time.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §7.6.1",
  },
  {
    id: 51,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "What type of laser poses a fire hazard?",
    options: [
      { id: "a", text: "Class 1" },
      { id: "b", text: "Class 2" },
      { id: "c", text: "Class 3" },
      { id: "d", text: "Class 4" },
    ],
    correctOptionId: "d",
    ansiRef: "Z136.1 §7.5",
  },
  {
    id: 52,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "The use of robotic arms and motorized stages does what to the Nominal Hazard Zone (NHZ)?",
    options: [
      { id: "a", text: "Increases its area" },
      { id: "b", text: "Decreases its area" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §7.7",
  },
  {
    id: 53,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "Which of the following is NOT an appropriate way to work with hazardous and compressed gases?",
    options: [
      { id: "a", text: "Stored properly" },
      { id: "b", text: "Exhausted properly" },
      { id: "c", text: "Labeled properly" },
      { id: "d", text: "Protected from contaminants" },
      { id: "e", text: "Mixed with other gases" },
      { id: "f", text: "Worked around using respiratory protection" },
    ],
    correctOptionId: "e",
    ansiRef: "Z136.1 §7.3.2",
  },
  {
    id: 54,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "True or False? The LSO is responsible for considering the ergonomics of the SOPs of laser systems, to reduce repetitive injury.",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §7.7.2",
  },
  {
    id: 55,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "How much room should the worker have in the area surrounding a laser system?",
    options: [
      { id: "a", text: "1 foot" },
      { id: "b", text: "3 feet" },
      { id: "c", text: "10 feet" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.7.1",
  },
  {
    id: 56,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "What is the best way to dispose of an old laser system?",
    options: [
      { id: "a", text: "Place it in recycling bin" },
      { id: "b", text: "Stored in a flame proof cabinet" },
      { id: "c", text: "Return it to the manufacturer" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §7.8",
  },
  {
    id: 57,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "True or False: Engineering control measures, including a warning sign, are required if a surface in the laser control area exceeds 50°C?",
    options: [
      { id: "a", text: "True" },
      { id: "b", text: "False" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §7.4.2",
  },

  // ── Eye & Skin Exposure (Q58-Q68) ──────────────────────────────────
  {
    id: 58,
    topic: "eye-skin-exposure",
    difficulty: "easy",
    questionText:
      "Where can you find the maximum permissible exposure (MPE) limits?",
    options: [
      { id: "a", text: "OSHA's website" },
      { id: "b", text: "The American National Standards Institute (ANSI)" },
      { id: "c", text: "Physics textbooks" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.1",
  },
  {
    id: 59,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "Which beam characteristics are critical for measuring the MPE?",
    options: [
      { id: "a", text: "Aperture Size" },
      { id: "b", text: "Source Distance" },
      { id: "c", text: "Outgoing Cone Angle" },
      { id: "d", text: "Wavelength" },
      { id: "e", text: "Exposure Time" },
      { id: "f", text: "All of the above" },
    ],
    correctOptionId: "f",
    ansiRef: "Z136.1 §8.2",
  },
  {
    id: 60,
    topic: "eye-skin-exposure",
    difficulty: "hard",
    questionText: "What cone angle constitutes a collimated beam?",
    options: [
      { id: "a", text: "Less than 1 degree" },
      { id: "b", text: "Less than 1.5 mrad (0.1 degree)" },
      { id: "c", text: "Less than 10 degrees" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.2.1",
  },
  {
    id: 61,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText: "What happens when collimated beams enter the eye?",
    options: [
      { id: "a", text: "The eye's pupil blocks the beam." },
      { id: "b", text: "The viewer instinctively blinks." },
      {
        id: "c",
        text: "The beam forms a very small spot with high energy density.",
      },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §8.2.1",
  },
  {
    id: 62,
    topic: "eye-skin-exposure",
    difficulty: "easy",
    questionText: "Which wavelengths constitute the visible range?",
    options: [
      { id: "a", text: "0–400 nm" },
      { id: "b", text: "400–700 nm" },
      { id: "c", text: "700–1400 nm" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.3",
  },
  {
    id: 63,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "What type of beam profile do diverging lasers typically have?",
    options: [
      { id: "a", text: "Newtonian" },
      { id: "b", text: "Cartesian" },
      { id: "c", text: "Gaussian" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §8.2.2",
  },
  {
    id: 64,
    topic: "eye-skin-exposure",
    difficulty: "hard",
    questionText:
      "Which of the following is NOT necessary for measuring a wide spectrum laser source?",
    options: [
      { id: "a", text: "Consider the thermal risks of each wavelength." },
      {
        id: "b",
        text: "Consider the photochemical risks of each wavelength.",
      },
      { id: "c", text: "Measure the wavelengths separately." },
      {
        id: "d",
        text: "Treat the MPE's of each wavelength as additive.",
      },
      { id: "e", text: "Measure only the highest energy wavelength." },
    ],
    correctOptionId: "e",
    ansiRef: "Z136.1 §8.2.3",
  },
  {
    id: 65,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "What is the maximum exposure duration for near IR lasers (700–1400 nm)?",
    options: [
      { id: "a", text: "0.25 seconds" },
      { id: "b", text: "1 second" },
      { id: "c", text: "10 seconds" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §8.3.1",
  },
  {
    id: 66,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "What is the maximum exposure duration for visible lasers (400–700 nm)?",
    options: [
      { id: "a", text: "0.25 seconds" },
      { id: "b", text: "1 second" },
      { id: "c", text: "10 seconds" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §8.3.2",
  },
  {
    id: 67,
    topic: "eye-skin-exposure",
    difficulty: "easy",
    questionText: "Skin exposure poses what type of risk?",
    options: [
      { id: "a", text: "Thermal" },
      { id: "b", text: "Photochemical" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §8.4",
  },
  {
    id: 68,
    topic: "eye-skin-exposure",
    difficulty: "easy",
    questionText: "Eye exposure poses what type of risk?",
    options: [
      { id: "a", text: "Thermal" },
      { id: "b", text: "Photochemical" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.4",
  },
];
