import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { car } from "@/lib/car";
import "./globals.css";

const condensed = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `NA ${car.identity.doorNumber} — ${car.identity.year} ${car.identity.model} build log`,
    template: `%s — NA ${car.identity.doorNumber}`,
  },
  description: `${car.identity.owner}'s ${car.identity.year} ${car.identity.chassis} ${car.identity.model} #${car.identity.doorNumber}. ${car.identity.color}. ${car.identity.mission}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${condensed.variable} ${plex.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-mono antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-rule bg-shop">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-[11px] text-muted md:flex-row md:items-center md:justify-between md:px-6">
            <p>
              {car.identity.owner} · {car.identity.year} {car.identity.chassis} ·
              door {car.identity.doorNumber} · living build log
            </p>
            <p className="tracking-[0.14em] uppercase">
              Public log · no account · no database
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
