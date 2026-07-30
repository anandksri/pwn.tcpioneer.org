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
    <nav className="hidden items-center justify-center lg:flex">
      <ul className="flex items-center gap-2">
        {navigation.map((item) => {
          const active = pathname === item.href;

          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`
                  group
                  relative
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "text-violet-400"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-violet-500
                    transition-all
                    duration-300

                    ${
                      active
                        ? "w-8 opacity-100"
                        : "w-0 opacity-0 group-hover:w-8"
                    }
                  `}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}