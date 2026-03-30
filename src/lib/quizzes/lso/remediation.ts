// ---------------------------------------------------------------------------
// Industrial LSO Master Quiz — Remediation Engine
// Simulates AI-generated mini-lessons and rephrased questions.
// ---------------------------------------------------------------------------

import { Question, RemediationPayload, Topic } from "@/lib/types";

const LESSONS: Record<Topic, string> = {
  "laser-basics": "",
  "control-measures": "",
  "non-beam-hazards": "",
  "eye-skin-exposure": "",
};

const QUESTION_NOTES: Record<number, string> = {};

const REPHRASED_QUESTIONS: Record<number, Question> = {};

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
