// ---------------------------------------------------------------------------
// Industrial Tech Master Quiz — Remediation Engine
// Simulates AI-generated mini-lessons and rephrased questions.
// ---------------------------------------------------------------------------

import { Question, RemediationPayload, Topic } from "./types";

/**
 * Topic-keyed lessons referencing ANSI Z136.1.
 * Each lesson is ~200 words explaining the underlying safety principle.
 */
const LESSONS: Record<Topic, string> = {
  "laser-basics": `**Understanding Laser Classifications — ANSI Z136.1**

Lasers are classified according to the hazard they present to the human body, primarily the eyes and skin. The classification system defined in ANSI Z136.1 ranges from Class 1 (safest) through Class 4 (most hazardous).

**Class 1** systems are incapable of producing damaging radiation under normal operating conditions — either because their output is inherently low or because a higher-power laser is fully enclosed with appropriate safety controls. **Class 2** lasers emit only visible light (400–700 nm) and rely on the human eye's natural aversion response (blink reflex) to prevent overexposure; they are considered safe as long as that reflex is not deliberately overridden.

**Class 3R** systems present a small risk of eye injury if the beam is viewed directly or via specular (mirror-like) reflection, but diffuse reflections are generally safe. **Class 3B** lasers can cause immediate eye injury from direct or specularly reflected beams. **Class 4** lasers are the most dangerous — they pose hazards to eyes and skin from direct, specular, and even diffuse exposure, can ignite flammable materials, and may generate hazardous plasma radiation and air contaminants.

Employers bear responsibility for providing PPE and a complete laser safety program. Medical surveillance — including baseline eye exams — should be established, and examinations must occur immediately after any known or suspected laser incident.`,

  "control-measures": `**Laser Control Measures — ANSI Z136.1**

Control measures for laser safety follow a strict hierarchy: engineering controls first, then administrative controls, and finally personal protective equipment (PPE) as the last line of defense.

**Engineering controls** include protective enclosures, interlocks on doors and panels, key-operated master switches, beam stops, and viewing windows that reduce transmitted light below the Maximum Permissible Exposure (MPE). Class 3B and Class 4 systems must have a key-operated master switch and Emergency Machine Off (EMO) buttons located both inside and outside the laser controlled area.

**Administrative controls** include warning signs with flashing lights or audible alarms, standard operating procedures, designated laser controlled areas, and training requirements. Warning sign message panels must display the hazard class, required eyewear OD and wavelength, LSO contact information, and special precautionary instructions.

**PPE** includes laser safety goggles, lab coats or smocks, and gloves. Critically, laser safety goggles are wavelength-specific — each pair has an Optical Density (OD) rating for a particular wavelength range. OD is logarithmic: OD 1 blocks 90% of light (10% throughput), OD 2 blocks 99% (1% throughput), and so on. The employer purchases PPE, the LSO maintains it, and the operator is responsible for wearing it.`,

  "non-beam-hazards": `**Non-Beam Hazards — ANSI Z136.1**

Laser radiation is not the only hazard associated with laser systems. Non-beam hazards (NBH) include electrical dangers, chemical exposure, fire risk, non-laser radiation, and mechanical hazards.

**Electrical hazards** are among the most serious. Capacitors in pulsed laser power supplies can retain lethal charge even after the system is powered off. Resistive components generate heat and can cause thermal burns. Electrical control measures are required for circuits exceeding 50 volts, and safety is maintained through proper enclosures, grounding, and power indicator lights.

**Chemical and atmospheric hazards** arise when Class 4 laser beams interact with air or target materials, potentially producing plasma, ions, and toxic fumes. Compressed gases used in laser systems must be stored, labeled, exhausted, and protected from contaminants properly — different gases must never be mixed. Respiratory protection may be required.

**Fire hazards** are specific to Class 4 lasers. Beam blocks may require water cooling, and appropriately rated fire extinguishers (specifically rated for electrical fires) must be located in every laser controlled area. **Robotic arms and motorized stages** increase the Nominal Hazard Zone (NHZ). Workers need at least 3 feet of clearance around the system. Old laser systems should be returned to the manufacturer for safe disposal due to hazardous chemicals and electrical components.`,

  "eye-skin-exposure": `**Eye and Skin Exposure — ANSI Z136.1**

The Maximum Permissible Exposure (MPE) limits for eyes and skin are published by the American National Standards Institute (ANSI) in Z136.1. Different limits apply to different wavelengths and laser types.

**Eye hazards** are the primary concern. When a collimated laser beam enters the eye, the cornea and lens focus it onto the retina, creating a very small spot with extremely high energy density. This can cause serious photochemical damage. The retinal hazard region spans from 400 nm to 1400 nm. For **visible lasers** (400–700 nm), the maximum exposure duration is 0.25 seconds for CW lasers, based on the eye's aversion response. For **near-IR lasers** (700–1400 nm), the maximum exposure duration extends to 10 seconds because the eye's natural movements and impulse to avert provide some protection even though the beam is invisible.

**Skin exposure** poses a thermal damage risk rather than a photochemical one. While generally less severe than eye injuries, skin burns from high-power lasers can be significant. Protective clothing, including smocks and gloves, helps reduce skin exposure risk. Both eye and skin MPE limits must be evaluated during the hazard analysis of any Class 3B or Class 4 laser system.`,
};

/**
 * Per-question NOTES from the course material.
 * Included as the first part of the remediation lesson for targeted feedback.
 */
const QUESTION_NOTES: Record<number, string> = {
  // ── Laser Basics (Q1–Q6) ─────────────────────────────────────────────
  1: `Class 1 systems are not capable of damaging the human body or eyes. This is either because the radiation level they produce is not dangerous, or they have a higher power laser embedded in the system that has the appropriate safety control measures.`,

  2: `Class 2 systems are safe in that the human eye's natural reflex to avert keeps it from absorbing too much radiation before it is damaged. These lasers must be in the visible spectrum (400-700 nm).`,

  3: `Class 3R systems can be potentially hazardous if the beam is viewed directly or is viewed reflecting off of a specular (smooth) surface. However, the probability of injury is small.`,

  4: `Class 4 systems are hazardous to the skin and eyes under direct incidence, and also pose a fire hazard. They are also capable of producing dangerous plasma radiation and air contaminants.`,

  5: `The employer is responsible for providing a laser safety program within the company to all employees who might come in contact with laser systems of Class 3B and Class 4. The employer is also responsible for performing hazard evaluation of each system and its corresponding workspace.`,

  6: `Medical examinations of employees should be considered. This includes having an eye doctor record an image of the retina, or record pre-existing skin damage on hands and face. Employees should also receive medical examinations immediately after known or suspected accidents.`,
};

/**
 * Rephrased questions keyed by original question ID.
 * Each provides a new scenario testing the same underlying concept.
 */
const REPHRASED_QUESTIONS: Record<number, Question> = {
  // ── Laser Basics (Q1–Q6) ─────────────────────────────────────────────
  1: {
    id: 101,
    topic: "laser-basics",
    difficulty: "easy",
    questionText:
      "A laser system is labeled Class 1. Under normal operating conditions, can this system damage a person's eyes or skin?",
    options: [
      { id: "a", text: "No — Class 1 systems are incapable of producing hazardous radiation levels under normal use" },
      { id: "b", text: "Yes — all lasers can cause eye damage regardless of class" },
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
      { id: "b", text: "The blink/aversion response that causes you to look away from bright visible light" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §3.3.2",
  },
  3: {
    id: 103,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "A Class 3R laser beam bounces off a polished metal surface into a worker's eyes. What type of reflection caused this hazard?",
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
      "A facility needs to evaluate fire risk from its laser systems. Which class of laser must be considered a potential ignition source?",
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
    difficulty: "easy",
    questionText:
      "A new laser technician asks who should pay for and supply the required safety equipment. Who has this responsibility?",
    options: [
      { id: "a", text: "Each individual technician" },
      { id: "b", text: "The employer" },
      { id: "c", text: "The laser manufacturer" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.1",
  },
  6: {
    id: 106,
    topic: "laser-basics",
    difficulty: "medium",
    questionText:
      "A technician suspects they were briefly exposed to a Class 4 laser beam. When should a medical examination be scheduled?",
    options: [
      { id: "a", text: "Within 24 hours of the incident" },
      { id: "b", text: "At the next scheduled check-up" },
      { id: "c", text: "Immediately after the suspected exposure" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.4.1",
  },
};

/**
 * Simulates an AI-generated remediation payload.
 * Returns a mini-lesson (question NOTES + topic lesson) and a rephrased question after a 1-second delay.
 */
export async function simulateRemediation(
  originalQuestion: Question
): Promise<RemediationPayload> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const topicLesson =
        LESSONS[originalQuestion.topic] ??
        "No lesson content available for this topic.";

      const questionNote = QUESTION_NOTES[originalQuestion.id];

      // Combine question-specific notes with the broader topic lesson
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
