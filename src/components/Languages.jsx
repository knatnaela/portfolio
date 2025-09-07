import React from "react";
import Section from "./Section";

export default function Languages() {
  return (
    <Section id="languages" subtitle="Spoken" title="Languages">
      <div className="flex flex-wrap gap-3">
        <span className="text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60">Amharic</span>
        <span className="text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60">English</span>
      </div>
    </Section>
  );
}


