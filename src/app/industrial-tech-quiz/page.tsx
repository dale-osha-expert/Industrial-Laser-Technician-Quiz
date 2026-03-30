"use client";

import QuizEngine from "@/components/QuizEngine";
import { techQuizConfig } from "@/lib/quizzes/tech/config";

export default function IndustrialTechQuizPage() {
  return <QuizEngine config={techQuizConfig} />;
}
