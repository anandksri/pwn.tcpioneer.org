import {
  Home,
  User,
  BookOpen,
  FlaskConical,
  Flag,
  Bell,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Modules",
    href: "/modules",
    icon: BookOpen,
  },
  {
    title: "Labs",
    href: "/labs",
    icon: FlaskConical,
  },
  {
    title: "CTF",
    href: "/ctf",
    icon: Flag,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];