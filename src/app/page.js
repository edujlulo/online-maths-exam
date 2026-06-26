import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import {
  Award,
  ShieldCheck,
  MonitorCheck,
  Clock,
  FileCheck,
  BadgeCheck,
} from "lucide-react";

export const metadata = {
  title: "Online Functional Skills Maths Exams | GCSE Equivalent Maths",
  description:
    "Learn about online Functional Skills Maths Level 1 and Level 2 exams, GCSE equivalent maths qualifications, remote exam booking and online maths course preparation.",
};

const homeFaqs = [
  {
    question: "What is Functional Skills Maths?",
    answer:
      "Functional Skills Maths is a practical maths qualification focused on real-life numeracy skills used in work, study and everyday situations. It covers topics such as number, percentages, ratios, measures, shape, space, data handling and problem solving.",
  },
  {
    question: "Can I take Functional Skills Maths Level 2 online?",
    answer:
      "Yes. Intech Centre offers an online Functional Skills Maths Level 2 exam route where learners can take the exam remotely from their own location, provided their computer, internet connection and room meet the online exam requirements.",
  },
  {
    question: "Is Functional Skills Maths Level 2 equivalent to GCSE Maths?",
    answer:
      "Functional Skills Maths Level 2 is widely used as a GCSE Maths equivalent route. It is commonly accepted by many universities, colleges, employers and apprenticeship providers as equivalent to GCSE Maths Grade 4/C.",
  },
  {
    question: "Who usually needs Functional Skills Maths Level 2?",
    answer:
      "Many learners need Functional Skills Maths Level 2 for university entry, nursing, teaching, social work, apprenticeships, construction, policing, career progression or job applications where a recognised maths qualification is required.",
  },
  {
    question: "What is the difference between Level 1 and Level 2?",
    answer:
      "Level 1 is below Level 2 and can be a useful stepping stone for learners who need to build confidence first. Level 2 is usually the level requested when a GCSE Maths equivalent qualification is needed.",
  },
  {
    question: "Do I need to complete a course before booking the exam?",
    answer:
      "Not always. Some candidates book the exam directly if they already feel prepared. Others prefer to complete an online Functional Skills Maths course first to revise the topics, practise exam-style questions and build confidence.",
  },
  {
    question:
      "How long does the online Functional Skills Maths Level 2 exam take?",
    answer:
      "The online Functional Skills Maths Level 2 exam lasts 1 hour 45 minutes. It includes a non-calculator section and a calculator section.",
  },
  {
    question: "Where can I book the online Functional Skills Maths exam?",
    answer:
      "This website explains the online Functional Skills Maths exam route, Level 1, Level 2 and preparation options. To book the exam, learners should follow the current booking information from Intech Centre’s official online Functional Skills Maths exam page.",
  },
];

const trustFacts = [
  {
    label: "Awarding body",
    value: "City & Guilds",
    detail: "Functional Skills Maths route",
    icon: Award,
  },
  {
    label: "Qualification",
    value: "Ofqual regulated",
    detail: "Recognised UK qualification",
    icon: ShieldCheck,
  },
  {
    label: "Exam style",
    value: "Online exam",
    detail: "Computer-based and remotely invigilated",
    icon: MonitorCheck,
  },
  {
    label: "Duration",
    value: "1 hour 45 minutes",
    detail: "Level 2 online exam time",
    icon: Clock,
  },
  {
    label: "Results",
    value: "Usually within a week",
    detail: "May take up to 20 working days",
    icon: FileCheck,
  },
  {
    label: "GCSE equivalent",
    value: "Level 2 route",
    detail: "Widely used as GCSE Grade 4/C equivalent",
    icon: BadgeCheck,
  },
];

const learnerTypes = [
  "University applicants",
  "Apprenticeships",
  "Nursing & healthcare",
  "Teacher training",
  "Career progression",
  "Adults returning to education",
];

const howItWorks = [
  {
    step: "01",
    title: "Choose your route",
    description:
      "Book the online Functional Skills Maths exam directly, or prepare with the online maths course first if you need more confidence.",
  },
  {
    step: "02",
    title: "Prepare for the online exam",
    description:
      "Check the Candidate Guide, system requirements, ID, room setup and the topics you need to revise before exam day.",
  },
  {
    step: "03",
    title: "Sit your exam online",
    description:
      "Complete the computer-based exam with remote invigilation and wait for your result after marking.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="GCSE equivalent maths qualification"
        title="Online Functional Skills Maths Exams"
        description="Understand Functional Skills Maths Level 1 and Level 2, learn how the online exam works, and choose the right preparation route before booking your City & Guilds maths exam."
        primaryLink="/online-functional-skills-maths-exam"
        primaryLabel="View Online Maths Exam"
        secondaryLink="/online-maths-course"
        secondaryLabel="Prepare with Online Maths Course"
      />

      <section className="border-y border-emerald-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {trustFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm transition hover:border-emerald-200 hover:bg-emerald-50/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                  <fact.icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {fact.label}
                </p>

                <h2 className="mt-2 text-base font-bold text-slate-950">
                  {fact.value}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Choose the right route
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Choose your Functional Skills Maths route
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you need a GCSE equivalent maths qualification or want to
              build confidence before the exam, compare the online exam, Level
              1, Level 2 and course preparation options.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl border border-emerald-100 bg-emerald-50/60 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-bold text-white">
                2
              </div>

              <h2 className="text-xl font-bold text-slate-950">
                Functional Skills Maths Level 2
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                The most common route for learners who need a recognised GCSE
                equivalent maths qualification for university, apprenticeships,
                employment or career progression.
              </p>

              <Link
                href="/functional-skills-maths-level-2"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-900"
              >
                Learn about Level 2 →
              </Link>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white">
                1
              </div>

              <h2 className="text-xl font-bold text-slate-950">
                Functional Skills Maths Level 1
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                A practical starting point for learners who want to strengthen
                their maths skills before progressing to the Level 2 exam.
              </p>

              <Link
                href="/functional-skills-maths-level-1"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-900"
              >
                Learn about Level 1 →
              </Link>
            </div>

            <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-800">
                ✓
              </div>

              <h2 className="text-xl font-bold text-slate-950">
                Online Maths Course
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Study online with Functional Skills Maths preparation covering
                Entry Level, Level 1 and Level 2 topics before sitting your
                exam.
              </p>

              <Link
                href="/online-maths-course"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition group-hover:text-emerald-900"
              >
                View course options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Who it helps
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Who needs Functional Skills Maths Level 2?
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Many learners choose Functional Skills Maths Level 2 because
                they need a recognised GCSE equivalent maths qualification for
                study, work, apprenticeships or career progression.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                It is especially useful for adults and learners who need maths
                for a specific next step, such as university entry, healthcare
                courses, teacher training, employment or a new apprenticeship.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {learnerTypes.map((type) => (
                <div
                  key={type}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold text-emerald-800">
                    ✓
                  </div>

                  <h3 className="font-bold text-slate-950">{type}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Exam or course
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Which route do you need?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Some learners are ready to book the exam now. Others need to
              revise first with an online maths course before sitting the
              official exam.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/70 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Ready for the exam?
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Book the online Functional Skills Maths exam
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Choose this route if you already feel confident with Functional
                Skills Maths topics and want to take the official online exam.
                Passing the exam is what gives you the qualification.
              </p>

              <Link
                href="/online-functional-skills-maths-exam"
                className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                View online exam route
              </Link>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Need preparation first?
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                Start with the online maths course
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Choose this route if you want to build confidence first. The
                online course helps you revise Entry Level, Level 1 and Level 2
                topics, but you still need to pass the official exam to receive
                the qualification.
              </p>

              <Link
                href="/online-maths-course"
                className="mt-6 inline-flex rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-50"
              >
                View online maths course
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/70 p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Official booking route
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                  Ready to check the official online maths exam booking route?
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  This website explains the Functional Skills Maths exam route,
                  Level 1, Level 2 and preparation options. For current exam
                  booking information, prices and availability, visit Intech
                  Centre’s official online Functional Skills Maths exam page.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
                <h3 className="text-xl font-bold text-slate-950">
                  Book through Intech Centre
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Check the latest online Functional Skills Maths exam guidance,
                  including booking details, candidate information and available
                  exam route.
                </p>

                <a
                  href="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
                >
                  View Intech Centre Exam Route
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-300">
              Simple process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              How the online maths exam route works
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              The online route is flexible, but candidates still need to prepare
              properly before exam day by checking the guidance, setup and exam
              requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-sm font-bold text-slate-950">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="Frequently asked questions" faqs={homeFaqs} />

      <CTASection
        title="Need a GCSE equivalent maths qualification?"
        description="Explore the online Functional Skills Maths exam route, compare Level 1 and Level 2, and understand whether you should book the exam directly or prepare with an online course first."
        link="/online-functional-skills-maths-exam"
        label="Explore Online Maths Exam"
      />
    </>
  );
}
