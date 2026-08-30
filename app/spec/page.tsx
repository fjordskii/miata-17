import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Photo } from "@/components/Photo";
import { SpecTable } from "@/components/SpecTable";
import { car } from "@/lib/car";

export const metadata: Metadata = {
  title: "Current spec",
  description: `What’s on ${car.identity.owner}'s ${car.identity.year} NA #${car.identity.doorNumber} right now — engine, chassis, interior, wheels, cooling.`,
};

export default function SpecPage() {
  const { spec, fordsWork, photos, identity } = car;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <PageIntro kicker="Current state" title="What’s on the car">
        <p>
          {identity.year} {identity.chassis}, door {identity.doorNumber}. Part
          numbers belong here so the next job is not a scavenger hunt through
          old receipts.
        </p>
      </PageIntro>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div className="grid gap-6">
          <SpecTable title="Engine" lines={spec.engine} />
          <SpecTable title="Mounts" lines={spec.mounts} />
          <SpecTable title="Cooling" lines={spec.cooling} />
          <SpecTable title="Chassis" lines={spec.chassis} />
          <SpecTable title="Interior" lines={spec.interior} />
          <SpecTable title="Wheels / brakes" lines={spec.wheels} />
        </div>

        <aside className="space-y-6">
          <Photo photo={photos.bayDetail} sizes="320px" />
          <section className="border border-rule bg-shop-2/80">
            <h2 className="border-b border-rule px-4 py-2 font-sans text-lg tracking-[0.14em] text-red uppercase">
              Ford, since purchase
            </h2>
            <ol className="px-4 py-3">
              {fordsWork.done.map((item) => (
                <li
                  key={item}
                  className="border-b border-rule/70 py-2 text-[13px] last:border-b-0"
                >
                  <span className="mr-2 text-red">▣</span>
                  {item}
                </li>
              ))}
            </ol>
            <div className="border-t border-rule px-4 py-3">
              <p className="text-[10px] tracking-[0.16em] text-muted uppercase">
                In process
              </p>
              <ul className="mt-2 space-y-2 text-[13px] text-cream">
                {fordsWork.inProcess.map((item) => (
                  <li key={item}>
                    <span className="mr-2 text-red">▢</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
