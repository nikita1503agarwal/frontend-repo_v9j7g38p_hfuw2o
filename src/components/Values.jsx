function Values() {
  const values = [
    { title: 'Eficiență', desc: 'Reducem timpii operaționali de la ore la minute, cu fluxuri automate end‑to‑end.' },
    { title: 'Securitate enterprise', desc: 'Arhitectură sigură, controale de acces și auditabilitate pentru încredere deplină.' },
    { title: 'Precizie', desc: 'Modele AI optimizate pentru acuratețe ridicată și validare asistată.' },
    { title: 'Transparență', desc: 'Vizibilitate completă asupra datelor și a istoricului documentelor.' },
    { title: 'Inovație continuă', desc: 'Îmbunătățim constant algoritmii și experiența utilizatorilor.' }
  ];

  return (
    <section className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Valorile Noastre</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-white font-semibold">{v.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
