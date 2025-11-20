import React from "react";
import Section from "./Section";
import { 
  SiJavascript, SiTypescript, SiFlutter, SiSpringboot, SiAndroid, 
  SiDart, SiHtml5, SiCss3, SiGit, SiGithubactions, 
  SiGooglecloud, SiAmazon, SiMysql, SiPostgresql, 
  SiRedis, SiSocketdotio 
} from "react-icons/si";
import { FiServer } from "react-icons/fi";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Flutter", icon: <SiFlutter className="text-cyan-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "Android", icon: <SiAndroid className="text-green-600" /> },
  { name: "Dart", icon: <SiDart className="text-blue-400" /> },
  { name: "HTML & CSS", icon: <div className="flex gap-1"><SiHtml5 className="text-orange-500" /><SiCss3 className="text-blue-500" /></div> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "CI/CD", icon: <SiGithubactions className="text-blue-500" /> },
  { name: "GCP & AWS", icon: <div className="flex gap-1"><SiGooglecloud className="text-blue-400" /><SiAmazon className="text-orange-400" /></div> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "REST APIs", icon: <FiServer className="text-gray-500 dark:text-gray-400" /> },
  { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-800 dark:text-white" /> },
];

export default function Skills() {
  return (
    <Section id="skills" subtitle="Toolbox" title="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/40 p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
          >
            <div className="text-2xl shrink-0">{s.icon}</div>
            <span className="text-sm font-medium">{s.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
