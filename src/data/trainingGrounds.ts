import {
  Terminal,
  Network,
  Globe,
  Code2,
  ShieldCheck,
  Bug,
} from "lucide-react";

export const trainingGrounds = [
  {
    title: "Linux Fundamentals",
    icon: Terminal,
    color: "emerald",
    lessons: 18,
    estimatedTime: "12 Hours",
    level: "Beginner",
    description:
      "Master the Linux command line, users, permissions and shell scripting.",
    topics: ["Bash", "File System", "Permissions"],
    href: "/modules/linux",
  },

  {
    title: "Networking",
    icon: Network,
    color: "sky",
    lessons: 14,
    estimatedTime: "8 Hours",
    level: "Beginner",
    description: "Understand TCP/IP, DNS, HTTP and network communication.",
    topics: ["TCP/IP", "DNS", "HTTP"],
    href: "/modules/networking",
  },

  {
    title: "Web Security",
    icon: Globe,
    color: "violet",
    lessons: 20,
    estimatedTime: "16 Hours",
    level: "Intermediate",
    description: "Learn how modern web applications are attacked and secured.",
    topics: ["SQLi", "XSS", "SSRF"],
    href: "/modules/web-security",
  },

  {
    title: "Programming",
    icon: Code2,
    color: "orange",
    lessons: 12,
    estimatedTime: "10 Hours",
    level: "Beginner",
    description:
      "Build Python and Bash skills for automation and offensive security.",
    topics: ["Python", "Bash", "Automation"],
    href: "/modules/programming",
  },

  {
    title: "Cryptography",
    icon: ShieldCheck,
    color: "cyan",
    lessons: 10,
    estimatedTime: "9 Hours",
    level: "Intermediate",
    description:
      "Understand encryption, hashing and modern cryptographic concepts.",
    topics: ["AES", "RSA", "Hashing"],
    href: "/modules/cryptography",
  },

  {
    title: "Binary Exploitation",
    icon: Bug,
    color: "rose",
    lessons: 16,
    estimatedTime: "18 Hours",
    level: "Advanced",
    description:
      "Explore memory corruption, debugging and binary exploitation.",
    topics: ["GDB", "ROP", "Pwntools"],
    href: "/modules/pwn",
  },
] as const;
