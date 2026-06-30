export default function CTASection({ title, description, link, label }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-950 px-6 py-14 text-center text-white shadow-2xl shadow-emerald-900/20 md:px-12">
          <div className="absolute left-[-80px] top-[-80px] h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-90px] right-[-90px] h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
              Start your next step
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-emerald-50">
              {description}
            </p>

            <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50"
>
  {label}
</a>
          </div>
        </div>
      </div>
    </section>
  );
}
