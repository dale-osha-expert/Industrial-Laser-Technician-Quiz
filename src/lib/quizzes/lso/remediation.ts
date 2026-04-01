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

  "control-measures": `**Control Measures — ANSI Z136.1**

Engineering controls are the first line of defense and the most reliable. **Protective housings** must prevent human access to laser radiation above the applicable MPE during normal operation and maintenance. **Beam enclosures** fully contain the beam path, and **interlocks** disable the laser when a housing panel or door is opened — defeat of interlocks requires LSO authorization and temporary alternative controls.

**Warning systems** include audible alarms that sound before a Class 3B or 4 laser fires, giving personnel time to don PPE or leave the area. **Beam stops and attenuators** terminate or reduce the beam at the end of its useful path, preventing stray radiation. The **beam path** should be kept below or above standing or seated eye level to minimize accidental ocular exposure. Optical tables must be maintained at levels that keep beams away from eye height.

**Administrative controls** complement engineering controls but never replace them. These include Standard Operating Procedures (SOPs) — which the LSO must approve for every Class 3B/4 system — and restricting laser area access to authorized personnel only. Laser Controlled Areas (LCAs) require posted warning signs, limited entry points, and door interlocks or equivalent barriers.

**Personal Protective Equipment (PPE)** is the last layer. **Laser protective eyewear** must be wavelength-matched and have an adequate Optical Density (OD) for the specific laser. OD is logarithmic: OD 1 blocks 90% of incident light, OD 2 blocks 99%, OD 3 blocks 99.9%. The LSO determines the required OD based on MPE calculations and the laser's output parameters. Eyewear must be inspected for damage regularly and replaced if degraded.`,

  "non-beam-hazards": `**Non-Beam Hazards — ANSI Z136.1**

Non-beam hazards are risks associated with laser operations that do not come from the beam itself. These hazards can be just as dangerous — or more so — than direct beam exposure, and the LSO must address them as part of the overall safety program.

**Electrical hazards** are the most common cause of fatalities in laser environments. High-voltage power supplies, capacitor banks, and exposed conductors can deliver lethal shocks. Laser technicians must follow lockout/tagout (LOTO) procedures before servicing equipment, and only qualified personnel should work on energized circuits.

**Laser-Generated Air Contaminants (LGACs)** are produced when high-power lasers interact with target materials. These include particulates, fumes, and gases that may be toxic or carcinogenic — especially when cutting, welding, or ablating metals, plastics, or biological tissue. Adequate ventilation, local exhaust systems, and respiratory protection are required controls.

**Fire hazards** exist because Class 4 lasers can ignite flammable materials, solvents, and even clothing. Work areas must be kept free of combustible materials, and fire extinguishers must be readily accessible. **Explosion risks** arise when lasers are used near flammable gases or volatile solvents.

**Plasma radiation** from high-power laser interactions with targets can produce UV and visible radiation intense enough to cause eye and skin injury to nearby personnel. **Compressed gases** used in laser systems (assist gases, cooling) introduce asphyxiation and high-pressure hazards. **Cryogenic materials** used for cooling pose frostbite and oxygen displacement risks. The LSO must evaluate all non-beam hazards specific to each laser installation and ensure appropriate controls are in place.`,
  "eye-skin-exposure": `**Eye & Skin Exposure — ANSI Z136.1**

The **Maximum Permissible Exposure (MPE)** is the highest level of laser radiation to which the eye or skin may be exposed without adverse effects. MPE limits are published by the **American National Standards Institute (ANSI)** in Z136.1 and vary by wavelength, exposure duration, and laser type.

Measuring MPE requires knowledge of several beam characteristics: **aperture size, source distance, outgoing cone angle, wavelength, and exposure time**. A beam is considered **collimated** if its divergence angle is less than **1.5 mrad (0.1°)** — these are treated as point sources. When a collimated beam enters the eye, the lens focuses it into a very small spot on the retina with extremely high energy density, causing serious photochemical damage.

The **visible range** spans 400–700 nm. The broader **retinal hazard region** extends from 400 nm to 1400 nm. For **near-IR lasers (700–1400 nm)**, the maximum exposure duration used in MPE calculations is **10 seconds**, because the eye's natural movements and aversion impulse provide some protection. For **visible CW lasers (400–700 nm)**, the maximum exposure duration drops to **0.25 seconds** due to the blink/aversion reflex.

**Diverging lasers** (uncollimated beams, laser arrays, diffuse sources) typically have a **Gaussian beam profile**, and MPE calculations must account for this intensity distribution. For **wide-spectrum sources** with multiple wavelengths, the LSO must consider the thermal and photochemical risk of each wavelength, measure each separately, and treat the MPEs as **additive** — measuring only the highest-energy wavelength is insufficient.

**Skin exposure** poses primarily a **thermal** damage risk, while **eye exposure** poses primarily a **photochemical** damage risk. Both must be evaluated in the hazard analysis.`,
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

  // ── Control Measures (Q24–Q41) ──────────────────────────────────────
  24: `The LSO is responsible for training anyone who might come in contact with the laser system.`,

  25: `Class 4 lasers require all of the same control measures as Class 3B, but also pose a risk to the surrounding volume by producing plasma radiation or other air contaminants. Both Class 3B and Class 4 require a supervisor during operation.`,

  26: `Laser Control Areas should include warning signs, classification labels, interlocks, and protective enclosures.`,

  29: `For beam paths that are enclosed, hazard evaluation should be performed at every accessible point where light exits the enclosure.`,

  33: `Laser safety goggles are wavelength specific. Look at the label on the goggles to see their OD number within a wavelength range.`,

  34: `Optical Density numbers are measured on a logarithmic scale and are typically in integer number indicating the orders of magnitude of blockage of the beam. For example, a set of laser safety goggles with an OD number of 1 allows only 10% of the light to enter. An OD number of 2 allows only 1% of the light to enter, and so on.`,

  // ── Non-Beam Hazards (Q42–Q57) ──────────────────────────────────────
  43: `Non-Beam Hazards (NBH) consist of chemicals that may be released into the air surrounding the laser system, either from the reaction of the beam itself with the air, or with other materials coming into contact with the radiant energy. Class 4 Lasers are capable of transforming gaseous air (CO2, N20, and O2) into plasma or ions. Other materials that absorb radiant energy may melt or outgas other hazardous chemicals into the air.`,

  44: `Electrical shocks also fall into the category of NBH. Special attention should be given to the setup and maintenance of power supplies, circuits, and exposed wires that drive the laser system. Many pulsed lasers are powered with capacitors, which can retain their charge even after the system is powered off.`,

  45: `Other components in the electrical system of the laser may be subject to resistive heating, in which a current flow through a resistive material absorbs some portion of the energy flowing through it and radiates heat. Coming into contact with these resistive components could result in a thermal burn to the skin.`,

  46: `In case of an electrical system malfunction, fire extinguishers should be located inside every laser-controlled area. Note that not all fire extinguishers work on electrical fires. Be sure to select one that is rated specifically for electrical fires.`,

  47: `Electrical control measures are required for circuits containing more than 50 volts. If you are building a custom electrical system for the laser, consult with an electrical engineer, or have the system inspected by the facility's electrician.`,

  48: `Most of the electrical hazards can be mitigated by proper enclosures, grounding, and power indicator lights.`,

  49: `Non-Laser Radiation includes radio waves, X-rays, thermal radiation, and ionizing radiation.`,

  50: `Exposed gain medium tubes and pump lamps can emit UV radiation. These can cause cataracts over time. These should be properly enclosed or viewed with laser safety goggles rated for UV radiation.`,

  51: `Any flammable material in the beam path poses a fire hazard. Class 4 Laser beam should only ever come into contact with optics, mirrors, or appropriately rated beam blocks. Sometimes these beam blocks need to be water cooled, depending on the energy absorption rating.`,

  52: `Robotic arms or motorized stages also pose a mechanical hazard. These are especially present in industrial laser cutters, where the beam is guided by automated motorized robotic translation stages and mirrors. These types of applications increase the NHZ of the system.`,

  53: `Different gases should be stored separately.`,

  54: `There are also human factors when it comes to implementation of laser safety control measures. Workers' limbs can be injured over time during operation and maintenance of laser systems, so the LSO should be aware of the ergonomics of these SOPs. Contributing factors are workstation layout, height, fixturing, sharp edges, lighting, or repetitive motions. The worker could also be injured by bright flashing lights, pulse output, or other optical effects.`,

  55: `The workspace should also be easily accessible and not contain hindrances to personnel moving around in the NHZ. Such hindrances include loose wires on the ground, awkwardly placed enclosures, or other impediments to their movement. A good rule of thumb is to have at least 3 feet of space around the optical table or laser system enclosure.`,

  56: `Special care should be given to the disposal of laser systems. They contain harmful chemicals and hazardous electrical components that cannot be disposed of. Whenever possible, unused lasers should be stored safely or returned to the manufacturer.`,

  // ── Eye & Skin Exposure (Q58–Q68) ──────────────────────────────────
  58: `Refer to the American National Standards Institute for the maximum permissible exposure limits for eyes and skin. There are different ratings for specific wavelengths and laser types.`,

  60: `A beam is considered collimated if its divergence angle is less than 1.5 mrad (0.1 deg). These are considered to be point sources.`,

  61: `Collimated laser beams create a highly focused spot on the retina and can cause serious photochemical damage.`,

  62: `The retinal hazard region spans from 400 nm to 1400 nm.`,

  63: `For uncollimated beams, such as laser arrays, diffuse sources, or expanding beams, the calculations must consider the Gaussian profiles of the outgoing light.`,

  64: `With wide spectrum sources with multiple wavelengths, the LSO must consider the thermal & photochemical risk of each wavelength. They must also measure each wavelength separately and treat the MPE of each as additive.`,

  65: `For near IR lasers (between 700 and 1400 nm), the eye's natural aversion response is considered. The maximum exposure duration is 10 seconds, due to the fact that the eye's natural movements and impulse to avert will protect the viewer if retinal damage starts to take place.`,

  66: `For visible lasers (between 400 and 700 nm), the maximum exposure duration drops down to 0.25 seconds for CW lasers.`,

  67: `Skin exposure to laser beams pose a thermal damage risk.`,

  68: `Eye exposure to laser beams pose a photochemical damage risk.`,
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

  // ── Control Measures (Q24–Q41) ──────────────────────────────────────
  24: {
    id: 124,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A visitor wants to observe a Class 4 laser operation. Does the LSO have any training obligation toward this visitor?",
    options: [
      { id: "a", text: "No — visitors are not the LSO's responsibility" },
      { id: "b", text: "Yes — the LSO is responsible for training anyone who may come in contact with the laser system, including visitors" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.1",
  },
  25: {
    id: 125,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "A facility operates a Class 3B laser. Is a supervisor required during its operation?",
    options: [
      { id: "a", text: "No — only Class 4 lasers need supervision" },
      { id: "b", text: "Yes — both Class 3B and Class 4 require a supervisor during operation" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.1",
  },
  26: {
    id: 126,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "A laser controlled area has warning signs and interlocks, but no classification labels or protective enclosures. Is it compliant?",
    options: [
      { id: "a", text: "Yes — signs and interlocks are sufficient" },
      { id: "b", text: "No — it must also include classification labels and protective enclosures" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.5",
  },
  27: {
    id: 127,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A Class 4 laser has a push-button power switch but no key-operated master switch. Does this meet requirements?",
    options: [
      { id: "a", text: "Yes — any power switch is acceptable" },
      { id: "b", text: "No — Class 3B and Class 4 systems require a key-operated master switch" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.10",
  },
  28: {
    id: 128,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A viewing window on a laser enclosure allows the full beam intensity to pass through. Is this acceptable?",
    options: [
      { id: "a", text: "Yes — viewing windows are just for observation" },
      { id: "b", text: "No — viewing windows must reduce transmitted light to below the MPE" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.7",
  },
  29: {
    id: 129,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "An LSO performs a hazard evaluation only at the final output of an enclosed beam path system. Is this sufficient?",
    options: [
      { id: "a", text: "Yes — only the output matters for enclosed systems" },
      { id: "b", text: "No — evaluation must be done at every accessible point where light exits the enclosure" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.5",
  },
  30: {
    id: 130,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "An EMO switch is installed only inside the laser room. Is this adequate for emergency response?",
    options: [
      { id: "a", text: "Yes — the operator inside can handle emergencies" },
      { id: "b", text: "No — EMO switches must be accessible both inside and outside the laser area" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.10.2",
  },
  31: {
    id: 131,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A laser controlled area has a warning sign but no flashing light or audible alarm. Is the sign complete?",
    options: [
      { id: "a", text: "Yes — a sign alone is sufficient" },
      { id: "b", text: "No — warning signs should include either a flashing light or an audible alarm" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.5.1",
  },
  32: {
    id: 132,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "An LSO creates an alignment SOP that includes training on alignment steps but omits failure mode mitigation. Is this SOP complete?",
    options: [
      { id: "a", text: "Yes — training on steps is the key requirement" },
      { id: "b", text: "No — alignment SOPs must also include failure mode mitigation methods and Class 1 sources for simulation" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3.2.1",
  },
  33: {
    id: 133,
    topic: "control-measures",
    difficulty: "easy",
    questionText:
      "A technician grabs any available pair of laser goggles without checking the label. Could this be dangerous?",
    options: [
      { id: "a", text: "No — all laser goggles protect against all wavelengths" },
      { id: "b", text: "Yes — goggles are wavelength-specific and the wrong pair may offer no protection" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.2",
  },
  34: {
    id: 134,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "A pair of laser safety goggles has an OD rating of 3 for a specific wavelength. What percentage of that laser light passes through?",
    options: [
      { id: "a", text: "10% (1/10th)" },
      { id: "b", text: "1% (1/100th)" },
      { id: "c", text: "0.1% (1/1000th)" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §4.6.2.1",
  },
  35: {
    id: 135,
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
  36: {
    id: 136,
    topic: "control-measures",
    difficulty: "medium",
    questionText:
      "The LSO asks a laser operator to buy their own safety goggles. Is this the correct responsibility assignment?",
    options: [
      { id: "a", text: "Yes — operators should purchase their own PPE" },
      { id: "b", text: "No — the employer is responsible for purchasing PPE" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.6.1",
  },
  37: {
    id: 137,
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
  38: {
    id: 138,
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
  39: {
    id: 139,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "A facility addresses laser hazards by first issuing PPE, then writing procedures, and finally installing enclosures. Is this the correct priority order?",
    options: [
      { id: "a", text: "Yes — PPE is the most effective control" },
      { id: "b", text: "No — the correct hierarchy is engineering controls first, then administrative controls, then PPE" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.3",
  },
  40: {
    id: 140,
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
  41: {
    id: 141,
    topic: "control-measures",
    difficulty: "hard",
    questionText:
      "When purchasing a laser cleaning system for outdoor use, why is choosing a reputable manufacturer critical for the LSO?",
    options: [
      { id: "a", text: "They offer longer warranties" },
      { id: "b", text: "They provide verified technical specifications that the LSO needs for proper hazard evaluation" },
      { id: "c", text: "Their systems are lighter and easier to set up" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §4.2",
  },

  // ── Non-Beam Hazards (Q42–Q57) ──────────────────────────────────────
  42: {
    id: 142,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "A technician assumes the laser beam is the only hazard to worry about. Is this correct?",
    options: [
      { id: "a", text: "Yes — the beam is the sole source of danger" },
      { id: "b", text: "No — laser systems also produce non-beam hazards such as electrical, chemical, and fire risks" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7",
  },
  43: {
    id: 143,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "A Class 4 laser is processing material in an enclosed workspace. Could the air quality be affected?",
    options: [
      { id: "a", text: "No — laser beams do not interact with air" },
      { id: "b", text: "Yes — Class 4 lasers can produce plasma, ions, and hazardous chemical fumes" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.3",
  },
  44: {
    id: 144,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "A pulsed laser system has been powered off. A technician opens the power supply to adjust a component. What electrical hazard should the LSO warn about?",
    options: [
      { id: "a", text: "Inductors generating magnetic fields" },
      { id: "b", text: "Capacitors that may still retain a lethal charge" },
      { id: "c", text: "Resistors producing static electricity" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.4.1",
  },
  45: {
    id: 145,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "A technician touches a component inside a laser power supply and gets a mild burn, though the laser beam was not involved. What most likely caused this?",
    options: [
      { id: "a", text: "A resistive component radiating heat from current flow" },
      { id: "b", text: "A capacitor discharging stored energy" },
      { id: "c", text: "An inductor generating electromagnetic interference" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §7.4.2",
  },
  46: {
    id: 146,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "A standard water-based fire extinguisher is placed in a laser controlled area. Is this adequate for all fire scenarios?",
    options: [
      { id: "a", text: "Yes — any fire extinguisher will work" },
      { id: "b", text: "No — the extinguisher must be rated specifically for electrical fires" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.5",
  },
  47: {
    id: 147,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "A custom laser system uses a 48V power supply. Are electrical control measures required?",
    options: [
      { id: "a", text: "Yes — any circuit requires control measures" },
      { id: "b", text: "No — electrical control measures are required only for circuits exceeding 50 volts" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.4",
  },
  48: {
    id: 148,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "A laser system has exposed wiring with no enclosure, no grounding, and no indicator lights. Which electrical safety controls are missing?",
    options: [
      { id: "a", text: "Only grounding is needed" },
      { id: "b", text: "Only enclosures are needed" },
      { id: "c", text: "All three — enclosures, grounding, and indicator lights" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §7.4.3",
  },
  49: {
    id: 149,
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
  50: {
    id: 150,
    topic: "non-beam-hazards",
    difficulty: "easy",
    questionText:
      "An exposed pump lamp on a laser system emits UV radiation. What long-term health risk should the LSO address?",
    options: [
      { id: "a", text: "Hearing loss" },
      { id: "b", text: "Cataracts from chronic UV exposure" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.6.1",
  },
  51: {
    id: 151,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "A piece of cardboard is accidentally left in the beam path of a Class 4 laser. What hazard does this create?",
    options: [
      { id: "a", text: "No hazard — cardboard absorbs laser light harmlessly" },
      { id: "b", text: "A fire hazard — Class 4 beams can ignite flammable materials" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.5",
  },
  52: {
    id: 152,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "A laser cutting system is upgraded from a fixed beam path to a robotic arm delivery. How does this affect the NHZ?",
    options: [
      { id: "a", text: "The NHZ stays the same since the laser power hasn't changed" },
      { id: "b", text: "The NHZ increases because the beam can now reach a larger area" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.7",
  },
  53: {
    id: 153,
    topic: "non-beam-hazards",
    difficulty: "hard",
    questionText:
      "Two different compressed gases used in a laser system are stored together in the same cabinet. Is this acceptable?",
    options: [
      { id: "a", text: "Yes — as long as both containers are properly sealed" },
      { id: "b", text: "No — different gases must be stored separately" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.3.2",
  },
  54: {
    id: 154,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "An operator complains of wrist pain from repetitive alignment procedures. Is this within the LSO's scope of responsibility?",
    options: [
      { id: "a", text: "No — ergonomics is not a laser safety concern" },
      { id: "b", text: "Yes — the LSO should consider ergonomics of SOPs to reduce repetitive injury" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.7.2",
  },
  55: {
    id: 155,
    topic: "non-beam-hazards",
    difficulty: "medium",
    questionText:
      "A laser workstation has only 1 foot of clearance on each side, with cables on the floor. Is this workspace adequate?",
    options: [
      { id: "a", text: "Yes — 1 foot of clearance is sufficient" },
      { id: "b", text: "No — at least 3 feet of clearance is recommended and the workspace must be free of obstacles" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §7.7.1",
  },
  56: {
    id: 156,
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
  57: {
    id: 157,
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

  // ── Eye & Skin Exposure (Q58–Q68) ──────────────────────────────────
  58: {
    id: 158,
    topic: "eye-skin-exposure",
    difficulty: "easy",
    questionText:
      "A technician wants to look up the MPE for a 532 nm laser. Which organization publishes the authoritative MPE tables?",
    options: [
      { id: "a", text: "OSHA" },
      { id: "b", text: "ANSI — the American National Standards Institute" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.1",
  },
  59: {
    id: 159,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "An LSO is calculating the MPE for a new laser. Which of the following can be safely ignored?",
    options: [
      { id: "a", text: "Wavelength" },
      { id: "b", text: "Exposure time" },
      { id: "c", text: "None — aperture size, source distance, cone angle, wavelength, and exposure time are all required" },
    ],
    correctOptionId: "c",
    ansiRef: "Z136.1 §8.2",
  },
  60: {
    id: 160,
    topic: "eye-skin-exposure",
    difficulty: "hard",
    questionText:
      "A laser beam has a divergence of 0.05 mrad. Is this beam considered collimated?",
    options: [
      { id: "a", text: "No — the divergence is too small to be a true collimated beam" },
      { id: "b", text: "Yes — any divergence less than 1.5 mrad (0.1°) qualifies as collimated" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.2.1",
  },
  61: {
    id: 161,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "A collimated laser beam accidentally enters a worker's eye. Why is this particularly dangerous?",
    options: [
      { id: "a", text: "The pupil will dilate, letting in more light" },
      { id: "b", text: "The eye's lens focuses the collimated beam into an extremely small, high-energy-density spot on the retina" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.2.1",
  },
  62: {
    id: 162,
    topic: "eye-skin-exposure",
    difficulty: "easy",
    questionText:
      "A laser operates at 550 nm. Does this fall within the visible spectrum?",
    options: [
      { id: "a", text: "No — 550 nm is in the ultraviolet range" },
      { id: "b", text: "Yes — the visible range is 400–700 nm" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.3",
  },
  63: {
    id: 163,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "An LSO is calculating the MPE for a diverging laser diode array. What beam profile must the calculation account for?",
    options: [
      { id: "a", text: "Flat-top (uniform)" },
      { id: "b", text: "Gaussian" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.2.2",
  },
  64: {
    id: 164,
    topic: "eye-skin-exposure",
    difficulty: "hard",
    questionText:
      "A multi-wavelength laser emits at 532 nm and 1064 nm. An LSO measures only the 1064 nm output since it has more energy. Is this sufficient?",
    options: [
      { id: "a", text: "Yes — the highest energy wavelength determines the overall MPE" },
      { id: "b", text: "No — each wavelength must be measured separately and the MPEs treated as additive" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.2.3",
  },
  65: {
    id: 165,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "A near-IR laser at 900 nm accidentally illuminates a worker's eye. For MPE calculations, what maximum exposure duration applies?",
    options: [
      { id: "a", text: "0.25 seconds" },
      { id: "b", text: "10 seconds — the eye's natural aversion and movement provide some protection in the near-IR range" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.3.1",
  },
  66: {
    id: 166,
    topic: "eye-skin-exposure",
    difficulty: "medium",
    questionText:
      "A CW visible laser at 635 nm is being evaluated. What maximum exposure duration is used for the MPE calculation?",
    options: [
      { id: "a", text: "0.25 seconds — the blink reflex limits exposure for visible CW lasers" },
      { id: "b", text: "10 seconds" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §8.3.2",
  },
  67: {
    id: 167,
    topic: "eye-skin-exposure",
    difficulty: "easy",
    questionText:
      "A Class 4 laser beam grazes a technician's forearm. What type of damage is most likely?",
    options: [
      { id: "a", text: "Thermal burn — skin exposure is primarily a thermal risk" },
      { id: "b", text: "Photochemical damage" },
    ],
    correctOptionId: "a",
    ansiRef: "Z136.1 §8.4",
  },
  68: {
    id: 168,
    topic: "eye-skin-exposure",
    difficulty: "easy",
    questionText:
      "A worker's eye is briefly exposed to a laser beam. What is the primary damage mechanism for eye exposure?",
    options: [
      { id: "a", text: "Thermal" },
      { id: "b", text: "Photochemical — eye exposure is primarily a photochemical risk" },
    ],
    correctOptionId: "b",
    ansiRef: "Z136.1 §8.4",
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
