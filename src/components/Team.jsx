function Team() {
  const members = [
    { name: 'Andrei Popescu', role: 'CEO & Co‑Founder', bio: 'Conduce viziunea Monoform și crede în procese fără fricțiune.', img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300&h=300&fit=crop&auto=format' },
    { name: 'Maria Ionescu', role: 'CTO & Co‑Founder', bio: 'Arhitect AI, pasionată de precizie și scalabilitate.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&h=300&fit=crop&auto=format' },
    { name: 'Vlad Petrescu', role: 'Head of Product', bio: 'Transformă nevoi reale în experiențe simple și clare.', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&h=300&fit=crop&auto=format' },
    { name: 'Ioana Dumitrescu', role: 'Lead ML Engineer', bio: 'Modele OCR robuste, optimizate pentru acuratețe maximă.', img: 'https://images.unsplash.com/photo-1544005314-9e0a16bb7366?q=80&w=300&h=300&fit=crop&auto=format' },
  ];

  return (
    <section className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(16,185,129,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Echipa Noastră</h2>
          <p className="mt-4 text-slate-300">Suntem o echipă pasionată de AI și automatizare. Cultura noastră pune accent pe încredere, responsabilitate și învățare continuă, pentru a livra produse sigure, rapide și ușor de folosit.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div key={m.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center hover:border-slate-700 transition">
              <img src={m.img} alt={m.name} className="mx-auto h-24 w-24 rounded-full object-cover" />
              <h3 className="mt-4 text-white font-semibold">{m.name}</h3>
              <p className="text-blue-300 text-sm">{m.role}</p>
              <p className="mt-2 text-slate-300 text-sm">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
