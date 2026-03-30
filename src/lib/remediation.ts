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

  // ── Control Measures (Q7–Q21) ────────────────────────────────────────
  7: `Class 4 lasers require all of the same control measures as Class 3B, but also pose a risk to the surrounding volume by producing plasma radiation or other air contaminants. Both Class 3B and Class 4 require a supervisor during operation.`,

  8: `Laser Control Areas should include warning signs, classification labels, interlocks, and protective enclosures.`,

  13: `Laser safety goggles are wavelength specific. Look at the label on the goggles to see their OD number within a wavelength range.`,

  14: `Optical Density numbers are measured on a logarithmic scale and are typically in integer number indicating the orders of magnitude of blockage of the beam. For example, a set of laser safety goggles with an OD number of 1 allows only 10% of the light to enter. An OD number of 2 allows only 1% of the light to enter, and so on.`,

  // ── Non-Beam Hazards (Q22–Q36) ──────────────────────────────────────
  23: `Non-Beam Hazards (NBH) consist of chemicals that may be released into the air surrounding the laser system, either from the reaction of the beam itself with the air, or with other materials coming into contact with the radiant energy. Class 4 Lasers are capable of transforming gaseous air (CO2, N20, and O2) into plasma or ions. Other materials that absorb radiant energy may melt or outgas other hazardous chemicals into the air.`,

  24: `Electrical shocks also fall into the category of NBH. Special attention should be given to the setup and maintenance of power supplies, circuits, and exposed wires that drive the laser system. Many pulsed lasers are powered with capacitors, which can retain their charge even after the system is powered off.`,

  25: `Other components in the electrical system of the laser may be subject to resistive heating, in which a current flow through a resistive material absorbs some portion of the energy flowing through it and radiates heat. Coming into contact with these resistive components could result in a thermal burn to the skin.`,

  26: `In case of an electrical system malfunction, fire extinguishers should be located inside every laser-controlled area. Note that not all fire extinguishers work on electrical fires. Be sure to select one that is rated specifically for electrical fires.`,

  27: `Electrical control measures are required for circuits containing more than 50 volts. If you are building a custom electrical system for the laser, consult with an electrical engineer, or have the system inspected by the facility's electrician.`,

  28: `Most of the electrical hazards can be mitigated by proper enclosures, grounding, and power indicator lights.`,

  29: `Non-Laser Radiation includes radio waves, X-rays, thermal radiation, and ionizing radiation.`,

  31: `Any flammable material in the beam path poses a fire hazard. Class 4 Laser beam should only ever come into contact with optics, mirrors, or appropriately rated beam blocks. Sometimes these beam blocks need to be water cooled, depending on the energy absorption rating.`,

  32: `Robotic arms or motorized stages also pose a mechanical hazard. These are especially present in industrial laser cutters, where the beam is guided by automated motorized robotic translation stages and mirrors. These types of applications increase the NHZ of the system.`,

  33: `Different gases should be stored separately.`,

  34: `The workspace should also be easily accessible and not contain hindrances to personnel moving around in the NHZ. Such hindrances include loose wires on the ground, awkwardly placed enclosures, or other impediments to their movement. A good rule of thumb is to have at least 3 feet of space around the optical table or laser system enclosure.`,

  35: `Special care should be given to the disposal of laser systems. They contain harmful chemicals and hazardous electrical components that cannot be disposed of. Whenever possible, unused lasers should be stored safely or returned to the manufacturer.`,
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

  // ── Control Measures (Q7–Q21) ────────────────────────────────────────
  7: {
    id: 107,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "A facility is setting up a new Class 3B laser workstation. Is a designated supervisor required during operation?",
    options: [
      { id: "a", text: "No — only Class 4 lasers require a supervisor" },
      { id: "b", text: "Yes — both Class 3B and Class 4 lasers require a supervisor during operation" },
      { id: "c", text: "Only if the laser is used in a confined space" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.1",
  },
  8: {
    id: 108,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "A safety auditor inspects a laser controlled area and finds warning signs and interlocks, but no classification labels or protective enclosures. Is the area compliant?",
    options: [
      { id: "a", text: "Yes — warning signs and interlocks are sufficient" },
      { id: "b", text: "No — laser controlled areas must also include classification labels and protective enclosures" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.5",
  },
  9: {
    id: 109,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A Class 4 laser system has a push-button power switch but no key-operated master switch. Does this meet safety requirements?",
    options: [
      { id: "a", text: "Yes — any type of power switch is acceptable" },
      { id: "b", text: "No — Class 3B and Class 4 systems must have a key-operated master switch" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.10",
  },
  10: {
    id: 110,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A viewing window on a laser enclosure allows the full beam intensity to pass through. Is this acceptable?",
    options: [
      { id: "a", text: "Yes — viewing windows are just for observation convenience" },
      { id: "b", text: "No — viewing windows must reduce transmitted light to below the MPE" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.7",
  },
  11: {
    id: 111,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "An EMO switch is installed only inside the laser room. A worker outside cannot shut off the system in an emergency. Is this setup adequate?",
    options: [
      { id: "a", text: "Yes — only the operator inside needs access to the EMO" },
      { id: "b", text: "No — EMO switches must be accessible both inside and outside the laser area" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.10.2",
  },
  12: {
    id: 112,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A laser controlled area has a warning sign but no flashing light or audible alarm. Does the sign meet requirements?",
    options: [
      { id: "a", text: "Yes — the sign itself is sufficient" },
      { id: "b", text: "No — laser warning signs should include either a flashing light or an audible alarm" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.5.1",
  },
  13: {
    id: 113,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A technician grabs a pair of laser safety goggles from a drawer without checking the label. Could this be dangerous?",
    options: [
      { id: "a", text: "No — all laser goggles protect against all wavelengths equally" },
      { id: "b", text: "Yes — goggles are wavelength-specific and the wrong pair may offer no protection" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.2",
  },
  14: {
    id: 114,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "A pair of laser safety goggles has an OD rating of 2 for a specific wavelength. What percentage of that laser light passes through?",
    options: [
      { id: "a", text: "10% (1/10th)" },
      { id: "b", text: "1% (1/100th)" },
      { id: "c", text: "0.1% (1/1000th)" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.2.1",
  },
  15: {
    id: 115,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A worker wears laser goggles but no lab coat or gloves while operating a Class 4 laser. Are they fully protected?",
    options: [
      { id: "a", text: "Yes — goggles are the only PPE required" },
      { id: "b", text: "No — full PPE includes goggles, lab coats or smocks, and gloves" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6",
  },
  16: {
    id: 116,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "The LSO asks the laser operator to buy their own safety goggles. Is this the correct responsibility assignment?",
    options: [
      { id: "a", text: "Yes — operators should purchase their own PPE" },
      { id: "b", text: "No — the employer is responsible for purchasing PPE" },
      { id: "c", text: "No — the LSO must purchase all PPE" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.1",
  },
  17: {
    id: 117,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "Laser safety goggles in the lab are scratched and have degraded OD ratings. Whose responsibility is it to inspect and replace them?",
    options: [
      { id: "a", text: "The employer" },
      { id: "b", text: "The Laser Safety Officer (LSO)" },
      { id: "c", text: "The individual operator" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.1",
  },
  18: {
    id: 118,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "An operator enters a laser controlled area without putting on the required goggles. Who is at fault for not wearing PPE?",
    options: [
      { id: "a", text: "The employer" },
      { id: "b", text: "The LSO" },
      { id: "c", text: "The operator" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.6.1",
  },
  19: {
    id: 119,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "A facility addresses laser hazards by first issuing PPE, then writing procedures, and finally installing enclosures. Is this the correct order of priority?",
    options: [
      { id: "a", text: "Yes — PPE is the most effective control" },
      { id: "b", text: "No — the correct hierarchy is engineering controls first, then administrative controls, then PPE" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3",
  },
  20: {
    id: 120,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "A laser warning sign for an LCA displays only the hazard class and LSO contact info. Is the sign complete?",
    options: [
      { id: "a", text: "Yes — hazard class and LSO contact are sufficient" },
      { id: "b", text: "No — it must also include required eyewear OD/wavelength and special precautionary instructions" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.5.3",
  },
  21: {
    id: 121,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "When purchasing a laser cleaning system for outdoor use, why is it critical to choose a reputable manufacturer?",
    options: [
      { id: "a", text: "They offer longer warranties" },
      { id: "b", text: "Their systems are lighter and more portable" },
      { id: "c", text: "They provide verified technical specifications needed for proper hazard evaluation" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.2",
  },

  // ── Non-Beam Hazards (Q22–Q36) ──────────────────────────────────────
  22: {
    id: 122,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "A technician assumes that the laser beam itself is the only thing they need to protect against. Is this correct?",
    options: [
      { id: "a", text: "Yes — the beam is the sole source of danger" },
      { id: "b", text: "No — laser systems also produce non-beam hazards such as electrical, chemical, and fire risks" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7",
  },
  23: {
    id: 123,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "A Class 4 laser is being used to process metal in an enclosed workspace. Could the air quality be affected?",
    options: [
      { id: "a", text: "No — laser beams do not interact with the surrounding air" },
      { id: "b", text: "Yes — Class 4 lasers can produce plasma, ions, and hazardous chemical fumes" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.3",
  },
  24: {
    id: 124,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "A pulsed laser system has been powered off. A technician reaches into the power supply to adjust a component. What electrical hazard should they be most concerned about?",
    options: [
      { id: "a", text: "Inductors generating magnetic fields" },
      { id: "b", text: "Capacitors that may still retain a lethal charge" },
      { id: "c", text: "Resistors producing static electricity" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.4.1",
  },
  25: {
    id: 125,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "A technician touches a component inside a laser power supply and receives a mild burn, even though the laser beam was not involved. What most likely caused this?",
    options: [
      { id: "a", text: "A resistive component that was radiating heat from current flow" },
      { id: "b", text: "A capacitor discharging stored energy" },
      { id: "c", text: "An inductor generating electromagnetic interference" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §7.4.2",
  },
  26: {
    id: 126,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "A standard water-based fire extinguisher is placed in a laser controlled area. Is this adequate for all potential fire scenarios?",
    options: [
      { id: "a", text: "Yes — any fire extinguisher will work" },
      { id: "b", text: "No — the extinguisher must be rated specifically for electrical fires" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.5",
  },
  27: {
    id: 127,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "A custom laser system uses a 48V power supply. Are electrical control measures required?",
    options: [
      { id: "a", text: "Yes — any circuit requires control measures" },
      { id: "b", text: "No — electrical control measures are required only for circuits exceeding 50 volts" },
      { id: "c", text: "Only if the system uses capacitors" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.4",
  },
  28: {
    id: 128,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "A laser system has exposed wiring with no enclosure, no grounding, and no indicator lights. Which electrical safety controls are missing?",
    options: [
      { id: "a", text: "Only grounding is needed" },
      { id: "b", text: "Only enclosures are needed" },
      { id: "c", text: "All three — enclosures, grounding, and indicator lights are all required" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §7.4.3",
  },
  29: {
    id: 129,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "A safety review identifies that a high-power laser system may emit X-rays. Is this considered a non-beam hazard?",
    options: [
      { id: "a", text: "No — X-rays are unrelated to laser systems" },
      { id: "b", text: "Yes — non-laser radiation hazards include radio waves, X-rays, thermal radiation, and ionizing radiation" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.6",
  },
  30: {
    id: 130,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "Over many years of working near UV-emitting equipment without proper eye protection, what condition could develop?",
    options: [
      { id: "a", text: "Color blindness" },
      { id: "b", text: "Cataracts" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.6.1",
  },
  31: {
    id: 131,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "A piece of cardboard is accidentally left in the beam path of a Class 4 laser. What hazard does this create?",
    options: [
      { id: "a", text: "No hazard — cardboard absorbs laser light harmlessly" },
      { id: "b", text: "A fire hazard — Class 4 beams can ignite flammable materials" },
      { id: "c", text: "An electrical hazard from static buildup" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.5",
  },
  32: {
    id: 132,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "A laser cutting system is upgraded from a fixed beam path to a robotic arm delivery. How does this affect the Nominal Hazard Zone?",
    options: [
      { id: "a", text: "The NHZ stays the same since the laser power hasn't changed" },
      { id: "b", text: "The NHZ increases because the beam can now reach a larger area" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.7",
  },
  33: {
    id: 133,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "Two different compressed gases used in a laser system are stored together in the same cabinet. Is this acceptable?",
    options: [
      { id: "a", text: "Yes — as long as both containers are properly sealed" },
      { id: "b", text: "No — different gases must be stored separately to prevent hazardous mixing" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.3.2",
  },
  34: {
    id: 134,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "A laser workstation has only 1 foot of clearance on each side, with cables running across the floor. Is this workspace adequate?",
    options: [
      { id: "a", text: "Yes — 1 foot of clearance is sufficient" },
      { id: "b", text: "No — at least 3 feet of clearance is recommended, and the workspace must be free of obstacles" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.7.1",
  },
  35: {
    id: 135,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "An old laser system is no longer needed. A technician suggests throwing it in the dumpster. Is this appropriate?",
    options: [
      { id: "a", text: "Yes — it can be disposed of like any other electronic waste" },
      { id: "b", text: "No — laser systems contain hazardous materials and should be returned to the manufacturer" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.8",
  },
  36: {
    id: 136,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "A metal surface inside a laser controlled area reaches 60°C during operation. Are any safety measures required?",
    options: [
      { id: "a", text: "No — this is a normal operating temperature" },
      { id: "b", text: "Yes — engineering controls and a warning sign are required for surfaces exceeding 50°C" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.4.2",
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
