export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full px-8 py-20 border-t border-slate-200/15">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-lg font-bold text-blue-800 mb-6">
              SUBLIM' PROPRETÉ
            </div>
            <p className="text-slate-500 font-inter text-sm leading-relaxed max-w-xs">
              Expert en solutions de nettoyage et maintenance multiservices en Guadeloupe. Qualité, rigueur et excellence opérationnelle au service de votre image.
            </p>
            <div className="mt-4 text-xs text-slate-400">
              SIREN : 948 218 862 <br />
              SIRET : 948 218 862 00019
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-on-surface">Navigation</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="/services" className="hover:text-blue-600 transition-all">Nos Services</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition-all">À Propos</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-all">Contact</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-all">Recrutement</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-on-surface">Légal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-all">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-all">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-all">Mentions légales</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200/30">
          <p className="font-inter text-sm leading-relaxed text-slate-500">
            © 2026 SUBLIM' PROPRETÉ - Résidence la Roseraie, 97122 Baie-Mahault, Guadeloupe.
          </p>
        </div>
      </div>
    </footer>
  );
}
