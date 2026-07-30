import {
  Terminal,
  Network,
  Globe,
  Bug,
  Shield,
  Code2,
  ScanSearch,
  Fingerprint,
  Search,
} from "lucide-react";

export const modules = [
  {
    id: 1,
    slug: "linux-fundamentals",
    title: "Linux Fundamentals",
    description:
      "Master the Linux command line, file systems, permissions, shell scripting and essential administration skills.",
    category: "Linux",
    difficulty: "Beginner",
    lessons: 15,
    duration: "6 Hours",
    icon: Terminal,
    color: "emerald",
  },

  {
    id: 2,
    slug: "networking-basics",
    title: "Networking Basics",
    description:
      "Understand TCP/IP, OSI, DNS, HTTP, routing, switching and core networking concepts used in cybersecurity.",
    category: "Networking",
    difficulty: "Beginner",
    lessons: 18,
    duration: "7 Hours",
    icon: Network,
    color: "sky",
  },

  {
    id: 3,
    slug: "web-security",
    title: "Web Security",
    description:
      "Learn how modern web applications work and discover common vulnerabilities and secure development practices.",
    category: "Web",
    difficulty: "Intermediate",
    lessons: 20,
    duration: "8 Hours",
    icon: Globe,
    color: "violet",
  },

  {
    id: 4,
    slug: "burp-suite",
    title: "Burp Suite",
    description:
      "Use Burp Suite for intercepting traffic, testing applications and performing professional web security assessments.",
    category: "Web",
    difficulty: "Intermediate",
    lessons: 12,
    duration: "5 Hours",
    icon: Bug,
    color: "orange",
  },

  {
    id: 5,
    slug: "active-directory",
    title: "Active Directory",
    description:
      "Explore Active Directory architecture, authentication, enumeration and common attack and defense techniques.",
    category: "Windows",
    difficulty: "Advanced",
    lessons: 24,
    duration: "10 Hours",
    icon: Shield,
    color: "rose",
  },

  {
    id: 6,
    slug: "python-for-security",
    title: "Python for Security",
    description:
      "Automate cybersecurity tasks, write security tools and build practical scripts using Python.",
    category: "Programming",
    difficulty: "Intermediate",
    lessons: 16,
    duration: "6 Hours",
    icon: Code2,
    color: "amber",
  },

  {
    id: 7,
    slug: "wireshark",
    title: "Wireshark",
    description:
      "Capture, inspect and analyze network traffic to investigate incidents and troubleshoot communication issues.",
    category: "Networking",
    difficulty: "Intermediate",
    lessons: 14,
    duration: "5 Hours",
    icon: ScanSearch,
    color: "sky",
  },

  {
    id: 8,
    slug: "digital-forensics",
    title: "Digital Forensics",
    description:
      "Learn evidence acquisition, forensic investigation techniques and incident response workflows.",
    category: "Forensics",
    difficulty: "Advanced",
    lessons: 18,
    duration: "8 Hours",
    icon: Fingerprint,
    color: "rose",
  },

  {
    id: 9,
    slug: "osint",
    title: "OSINT",
    description:
      "Collect and analyze publicly available information using professional open-source intelligence techniques.",
    category: "OSINT",
    difficulty: "Beginner",
    lessons: 10,
    duration: "4 Hours",
    icon: Search,
    color: "violet",
  },
] as const;