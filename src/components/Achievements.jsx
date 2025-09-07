import React from "react";
import Section from "./Section";

export default function Achievements() {
  return (
    <Section id="achievements" subtitle="Highlights" title="Achievements">
      <ul className="list-disc ps-6 space-y-2">
        <li>
          Created and published a Flutter package on pub.dev —
          <a className="text-indigo-600 dark:text-indigo-400 ml-1" href="https://bit.ly/3tsZ1xw" target="_blank" rel="noreferrer">Link</a>
        </li>
      </ul>
    </Section>
  );
}


