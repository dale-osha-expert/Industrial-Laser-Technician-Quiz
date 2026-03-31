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
];
