import {
  Shield,
  Search,
  Radar,
  Swords,
  ShieldCheck,
  Cloud,
} from "lucide-react";

import type { ComponentType } from "react";

export type CareerColor =
  | "emerald"
  | "violet"
  | "sky"
  | "orange"
  | "rose"
  | "cyan";

export type CareerPath = {
  slug: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  level: string;
  modules: number;
  labs: number;
  color: CareerColor;
};

export const careerPaths: CareerPath[] = [
  {
    slug: "ethical-hacker",
    title: "Ethical Hacker",
    description:
      "Learn penetration testing, exploit web applications, assess network security, and discover vulnerabilities like a professional ethical hacker.",
    icon: Shield,
    level: "Beginner → Advanced",
    modules: 24,
    labs: 18,
    color: "violet",
  },

  {
    slug: "soc-analyst",
    title: "SOC Analyst",
    description:
      "Monitor security events, investigate alerts, respond to incidents, and defend organizations using industry-standard blue team tools.",
    icon: Radar,
    level: "Beginner",
    modules: 18,
    labs: 12,
    color: "emerald",
  },

  {
    slug: "bug-bounty-hunter",
    title: "Bug Bounty Hunter",
    description:
      "Master reconnaissance, web application testing, API security, and responsible disclosure to uncover real-world vulnerabilities.",
    icon: Search,
    level: "Intermediate",
    modules: 20,
    labs: 15,
    color: "orange",
  },

  {
    slug: "red-team",
    title: "Red Team Operator",
    description:
      "Simulate advanced cyber attacks, compromise enterprise environments, and emulate real-world adversaries through offensive operations.",
    icon: Swords,
    level: "Advanced",
    modules: 22,
    labs: 16,
    color: "rose",
  },

  {
    slug: "blue-team",
    title: "Blue Team Defender",
    description:
      "Protect enterprise infrastructure with threat hunting, detection engineering, incident response, and defensive security strategies.",
    icon: ShieldCheck,
    level: "Intermediate",
    modules: 21,
    labs: 14,
    color: "sky",
  },

  {
    slug: "cloud-security",
    title: "Cloud Security Engineer",
    description:
      "Secure cloud-native applications, containers, Kubernetes, AWS, and Azure using modern cloud security best practices.",
    icon: Cloud,
    level: "Intermediate",
    modules: 19,
    labs: 10,
    color: "cyan",
  },
];