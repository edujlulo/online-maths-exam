import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Online Maths Exam | Functional Skills Maths Exams",
    template: "%s | Online Maths Exam",
  },
  description:
    "Information about online Functional Skills Maths exams, Level 1, Level 2, GCSE equivalence and online maths course preparation.",
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
