import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Online Maths Exam", href: "/online-functional-skills-maths-exam" },
  { name: "Level 2", href: "/functional-skills-maths-level-2" },
  { name: "Level 1", href: "/functional-skills-maths-level-1" },
  { name: "Online Maths Course", href: "/online-maths-course" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-lg font-bold text-white">
            OM
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-slate-950">
              Online Maths Exam
            </p>
            <p className="text-xs text-slate-500">Functional Skills Maths</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/online-functional-skills-maths-exam"
          className="hidden rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 md:inline-flex"
        >
          View Exam
        </Link>
      </div>
    </header>
  );
}
