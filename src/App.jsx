import Hero from './components/Hero';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import Values from './components/Values';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <Hero />

      {/* Mission */}
      <Mission />

      {/* How It Works */}
      <HowItWorks />

      {/* Values */}
      <Values />

      {/* Team */}
      <Team />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Monoform. Toate drepturile rezervate.
        </div>
      </footer>
    </div>
  );
}

export default App;
