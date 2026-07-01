"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Online Maths Exam",
    href: "/online-functional-skills-maths-exam",
    children: [
      {
        name: "Functional Skills Maths Level 2",
        href: "/functional-skills-maths-level-2",
      },
      {
        name: "Functional Skills Maths Level 1",
        href: "/functional-skills-maths-level-1",
      },
    ],
  },
  { name: "Online Maths Course", href: "/online-maths-course" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const handleNavClick = (href) => {
    if (pathname === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:py-1">
        <Link
          href="/"
          onClick={() => handleNavClick("/")}
          className="group flex items-center"
        >
          <Image
            src="/images/online-maths-exam-logo.webp"
            alt="Online Maths Exam"
            width={260}
            height={87}
            priority
            className="h-14 w-auto transition group-hover:-translate-y-0.5 sm:h-16 md:h-20 lg:h-24"
          />
        </Link>

        <nav className="hidden items-center gap-5.5 text-sm font-medium text-slate-700 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="relative inline-flex items-center gap-1 transition hover:text-emerald-700 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-emerald-700 after:transition-all hover:after:w-full"
                >
                  {item.name}
                  <span className="text-xs transition group-hover:rotate-180">
                    ▾
                  </span>
                </Link>

                <div className="invisible absolute left-0 top-full z-50 mt-4 w-72 translate-y-2 rounded-3xl border border-emerald-100 bg-white p-2 opacity-0 shadow-xl shadow-slate-900/10 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => handleNavClick(child.href)}
                      className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative transition hover:text-emerald-700 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-emerald-700 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <a
          href="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800 lg:inline-flex"
        >
          Book an Online Exam
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center rounded-full border border-emerald-100 bg-white p-2.5 text-slate-800 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-emerald-100 bg-white px-4 shadow-lg transition-all duration-500 ease-out lg:hidden ${
          isMenuOpen ? "max-h-[520px] py-4" : "max-h-0 py-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 text-sm font-medium text-slate-700">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="rounded-2xl">
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block rounded-2xl px-4 py-3 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.name}
                </Link>

                <div className="ml-4 border-l border-emerald-100 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => handleNavClick(child.href)}
                      className="block rounded-2xl px-4 py-2.5 text-sm text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="rounded-2xl px-4 py-3 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                {item.name}
              </Link>
            )
          )}

          <a
            href="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-full bg-emerald-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:bg-emerald-800"
          >
            Book an Online Exam
          </a>
        </nav>
      </div>
    </header>
  );
}
