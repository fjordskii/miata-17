import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24">
      <p className="stamp">404</p>
      <h1 className="mt-4 font-sans text-5xl uppercase">Not in the binder</h1>
      <p className="mt-4 text-cream">
        That page isn’t part of the log. Back to the car.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-red px-4 py-2 font-sans tracking-[0.16em] text-paper uppercase no-underline"
      >
        Log
      </Link>
    </div>
  );
}
