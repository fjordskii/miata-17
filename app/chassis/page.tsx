import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { car } from "@/lib/car";

export const metadata: Metadata = {
  title: "Chassis / Red Co sheet",
  description:
    "Red Co setup sheet numbers for NA #17: 800/350 springs, 2.5F/2R camber, bar holes, corner weights.",
};

const sourceLabel = {
  "red-co": "Red Co sheet",
  "sale-sheet": "Sale sheet",
  visual: "On the car",
  note: "Note",
} as const;

export default function ChassisPage() {
  const { chassisSetup, photos } = car;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14">
      <PageIntro kicker="Setup sheet" title={chassisSetup.sheetTitle}>
        <p>{chassisSetup.trustNote}</p>
      </PageIntro>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_18rem]">
        <div className="border border-rule bg-shop-2/90">
          <div className="flex items-center justify-between border-b border-red px-4 py-3">
            <p className="font-sans text-xl tracking-[0.2em] uppercase">
              {chassisSetup.shop}
            </p>
            <p className="text-[10px] tracking-[0.18em] text-muted uppercase">
              Alignment / weights
            </p>
          </div>
          <table className="w-full text-left text-[13px]">
            <thead className="border-b border-rule text-[10px] tracking-[0.16em] text-muted uppercase">
              <tr>
                <th className="px-4 py-2 font-normal">Item</th>
                <th className="px-4 py-2 font-normal">Value</th>
                <th className="hidden px-4 py-2 font-normal sm:table-cell">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {chassisSetup.rows.map((row) => (
                <tr key={row.item} className="border-b border-rule/80 last:border-b-0">
                  <td className="px-4 py-3 text-muted">{row.item}</td>
                  <td className="px-4 py-3 text-paper">{row.value}</td>
                  <td className="hidden px-4 py-3 text-cream sm:table-cell">
                    {sourceLabel[row.source]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="border-t border-rule px-4 py-3 text-[12px] text-muted">
            {chassisSetup.rows
              .filter((row) => row.note)
              .map((row) => (
                <li key={row.item} className="py-1">
                  <span className="text-cream">{row.item}.</span> {row.note}
                </li>
              ))}
          </ul>
        </div>

        <aside className="space-y-6">
          <Photo photo={photos.side} sizes="320px" />
          <div className="border border-rule px-4 py-4">
            <p className="text-[10px] tracking-[0.16em] text-red uppercase">
              How to read this
            </p>
            <p className="mt-2 text-[12px] leading-relaxed text-cream">
              Camber is sheet camber, not a fresh alignment. Corner weights are
              totals for two conditions — the per-wheel ticket is not in the
              folder. If the car gets corner-weighted again after the seat swap,
              replace these two totals.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
