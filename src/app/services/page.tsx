export default function Services() {
  return (
    <main>
      <header className="relative overflow-hidden py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="label-md inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-6">Expertise & Excellence</span>
            <h1 className="display-lg text-on-surface mb-8">Nos Services Professionnels</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-12">
              Une approche architecturale de la maintenance et du soin des bâtiments. Nous intervenons en Guadeloupe avec une précision rigoureuse pour sublimer vos espaces.
            </p>
          </div>
        </div>
      </header>

      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Nettoyage Industriel */}
            <div className="md:col-span-8 bg-white rounded-xl overflow-hidden shadow-sm group border border-on-surface-variant/5">
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-10 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">factory</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nettoyage Industriel</h3>
                  <p className="text-on-surface-variant leading-relaxed">Solutions intensives pour entrepôts et zones de production. Protocoles de sécurité stricts.</p>
                </div>
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA641GS_ZkojLzD4SwCmSIGkIN8WlkF2FLyhQCPY3JkYAYvA6GlFBOU7oNm61U1kBamQXolkhTCPwIzVnm8dHiuUPiCksbt8iNneyLA4butSQILFdUB1SvoWpPkcaq1ZdneqSKvVEggCpRyV7lRz4SCHf_cR96mmW_OBXx4b09i7rG572z_cuipe7WrK3Qr_-no4C9mq7cSS_VQ0CmPun4oxVQE06JQDN0F0buPyeC0cQaeGYDeozIw3bNHpnzPicJyqjZvQ-_lWpLn" alt="Industriel" />
                </div>
              </div>
            </div>

            {/* Peinture */}
            <div className="md:col-span-4 bg-white rounded-xl overflow-hidden shadow-sm flex flex-col border border-on-surface-variant/5 group">
              <div className="h-64 relative overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz1Jajh7Rf7ls5WuJ7n0Lh_orcLK6CIPaMLpVpvlmrtGB9alP8m2sHW1edENiWoH4pRSRwGVt7RobSOjARJY4XoYo5GNTbfRx5KlWl5gYJKd_DWHBIVagBof80Uz7CMBfaiCmIa4JQ-rq2D01Um1uG5pgZtBKFwDFnxr7kPxN2bjmfIqr85tGuhgZwJHea8KxXFEtezKUCkrgiCxTQ5qSTBcY4KZYHn1Ly3VOi5_cZ5Q6-VfRhYWkNv9y9cVYcP0LssRNCZO3-nC3L" alt="Peinture" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">Peinture & Finition</h3>
                <p className="text-on-surface-variant text-sm">Services de rénovation murale et finitions soignées.</p>
              </div>
            </div>

            {/* Désinfection */}
            <div className="md:col-span-8 bg-white rounded-xl overflow-hidden shadow-xl border border-on-surface-variant/5 group">
              <div className="grid md:grid-cols-5 h-full">
                <div className="md:col-span-3 p-10 flex flex-col justify-center">
                  <span className="label-md text-tertiary mb-4">Certification Éco-Désinfection</span>
                  <h3 className="text-2xl font-bold mb-4">Désinfection & Hygiène</h3>
                  <p className="text-on-surface-variant">Protocoles d'hygiène stricts adaptés aux environnements tropicaux.</p>
                </div>
                <div className="relative md:col-span-2 h-64 md:h-auto overflow-hidden">
                   <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk7rqgwZrqUihLRPNV6hu59WU9ce2tASwMpiOwq4bcxf5KA02jbg2H1ToCtsMHK-yhACXeEgJWxMg0JYXxaBmSJm-5JHblKCkk8OF7NolMSXNsXXPpH_rFT8Lo8M6BCIVq9tHvC6NdaspSNy4IOMC2m-cg00Ae2PAKBXuRw2yKe94-qNtrDZZ2h6XiOeHIux31bIvW9twOeq_BPJHSdZVTEvpJGcz98tZKmKj7VR5PW0EhgwNRRc9XaVyhoOYRG4uHV_vDGZ94ENnW" alt="Santé" />
                </div>
              </div>
            </div>
            
            {/* Autres services */}
             <div className="md:col-span-4 bg-primary text-white p-10 rounded-xl editorial-shadow group">
                <span className="material-symbols-outlined text-4xl mb-6">home_repair_service</span>
                <h3 className="text-2xl font-bold mb-4">Services à Domicile</h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  Garde et assistance à domicile, aide au déménagement et services de proximité.
                </p>
                <div className="mt-8 flex justify-end">
                   <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
