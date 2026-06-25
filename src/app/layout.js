import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://onlinemathsexam.co.uk"),
  title: {
    default: "Online Maths Exam | Functional Skills Maths Exams",
    template: "%s | Online Maths Exam",
  },
  description:
    "Information about online Functional Skills Maths exams, Level 1, Level 2, GCSE equivalence and online maths course preparation.",
  keywords: [
    "online maths exam",
    "functional skills maths exam",
    "functional skills maths level 2",
    "functional skills maths level 1",
    "GCSE equivalent maths",
    "online functional skills maths",
  ],
  openGraph: {
    title: "Online Maths Exam | Functional Skills Maths Exams",
    description:
      "Learn about online Functional Skills Maths exams, Level 1, Level 2 and online maths course preparation.",
    url: "https://onlinemathsexam.co.uk",
    siteName: "Online Maths Exam",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
