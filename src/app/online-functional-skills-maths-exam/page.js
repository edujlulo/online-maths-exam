import Link from "next/link";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import {
  Award,
  ShieldCheck,
  MonitorCheck,
  BadgePoundSterling,
  Clock,
  FileCheck,
  BookOpenCheck,
  IdCard,
  Laptop,
  Wifi,
  DoorClosed,
  MailCheck,
} from "lucide-react";

export const metadata = {
  title: "Online Functional Skills Maths Exam | Level 1 & Level 2",
  description:
    "Learn how the online Functional Skills Maths Level 2 exam works, including GCSE equivalence, exam structure, booking route, results, preparation and online course options.",
};

const examFacts = [
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
    label: "Cost",
    value: "£180",
    detail: "Per exam attempt",
    icon: BadgePoundSterling,
  },
  {
    label: "Duration",
    value: "1h 45m",
    detail: "Level 2 online exam time",
    icon: Clock,
  },
  {
    label: "Results",
    value: "Usually within a week",
    detail: "May take up to 20 working days",
    icon: FileCheck,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Choose the official booking route",
    description:
      "Choose the online Functional Skills Maths exam route and complete the booking process using the current official guidance.",
  },
  {
    step: "02",
    title: "Wait for confirmation",
    description:
      "After booking, your request is processed. Candidates then receive further instructions for the online exam route.",
  },
  {
    step: "03",
    title: "Check your setup",
    description:
      "Read the Candidate Guide, check your computer, internet connection, valid ID and room setup before exam day.",
  },
  {
    step: "04",
    title: "Sit the exam online",
    description:
      "Complete the computer-based exam from your own location with remote invigilation.",
  },
  {
    step: "05",
    title: "Receive your result",
    description:
      "Results normally come within a week, but may take up to 20 working days depending on marking and processing.",
  },
];

const examDayChecklist = [
  {
    text: "Read the Candidate Guide carefully",
    icon: BookOpenCheck,
  },
  {
    text: "Prepare a valid photo ID",
    icon: IdCard,
  },
  {
    text: "Check your computer or laptop",
    icon: Laptop,
  },
  {
    text: "Test your internet connection",
    icon: Wifi,
  },
  {
    text: "Use a quiet and suitable exam room",
    icon: DoorClosed,
  },
  {
    text: "Follow the City & Guilds / Talview email instructions",
    icon: MailCheck,
  },
];

const levelOptions = [
  {
    title: "Functional Skills Maths Level 1",
    badge: "Build confidence",
    description:
      "Level 1 is useful for learners who want to strengthen practical maths skills before moving towards Level 2.",
    link: "/functional-skills-maths-level-1",
    label: "Learn about Level 1",
  },
  {
    title: "Functional Skills Maths Level 2",
    badge: "GCSE equivalent route",
    description:
      "Level 2 is the common route for learners who need a GCSE Grade 4/C equivalent maths qualification for work, university or apprenticeships.",
    link: "/functional-skills-maths-level-2",
    label: "Learn about Level 2",
  },
];

const faqs = [
  {
    question: "What is an online Functional Skills Maths exam?",
    answer:
      "An online Functional Skills Maths exam is a computer-based maths exam that can be taken remotely from your own location. The exam is invigilated online and follows the same qualification standards as a centre-based Functional Skills Maths exam.",
  },
  {
    question: "Can I take the Functional Skills Maths exam online from home?",
    answer:
      "Yes. The online Functional Skills Maths exam can be taken from home or another suitable private location if your computer, internet connection, photo ID and exam room meet the online exam requirements. Candidates should read the Candidate Guide before booking and before exam day.",
  },
  {
    question:
      "Is the online Functional Skills Maths Level 2 exam equivalent to GCSE?",
    answer:
      "Functional Skills Maths Level 2 is widely used as a GCSE Maths equivalent route. It is commonly accepted as equivalent to GCSE Maths Grade 4/C by many employers, colleges, universities and apprenticeship providers.",
  },
  {
    question: "Who is the online Functional Skills Maths exam suitable for?",
    answer:
      "The online Functional Skills Maths exam is suitable for adults, apprentices, university applicants, home-educated learners and people who need a recognised maths qualification for work, study or career progression.",
  },
  {
    question: "How long is the online Functional Skills Maths Level 2 exam?",
    answer:
      "The Functional Skills Maths Level 2 online exam lasts 1 hour 45 minutes. It has a non-calculator section and a calculator section.",
  },
  {
    question: "What is the structure of the Level 2 maths exam?",
    answer:
      "The exam has two sections. The non-calculator section is 25 minutes and counts for 25% of the marks. The calculator section is 1 hour 20 minutes and counts for 75% of the marks.",
  },
  {
    question: "How much does the online Functional Skills Maths exam cost?",
    answer:
      "The online Functional Skills Maths Level 1 or Level 2 exam is currently listed at £180 per attempt. Candidates should always check the current price on the official booking page before booking.",
  },
  {
    question: "When are online exam slots available?",
    answer:
      "Online exam slots are currently listed Monday to Friday at 8:00am, 11:30am and 4:00pm. City & Guilds may book the exam with some timing flexibility, so candidates should follow the time given in the Talview email.",
  },
  {
    question: "When will I receive my results?",
    answer:
      "Results normally come within a week, but they may take up to 20 working days. In exceptional circumstances, marking can take longer.",
  },
  {
    question: "Can I prepare before booking the exam?",
    answer:
      "Yes. Learners who are not ready can prepare with an online Functional Skills Maths course first. The online course is designed for Functional Skills Maths Level 1 and Level 2 preparation.",
  },
  {
    question: "Can I book Level 1 instead of Level 2?",
    answer:
      "Current booking guidance says learners who want City & Guilds Functional Skills Maths Level 1 should book through the Level 2 route and reply to the booking email clearly stating that they want the Level 1 exam.",
  },
  {
    question: "Do I need to read the Candidate Guide?",
    answer:
      "Yes. For the online exam, candidates should read the Candidate Guide carefully before booking and before exam day so they understand the online exam rules, system requirements and room requirements.",
  },
  {
    question: "Can I get extra time or access arrangements?",
    answer:
      "If you have a learning difficulty, disability or need special access arrangements, you should contact the official exam provider before booking and provide the required evidence for your request.",
  },
];

export default function OnlineFunctionalSkillsMathsExamPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
            Online Exam
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Online Functional Skills Maths Exam
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            The online Functional Skills Maths exam is designed for learners who
            need a recognised GCSE equivalent maths qualification for work,
            university, apprenticeships or further study. The Level 2 online
            exam can be taken remotely, with online invigilation and clear
            official booking guidance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Online computer-based exam
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              Level 1 and Level 2
            </span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
              GCSE equivalent route
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-emerald-100 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {examFacts.map((fact) => (
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

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              How the online exam works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Take your Functional Skills Maths exam from your own location
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              The online Functional Skills Maths exam allows learners to sit the
              exam remotely instead of travelling to a centre. Candidates must
              make sure their computer, internet connection, ID and exam room
              are ready before the exam. The exam is monitored online and
              candidates should follow the Candidate Guide carefully to avoid
              problems on exam day.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:ring-emerald-200"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-sm font-bold text-white">
                    {item.step}
                  </div>

                  <h3 className="font-bold text-slate-950">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Before exam day
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950">
                Check your setup before the online exam
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Online exams are flexible, but candidates still need to prepare
                carefully. A problem with your device, internet connection, ID
                or room setup may affect your ability to sit the exam.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {examDayChecklist.map((item) => (
                  <div
                    key={item.text}
                    className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-emerald-100"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </span>

                    <p className="text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Exam structure
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Level 2 has two sections
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                    25%
                  </div>

                  <h3 className="font-bold text-slate-950">
                    Non-calculator section
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    25 minutes and 25% of the total marks.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700 text-sm font-bold text-white">
                    75%
                  </div>

                  <h3 className="font-bold text-slate-950">
                    Calculator section
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    1 hour 20 minutes and 75% of the total marks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Choose your level
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Level 1 or Level 2?
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Online Functional Skills Maths exam routes are available for Level
                1 and Level 2. The right level depends on your
                current ability and what you need the qualification for.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {levelOptions.map((level) => (
                <div
                  key={level.title}
                  className={`rounded-[2rem] border p-8 shadow-sm ${
                    level.title.includes("Level 2")
                      ? "border-emerald-100 bg-emerald-50/60"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                    {level.badge}
                  </p>

                  <h3 className="mt-5 text-2xl font-bold text-slate-950">
                    {level.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {level.description}
                  </p>

                  <Link
                    href={level.link}
                    className="mt-6 inline-flex text-sm font-semibold text-emerald-800 transition hover:text-emerald-900"
                  >
                    {level.label} →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Ready for the exam?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Book the online Functional Skills Maths exam
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Choose this route if you already feel confident with Functional
                Skills Maths topics and want to take the official online exam.
                Passing the exam is what gives you the qualification.
              </p>

              <a
                href="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-700/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                View official exam route
              </a>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/60 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Need preparation first?
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                Prepare with the online maths course
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Choose this route if you want to revise first. The online course
                helps learners prepare for Functional Skills Maths topics, but
                the qualification is only awarded after passing the official
                exam.
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

      <FAQSection title="Online Maths Exam FAQs" faqs={faqs} />

      <CTASection
        title="Ready to book your online Functional Skills Maths exam?"
        description="Check the latest online exam price, available slots, Candidate Guide and official booking instructions before choosing your exam date."
        link="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
        label="View Official Booking Route"
      />
    </>
  );
}
