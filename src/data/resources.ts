import {
  FileText,
  ScanSearch,
  Shield,
  BookOpen,
  Map,
  FileCode2,
  Video,
  Terminal,
  Globe,
  Lock,
  Database,
  Bug,
} from "lucide-react";

export const resources = [
  {
    id: 1,
    title: "Linux Command Cheat Sheet",
    description:
      "Quick reference for essential Linux commands used in cybersecurity.",
    category: "Cheat Sheets",
    type: "download",
    href: "/resources/linux-cheatsheet.pdf",
    icon: Terminal,
    color: "emerald",
  },

  {
    id: 2,
    title: "Burp Suite Cheat Sheet",
    description:
      "Common shortcuts, repeater tricks and testing workflow for Burp Suite.",
    category: "Cheat Sheets",
    type: "download",
    href: "/resources/burp-cheatsheet.pdf",
    icon: Bug,
    color: "orange",
  },

  {
    id: 3,
    title: "Nmap",
    description: "Powerful network discovery and security auditing tool.",
    category: "Tools",
    type: "link",
    href: "https://nmap.org",
    icon: ScanSearch,
    color: "sky",
  },

  {
    id: 4,
    title: "OWASP Testing Guide",
    description: "Official guide covering web application security testing.",
    category: "Books",
    type: "book",
    href: "https://owasp.org/www-project-web-security-testing-guide/",
    icon: BookOpen,
    color: "violet",
  },

  {
    id: 5,
    title: "Cybersecurity Roadmap",
    description:
      "Structured roadmap for beginners to advanced cybersecurity learners.",
    category: "Roadmaps",
    type: "read",
    href: "/roadmaps/cybersecurity",
    icon: Map,
    color: "amber",
  },

  {
    id: 6,
    title: "Password Wordlists",
    description:
      "Collection of commonly used password wordlists for practice labs.",
    category: "Wordlists",
    type: "download",
    href: "/resources/wordlists.zip",
    icon: Lock,
    color: "rose",
  },

  {
    id: 7,
    title: "SQL Injection Write-up",
    description:
      "Step-by-step explanation of solving a SQL Injection challenge.",
    category: "Write-ups",
    type: "read",
    href: "/writeups/sql-injection",
    icon: FileCode2,
    color: "violet",
  },

  {
    id: 8,
    title: "Wireshark Beginner Guide",
    description: "Learn packet analysis using Wireshark from scratch.",
    category: "Videos",
    type: "video",
    href: "https://youtube.com",
    icon: Video,
    color: "sky",
  },

  {
    id: 9,
    title: "MITRE ATT&CK Framework",
    description: "Reference for adversary tactics and attack techniques.",
    category: "References",
    type: "link",
    href: "https://attack.mitre.org",
    icon: Shield,
    color: "rose",
  },

  {
    id: 10,
    title: "OWASP Top 10",
    description: "Learn the most critical web application security risks.",
    category: "References",
    type: "link",
    href: "https://owasp.org/www-project-top-ten/",
    icon: Globe,
    color: "violet",
  },

  {
    id: 11,
    title: "Digital Forensics Notes",
    description:
      "Comprehensive notes covering forensic methodologies and tools.",
    category: "Books",
    type: "download",
    href: "/resources/forensics-notes.pdf",
    icon: Database,
    color: "amber",
  },

  {
    id: 12,
    title: "Linux Privilege Escalation",
    description: "Complete privilege escalation checklist and methodology.",
    category: "Cheat Sheets",
    type: "download",
    href: "/resources/linux-privesc.pdf",
    icon: FileText,
    color: "emerald",
  },
] as const;
