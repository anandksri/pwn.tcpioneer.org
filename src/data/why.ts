import {
  BookOpenCheck,
  FlaskConical,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

export const why = [
  {
    title: "Learn by Doing",
    description:
      "Every lesson is paired with hands-on exercises so you practice concepts instead of only reading about them.",
    icon: FlaskConical,
    color: "sky",
  },
  {
    title: "Structured Learning",
    description:
      "Follow carefully designed learning paths without wasting time jumping between random tutorials.",
    icon: BookOpenCheck,
    color: "emerald",
  },
  {
    title: "Practice First",
    description:
      "Build confidence by completing labs and challenges after every module before moving forward.",
    icon: BriefcaseBusiness,
    color: "orange",
  },
  {
    title: "Community Driven",
    description:
      "Learn together with the TCPioneer community through discussions, events and collaborative learning.",
    icon: Users,
    color: "violet",
  },
] as const;
