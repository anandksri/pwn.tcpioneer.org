import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

const news = [
  {
    title: "Critical Zero-Day Vulnerability Discovered in Popular VPN Software",
    source: "The Hacker News",
    time: "2 hours ago",
    url: "https://thehackernews.com/",
  },
  {
    title: "Microsoft Releases Emergency Security Updates",
    source: "Microsoft Security",
    time: "5 hours ago",
    url: "https://msrc.microsoft.com/blog/",
  },
  {
    title: "OWASP Releases Updated Top 10 API Security Risks",
    source: "OWASP",
    time: "Yesterday",
    url: "https://owasp.org/API-Security/editions/2023/en/0x00-header/",
  },
];

export default function CyberNews() {
  return (
    <section className="border border-border bg-card p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">Cyber News</h2>
          <p className="mt-1 text-sm text-muted-foreground">Latest security updates</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center border border-border bg-secondary">
          <Newspaper className="h-4 w-4 text-primary" />
        </div>
      </div>

      <div className="space-y-0">
        {news.map((item) => (
          <Link
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-start
              justify-between
              gap-3
              border-b
              border-border
              py-4
              transition-colors
              hover:text-primary
            "
          >
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary">
                {item.title}
              </h3>
              <div className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                <span>{item.source}</span>
                <span>•</span>
                <span>{item.time}</span>
              </div>
            </div>

            <ArrowUpRight className="mt-0.5 h-4 w-4 flex-none text-muted-foreground group-hover:text-foreground" />
          </Link>
        ))}
      </div>

      <Link href="/resources" className="mt-6 block w-full border border-border bg-secondary px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-elevated">
        View All News
      </Link>
    </section>
  );
}
