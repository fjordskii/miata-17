import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { car } from "@/lib/car";

export const metadata: Metadata = {
  title: "Next steps",
  description:
    "Date-code work order for NA #17: Comp mounts first, then re-evaluate clutch shudder, quiet the exhaust, finish timing at 10° BTDC.",
};

export default function NextPage() {
  const { workOrder, issues, inProcess, watch, datedQuiet, shops } = car;
  const shop = shops.autoSauce;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      <PageIntro kicker={workOrder.kicker} title={workOrder.title}>
        {workOrder.intro.map((para) => (
          <p key={para} className="mt-3 first:mt-0">
            {para}
          </p>
        ))}
        <p className="mt-3 text-[11px] tracking-[0.14em] text-muted uppercase">
          Ages as of {workOrder.asOfLabel}
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
                {issue.lane} · {issue.status}
              </span>
            </div>
            <div className="px-5 py-5">
              <h2 className="font-sans text-3xl font-medium tracking-tight uppercase">
                {issue.title}
              </h2>
              <dl className="mt-5 grid gap-4">
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-red uppercase">
                    Current symptom
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-cream">
                    {issue.symptom}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-red uppercase">
                    Date code / age
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed">
                    <p className="text-paper">{issue.dateCode}</p>
                    <p className="mt-1 font-sans text-lg tracking-[0.08em] text-red uppercase">
                      {issue.ageLabel}
                    </p>
                    <p className="mt-1 text-[13px] text-cream">{issue.dateNote}</p>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-red uppercase">
                    Why this, now
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
          Also in process · {inProcess.ageLabel}
        </p>
        <h2 className="mt-2 font-sans text-2xl uppercase">{inProcess.title}</h2>
        <p className="mt-2 text-[13px] text-cream">{inProcess.symptom}</p>
        <p className="mt-2 text-[12px] text-muted">
          {inProcess.dateCode}. {inProcess.dateNote}
        </p>
        <p className="mt-3 text-[13px] leading-relaxed">{inProcess.plan}</p>
      </section>

      <section id="watch" className="mt-8 scroll-mt-24">
        <p className="text-[10px] tracking-[0.18em] text-red uppercase">
          Watch — age, no symptom
        </p>
        <h2 className="mt-2 font-sans text-2xl uppercase">Do not pull yet</h2>
        <ul className="mt-4 space-y-4">
          {watch.map((item) => (
            <li
              key={item.id}
              id={item.id}
              className="scroll-mt-24 border border-rule bg-shop-2/80 px-5 py-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-sans text-xl uppercase">{item.title}</h3>
                <span className="text-[11px] tracking-[0.12em] text-red uppercase">
                  {item.ageLabel}
                </span>
              </div>
              <p className="mt-2 text-[12px] text-cream">{item.dateCode}</p>
              <dl className="mt-4 grid gap-3">
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-muted uppercase">
                    Symptom
                  </dt>
                  <dd className="mt-1 text-[13px]">{item.symptom}</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-muted uppercase">
                    Date code
                  </dt>
                  <dd className="mt-1 text-[13px]">{item.dateNote}</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-muted uppercase">
                    Why it stays on watch
                  </dt>
                  <dd className="mt-1 text-[13px]">{item.why}</dd>
                </div>
                <div>
                  <dt className="text-[10px] tracking-[0.18em] text-red uppercase">
                    Plan
                  </dt>
                  <dd className="mt-1 text-[13px]">{item.plan}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
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

      <section className="mt-8 border border-dashed border-rule px-5 py-5">
        <p className="text-[10px] tracking-[0.18em] text-muted uppercase">
          Dated, not queued
        </p>
        <ul className="mt-3 space-y-3">
          {datedQuiet.map((item) => (
            <li key={item.title}>
              <p className="text-[13px] text-paper">{item.title}</p>
              <p className="text-[12px] text-cream">{item.dateCode}</p>
              <p className="text-[12px] text-muted">{item.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
