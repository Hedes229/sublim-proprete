export default function Contact() {
  return (
    <main>
      <section className="py-20 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="label-md text-primary mb-4 block">Contactez-nous</span>
          <h1 className="display-lg text-on-surface mb-8">
            Apportez de la <span className="text-primary italic">clarté</span> à votre espace.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Découvrez la précision d'une maintenance haut de gamme. Basés à Baie-Mahault, nous servons les entreprises de toute la Guadeloupe.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl transform lg:translate-x-12">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtaZIv5fqftZ7HmnnM4U4g_dYdLHsoUQVvS-7rs5WZXl4aTebhzmmWmB5JpUI0NSiAuAg-x1b8fWgjltmhkok0EMzxihYMtF-2GltOfMlVLzZMM4YVYvOhG5ECtjhuXZgS00ulh1pVcuRjAtcKoB_7DgWSPnsxabin7yrr-8fXgE_DfSKQkLuDpvZzVAxTcIv9dAgWZ3s4MtbWwScNMSIiUprm8Gx5h15ADg5uidYQjrkrMCPk8xWzgTPAfbtt94pdic-p6ltlhixu" 
              alt="Contact" 
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Accès Direct</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface-variant font-medium mb-1">Téléphone</p>
                    <p className="text-lg font-bold text-on-surface">+590 690 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface-variant font-medium mb-1">Siège social</p>
                    <p className="text-lg font-bold text-on-surface">Résidence la Roseraie<br />97122 Baie-Mahault</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white p-10 lg:p-14 rounded-xl editorial-shadow">
              <h2 className="text-2xl font-bold mb-2">Demander une consultation</h2>
              <p className="text-on-surface-variant mb-10">Remplissez le formulaire et nous vous contacterons sous 24h.</p>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="label-md text-on-surface-variant">NOM COMPLET</label>
                    <input className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40" placeholder="Jean Dupont" type="text" />
                  </div>
                  {/* ... other fields ... */}
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all" type="submit">
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
