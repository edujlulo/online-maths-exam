import Link from "next/link";

export default function Hero({
  eyebrow,
  title,
  description,
  primaryLink,
  primaryLabel,
  secondaryLink,
  secondaryLabel,
}) {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
              {eyebrow}
            </p>
          )}

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primaryLink && (
              <Link
                href={primaryLink}
                className="rounded-full bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                {primaryLabel}
              </Link>
            )}

            {secondaryLink && (
              <Link
                href={secondaryLink}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-blue-700 hover:text-blue-700"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <p className="text-sm text-blue-200">Functional Skills Maths</p>
            <h2 className="mt-3 text-2xl font-bold">
              Level 1 and Level 2 Online Exam Information
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Understand the exam, compare levels, prepare online and follow the
              right booking route.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">Level 2</p>
              <p className="mt-2 text-sm text-slate-600">
                GCSE equivalent route for many learners.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm font-semibold text-slate-900">Level 1</p>
              <p className="mt-2 text-sm text-slate-600">
                Build confidence before progressing further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
