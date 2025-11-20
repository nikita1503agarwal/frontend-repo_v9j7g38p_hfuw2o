import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to increase readability (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/40 to-slate-900" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/90 border border-white/20 px-4 py-1 text-sm backdrop-blur">
          Despre noi
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Despre Monoform – Viitorul documentelor automate
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
          O platformă AI care elimină birocrația manuală și transformă procesele bazate pe documente în fluxuri complet automatizate. Eficiență, precizie, securitate și ușurință în utilizare — într-un singur ecosistem.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="rounded-xl bg-white/10 border border-white/15 text-white p-4 backdrop-blur">
            Câștigă timp și scapă de erori
          </div>
          <div className="rounded-xl bg-white/10 border border-white/15 text-white p-4 backdrop-blur">
            Documente instant fără stres
          </div>
          <div className="rounded-xl bg-white/10 border border-white/15 text-white p-4 backdrop-blur">
            Precizie absolută prin AI
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
