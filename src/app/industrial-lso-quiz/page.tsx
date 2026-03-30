"use client";

import QuizEngine from "@/components/QuizEngine";
import { lsoQuizConfig } from "@/lib/quizzes/lso/config";

export default function IndustrialLSOQuizPage() {
  return <QuizEngine config={lsoQuizConfig} />;
}
