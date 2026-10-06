"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Modules",
    href: "/modules",
  },
  {
    name: "Practice",
    href: "/practice",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Community",
    href: "/community",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="hidden items-center justify-center lg:flex">
      <ul className="flex items-center gap-2">
        {navigation.map((item) => {
          const active = pathname === item.href;

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`group relative rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary"
                    : "text-secondary-foreground hover:bg-secondary hover:text-foreground"
                } `}
              >
                {item.name}

                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-primary transition-all duration-200 ${
                    active ? "w-8 opacity-100" : "w-0 opacity-0 group-hover:w-8"
                  } `}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
