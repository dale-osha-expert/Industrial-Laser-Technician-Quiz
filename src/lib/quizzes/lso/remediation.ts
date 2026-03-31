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

  "hazard-evaluation": `**Hazard Evaluation — ANSI Z136.1**

Hazard evaluation is the foundation of laser safety. The classification of a laser system is determined by its potential to cause injury, the accessible radiation level during operation, whether the beam is enclosed, and the personnel who may be exposed. Classifications must be based on properly measured **maximum output power data** across all operating wavelengths — not nominal or minimum output.

For **CW (continuous-wave) lasers**, classification depends on output power and exposure duration. For **pulsed lasers**, the essential metrics are pulse energy, pulse duration, and pulse repetition frequency. Key optical measurement metrics include wavelength(s), radiant exposure, output divergence angle, and exposure aperture size. Electrical power consumption is not an optical metric used for classification.

The **Nominal Hazard Zone (NHZ)** is defined by the control measures implemented by the LSO, not by arbitrary distances. When evaluating the NHZ, the LSO must determine all possible beam paths, sources of specular reflection, MPE of diffuse materials, operator exposure frequency, and whether collecting optics are present.

**Diffuse reflection** occurs from rough surfaces and poses a fire hazard as energy is scattered broadly. **Specular reflection** occurs from smooth surfaces and poses an eye hazard because it creates unexpected concentrated beam paths. Understanding both reflection types is critical to proper hazard evaluation and NHZ determination.`,

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

  // ── Hazard Evaluation (Q13–Q23) ─────────────────────────────────────
  13: `The hazard classification level of a laser system is based on its potential for damage, radiation level, enclosure or lack thereof, and personnel exposure.`,

  14: `Laser classifications must be resultant from properly measured maximum output power data. This includes the different radiant energy levels of the output at any and all wavelengths that the system is capable of. Note that lower wavelengths have more energy than higher wavelengths. The classification should consider the most hazardous operation wavelength and output power level.`,

  15: `The essential metrics for determining laser hazard classification are wavelength, radiant exposure, divergence angle, and aperture size.`,

  16: `For CW lasers, continuous-wave output power and exposure duration determine the hazard classification.`,

  17: `For pulsed lasers, essential hazard classification metrics are pulse energy, pulse duration, and pulse repetition frequency.`,

  18: `A Nominal Hazard Zone (NHZ) may be implemented around enclosed Class 3B or Class 4 laser systems. This is necessary when the unenclosed beam exceeds the Maximum Permissible Energy (MPE). The control measures around the laser system define the boundaries of the NHZ.`,

  19: `When evaluating the NHZ, the LSO must determine all possible beam paths, all sources of specular reflection, the MPE of diffuse materials. They must also determine how often the operator will be inside the NHZ, and whether collecting optics will be available.`,

  20: `Diffuse reflection comes from rough surfaces, and specular reflection comes from smooth surfaces. Diffuse reflection poses a fire hazard, while specular reflection poses an eye exposure hazard since it induces unexpected beam paths.`,

  21: `Diffuse reflection comes from rough surfaces, and specular reflection comes from smooth surfaces. Diffuse reflection poses a fire hazard, while specular reflection poses an eye exposure hazard since it induces unexpected beam paths.`,

  22: `Diffuse reflection comes from rough surfaces, and specular reflection comes from smooth surfaces. Diffuse reflection poses a fire hazard, while specular reflection poses an eye exposure hazard since it induces unexpected beam paths.`,

  23: `Diffuse reflection comes from rough surfaces, and specular reflection comes from smooth surfaces. Diffuse reflection poses a fire hazard, while specular reflection poses an eye exposure hazard since it induces unexpected beam paths.`,
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

  // ── Hazard Evaluation (Q13–Q23) ─────────────────────────────────────
  13: {
    id: 113,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "An LSO is classifying a new laser system. Should the classification consider only the beam's radiation level, or additional factors as well?",
    options: [
      { id: "a", text: "Only the radiation level matters for classification" },
      { id: "b", text: "Classification must also consider damage potential, beam environment, enclosure, and exposed personnel" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.3",
  },
  14: {
    id: 114,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "A laser system can operate at three different power levels. At which level should the hazard evaluation be performed?",
    options: [
      { id: "a", text: "The lowest power level" },
      { id: "b", text: "The average power level" },
      { id: "c", text: "The maximum power level" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §3.3.1",
  },
  15: {
    id: 115,
    topic: "hazard-evaluation",
    difficulty: "hard",
    questionText:
      "An LSO is gathering data for hazard classification. Which measurement is relevant: the laser's electrical power draw or its output divergence angle?",
    options: [
      { id: "a", text: "Electrical power draw" },
      { id: "b", text: "Output divergence angle" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.3.2",
  },
  16: {
    id: 116,
    topic: "hazard-evaluation",
    difficulty: "easy",
    questionText:
      "For a continuous-wave laser, what two factors determine its hazard classification?",
    options: [
      { id: "a", text: "Beam color and lens type" },
      { id: "b", text: "Output power and exposure duration" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.3.3",
  },
  17: {
    id: 117,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "A pulsed laser system is being evaluated. The LSO has measured pulse energy and duration. What additional metric is needed?",
    options: [
      { id: "a", text: "The color of the beam" },
      { id: "b", text: "The pulse repetition frequency" },
      { id: "c", text: "The weight of the laser system" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.3.4",
  },
  18: {
    id: 118,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "An LSO marks the NHZ boundary as 3 feet around the laser system in every case. Is this correct?",
    options: [
      { id: "a", text: "Yes — 3 feet is the standard NHZ boundary" },
      { id: "b", text: "No — the NHZ boundaries are defined by the specific control measures implemented, not a fixed distance" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.9",
  },
  19: {
    id: 119,
    topic: "hazard-evaluation",
    difficulty: "hard",
    questionText:
      "When evaluating the NHZ, an LSO considers beam paths, specular reflections, diffuse MPE, and operator exposure frequency. Is anything missing from a complete evaluation?",
    options: [
      { id: "a", text: "No — that covers all critical factors" },
      { id: "b", text: "Yes — the LSO must also determine whether collecting optics will be available" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.9.1",
  },
  20: {
    id: 120,
    topic: "hazard-evaluation",
    difficulty: "easy",
    questionText:
      "A laser beam hits an unfinished concrete wall. The wall has a rough texture. What type of reflection will occur?",
    options: [
      { id: "a", text: "Specular reflection" },
      { id: "b", text: "Diffuse reflection" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.4.1",
  },
  21: {
    id: 121,
    topic: "hazard-evaluation",
    difficulty: "easy",
    questionText:
      "A laser beam strikes a polished stainless steel surface. What type of reflection should the LSO expect?",
    options: [
      { id: "a", text: "Diffuse reflection" },
      { id: "b", text: "Specular reflection" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.4.2",
  },
  22: {
    id: 122,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "During a hazard evaluation, the LSO identifies rough wooden surfaces in the beam path. What is the primary safety concern?",
    options: [
      { id: "a", text: "Eye exposure from reflected beams" },
      { id: "b", text: "Fire hazard from diffuse energy absorption" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.4.1",
  },
  23: {
    id: 123,
    topic: "hazard-evaluation",
    difficulty: "medium",
    questionText:
      "An LSO discovers a polished metal tool left near a Class 4 laser beam path. What is the primary hazard concern?",
    options: [
      { id: "a", text: "Fire hazard from the metal heating up" },
      { id: "b", text: "Eye hazard from specular reflection creating an unexpected beam path" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.4.2",
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
