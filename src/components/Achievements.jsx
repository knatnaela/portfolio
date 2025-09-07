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
        <li>
          Flutter Telebirr package —
          <a className="text-indigo-600 dark:text-indigo-400 ml-1" href="https://pub.dev/packages/flutter_telebirr" target="_blank" rel="noreferrer">flutter_telebirr</a>
        </li>
        <li>
          Flutter Telegram Gateway —
          <a className="text-indigo-600 dark:text-indigo-400 ml-1" href="https://pub.dev/packages/flutter_telegram_gateway" target="_blank" rel="noreferrer">flutter_telegram_gateway</a>
        </li>
      </ul>
    </Section>
  );
}


