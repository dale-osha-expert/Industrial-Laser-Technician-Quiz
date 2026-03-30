import { QuizConfig } from "@/lib/types";
import { BASE_QUESTIONS } from "./questions";
import { simulateRemediation } from "./remediation";

export const lsoQuizConfig: QuizConfig = {
  title: "Industrial LSO (Laser Safety Officer) Master Quiz",
  subtitle: "Laser Safety Officer Assessment",
  footerText: "Industrial Laser Safety — LSO Knowledge Assessment",
  resultsSubtitle: "ANSI Z136.1 — Laser Safety Officer",
  passedMessage:
    "You have demonstrated knowledge of Laser Safety Officer responsibilities and standards aligned to ANSI Z136.1.",
  failedMessage:
    "A score of 70% or higher is required to pass. Review the ANSI Z136.1 standard, focusing on the areas where remediation was triggered, then retake the assessment.",
  questions: BASE_QUESTIONS,
  remediate: simulateRemediation,
};
