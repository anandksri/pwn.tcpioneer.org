import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Flag, User } from "lucide-react";

const actions = [
  {
    title: "Browse Modules",
    description: "Continue your learning journey",
    href: "/modules",
    icon: BookOpen,
  },
  {
    title: "Start a Lab",
    description: "Practice in hands-on labs",
    href: "/practice",
    icon: FlaskConical,
  },
  {
    title: "Join a CTF",
    description: "Compete with the community",
    href: "/community",
    icon: Flag,
  },
  {
    title: "My Profile",
    description: "Manage your account",
    href: "/profile",
    icon: User,
  },
];

export default function QuickActions() {
  return (
    <section className="border border-border bg-card p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Quick Actions
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Jump into your next task</p>
      </div>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                group
                flex
                items-center
                justify-between
                border
                border-border
                bg-secondary
                p-4
                transition-colors
                hover:border-primary/40
                hover:bg-elevated
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-border bg-card">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <h3 className="text-sm font-medium text-foreground">{action.title}</h3>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </div>

              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
