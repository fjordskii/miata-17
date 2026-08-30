import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { car } from "@/lib/car";

export const metadata: Metadata = {
  title: "Next steps",
  description:
    "Prioritized work on NA #17: engine mounts, clutch shudder, exhaust, then timing. Auto Sauce Performance for exhaust and tune.",
};

export default function NextPage() {
  const { issues, inProcess, shops } = car;
  const shop = shops.autoSauce;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      <PageIntro kicker="Queue" title="Next steps">
        <p>
          This order is the point. Mounts first — they feed the shudder. Clutch
          disc after the engine stops rocking. Exhaust so the car can live on
          the street. Timing last, coordinated with the same shop doing the
          muffler so nobody double-advances the CAS.
        </p>
      </PageIntro>

      <ol className="mt-12 space-y-8">
        {issues.map((issue) => (
          <li
            key={issue.id}
            id={issue.id}
            className="scroll-mt-24 border border-rule bg-shop-2/80"
          >
            <div className="flex items-baseline justify-between gap-3 border-b border-rule px-5 py-3">
              <span className="font-sans text-3xl font-semibold text-red">
                {String(issue.priority).padStart(2, "0")}
              </span>
              <span className="text-[10px] tracking-[0.18em] text-muted uppercase">
                {issue.status}
              </span>
            </div>
            <div className="px-5 py-5">
              <h2 className="font-sans text-3xl font-medium tracking-tight uppercase">
                {issue.title}
              </h2>
              <p className="mt-3 text-[14px] text-cream">{issue.summary}</p>
              <dl className="mt-5 grid gap-4">
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-red uppercase">
                    Why
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed">{issue.why}</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-red uppercase">
                    Plan
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed">{issue.plan}</dd>
                </div>
                {issue.related?.length ? (
                  <div>
                    <dt className="text-[10px] tracking-[0.18em] text-muted uppercase">
                      Parts / shop
                    </dt>
                    <dd className="mt-1 text-[13px] text-cream">
                      {issue.related.join(" · ")}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </li>
        ))}
      </ol>

      <section
        id={inProcess.id}
        className="mt-8 scroll-mt-24 border border-dashed border-rule px-5 py-5"
      >
        <p className="text-[10px] tracking-[0.18em] text-red uppercase">
          Also in process
        </p>
        <h2 className="mt-2 font-sans text-2xl uppercase">{inProcess.title}</h2>
        <p className="mt-2 text-[13px] text-cream">{inProcess.summary}</p>
      </section>

      <section className="mt-8 border border-rule bg-shop-2/80 px-5 py-5">
        <p className="text-[10px] tracking-[0.18em] text-red uppercase">
          Shop — exhaust / timing
        </p>
        <h2 className="mt-2 font-sans text-2xl uppercase">{shop.name}</h2>
        <p className="mt-2 text-[13px] text-cream">{shop.address}</p>
        <p className="text-[13px] text-cream">{shop.phone}</p>
        <ul className="mt-3 list-disc pl-5 text-[13px]">
          {shop.jobs.map((job) => (
            <li key={job}>{job}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
