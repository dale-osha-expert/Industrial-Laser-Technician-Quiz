// ---------------------------------------------------------------------------
// Industrial LSO Master Quiz — Remediation Engine
// Simulates AI-generated mini-lessons and rephrased questions.
// ---------------------------------------------------------------------------

import { Question, RemediationPayload, Topic } from "@/lib/types";

const LESSONS: Record<Topic, string> = {
  "laser-basics": `**Laser Classifications & LSO Responsibilities — ANSI Z136.1**

Lasers are classified from Class 1 (safest) through Class 4 (most hazardous). **Class 1** systems cannot produce damaging radiation under normal conditions — either because their output is inherently low or a higher-power source is fully enclosed. **Class 2** lasers emit only visible light (400–700 nm) and rely on the blink/aversion reflex for safety. **Class 3R** systems pose a small risk if the beam is viewed directly or via specular reflection. **Class 4** lasers are the most dangerous — hazardous to eyes and skin, capable of igniting materials, and can generate plasma radiation and air contaminants.

The **Laser Safety Officer (LSO)** is the central figure in any laser safety program. The LSO is responsible for classifying all laser systems in the facility — including verifying manufacturer classifications and classifying custom-built or modified systems. The LSO manages the overall safety program, performs hazard evaluations, applies control measures, monitors compliance, and approves SOPs for Class 3B and Class 4 systems (an administrative control).

Work areas must have warning signs, classification labels, and audible alarms. In the event of suspected injury, the LSO must immediately send the employee for medical examination — baseline eye exams for new employees are also recommended. The LSO must implement a pre-established action plan for injuries, followed by a detailed report, corrective measures, and follow-up training. During compliance audits, the LSO accompanies inspectors and presents the safety program details.`,

  "control-measures": "",
  "non-beam-hazards": "",
  "eye-skin-exposure": "",
};

/**
 * Per-question NOTES from the course material.
 */
const QUESTION_NOTES: Record<number, string> = {
  // ── Laser Basics (Q1–Q12) ───────────────────────────────────────────
  1: `Class 1 systems are not capable of damaging the human body or eyes. This is either because the radiation level they produce is not dangerous, or they have a higher power laser embedded in the system that has the appropriate safety control measures.`,

  2: `Class 2 systems are safe in that the human eye's natural reflex to avert keeps it from absorbing too much radiation before it is damaged. These lasers must be in the visible spectrum (400-700 nm).`,

  3: `Class 3R systems can be potentially hazardous if the beam is viewed directly or is viewed reflecting off of a specular (smooth) surface. However, the probability of injury is small.`,

  4: `Class 4 systems are hazardous to the skin and eyes under direct incidence, and also pose a fire hazard. They are also capable of producing dangerous plasma radiation and air contaminants.`,

  5: `The Laser Safety Officer (LSO) is responsible for identifying the classification of equipment in the lab or work space. If there is a laser system that is custom built or has been modified, it is up to the LSO to classify the system.`,

  6: `The LSO is responsible for managing the safety program, performing hazard evaluation, applying control measures, and monitoring compliance. It is the responsibility of the employer to provide PPE for operators.`,

  7: `The laser safety program consists of training new/existing employees, establishing SOPs, implementing hazard controls, and maintaining policies.`,

  8: `The LSO must classify new or custom laser systems, as well as verify the classification of manufactured equipment.`,

  9: `The LSO must approve of SOPs for Class 3B and Class 4 systems. This falls under the category of administrative and procedural control.`,

  10: `The LSO must ensure that work areas are clearly labeled with the laser classification and have the proper warning signs.`,

  11: `The LSO must send employees for medical examination in the event of a suspected or confirmed injury. It is also a good idea to have a preemptive eye exam performed on new employees, for a baseline reference of any potential eye damage.\n\nIn the event of a laser induced injury, the LSO must implement an action plan to get the injured personnel the required medical attention. This process should be pre-established and able to be implemented quickly. A detailed report should follow, as well as corrective control measures, hazard mitigation, and follow-up training.`,

  12: `The LSO must regularly ensure that the equipment and its associated control measures are working properly. In the event of an OSHA audit, the LSO must provide regulators with the details of the safety program that was implemented.`,
};

/**
 * Rephrased questions keyed by original question ID.
 */
const REPHRASED_QUESTIONS: Record<number, Question> = {
  // ── Laser Basics (Q1–Q12) ───────────────────────────────────────────
  1: {
    id: 101,
    topic: "laser-basics",
    difficulty: "easy",
    questionText:
      "A laser system is labeled Class 1. Can this system cause harm to a person's eyes or skin under normal operating conditions?",
    options: [
      { id: "a", text: "No — Class 1 systems are incapable of producing hazardous radiation under normal use" },
      { id: "b", text: "Yes — all laser systems pose some risk of injury" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §3.3.1",
  },
  2: {
    id: 102,
    topic: "laser-basics",
    difficulty: "easy",
    questionText:
      "What natural human reflex makes Class 2 lasers safe under normal conditions?",
    options: [
      { id: "a", text: "The pupil constriction reflex that blocks all incoming light" },
      { id: "b", text: "The blink/aversion response that causes the viewer to look away from bright visible light" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.3.2",
  },
  3: {
    id: 103,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "A Class 3R laser beam reflects off a polished metal surface into a worker's eyes. What type of reflection caused this hazard?",
    options: [
      { id: "a", text: "Diffuse reflection from a rough surface" },
      { id: "b", text: "Specular reflection from a smooth surface" },
      { id: "c", text: "Diffractive scattering through an aperture" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.3.3",
  },
  4: {
    id: 104,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "During a hazard evaluation, the LSO needs to determine which laser classes require fire safety considerations. Which class poses a fire hazard?",
    options: [
      { id: "a", text: "Class 2" },
      { id: "b", text: "Class 3B" },
      { id: "c", text: "Class 4" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §3.3.5",
  },
  5: {
    id: 105,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "A research lab builds a custom laser system from individual components. Who is responsible for determining its hazard classification?",
    options: [
      { id: "a", text: "The employer" },
      { id: "b", text: "The Laser Safety Officer (LSO)" },
      { id: "c", text: "The researcher who assembled it" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.1",
  },
  6: {
    id: 106,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "An employer asks the LSO to only handle hazard evaluations, while a supervisor manages the rest of the safety program. Is this an appropriate division of responsibilities?",
    options: [
      { id: "a", text: "Yes — the LSO only needs to handle hazard evaluation" },
      { id: "b", text: "No — the LSO is responsible for managing the full safety program, including hazard evaluation, control measures, and compliance monitoring" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.1.1",
  },
  7: {
    id: 107,
    topic: "laser-basics",
    difficulty: "hard",
    questionText:
      "A new LSO is setting up a laser safety program. Which of the following activities should be included?",
    options: [
      { id: "a", text: "Training employees, establishing SOPs, implementing hazard controls, and maintaining policies" },
      { id: "b", text: "Training employees, designing custom laser setups, and maintaining policies" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §4.1.2",
  },
  8: {
    id: 108,
    topic: "laser-basics",
    difficulty: "easy",
    questionText:
      "A facility purchases a new commercial laser system with a manufacturer's classification label. Does the LSO still need to verify this classification?",
    options: [
      { id: "a", text: "Yes — the LSO must verify the classification of all manufactured equipment installed in the facility" },
      { id: "b", text: "No — manufacturer labels are always sufficient" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §4.1",
  },
  9: {
    id: 109,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "The LSO drafts a new set of standard operating procedures for a Class 4 laser. Under which type of control does SOP approval fall?",
    options: [
      { id: "a", text: "Engineering controls" },
      { id: "b", text: "Administrative controls" },
      { id: "c", text: "Personal protective equipment" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.2",
  },
  10: {
    id: 110,
    topic: "laser-basics",
    difficulty: "easy",
    questionText:
      "An LSO inspects a laser work area and finds warning signs but no classification labels or audible alarms. Is the area compliant?",
    options: [
      { id: "a", text: "Yes — warning signs alone are sufficient" },
      { id: "b", text: "No — the area must also have laser classification labels and audible alarms" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.5",
  },
  11: {
    id: 111,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "A worker reports possible exposure to a Class 3B laser beam. The LSO plans to schedule a medical exam for next week. Is this response adequate?",
    options: [
      { id: "a", text: "Yes — scheduling within a week is reasonable" },
      { id: "b", text: "No — the employee must be sent for medical examination immediately" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.4.1",
  },
  12: {
    id: 112,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "OSHA inspectors arrive at a facility for a compliance audit of the laser safety program. Who should present the safety program details and accompany the inspectors?",
    options: [
      { id: "a", text: "The facility manager" },
      { id: "b", text: "The Laser Safety Officer (LSO)" },
      { id: "c", text: "The HR department" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.1.3",
  },
};

export async function simulateRemediation(
  originalQuestion: Question
): Promise<RemediationPayload> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const topicLesson =
        LESSONS[originalQuestion.topic] ??
        "No lesson content available for this topic.";

      const questionNote = QUESTION_NOTES[originalQuestion.id];

      const lesson = questionNote
        ? `**Why your answer was incorrect:**\n\n${questionNote}\n\n${topicLesson}`
        : topicLesson;

      const rephrased =
        REPHRASED_QUESTIONS[originalQuestion.id] ?? {
          ...originalQuestion,
          id: originalQuestion.id + 100,
          questionText: `[Rephrased] ${originalQuestion.questionText}`,
        };

      resolve({ lesson, rephrasedQuestion: rephrased });
    }, 1000);
  });
}
