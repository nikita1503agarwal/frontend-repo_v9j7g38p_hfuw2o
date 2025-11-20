import { ScanLine, FileText, Database, FileCheck2 } from 'lucide-react';

function Step({ icon: Icon, title, children, badge }) {
  return (
    <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      {badge && (
        <span className="absolute -top-3 left-4 inline-block rounded-full bg-blue-500 text-white text-xs font-semibold px-3 py-1 shadow">{badge}</span>
      )}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <div className="mt-2 text-slate-300 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.15),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Cum Funcționează</h2>
        <p className="mt-4 text-slate-300 max-w-3xl">De la scanare la document final — totul automat. Iată fluxul complet:</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Step icon={ScanLine} title="Pasul 1 – Scanare & Upload" badge="1">
            Utilizatorul încarcă sau scanează documente de identitate precum: buletin, permis de conducere, certificat de naștere și alte acte personale.
          </Step>
          <Step icon={FileText} title="Pasul 2 – Extracție Automată (OCR Avansat)" badge="2">
            Platforma extrage instant toate datele relevante prin OCR AI. Fără tastare manuală, fără erori, fără timp pierdut.
          </Step>
          <Step icon={Database} title="Pasul 3 – Salvare în CRM" badge="3">
            Datele sunt structurate automat și salvate în CRM-ul Monoform, unde poți vizualiza și organiza persoanele, edita datele extrase, accesa istoricul documentelor și gestiona relațiile.
          </Step>
          <Step icon={FileCheck2} title="Pasul 4 – Generare Documente Automatizată" badge="4">
            Încarci template-uri .docx personalizate și atribui „Mandatarul” și „Mandantul” din persoanele salvate în CRM. Rezultatul: un document completat automat, gata în câteva secunde, fără munca manuală.
            <div className="mt-3 text-blue-300 font-medium">„De la scanare la document final — totul automat.”</div>
          </Step>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
