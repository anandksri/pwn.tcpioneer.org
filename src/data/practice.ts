import {
  Terminal,
  Globe,
  Bug,
  Shield,
  ScanSearch,
  Fingerprint,
  Search,
  Cloud,
  Network,
  Lock,
} from "lucide-react";

export const practice = [
  {
    id: 1,
    slug: "linux-fundamentals-lab",
    title: "Linux Fundamentals Lab",
    description:
      "Practice Linux commands, file permissions, shell scripting and system navigation through hands-on exercises.",
    category: "Linux",
    difficulty: "Beginner",
    duration: "45 mins",
    challenges: 15,
    icon: Terminal,
    color: "emerald",
  },

  {
    id: 2,
    slug: "web-exploitation",
    title: "Web Exploitation",
    description:
      "Learn SQL Injection, XSS, authentication bypass and common web vulnerabilities in a safe lab.",
    category: "Web",
    difficulty: "Intermediate",
    duration: "1 hr",
    challenges: 20,
    icon: Globe,
    color: "violet",
  },

  {
    id: 3,
    slug: "sql-injection-lab",
    title: "SQL Injection Lab",
    description:
      "Understand SQL Injection through practical exploitation scenarios and secure coding practices.",
    category: "Labs",
    difficulty: "Intermediate",
    duration: "40 mins",
    challenges: 12,
    icon: Bug,
    color: "orange",
  },

  {
    id: 4,
    slug: "active-directory-lab",
    title: "Active Directory Lab",
    description:
      "Enumerate users, identify privilege escalation paths and practice common Active Directory attacks.",
    category: "Windows",
    difficulty: "Advanced",
    duration: "2 hrs",
    challenges: 18,
    icon: Shield,
    color: "rose",
  },

  {
    id: 5,
    slug: "network-analysis",
    title: "Network Analysis",
    description:
      "Analyze packet captures and investigate suspicious traffic using Wireshark.",
    category: "Networking",
    difficulty: "Intermediate",
    duration: "50 mins",
    challenges: 14,
    icon: ScanSearch,
    color: "sky",
  },

  {
    id: 6,
    slug: "digital-forensics",
    title: "Digital Forensics",
    description:
      "Recover evidence, inspect disk images and perform forensic investigations.",
    category: "Forensics",
    difficulty: "Advanced",
    duration: "1 hr 30 mins",
    challenges: 16,
    icon: Fingerprint,
    color: "rose",
  },

  {
    id: 7,
    slug: "osint-investigation",
    title: "OSINT Investigation",
    description:
      "Use public sources to gather intelligence and solve real-world investigation scenarios.",
    category: "OSINT",
    difficulty: "Beginner",
    duration: "35 mins",
    challenges: 10,
    icon: Search,
    color: "amber",
  },

  {
    id: 8,
    slug: "cloud-security-lab",
    title: "Cloud Security Lab",
    description:
      "Secure cloud infrastructure, identify misconfigurations and understand IAM best practices.",
    category: "Cloud",
    difficulty: "Intermediate",
    duration: "1 hr 15 mins",
    challenges: 15,
    icon: Cloud,
    color: "sky",
  },

  {
    id: 9,
    slug: "network-ctf",
    title: "Networking CTF",
    description:
      "Solve networking-focused Capture The Flag challenges covering DNS, HTTP and TCP/IP.",
    category: "CTF",
    difficulty: "Intermediate",
    duration: "1 hr",
    challenges: 22,
    icon: Network,
    color: "violet",
  },

  {
    id: 10,
    slug: "privilege-escalation",
    title: "Privilege Escalation",
    description:
      "Practice Linux and Windows privilege escalation techniques in guided environments.",
    category: "Labs",
    difficulty: "Advanced",
    duration: "1 hr 20 mins",
    challenges: 18,
    icon: Lock,
    color: "orange",
  },
] as const;