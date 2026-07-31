import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

const news = [
  {
    title: "Critical Zero-Day Vulnerability Discovered in Popular VPN Software",
    source: "The Hacker News",
    time: "2 hours ago",
    url: "#",
  },
  {
    title: "Microsoft Releases Emergency Security Updates",
    source: "Microsoft Security",
    time: "5 hours ago",
    url: "#",
  },
  {
    title: "OWASP Releases Updated Top 10 API Security Risks",
    source: "OWASP",
    time: "Yesterday",
    url: "#",
  },
];

export default function CyberNews() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Cyber News
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Latest security updates
          </p>
        </div>

        <div className="rounded-lg bg-violet-500/10 p-3">
          <Newspaper className="h-5 w-5 text-violet-400" />
        </div>
      </div>

      <div className="space-y-4">
        {news.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            className="
              group
              block
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
            <h3 className="font-medium text-white transition group-hover:text-violet-400">
              {item.title}
            </h3>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span>{item.source}</span>

                <span>•</span>

                <span>{item.time}</span>
              </div>

              <ArrowUpRight className="h-4 w-4 text-zinc-500 transition group-hover:text-white" />
            </div>
          </Link>
        ))}
      </div>

      <button
        className="
          mt-6
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          py-3
          text-sm
          font-medium
          text-white
          transition
          hover:border-violet-500/30
          hover:bg-zinc-800
        "
      >
        View All News
      </button>
    </section>
  );
}