import React from "react";

export default function Badges() {
  const stats = [
    { label: "Spring Boot", value: "3+ yrs" },
    { label: "Flutter", value: "3+ yrs" },
    { label: "Avg response", value: "< 24h" },
    { label: "Timezone", value: "EAT (UTC+3)" },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 mt-4 mb-[-8px]">
      <div className="flex flex-wrap gap-2">
        {stats.map((s) => (
          <span key={s.label} className="text-xs rounded-full border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 px-3 py-1">
            <strong className="mr-1">{s.label}:</strong>{s.value}
          </span>
        ))}
      </div>
    </div>
  );
}


