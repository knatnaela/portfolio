import React from "react";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" subtitle="Academic background" title="Education">
      <div className="space-y-1">
        <div className="font-semibold">Dire Dawa University, Dire Dawa, Ethiopia — BSc in Computer Science</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Oct 2016 — Feb 2021 · GPA: 3.21</div>
      </div>
    </Section>
  );
}


