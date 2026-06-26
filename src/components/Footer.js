import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-900 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center">
            <div className="rounded-2xl bg-white px-3 py-2 shadow-lg shadow-emerald-950/30">
              <Image
                src="/images/online-maths-exam-logo.webp"
                alt="Online Maths Exam"
                width={260}
                height={87}
                className="h-18 w-auto"
              />
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
                href="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-emerald-300"
              >
                Intech Centre Online Maths Exam
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
            Contact
          </h3>

          <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
            <p className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s6.75-5.686 6.75-12A6.75 6.75 0 0 0 5.25 9c0 6.314 6.75 12 6.75 12Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                />
              </svg>

              <span>90 Colmer Road, London, SW16 5LA</span>
            </p>

            <p className="flex items-center gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-emerald-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.143-7.143 1.125 1.125 0 0 1 .38-1.21l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <a
                href="tel:07700900123"
                className="transition hover:text-emerald-300"
              >
                07700 900123
              </a>
            </p>

            <p className="flex items-center gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-emerald-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75"
                />
              </svg>

              <a
                href="mailto:info@onlinemathsexam.co.uk"
                className="break-all transition hover:text-emerald-300"
              >
                info@onlinemathsexam.co.uk
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-5 md:col-span-2 lg:col-span-4">
          <p className="text-sm font-semibold text-emerald-200">
            Need Functional Skills Maths?
          </p>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
            Compare Level 1, Level 2 and online preparation before choosing your
            exam route.
          </p>
        </div>
      </div>

      <div className="border-t border-emerald-900/60 px-6 py-5 text-center text-xs text-slate-400">
        © 2026 Online Maths Exam. Information website for Functional Skills
        Maths learners.
      </div>
    </footer>
  );
}
