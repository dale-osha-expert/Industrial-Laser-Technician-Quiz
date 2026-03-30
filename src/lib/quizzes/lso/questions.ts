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
];
