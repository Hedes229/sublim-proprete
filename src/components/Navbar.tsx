import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass-nav docked full-width top-0 sticky z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-black tracking-tighter text-blue-800">
          SUBLIM' PROPRETÉ
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-inter text-sm font-medium tracking-tight text-slate-600 hover:text-blue-600 transition-colors">Accueil</Link>
          <Link href="/services" className="font-inter text-sm font-medium tracking-tight text-slate-600 hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/about" className="font-inter text-sm font-medium tracking-tight text-slate-600 hover:text-blue-600 transition-colors">À Propos</Link>
          <Link href="/contact" className="font-inter text-sm font-medium tracking-tight text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
        </div>
        <div className="flex items-center">
          <button className="bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full px-6 py-2.5 text-sm scale-95 active:opacity-80 transition-transform">
            Demander un devis
          </button>
        </div>
      </div>
    </nav>
  );
}
