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
    lessons: 18,
    estimatedTime: "12 Hours",
    level: "Beginner",
    description:
      "Master the Linux command line, users, permissions and shell scripting.",
    topics: [
      "Bash",
      "File System",
      "Permissions",
      "Privilege Escalation",
    ],
    href: "/modules/linux",
  },
  {
    title: "Networking",
    icon: Network,
    lessons: 14,
    estimatedTime: "8 Hours",
    level: "Beginner",
    description:
      "Understand TCP/IP, DNS, HTTP and network communication.",
    topics: [
      "TCP/IP",
      "DNS",
      "HTTP",
      "Packet Analysis",
    ],
    href: "/modules/networking",
  },
  {
    title: "Web Security",
    icon: Globe,
    lessons: 20,
    estimatedTime: "16 Hours",
    level: "Intermediate",
    description:
      "Learn how modern web applications are attacked and secured.",
    topics: [
      "SQL Injection",
      "XSS",
      "Authentication",
      "SSRF",
    ],
    href: "/modules/web-security",
  },
  {
    title: "Programming",
    icon: Code2,
    lessons: 12,
    estimatedTime: "10 Hours",
    level: "Beginner",
    description:
      "Build Python and Bash skills for automation and offensive security.",
    topics: [
      "Python",
      "Bash",
      "Automation",
      "Scripting",
    ],
    href: "/modules/programming",
  },
  {
    title: "Cryptography",
    icon: ShieldCheck,
    lessons: 10,
    estimatedTime: "9 Hours",
    level: "Intermediate",
    description:
      "Understand encryption, hashing and modern cryptographic concepts.",
    topics: [
      "AES",
      "RSA",
      "Hashing",
      "Encoding",
    ],
    href: "/modules/cryptography",
  },
  {
    title: "Binary Exploitation",
    icon: Bug,
    lessons: 16,
    estimatedTime: "18 Hours",
    level: "Advanced",
    description:
      "Explore memory corruption, debugging and binary exploitation.",
    topics: [
      "GDB",
      "Pwntools",
      "ROP",
      "Buffer Overflow",
    ],
    href: "/modules/pwn",
  },
];