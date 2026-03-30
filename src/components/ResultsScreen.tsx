"use client";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  resultsSubtitle: string;
  passedMessage: string;
  failedMessage: string;
}

export default function ResultsScreen({
  score,
  totalQuestions,
  onRestart,
  resultsSubtitle,
  passedMessage,
  failedMessage,
}: ResultsScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 70;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-industrial-100 overflow-hidden text-center">
      <div
        className={`px-6 py-8 ${
          passed ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <div className="text-6xl mb-3">{passed ? "\u2705" : "\u274C"}</div>
        <h2 className="text-white font-bold text-2xl">
          {passed ? "Certification Passed!" : "Certification Not Achieved"}
        </h2>
        <p className="text-white/80 mt-1">
          {resultsSubtitle}
        </p>
      </div>

      <div className="p-8">
        <div className="mb-6">
          <p className="text-5xl font-bold text-industrial-900">{percentage}%</p>
          <p className="text-industrial-500 mt-1">
            {score} of {totalQuestions} correct
          </p>
        </div>

        <div className="bg-industrial-50 rounded-xl p-4 mb-6 text-left">
          <h3 className="font-semibold text-industrial-900 mb-2">
            {passed ? "What this means:" : "Next steps:"}
          </h3>
          <p className="text-sm text-industrial-600 leading-relaxed">
            {passed ? passedMessage : failedMessage}
          </p>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-safety-orange hover:bg-safety-orange/90 text-white font-bold py-3 px-6 rounded-xl transition-colors text-lg"
        >
          {passed ? "Retake Exam" : "Try Again"}
        </button>
      </div>
    </div>
  );
}
