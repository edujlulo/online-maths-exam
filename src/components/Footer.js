import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold">Online Maths Exam</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            An independent information website about online Functional Skills
            Maths exams, levels, preparation and booking routes.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Website
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/online-functional-skills-maths-exam">
                Online Maths Exam
              </Link>
            </li>
            <li>
              <Link href="/functional-skills-maths-level-2">
                Functional Skills Maths Level 2
              </Link>
            </li>
            <li>
              <Link href="/functional-skills-maths-level-1">
                Functional Skills Maths Level 1
              </Link>
            </li>
            <li>
              <Link href="/online-maths-course">Online Maths Course</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Useful links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <a
                href="https://www.intechcentre.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Intech Centre
              </a>
            </li>
            <li>
              <a
                href="https://www.intechcentre.com/courses/functional-skills-maths-level-2-exam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Intech Centre Maths Exam
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-4 text-center text-xs text-slate-400">
        © 2026 Online Maths Exam. Information website for Functional Skills
        Maths learners.
      </div>
    </footer>
  );
}
