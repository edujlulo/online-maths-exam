import Link from "next/link";
import Image from "next/image";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-slate-100 py-20">
      <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-120px] h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          {eyebrow && (
            <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
              {eyebrow}
            </p>
          )}

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primaryLink && (
              <Link
                href={primaryLink}
                className="rounded-full bg-emerald-700 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                {primaryLabel}
              </Link>
            )}

            {secondaryLink && (
              <Link
                href={secondaryLink}
                className="rounded-full border border-emerald-200 bg-white px-7 py-3.5 text-center text-sm font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-50"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Online exam information
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Level 1 and Level 2
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              GCSE equivalent route
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-emerald-100 bg-white/85 p-4 shadow-2xl shadow-slate-200 backdrop-blur lg:max-w-none">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/hero-online-maths-exam.webp"
              alt="Adult learner taking an online Functional Skills Maths exam at home"
              width={900}
              height={675}
              priority
              className="aspect-[4/3] w-full object-cover object-center"
            />

            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur">
              Online maths exam
            </div>
          </div>

          <div className="mt-4 rounded-[1.5rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 p-6 text-white">
            <p className="text-sm font-medium text-emerald-300">
              Functional Skills Maths
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Level 1 and Level 2 Online Exam Information
            </h2>

            <p className="mt-4 text-sm leading-6 text-emerald-50/90">
              Understand the exam, compare levels, prepare online and follow the
              right booking route.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-white">Level 2</p>
                <p className="mt-1 text-sm leading-6 text-emerald-50/80">
                  GCSE equivalent route for many learners.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-white">Online exam</p>
                <p className="mt-1 text-sm leading-6 text-emerald-50/80">
                  Computer-based exam with remote invigilation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
              <p className="text-sm font-semibold text-emerald-800">1h 45m</p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Level 2 exam duration
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">
                City & Guilds
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Functional Skills route
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">
                Course option
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                Prepare online first
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
