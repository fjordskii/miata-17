"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { car, nav } from "@/lib/car";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-shop/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-baseline gap-3 no-underline">
          <span className="font-sans text-3xl font-semibold leading-none tracking-tight text-red">
            {car.identity.doorNumber}
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-sans text-lg font-medium tracking-[0.14em] uppercase text-paper">
              NA Miata
            </span>
            <span className="mt-0.5 text-[10px] tracking-[0.22em] text-muted uppercase">
              {car.identity.owner}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="border border-rule px-3 py-1 text-[11px] tracking-[0.18em] uppercase md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Index"}
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1 font-sans text-sm tracking-[0.16em] uppercase no-underline ${
                  active
                    ? "bg-red text-paper"
                    : "text-cream hover:bg-steel hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open ? (
        <nav className="grid border-t border-rule md:hidden">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-rule px-4 py-3 font-sans tracking-[0.16em] uppercase no-underline ${
                  active ? "bg-red text-paper" : "text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
