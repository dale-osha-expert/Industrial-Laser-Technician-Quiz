import { QuizConfig } from "@/lib/types";
import { BASE_QUESTIONS } from "./questions";
import { simulateRemediation } from "./remediation";

export const techQuizConfig: QuizConfig = {
  title: "Industrial Tech Master Quiz",
  subtitle: "Laser Safety Assessment",
  footerText: "Industrial Laser Safety — Technician Knowledge Assessment",
  resultsSubtitle: "ANSI Z136.1 — Industrial Laser Safety",
  passedMessage:
    "You have demonstrated knowledge of industrial laser safety standards aligned to ANSI Z136.1. This assessment covers laser classifications, control measures, non-beam hazards, and eye and skin exposure principles.",
  failedMessage:
    "A score of 70% or higher is required to pass. Review the ANSI Z136.1 standard, focusing on the areas where remediation was triggered, then retake the assessment.",
  questions: BASE_QUESTIONS,
  remediate: simulateRemediation,
};
