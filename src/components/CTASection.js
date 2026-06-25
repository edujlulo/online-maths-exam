import Link from "next/link";

export default function CTASection({ title, description, link, label }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-blue-700 px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">{description}</p>
          <Link
            href={link}
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
