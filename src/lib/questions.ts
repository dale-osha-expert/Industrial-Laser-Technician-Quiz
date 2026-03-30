// ---------------------------------------------------------------------------
// Industrial Tech Master Quiz — Base Question Bank
// 40 questions covering four laser safety topic areas.
// ---------------------------------------------------------------------------

import { Question } from "./types";

export const BASE_QUESTIONS: Question[] = [
  // ── Topic: Laser Basics (Questions 1–6) ──────────────────────────────────

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
    difficulty: "easy",
    questionText:
      "Who is responsible for providing all employees with PPE?",
    options: [
      { id: "a", text: "The employee" },
      { id: "b", text: "The employer" },
      { id: "c", text: "The manufacturer" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.1",
  },
  {
    id: 6,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "When should medical examination happen?",
    options: [
      { id: "a", text: "1 day after an accident" },
      { id: "b", text: "1 week after an accident" },
      { id: "c", text: "Immediately after an accident" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.4.1",
  },

  // ── Topic: Control Measures (Questions 7–19) ─────────────────────────────

  {
    id: 7,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "Which classifications of lasers requires a supervisor during operation?",
    options: [
      { id: "a", text: "Class 1" },
      { id: "b", text: "Class 2" },
      { id: "c", text: "Class 3B & Class 4" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.3.1",
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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

  // ── Topic: Non-Beam Hazards (Questions 22–35) ────────────────────────────

  {
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "Electrical control measures are required for circuits containing what voltage?",
    options: [
      { id: "a", text: "9 V" },
      { id: "b", text: "12 V" },
      { id: "c", text: "More than 50 V" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §7.4",
  },
  {
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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

  // ── Topic: Eye & Skin Exposure (Questions 37–43) ─────────────────────────

  {
    id: 37,
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
    ansiRef: "Z136.1 §8.2",
  },
  {
    id: 38,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "What happens when collimated beams enter the eye?",
    options: [
      { id: "a", text: "The eye's pupil blocks the beam." },
      { id: "b", text: "The viewer instinctively blinks." },
      { id: "c", text: "The beam forms a very small spot with high energy density." },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §8.1",
  },
  {
    id: 39,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "Which wavelengths constitute the visible range?",
    options: [
      { id: "a", text: "0-400 nm" },
      { id: "b", text: "400-700 nm" },
      { id: "c", text: "700-1400 nm" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.1.1",
  },
  {
    id: 40,
    topic: "eye-skin-exposure",
    difficulty: "hard",
    questionText:
      "What is the maximum exposure duration for near IR lasers (700-1400 nm)?",
    options: [
      { id: "a", text: "0.25 seconds" },
      { id: "b", text: "1 second" },
      { id: "c", text: "10 seconds" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §8.2.3",
  },
  {
    id: 41,
    topic: "eye-skin-exposure",
    difficulty: "hard",
    questionText:
      "What is the maximum exposure duration for visible lasers (400-700 nm)?",
    options: [
      { id: "a", text: "0.25 seconds" },
      { id: "b", text: "1 second" },
      { id: "c", text: "10 seconds" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §8.2.2",
  },
  {
    id: 42,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "Skin exposure poses what type of risk?",
    options: [
      { id: "a", text: "Thermal" },
      { id: "b", text: "Photochemical" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §8.3",
  },
  {
    id: 43,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "Eye exposure poses what type of risk?",
    options: [
      { id: "a", text: "Thermal" },
      { id: "b", text: "Photochemical" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.1",
  },
];
