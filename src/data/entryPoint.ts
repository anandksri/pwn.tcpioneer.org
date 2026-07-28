import {
  Terminal,
  Network,
  Globe,
  Code2,
} from "lucide-react";

export const entryPoint = [
  {
    title: "Linux Fundamentals",
    description:
      "Learn the Linux terminal, file system, permissions and shell scripting.",
    modules: 18,
    duration: "12 Hours",
    level: "Beginner",
    href: "/modules/linux",
    icon: Terminal,
    color: "emerald",
  },

  {
    title: "Networking",
    description:
      "Understand TCP/IP, DNS, HTTP, routing and packet analysis.",
    modules: 12,
    duration: "8 Hours",
    level: "Beginner",
    href: "/modules/networking",
    icon: Network,
    color: "sky",
  },

  {
    title: "Web Security",
    description:
      "Start with HTTP, authentication, SQL Injection and XSS.",
    modules: 20,
    duration: "16 Hours",
    level: "Beginner",
    href: "/modules/web-security",
    icon: Globe,
    color: "violet",
  },

  {
    title: "Programming",
    description:
      "Build Python and Bash skills for automation and security.",
    modules: 10,
    duration: "10 Hours",
    level: "Beginner",
    href: "/modules/programming",
    icon: Code2,
    color: "orange",
  },
] as const;