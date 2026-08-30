import type { SpecLine } from "@/lib/car";

export function SpecTable({
  title,
  lines,
}: {
  title: string;
  lines: readonly SpecLine[];
}) {
  return (
    <section className="border border-rule bg-shop-2/80">
      <h2 className="border-b border-rule px-4 py-2 font-sans text-lg tracking-[0.14em] text-red uppercase">
        {title}
      </h2>
      <dl>
        {lines.map((line) => (
          <div
            key={`${line.label}-${line.value}`}
            className="grid gap-1 border-b border-rule/80 px-4 py-3 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <dt className="text-[11px] tracking-[0.14em] text-muted uppercase">
              {line.label}
            </dt>
            <dd>
              <p className="text-paper">{line.value}</p>
              {line.part ? (
                <p className="mt-1 text-[12px] text-cream">{line.part}</p>
              ) : null}
              {line.note ? (
                <p className="mt-1 text-[12px] text-muted">{line.note}</p>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
