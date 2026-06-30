export default function FAQSection({
  title = "Frequently asked questions",
  faqs,
}) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Helpful information
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-950">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>

{faq.link && (
  <a
    href={faq.link.href}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex text-sm font-semibold text-emerald-800 transition hover:text-emerald-900"
  >
    {faq.link.label} →
  </a>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
