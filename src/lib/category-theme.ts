export type CategoryTheme = {
  icon: string;
  bg: string;
  border: string;
  hover: string;
  text: string;
  solid: string;
};

const themes: Record<string, CategoryTheme> = {
  fundamentals: {
    icon: "text-sky-300",
    bg: "bg-sky-400/10",
    border: "border-sky-400/25",
    hover: "hover:border-sky-400/45",
    text: "group-hover:text-sky-300",
    solid: "bg-sky-400 text-sky-950",
  },
  linux: {
    icon: "text-emerald-300",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/25",
    hover: "hover:border-emerald-400/45",
    text: "group-hover:text-emerald-300",
    solid: "bg-emerald-400 text-emerald-950",
  },
  networking: {
    icon: "text-cyan-300",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/25",
    hover: "hover:border-cyan-400/45",
    text: "group-hover:text-cyan-300",
    solid: "bg-cyan-400 text-cyan-950",
  },
  web: {
    icon: "text-violet-300",
    bg: "bg-violet-400/10",
    border: "border-violet-400/25",
    hover: "hover:border-violet-400/45",
    text: "group-hover:text-violet-300",
    solid: "bg-violet-400 text-violet-950",
  },
  cryptography: {
    icon: "text-amber-300",
    bg: "bg-amber-400/10",
    border: "border-amber-400/25",
    hover: "hover:border-amber-400/45",
    text: "group-hover:text-amber-300",
    solid: "bg-amber-400 text-amber-950",
  },
  crypto: {
    icon: "text-amber-300",
    bg: "bg-amber-400/10",
    border: "border-amber-400/25",
    hover: "hover:border-amber-400/45",
    text: "group-hover:text-amber-300",
    solid: "bg-amber-400 text-amber-950",
  },
  programming: {
    icon: "text-orange-300",
    bg: "bg-orange-400/10",
    border: "border-orange-400/25",
    hover: "hover:border-orange-400/45",
    text: "group-hover:text-orange-300",
    solid: "bg-orange-400 text-orange-950",
  },
  pwn: {
    icon: "text-rose-300",
    bg: "bg-rose-400/10",
    border: "border-rose-400/25",
    hover: "hover:border-rose-400/45",
    text: "group-hover:text-rose-300",
    solid: "bg-rose-400 text-rose-950",
  },
  forensics: {
    icon: "text-teal-300",
    bg: "bg-teal-400/10",
    border: "border-teal-400/25",
    hover: "hover:border-teal-400/45",
    text: "group-hover:text-teal-300",
    solid: "bg-teal-400 text-teal-950",
  },
  cloud: {
    icon: "text-indigo-300",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/25",
    hover: "hover:border-indigo-400/45",
    text: "group-hover:text-indigo-300",
    solid: "bg-indigo-400 text-indigo-950",
  },
};

export function getCategoryTheme(category: string): CategoryTheme {
  const key = category.trim().toLowerCase();
  return (
    themes[key] ??
    themes.fundamentals
  );
}
