import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-800 text-lg font-bold text-white shadow-lg shadow-emerald-900/30">
              OM
            </div>

            <div>
              <h2 className="text-lg font-bold">Online Maths Exam</h2>
              <p className="text-xs font-medium text-emerald-300">
                Functional Skills Maths
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            An independent information website about online Functional Skills
            Maths exams, levels, preparation and booking routes.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Website
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>
              <Link
                href="/online-functional-skills-maths-exam"
                className="transition hover:text-emerald-300"
              >
                Online Maths Exam
              </Link>
            </li>

            <li>
              <Link
                href="/functional-skills-maths-level-2"
                className="transition hover:text-emerald-300"
              >
                Functional Skills Maths Level 2
              </Link>
            </li>

            <li>
              <Link
                href="/functional-skills-maths-level-1"
                className="transition hover:text-emerald-300"
              >
                Functional Skills Maths Level 1
              </Link>
            </li>

            <li>
              <Link
                href="/online-maths-course"
                className="transition hover:text-emerald-300"
              >
                Online Maths Course
              </Link>
            </li>

            <li>
              <Link href="/blog" className="transition hover:text-emerald-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Useful links
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>
              <a
                href="https://www.intechcentre.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-emerald-300"
              >
                Visit Intech Centre
              </a>
            </li>

            <li>
              <a
                href="https://www.intechcentre.com/courses/functional-skills-maths-level-2-exam/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-emerald-300"
              >
                Intech Centre Maths Exam
              </a>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-4">
            <p className="text-sm font-semibold text-emerald-200">
              Need Functional Skills Maths?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Compare Level 1, Level 2 and online preparation before choosing
              your exam route.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-900/60 px-6 py-5 text-center text-xs text-slate-400">
        © 2026 Online Maths Exam. Information website for Functional Skills
        Maths learners.
      </div>
    </footer>
  );
}
