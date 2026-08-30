import Link from "next/link";
import { IssueCard } from "@/components/IssueCard";
import { Photo } from "@/components/Photo";
import { car } from "@/lib/car";

export default function HomePage() {
  const { identity, photos, snapshot, issues, inProcess } = car;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <section className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="stamp">Build log · public</p>
          <h1 className="mt-5 font-sans text-5xl font-semibold leading-[0.9] tracking-tight text-paper uppercase sm:text-7xl">
            {identity.year}
            <br />
            {identity.chassis} Miata
          </h1>
          <p className="mt-4 font-sans text-3xl tracking-[0.08em] text-red uppercase">
            Door {identity.doorNumber}
          </p>
          <div className="red-rule mt-5" />
          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-cream">
            {identity.owner}. {identity.color}, {identity.roof.toLowerCase()},{" "}
            {identity.flares.toLowerCase()}, {identity.wheels.toLowerCase()}.
          </p>
          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-paper">
            {identity.mission}. {identity.missionDetail}
          </p>
        </div>
        <Photo photo={photos.hero} priority sizes="(min-width: 1024px) 520px, 100vw" />
      </section>

      <section className="mt-14">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="font-sans text-2xl tracking-[0.12em] uppercase">
            On the car now
          </h2>
          <Link
            href="/spec"
            className="text-[11px] tracking-[0.16em] text-red uppercase no-underline hover:text-paper"
          >
            Full spec →
          </Link>
        </div>
        <ul className="grid grid-cols-2 border border-rule sm:grid-cols-4">
          {snapshot.map((item) => (
            <li
              key={item.label}
              className="border-r border-b border-rule px-3 py-3 last:border-r-0 sm:[&:nth-child(4n)]:border-r-0"
            >
              <p className="text-[10px] tracking-[0.16em] text-muted uppercase">
                {item.label}
              </p>
              <p className="mt-1 text-[13px] text-paper">{item.value}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="font-sans text-2xl tracking-[0.12em] uppercase">
            Live issues
          </h2>
          <Link
            href="/next"
            className="text-[11px] tracking-[0.16em] text-red uppercase no-underline hover:text-paper"
          >
            Work order →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {issues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
        <p className="mt-4 border border-dashed border-rule px-4 py-3 text-[13px] text-cream">
          <span className="tracking-[0.14em] text-red uppercase">
            Also in process
          </span>
          {" — "}
          {inProcess.title}. {inProcess.summary}
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        <Photo
          photo={photos.side}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="md:col-span-2"
        />
        <Photo photo={photos.bay} sizes="(min-width: 768px) 33vw, 100vw" />
      </section>
    </div>
  );
}
