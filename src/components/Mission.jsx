function Mission() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Misiunea Noastră</h2>
        <p className="mt-6 text-slate-300 leading-relaxed max-w-3xl">
          Am creat Monoform pentru a pune capăt birocrației care consumă timp și energie. Procesele manuale duc la erori, duplicare și lipsă de vizibilitate. Noi credem într-un viitor în care datele circulă fără fricțiune, iar documentele se generează automat, corect și în siguranță.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="font-semibold text-white">De ce</h3>
            <p className="mt-2 text-slate-300 text-sm">Eliminăm pierderile de timp și erorile umane din procesele bazate pe documente.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="font-semibold text-white">Problema</h3>
            <p className="mt-2 text-slate-300 text-sm">Birocrație, introducere manuală de date, lipsă de acuratețe și control fragmentat.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="font-semibold text-white">Viziunea</h3>
            <p className="mt-2 text-slate-300 text-sm">Automatizare totală, date corecte, zero erori și o experiență fluentă la fiecare pas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
