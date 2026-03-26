export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface py-20">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Professional Cleaning" 
            className="w-full h-full object-cover opacity-20 md:opacity-100" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-tglkY2qjiw597sklBewWfhShRCp5hhbn4UehpGXVjGnFOaE210qURDbDmg0QMV3ZK6HdO_Ass9BJ0D_BXpVybAp27aSNTa7iQGfjQSpXlW-H4of5IM3ukAC0DkaxrK-CS3gFM4yq0cuxQBQq32LbatvV6TYNRqi31RyI3A452tL4AkAoHEGgZmr945vkBM3STb2ys5HtnCPQ0Xzy6sS6syt9yxAcpIl05g4catUHqFoMFV0gb7zmQI5FcrKq02s2tBih2dvjhQoI" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/95 to-transparent"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="max-w-2xl">
            <span className="label-md inline-block text-primary mb-4">Maintenance Professionnelle</span>
            <h1 className="display-lg text-on-surface mb-6">
              L'Excellence du Service en <span className="text-primary">Guadeloupe</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              Solutions intégrales de propreté et maintenance pour entreprises et résidences à Baie-Mahault et sur toute l'île.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full px-8 py-4 text-lg shadow-xl hover:scale-105 active:scale-95 transition-all">
                Obtenir un Devis Gratuit
              </button>
              <button className="bg-surface-container-highest text-on-surface font-semibold rounded-full px-8 py-4 text-lg hover:bg-surface-container-high transition-all">
                Nos Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Bento Grid Style */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-16">
            <span className="label-md text-primary block mb-2">Expertises Multiples</span>
            <h2 className="headline-md text-on-surface">Nos Solutions sur Mesure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Industrial Cleaning */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between group hover:editorial-shadow transition-all duration-300 border border-on-surface-variant/5">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-6">cleaning_services</span>
                <h3 className="text-2xl font-bold mb-3">Nettoyage Industriel</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-md">Solutions de nettoyage haute performance pour entrepôts, usines et espaces commerciaux exigeants.</p>
              </div>
              <div className="mt-8 flex justify-end">
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
            {/* Security */}
            <div className="md:col-span-4 bg-primary text-white rounded-xl p-8 flex flex-col justify-between group hover:editorial-shadow transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-4xl mb-6">security</span>
                <h3 className="text-2xl font-bold mb-3">Sécurité</h3>
                <p className="text-blue-100 leading-relaxed">Protection de vos sites et surveillance professionnelle 24/7.</p>
              </div>
              <div className="mt-8 flex justify-end">
                <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
            {/* Small services cards */}
            <div className="md:col-span-3 bg-surface-container-lowest rounded-xl p-6 border border-on-surface-variant/5 hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">format_paint</span>
              <h4 className="text-lg font-bold mb-2">Peinture</h4>
              <p className="text-sm text-on-surface-variant">Rénovation et entretien de vos surfaces murales.</p>
            </div>
            <div className="md:col-span-3 bg-surface-container-lowest rounded-xl p-6 border border-on-surface-variant/5 hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">plumbing</span>
              <h4 className="text-lg font-bold mb-2">Plomberie</h4>
              <p className="text-sm text-on-surface-variant">Maintenance curative et installation sanitaire.</p>
            </div>
            <div className="md:col-span-3 bg-surface-container-lowest rounded-xl p-6 border border-on-surface-variant/5 hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">bolt</span>
              <h4 className="text-lg font-bold mb-2">Électricité</h4>
              <p className="text-sm text-on-surface-variant">Sécurisation et entretien de vos réseaux électriques.</p>
            </div>
            <div className="md:col-span-3 bg-surface-container-lowest rounded-xl p-6 border border-on-surface-variant/5 hover:bg-primary/5 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">sanitizer</span>
              <h4 className="text-lg font-bold mb-2">Désinfection</h4>
              <p className="text-sm text-on-surface-variant">Protocoles sanitaires stricts pour environnements sains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                  alt="High Quality Team" 
                  className="rounded-xl editorial-shadow relative z-10" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDCuGMSzVZnDDQKt0KJPkLQ9yBo5htdBCLrrYOTRou_nWadNqXQ8xrD3ZhRrPKbbgIRgle-Uy2ZmkY_-i7qwAJmAsCltuH6yBsUY7L96PvGbTyTatHdT4NC27E6FrHeSldUQ6xwtA_iVYpCwivnjnlEj0L7ESzJ7JGyi3JoKiu5uQ4gNzltQuZh72hGEbiPsxmXuTMh2XYqpjYFOqCWTJUedmJIlBGZC0dZ7ji4RRpbX2FiHa5OBQkyI3zcR-uRWBbnwAq1vjKY0YL" 
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-tertiary/10 rounded-full flex items-center justify-center z-20 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-tertiary text-4xl">verified</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="label-md text-primary block mb-2">Pourquoi Nous ?</span>
              <h2 className="headline-md text-on-surface mb-8">Votre Partenaire de Confiance en Guadeloupe</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-surface-container-lowest h-12 w-12 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expertise Locale</h4>
                    <p className="text-on-surface-variant">Basés à Baie-Mahault, nous connaissons parfaitement les spécificités et les exigences du terrain guadeloupéen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-surface-container-lowest h-12 w-12 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">high_quality</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Standards de Qualité Élevés</h4>
                    <p className="text-on-surface-variant">Utilisation de produits certifiés et de protocoles rigoureux pour un résultat irréprochable.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-surface-container-lowest h-12 w-12 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">hub</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Services Intégrés</h4>
                    <p className="text-on-surface-variant">Un interlocuteur unique pour tous vos besoins de maintenance : propreté, technique et sécurité.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-surface flex justify-center items-center">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <span className="material-symbols-outlined text-primary/20 text-6xl mb-8 block mx-auto">format_quote</span>
          <blockquote className="text-3xl md:text-4xl font-light italic text-on-surface leading-snug mb-8">
            "Une réactivité exemplaire et un professionnalisme qui fait la différence. SUBLIM' PROPRETÉ est devenu notre partenaire incontournable pour la gestion de nos bureaux."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-primary mb-4 rounded-full"></div>
            <cite className="not-italic font-bold text-on-surface">Responsable Logistique</cite>
            <span className="text-on-surface-variant text-sm">Zone Industrielle Jarry</span>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="bg-gradient-to-r from-primary to-primary-container rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Prêt à sublimer vos espaces ?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Contactez-nous aujourd'hui pour une étude personnalisée de vos besoins et un devis gratuit sans engagement.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-primary font-bold rounded-full px-10 py-5 text-lg hover:bg-blue-50 transition-colors shadow-lg">
                  Nous Contacter
                </button>
                <button className="bg-primary-container/30 border border-white/30 backdrop-blur-md text-white font-bold rounded-full px-10 py-5 text-lg hover:bg-white/10 transition-colors">
                  Appeler le +590 000 000
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
