export type CategoryTheme = {
  icon: string;
  bg: string;
  border: string;
  hover: string;
  text: string;
  solid: string;
};

const fundamentals: CategoryTheme = {
  icon: "text-primary",
  bg: "bg-secondary",
  border: "border-border",
  hover: "hover:border-primary/40",
  text: "group-hover:text-primary",
  solid: "bg-primary text-primary-foreground",
};

export function getCategoryTheme(category: string): CategoryTheme {
  void category;
  return fundamentals;
}
