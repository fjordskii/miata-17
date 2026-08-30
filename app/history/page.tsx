import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { car } from "@/lib/car";

export const metadata: Metadata = {
  title: "History",
  description:
    "Receipt-backed timeline for NA #17: Scott’s 2016–2019 track build, then Ford Heacock’s 2026 club-sport work. No previous-owner PII.",
};

export default function HistoryPage() {
  const { history, openQuestions, omitted, photos, identity } = car;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <PageIntro kicker="Paper trail" title="History / timeline">
        <p>
          Previous owner built it as a track car — Scott, first name only.
          Receipts run 2016–2019. Ford picked it up and started the club-sport
          conversion in 2026. Nothing below includes phones, emails, street
          addresses, or card numbers from that era.
        </p>
      </PageIntro>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]">
        <ol className="relative border-l border-rule pl-6">
          {history.map((entry) => (
            <li key={`${entry.sort}-${entry.title}`} className="mb-10 last:mb-0">
              <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-red" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <time className="font-sans text-lg tracking-[0.12em] text-red uppercase">
                  {entry.date}
                </time>
                <span className="text-[10px] tracking-[0.16em] text-muted uppercase">
                  {entry.era === "scott" ? "Scott — track build" : `${identity.owner} — club sport`}
                </span>
                {entry.amount ? (
                  <span className="text-[11px] text-cream">{entry.amount}</span>
                ) : null}
              </div>
              <h2 className="mt-1 font-sans text-2xl font-medium uppercase">
                {entry.title}
              </h2>
              <p className="mt-2 text-[13px] leading-relaxed text-cream">
                {entry.detail}
              </p>
              <p className="mt-2 text-[10px] tracking-[0.16em] text-muted uppercase">
                {entry.source}
              </p>
            </li>
          ))}
        </ol>

        <aside className="space-y-6">
          <Photo photo={photos.rear} sizes="360px" />

          <section className="border border-rule bg-shop-2/80">
            <h2 className="border-b border-rule px-4 py-2 font-sans text-lg tracking-[0.14em] text-red uppercase">
              Still open
            </h2>
            <ul>
              {openQuestions.map((q) => (
                <li key={q.id} className="border-b border-rule px-4 py-3 last:border-b-0">
                  <p className="text-[13px] text-paper">{q.question}</p>
                  <p className="mt-1 text-[12px] text-muted">{q.note}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-dashed border-rule px-4 py-3">
            <h2 className="text-[10px] tracking-[0.16em] text-muted uppercase">
              Intentionally omitted
            </h2>
            <ul className="mt-2 space-y-2 text-[12px] text-cream">
              {omitted.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
