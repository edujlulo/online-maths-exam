export const blogPosts = [
  {
    slug: "what-is-functional-skills-maths",
    title: "What Is Functional Skills Maths?",
    date: "2026-06-25",
    description:
      "A simple guide explaining what Functional Skills Maths is, who it is for and why learners use it for work, study and career progression.",
    excerpt:
      "A simple guide to Functional Skills Maths, who it is for and why learners use it for work, study and career progression.",
    sections: [
      {
        heading: "What is Functional Skills Maths?",
        content:
          "Functional Skills Maths is a practical maths qualification designed to help learners use maths in real-life situations. It focuses on useful numeracy skills for work, study and everyday life.",
      },
      {
        heading: "Who is it for?",
        content:
          "It is often chosen by adults, apprentices, students and people who need a recognised maths qualification for employment, further education or training.",
      },
      {
        heading: "Why do learners choose Functional Skills Maths?",
        content:
          "Many learners choose Functional Skills Maths because it is practical, focused and linked to real-world maths. Level 2 is commonly used as a GCSE equivalent route.",
      },
    ],
    faqs: [
      {
        question: "Is Functional Skills Maths for adults?",
        answer:
          "Yes. Functional Skills Maths is commonly taken by adult learners, but it can also be suitable for younger learners depending on their needs.",
      },
      {
        question: "Is Functional Skills Maths practical?",
        answer:
          "Yes. The qualification focuses on practical maths skills that can be used in work, study and everyday life.",
      },
    ],
  },
  {
    slug: "functional-skills-maths-level-2-vs-gcse",
    title: "Functional Skills Maths Level 2 vs GCSE Maths",
    date: "2026-06-25",
    description:
      "Understand how Functional Skills Maths Level 2 compares with GCSE Maths and why many learners choose this route.",
    excerpt:
      "Understand how Functional Skills Maths Level 2 compares with GCSE Maths and why many learners choose this route.",
    sections: [
      {
        heading: "Is Functional Skills Maths Level 2 equivalent to GCSE?",
        content:
          "Functional Skills Maths Level 2 is commonly accepted as a GCSE equivalent qualification by many employers, colleges and training providers. It is often used by learners who need maths for work, apprenticeships, university access or professional training.",
      },
      {
        heading: "How is it different from GCSE Maths?",
        content:
          "GCSE Maths is usually broader and more academic. Functional Skills Maths is more practical and focuses on applying maths to real-life problems.",
      },
      {
        heading: "Who should consider Level 2?",
        content:
          "Level 2 may be suitable for learners who need a maths qualification but prefer a practical route focused on everyday maths, problem solving and workplace skills.",
      },
    ],
    faqs: [
      {
        question: "Can Functional Skills Maths Level 2 replace GCSE Maths?",
        answer:
          "For many jobs, courses and training routes, Functional Skills Maths Level 2 is accepted as a GCSE equivalent. Learners should always check the specific requirements of the employer, college or university.",
      },
      {
        question: "Is Level 2 harder than Level 1?",
        answer:
          "Yes. Level 2 is higher than Level 1 and is usually the level learners need when a GCSE equivalent maths qualification is required.",
      },
    ],
  },
  {
    slug: "how-to-prepare-for-online-maths-exam",
    title: "How to Prepare for an Online Functional Skills Maths Exam",
    date: "2026-06-25",
    description:
      "Practical preparation tips for learners planning to take an online Functional Skills Maths exam.",
    excerpt:
      "Practical preparation tips for learners planning to take an online Functional Skills Maths exam.",
    sections: [
      {
        heading: "Understand your exam level",
        content:
          "Before you prepare, make sure you know whether you need Level 1 or Level 2. Level 2 is the common GCSE equivalent route, while Level 1 can help learners build confidence before progressing.",
      },
      {
        heading: "Revise key maths topics",
        content:
          "Learners should revise number, measures, shape, space, data handling and problem solving. These areas are important for practical maths tasks.",
      },
      {
        heading: "Use an online maths course",
        content:
          "An online maths course can help learners prepare in a structured way, practise exam-style questions and build confidence before booking the exam.",
      },
    ],
    faqs: [
      {
        question: "Should I take a course before the exam?",
        answer:
          "If you already feel confident, you may be ready to book the exam. If not, an online maths course can help you prepare before taking the test.",
      },
      {
        question: "Can I prepare from home?",
        answer:
          "Yes. Many learners prepare online from home using course materials, practice questions and revision resources.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
