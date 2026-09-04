import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-cyan-500/10">
              N
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white block leading-tight">NaszObiekt.pl</span>
              <span className="text-xs text-cyan-400 font-mono tracking-widest uppercase">naszobiekt.pl</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#o-nas" className="hover:text-cyan-400 transition-colors">O projekcie</a>
            <a href="#mozliwosci" className="hover:text-cyan-400 transition-colors">Możliwości</a>
            <a href="#kontakt" className="hover:text-cyan-400 transition-colors">Kontakt</a>
          </nav>
          <div>
            <a href="#kontakt" className="px-5 py-2.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-medium text-sm transition-all shadow-md">
              Skontaktuj się
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.12),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700/80 bg-slate-900/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Projekt powiązany z domeną naszobiekt.pl
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Wygodny system rezerwacji obiektów, sal i przestrzeni
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Rezerwuj online boiska, hale sportowe, sale konferencyjne i pracownie. Wszystko w jednym przejrzystym systemie.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#kontakt" className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-base transition-all shadow-lg">
              Rozpocznij teraz
            </a>
            <a href="#mozliwosci" className="px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-base transition-all">
              Dowiedz się więcej
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="mozliwosci" className="py-20 bg-slate-900/30 border-y border-slate-800/80 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Dlaczego NaszObiekt.pl?</h2>
            <p className="text-slate-400">Nowoczesne rozwiązania przygotowane z myślą o najwyższej jakości i wygodzie użytkowników.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Kalendarz w czasie rzeczywistym</h3>
              <p className="text-slate-400 leading-relaxed">Zawsze aktualna dostępność terminów i automatyczne potwierdzenia.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Płatności online</h3>
              <p className="text-slate-400 leading-relaxed">Bezpieczne i natychmiastowe płatności bez zbędnych formalności.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dla zarządców i klientów</h3>
              <p className="text-slate-400 leading-relaxed">Prosty panel do zarządzania rezerwacjami, grafikiem i cennikiem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt" className="py-24 px-6 max-w-3xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Skontaktuj się z nami</h2>
            <p className="text-slate-400 text-sm">Masz pytania dotyczące domeny naszobiekt.pl? Napisz do nas!</p>
          </div>
          {sent ? (
            <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-center font-medium">
              Dziękujemy za wiadomość! Odpowiemy wkrótce.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Imię i nazwisko</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jan Kowalski" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Adres e-mail</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="twoj.email@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Wiadomość</label>
                <textarea 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Wpisz treść wiadomości..." 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white outline-none transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold transition-all shadow-lg"
              >
                Wyślij wiadomość
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 py-8 px-6 bg-slate-950 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} NaszObiekt.pl - naszobiekt.pl. Wszelkie prawa zastrzeżone.</p>
        <p className="mt-1 text-slate-600">Zarządzane przez organizację GitHub: stolamateusz</p>
      </footer>
    </div>
  );
}
