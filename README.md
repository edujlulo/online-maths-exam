# Online Maths Exam

Online Maths Exam is a SEO-focused website for `onlinemathsexam.co.uk`, designed to provide clear information about online Functional Skills Maths exams, Level 1, Level 2, GCSE equivalent maths qualifications and online maths course preparation.

The project was created as a first version of an independent information website that helps learners understand the online maths exam route and then refers interested users to Intech Centre’s official Functional Skills Maths exam and course pages.

## Project Goal

The main goal of this website is to improve visibility on Google and AI-style search results for people searching for online Functional Skills Maths exams.

The website focuses on common learner questions such as:

- What is Functional Skills Maths?
- Can I take Functional Skills Maths online?
- Is Functional Skills Maths Level 2 equivalent to GCSE Maths?
- What is the difference between Level 1 and Level 2?
- How does the online Functional Skills Maths exam work?
- Do I need an online maths course before taking the exam?
- Where can I book an online Functional Skills Maths exam?

The content is based around Intech Centre’s Functional Skills Maths exam and online maths course information, while the website itself is presented as a separate brand: **Online Maths Exam**.

## Live Website

Planned domain:

```txt
https://onlinemathsexam.co.uk
```

## Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- Static blog data
- SEO metadata
- Sitemap and robots generation
- Responsive layout
- Optimised WebP images

## Main Pages

The website includes the following main pages:

```txt
/
```

Homepage introducing the online Functional Skills Maths exam route, Level 1, Level 2, online course preparation and GCSE equivalent maths qualification.

```txt
/online-functional-skills-maths-exam
```

Main exam page explaining how the online Functional Skills Maths exam works, including online invigilation, exam structure, booking route, results, preparation and FAQs.

```txt
/functional-skills-maths-level-2
```

Level 2 page focused on the GCSE equivalent route, who needs Level 2, exam duration, pass mark, results, preparation and booking information.

```txt
/functional-skills-maths-level-1
```

Level 1 page explaining how Level 1 helps learners build confidence before progressing to Level 2.

```txt
/online-maths-course
```

Online maths course page explaining course preparation, Entry Level to Level 2 content, diagnostic assessment, skill checks, revision scenarios and the difference between course preparation and the official exam.

```txt
/blog
```

Blog page designed to support weekly SEO content around Functional Skills Maths, online exams, GCSE equivalence, adult learners and exam preparation.

## SEO Strategy

This project was built with SEO as a core priority.

The SEO approach includes:

- Clear page titles and meta descriptions
- One main H1 per page
- Structured H2 and H3 sections
- Keyword-focused page content
- Comprehensive FAQ sections
- Internal links between related pages
- External links to relevant Intech Centre exam and course pages
- Sitemap generation
- Robots configuration
- Open Graph metadata
- Image optimisation using WebP
- Mobile-friendly responsive layout

Target search topics include:

- online Functional Skills Maths exam
- Functional Skills Maths Level 2 online
- Functional Skills Maths Level 1 online
- GCSE equivalent maths qualification
- online maths course
- Functional Skills Maths exam preparation
- adult maths exam online
- Level 1 vs Level 2 Functional Skills Maths

## AI Search Optimisation

The website is also designed with AI-style search in mind.

Many users now search using full questions rather than short keywords. Because of this, each main page includes FAQ content that directly answers common learner questions.

Example AI-style search queries this website is designed to answer:

```txt
I need a GCSE equivalent maths qualification. Can I take Functional Skills Maths Level 2 online?
```

```txt
What is the difference between Functional Skills Maths Level 1 and Level 2?
```

```txt
Can adults take a Functional Skills Maths exam online?
```

```txt
Do I need a maths course before taking the Functional Skills Maths exam?
```

The content is written in a clear, direct and helpful style so that both users and search engines can understand the topic quickly.

## Intech Centre Referral Links

The website includes links to Intech Centre’s official pages for:

- Online Functional Skills Maths exam
- Online Functional Skills Maths course

These links are placed naturally across relevant pages, especially where users are ready to check booking information, exam details, prices or course enrolment guidance.

The purpose is to use the Online Maths Exam website as an SEO-friendly information website that supports traffic and referrals to Intech Centre.

## Blog System

The project currently uses static blog data.

This means blog posts can be added by updating the blog data file in the project. This keeps the first version simple, fast and SEO-friendly.

In a future version, this could be upgraded to a basic CMS or admin system, such as:

- Sanity
- WordPress headless CMS
- Supabase
- Contentful
- A custom admin panel

This would allow an admin to add weekly blog posts more easily without editing the code directly.

## Example Blog Topics

Recommended future blog topics include:

- What Is Functional Skills Maths?
- Is Functional Skills Maths Level 2 Equivalent to GCSE?
- Functional Skills Maths Level 1 vs Level 2
- How to Prepare for a Functional Skills Maths Exam Online
- Who Needs Functional Skills Maths Level 2?
- Can Adults Take Functional Skills Maths Online?
- Functional Skills Maths for University Entry
- Functional Skills Maths for Apprenticeships
- Online Maths Course vs Online Maths Exam
- How Long Does It Take to Pass Functional Skills Maths Level 2?

## Design Approach

The design uses a clean, modern and professional layout suitable for an education and exam-focused website.

The visual style includes:

- Emerald green brand colour
- Clean white and slate backgrounds
- Rounded cards
- Clear call-to-action buttons
- Responsive mobile navigation
- Simple icon-style highlights
- Optimised images
- FAQ sections for trust and search visibility

The website is designed to feel clear, trustworthy and easy to navigate for learners who may be unsure about which maths exam route they need.

## Project Structure

A simplified structure of the project:

```txt
src/
  app/
    page.js
    layout.js
    globals.css
    robots.js
    sitemap.js

    online-functional-skills-maths-exam/
      page.js

    functional-skills-maths-level-2/
      page.js

    functional-skills-maths-level-1/
      page.js

    online-maths-course/
      page.js

    blog/
      page.js
      [slug]/
        page.js

  components/
    Header.js
    Footer.js
    Hero.js
    CTASection.js
    FAQSection.js
    Container.js

  data/
    blogPosts.js

public/
  images/
```

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the project in the browser:

```txt
http://localhost:3000
```

## Build for Production

Create a production build:

```bash
npm run build
```

Run the production version locally:

```bash
npm run start
```

## SEO Files

The project includes:

```txt
/sitemap.xml
```

Generated from the main pages and blog posts.

```txt
/robots.txt
```

Allows search engines to crawl the website and references the sitemap.

These files are important for helping search engines discover and index the website.

## Future Improvements

Possible future improvements include:

- Connect the blog to a CMS
- Add structured data for articles, breadcrumbs and organisation information
- Add more blog posts targeting long-tail SEO keywords
- Add Google Search Console after deployment
- Add Google Analytics or another analytics tool
- Add more original images for each main page
- Improve Core Web Vitals after testing the deployed site
- Add a contact form if needed
- Add a more advanced admin workflow for weekly content publishing

## Notes

This is a first version of the project. The focus is on creating a clear, SEO-friendly and responsive website that explains online Functional Skills Maths exams and refers users to Intech Centre’s relevant exam and course pages.

The website is not intended to replace Intech Centre’s official pages. Instead, it acts as a separate information website designed to support search visibility, learner education and referral traffic.
