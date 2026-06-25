export default function FAQSection({
  title = "Frequently asked questions",
  faqs,
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          {title}
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {faq.question}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
