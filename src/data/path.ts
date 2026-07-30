import { BookOpen, Shield, FlaskConical, Flag, Briefcase } from "lucide-react";

export type PathColor = "emerald" | "violet" | "sky" | "orange" | "rose";

export type PathStep = {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: PathColor;
};

export const path: PathStep[] = [
  {
    number: "01",
    title: "Foundation",
    description:
      "Master Linux, networking, programming and cybersecurity fundamentals.",
    icon: BookOpen,
    color: "emerald",
  },
  {
    number: "02",
    title: "Offensive Security",
    description:
      "Learn web exploitation, privilege escalation and system security.",
    icon: Shield,
    color: "violet",
  },
  {
    number: "03",
    title: "Hands-on Labs",
    description:
      "Practice every concept with guided labs and real-world scenarios.",
    icon: FlaskConical,
    color: "sky",
  },
  {
    number: "04",
    title: "CTFs & Community",
    description:
      "Solve challenges, collaborate with others and sharpen your skills.",
    icon: Flag,
    color: "orange",
  },
  {
    number: "05",
    title: "Career Ready",
    description:
      "Build projects, strengthen your portfolio and prepare for cybersecurity roles.",
    icon: Briefcase,
    color: "rose",
  },
];
