"use client";

import Link from "next/link";

interface QuizEntry {
  title: string;
  description: string;
  href: string;
  questionCount: number;
  comingSoon?: boolean;
}

const QUIZZES: QuizEntry[] = [
  {
    title: "Industrial Tech Master Quiz",
    description:
      "Test your knowledge of laser safety fundamentals — classifications, control measures, non-beam hazards, and eye & skin exposure.",
    href: "/industrial-tech-quiz",
    questionCount: 43,
  },
  {
    title: "Industrial LSO Master Quiz",
    description:
      "Assess your readiness as a Laser Safety Officer — responsibilities, hazard evaluation, and program management.",
    href: "/industrial-lso-quiz",
    questionCount: 23,
  },
];

export default function HubPage() {
  return (
    <main className="min-h-screen bg-industrial-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-industrial-900 text-white px-6 py-4 shadow-md">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <span className="text-2xl">&#9888;</span>
          <div>
            <h1 className="font-bold text-lg leading-tight">
              Industrial Laser Safety
            </h1>
            <p className="text-industrial-400 text-xs">
              Knowledge Assessment Hub
            </p>
          </div>
        </div>
      </header>

      {/* Quiz cards */}
      <div className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="w-full max-w-3xl">
          <h2 className="text-industrial-900 font-bold text-2xl mb-2">
            Select a Quiz
          </h2>
          <p className="text-industrial-500 text-sm mb-6">
            Choose an assessment below to begin. Each quiz includes remediation-based learning for incorrect answers.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {QUIZZES.map((quiz) => (
              <Link
                key={quiz.href}
                href={quiz.comingSoon ? "#" : quiz.href}
                className={`block bg-white rounded-2xl shadow-lg border border-industrial-100 overflow-hidden transition-all ${
                  quiz.comingSoon
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:shadow-xl hover:border-safety-orange"
                }`}
                onClick={(e) => {
                  if (quiz.comingSoon) e.preventDefault();
                }}
              >
                <div className="bg-industrial-50 px-6 py-4 border-b border-industrial-100">
                  <h3 className="font-bold text-industrial-900 text-lg">
                    {quiz.title}
                  </h3>
                  {quiz.comingSoon && (
                    <span className="inline-block bg-industrial-200 text-industrial-600 text-xs font-semibold px-2 py-0.5 rounded-full mt-1">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div className="px-6 py-4">
                  <p className="text-industrial-600 text-sm leading-relaxed mb-3">
                    {quiz.description}
                  </p>
                  {quiz.questionCount > 0 && (
                    <p className="text-xs text-industrial-400">
                      {quiz.questionCount} questions &middot; 70% to pass
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-industrial-900 text-industrial-500 text-center text-xs py-3">
        Industrial Laser Safety — Knowledge Assessment Hub
      </footer>
    </main>
  );
}
