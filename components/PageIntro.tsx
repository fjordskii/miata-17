import type { ReactNode } from "react";

type Props = {
  kicker: string;
  title: string;
  children: ReactNode;
};

export function PageIntro({ kicker, title, children }: Props) {
  return (
    <header className="max-w-3xl">
      <p className="stamp">{kicker}</p>
      <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight text-paper uppercase sm:text-5xl">
        {title}
      </h1>
      <div className="red-rule mt-4" />
      <div className="mt-5 max-w-2xl text-[13px] leading-relaxed text-cream/90">
        {children}
      </div>
    </header>
  );
}
