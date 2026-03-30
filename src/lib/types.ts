// ---------------------------------------------------------------------------
// Industrial Tech Master Quiz — Type Definitions
// Content aligned to ANSI Z136.1 (Safe Use of Lasers)
// ---------------------------------------------------------------------------

/** Topics derived from the four key areas of laser safety */
export type Topic =
  | "laser-basics"
  | "control-measures"
  | "non-beam-hazards"
  | "eye-skin-exposure";

/** Difficulty tiers map to the question progression */
export type Difficulty = "easy" | "medium" | "hard";

/** A single answer option */
export interface AnswerOption {
  id: string;
  text: string;
}

/** A base exam question */
export interface Question {
  id: number;
  topic: Topic;
  difficulty: Difficulty;
  questionText: string;
  options: AnswerOption[];
  correctOptionId: string;
  /** ANSI Z136.1 reference for remediation content */
  ansiRef: string;
}

/** The mini-lesson + rephrased question returned by the remediation engine */
export interface RemediationPayload {
  lesson: string;
  rephrasedQuestion: Question;
}

/** Overall exam state managed by the page component */
export interface ExamState {
  currentQuestionIndex: number;
  score: number;
  isRemediating: boolean;
  remediationPayload: RemediationPayload | null;
  answeredCorrectly: boolean[];
  isComplete: boolean;
  isLoading: boolean;
  selectedAnswerId: string | null;
  showFeedback: boolean;
}
