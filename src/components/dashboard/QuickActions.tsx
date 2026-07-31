import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Flag,
  User,
} from "lucide-react";

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
    href: "/labs",
    icon: FlaskConical,
  },
  {
    title: "Join a CTF",
    description: "Compete with the community",
    href: "/ctf",
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
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Jump into your next task
        </p>
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
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900
                p-4
                transition-all
                duration-300
                hover:border-violet-500/30
                hover:bg-zinc-800
              "
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-violet-500/10 p-3">
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    {action.title}
                  </h3>

                  <p className="text-sm text-zinc-500">
                    {action.description}
                  </p>
                </div>
              </div>

              <ArrowRight
                className="
                  h-5
                  w-5
                  text-zinc-500
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-white
                "
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}