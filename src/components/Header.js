import Link from "next/link";
import Image from "next/image";

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
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1">
        <Link href="/" className="group flex items-center">
          <Image
            src="/images/online-maths-exam-logo.png"
            alt="Online Maths Exam"
            width={260}
            height={87}
            priority
            className="h-24 w-auto transition group-hover:-translate-y-0.5"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative transition hover:text-emerald-700 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-emerald-700 after:transition-all hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/online-functional-skills-maths-exam"
          className="hidden rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 md:inline-flex"
        >
          View Exam
        </Link>
      </div>
    </header>
  );
}
