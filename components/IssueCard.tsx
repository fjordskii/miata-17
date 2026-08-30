import Link from "next/link";
import type { Issue } from "@/lib/car";

export function IssueCard({
  issue,
  href = "/next",
}: {
  issue: Issue;
  href?: string;
}) {
  return (
    <Link
      href={`${href}#${issue.id}`}
      className="group block border border-rule bg-shop-2/80 no-underline transition-colors hover:border-red"
    >
      <div className="flex items-baseline justify-between gap-3 border-b border-rule px-4 py-2">
        <span className="font-sans text-sm tracking-[0.2em] text-red">
          {String(issue.priority).padStart(2, "0")}
        </span>
        <span className="text-[10px] tracking-[0.16em] text-muted uppercase">
          {issue.status}
        </span>
      </div>
      <div className="px-4 py-4">
        <h3 className="font-sans text-2xl font-medium tracking-tight text-paper uppercase">
          {issue.title}
        </h3>
        <p className="mt-1 text-[11px] tracking-[0.12em] text-red uppercase">
          {issue.ageLabel}
        </p>
        <p className="mt-2 text-[13px] leading-relaxed text-cream/85">
          {issue.summary}
        </p>
      </div>
    </Link>
  );
}
