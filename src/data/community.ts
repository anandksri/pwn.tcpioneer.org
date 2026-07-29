import {
  Users,
  MessageSquare,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";


/* ---------------------------------------
   ABOUT PAGE
--------------------------------------- */

export const community = [
  {
    title: "Growing Community",
    description:
      "Connect with cybersecurity enthusiasts, students and professionals from around the world.",
    icon: Users,
  },
  {
    title: "Active Discussions",
    description:
      "Ask questions, share write-ups and collaborate with the community every day.",
    icon: MessageSquare,
  },
  {
    title: "Community Events",
    description:
      "Participate in workshops, CTFs, study groups and exclusive cybersecurity sessions.",
    icon: CalendarDays,
  },
  {
    title: "Mentor Support",
    description:
      "Learn faster with guidance from experienced mentors and contributors.",
    icon: ShieldCheck,
  },
];


/* ---------------------------------------
   COMMUNITY PAGE - RECENT ACTIVITY
--------------------------------------- */

export const recentActivities = [
  {
    title: "Linux Fundamentals Workshop Published",
    description: "A new beginner workshop is now available.",
    time: "2 hours ago",
    type: "Workshop",
  },

  {
    title: "New Weekly CTF Released",
    description: "Challenge #05 is now live.",
    time: "Yesterday",
    type: "CTF",
  },

  {
    title: "Burp Suite Module Updated",
    description: "Added new practical exercises.",
    time: "Yesterday",
    type: "Learning",
  },

  {
    title: "25 New Members Joined",
    description: "Welcome our newest community members.",
    time: "2 days ago",
    type: "Community",
  },
];


/* ---------------------------------------
   COMMUNITY PAGE - UPCOMING EVENTS
--------------------------------------- */

export const upcomingEvents = [
  {
    title: "Linux Fundamentals Workshop",
    date: "02 Aug",
    time: "7:00 PM",
    location: "Discord",
    href: "#",
  },

  {
    title: "Web Security Bootcamp",
    date: "10 Aug",
    time: "6:30 PM",
    location: "Google Meet",
    href: "#",
  },

  {
    title: "Weekly CTF Night",
    date: "15 Aug",
    time: "8:00 PM",
    location: "PWN Platform",
    href: "#",
  },
];


/* ---------------------------------------
   COMMUNITY PAGE - FEED
--------------------------------------- */

export const communityFeed = [
  {
    user: "Alex",
    action: "Published a Web Security write-up.",
    time: "2 hours ago",
  },

  {
    user: "Sarah",
    action: "Completed Linux Fundamentals.",
    time: "5 hours ago",
  },

  {
    user: "Rohan",
    action: "Started contributing to Password Guardian.",
    time: "Yesterday",
  },
];