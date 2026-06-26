import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

export const metadata = {
  title: "Online Functional Skills Maths Exam | Level 1 & Level 2",
  description:
    "Learn how the online Functional Skills Maths Level 2 exam works, including GCSE equivalence, exam structure, booking route, results, preparation and online course options.",
};

const faqs = [
  {
    question: "What is an online Functional Skills Maths exam?",
    answer:
      "An online Functional Skills Maths exam is a computer-based maths exam that can be taken remotely from your own location. The exam is invigilated online and follows the same qualification standards as a centre-based Functional Skills Maths exam.",
  },
  {
    question:
      "Is the online Functional Skills Maths Level 2 exam equivalent to GCSE?",
    answer:
      "Functional Skills Maths Level 2 is widely used as a GCSE Maths equivalent route. It is commonly accepted as equivalent to GCSE Maths Grade 4/C by many employers, colleges, universities and apprenticeship providers.",
  },
  {
    question: "Who is the online maths exam suitable for?",
    answer:
      "The online maths exam is suitable for adults, apprentices, university applicants, home-educated learners and people who need a recognised maths qualification for work, study or career progression.",
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
      "Intech Centre lists the online Functional Skills Maths Level 1 or Level 2 exam at £180 per attempt. Candidates should always check the current price on the Intech Centre booking page before booking.",
  },
  {
    question: "When are online exam slots available?",
    answer:
      "Intech Centre lists online exam slots Monday to Friday at 8:00am, 11:30am and 4:00pm. City & Guilds may book the exam with some timing flexibility, so candidates should follow the time given in the Talview email.",
  },
  {
    question: "When will I receive my results?",
    answer:
      "Results normally come within a week, but they may take up to 20 working days. In exceptional circumstances, marking can take longer.",
  },
  {
    question: "Can I prepare before booking the exam?",
    answer:
      "Yes. Learners who are not ready can prepare with an online Functional Skills Maths course first. Intech Centre offers an online course designed for Functional Skills Maths Level 1 and Level 2 preparation.",
  },
  {
    question: "Can I book Level 1 instead of Level 2?",
    answer:
      "Intech Centre says learners who want City & Guilds Functional Skills Maths Level 1 should book through the Level 2 route and reply to the booking email clearly stating that they want the Level 1 exam.",
  },
  {
    question: "Do I need to read the Candidate Guide?",
    answer:
      "Yes. For the online exam, candidates should read the Candidate Guide carefully before booking and before exam day so they understand the online exam rules, system requirements and room requirements.",
  },
  {
    question: "Can I get extra time or access arrangements?",
    answer:
      "If you have a learning difficulty, disability or need special access arrangements, you should contact Intech Centre before booking and provide the required evidence for your request.",
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
            booking guidance from Intech Centre.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Qualification
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-950">
                GCSE equivalent route
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Functional Skills Maths Level 2 is widely used as a GCSE Maths
                Grade 4/C equivalent for work, further education and
                apprenticeships.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Exam format
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-950">
                Online computer-based exam
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                The online Level 2 exam is computer-based, remotely invigilated
                and awarded by City & Guilds.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Duration
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-950">
                1 hour 45 minutes
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                The exam includes a 25-minute non-calculator section and a 1
                hour 20 minute calculator section.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Results
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-950">
                Usually within a week
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Results normally come within a week, but may take up to 20
                working days depending on marking and processing.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              How the online exam works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Take your Functional Skills Maths exam from your own location
            </h2>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              The online Functional Skills Maths Level 2 exam allows learners to
              sit the exam remotely instead of travelling to a centre.
              Candidates must make sure their computer, internet connection, ID
              and exam room are ready before the exam. The exam is monitored
              online and candidates should follow the Candidate Guide carefully
              to avoid problems on exam day.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-950">1. Book online</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Choose the online Functional Skills Maths exam route and
                  complete the booking process through Intech Centre.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-950">
                  2. Check your setup
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Read the Candidate Guide, check your system requirements and
                  prepare your room, ID, computer and internet connection.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-950">3. Sit the exam</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Complete the online exam under remote invigilation and wait
                  for your result by email after marking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Ready to book your online Functional Skills Maths exam?"
        description="Visit Intech Centre to check the latest online exam price, available slots, Candidate Guide and booking instructions."
        link="https://www.intechcentre.com/courses/online-functional-skills-maths-level-2-exam-2/"
        label="Book Online Maths Exam"
      />
    </>
  );
}
