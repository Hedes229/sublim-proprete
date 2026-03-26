export default function Services() {
  return (
    <main>
      <header className="relative overflow-hidden py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="label-md inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-6">Expertise & Excellence</span>
            <h1 className="display-lg text-on-surface mb-8">Nos Services Professionnels</h1>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-12">
              Une approche architecturale de la maintenance et du soin des bâtiments. Nous intervenons en Guadeloupe avec une précision rigoureuse pour sublimer vos espaces de vie et de travail.
            </p>
          </div>
        </div>
      </header>

      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Category 1: Industrial */}
            <div className="md:col-span-8 bg-white rounded-xl overflow-hidden shadow-sm group border border-on-surface-variant/5">
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-10 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">factory</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nettoyage Industriel</h3>
                  <p className="text-on-surface-variant leading-relaxed">Solutions de nettoyage intensif pour entrepôts et zones de production. Protocoles de sécurité stricts.</p>
                </div>
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA641GS_ZkojLzD4SwCmSIGkIN8WlkF2FLyhQCPY3JkYAYvA6GlFBOU7oNm61U1kBamQXolkhTCPwIzVnm8dHiuUPiCksbt8iNneyLA4butSQILFdUB1SvoWpPkcaq1ZdneqSKvVEggCpRyV7lRz4SCHf_cR96mmW_OBXx4b09i7rG572z_cuipe7WrK3Qr_-no4C9mq7cSS_VQ0CmPun4oxVQE06JQDN0F0buPyeC0cQaeGYDeozIw3bNHpnzPicJyqjZvQ-_lWpLn" alt="Industrial" />
                </div>
              </div>
            </div>

            {/* Category 2: Painting */}
            <div className="md:col-span-4 bg-white rounded-xl overflow-hidden shadow-sm flex flex-col border border-on-surface-variant/5 group">
              <div className="h-64 relative overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz1Jajh7Rf7ls5WuJ7n0Lh_orcLK6CIPaMLpVpvlmrtGB9alP8m2sHW1edENiWoH4pRSRwGVt7RobSOjARJY4XoYo5GNTbfRx5KlWl5gYJKd_DWHBIVagBof80Uz7CMBfaiCmIa4JQ-rq2D01Um1uG5pgZtBKFwDFnxr7kPxN2bjmfIqr85tGuhgZwJHea8KxXFEtezKUCkrgiCxTQ5qSTBcY4KZYHn1Ly3VOi5_cZ5Q6-VfRhYWkNv9y9cVYcP0LssRNCZO3-nC3L" alt="Painting" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">Peinture & Finition</h3>
                <p className="text-on-surface-variant text-sm">Haut de gamme et peintures écologiques.</p>
              </div>
            </div>

            {/* Category 3: Plumbing */}
            <div className="md:col-span-4 bg-white rounded-xl overflow-hidden shadow-sm flex flex-col border border-on-surface-variant/5 group">
              <div className="h-64 relative overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3vywsGIyHWAW_mxFajIrM-gRpNNqJCTCo_iDi-qFmk4PEMYnpGrJA-6AS_y8TP_FQkNEP5blehEE2fzAIZ8OJnzqSFZha0XW9MLYe_DAnh2bMsCGjaTuKL4qJU-otb4JOpvKwi1Go-v3hBS-PQvBjJaXSIN3TfQ6tNfubMe_iAC8T4GFx7eOKDAnLQJwuqT3ytfIMhOYawBxj7U-oZvm4Qs5EeyDntSn4Ep11yqA0BYhNXotwSDAsish9Q_quEkYAsu2_L_Pm9vu" alt="Technical" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">Plomberie & Électricité</h3>
                <p className="text-on-surface-variant text-sm">Maintenance préventive et curative.</p>
              </div>
            </div>

            {/* Category 4: Disinfection */}
            <div className="md:col-span-8 bg-white rounded-xl overflow-hidden shadow-xl border border-on-surface-variant/5 group">
              <div className="grid md:grid-cols-5 h-full">
                <div className="md:col-span-3 p-10 flex flex-col justify-center">
                  <span className="label-md text-tertiary mb-4">Certification Éco-Désinfection</span>
                  <h3 className="text-2xl font-bold mb-4">Désinfection & Hygiène</h3>
                  <p className="text-on-surface-variant">Pathogènes éliminés à 99.9% avec respect de l'environnement tropical.</p>
                </div>
                <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk7rqgwZrqUihLRPNV6hu59WU9ce2tASwMpiOwq4bcxf5KA02jbg2H1ToCtsMHK-yhACXeEgJWxMg0JYXxaBmSJm-5JHblKCkk8OF7NolMSXNsXXPpH_rFT8Lo8M6BCIVq9tHvC6NdaspSNy4IOMC2m-cg00Ae2PAKBXuRw2yKe94-qNtrDZZ2h6XiOeHIux31bIvW9twOeq_BPJHSdZVTEvpJGcz98tZKmKj7VR5PW0EhgwNRRc9XaVyhoOYRG4uHV_vDGZ94ENnW" alt="Disinfection" />
                </div>
              </div>
            </div>

            {/* Category 5: Security */}
            <div className="md:col-span-12 bg-surface-container-highest rounded-xl overflow-hidden group">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-12">
                  <h3 className="text-2xl font-bold mb-6">Sécurité & Gardiennage</h3>
                  <p className="text-on-surface-variant mb-8">Protection de vos actifs avec monitoring intelligent.</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary">videocam</span>
                      <div>
                        <p className="font-bold text-sm">Vidéosurveillance</p>
                        <p className="text-xs text-on-surface-variant">Monitoring 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyjfnfJRY0YdzfVJNwUluv3MNPFw6rd-ExDFYU992HG2afeMnZUN-dNpFijaRtcPOM8BuRfW5LIZOwn4cC9kNzpOXBpxfhNUDcxfUwZs_MuyyovfFaogG2EYfTUxHgrsrUMTglUNHDs1w7J_Gbyxpx42c0REKvlYicQXj5dnqfQBBa2GMMwqq9ubiL-kXJ_0augfL91gjcWg1Fb5Z_67IHOKA-7fRASx5WtQL2hF3Pf1VOvFJi1iBZ1Yc1vDIUPNL7LxZVCNBJ5Rpy" alt="Security" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Devis CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary text-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-16">
              <h2 className="text-3xl font-extrabold mb-6 tracking-tight">Demandez votre devis sur mesure</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined bg-white/10 p-2 rounded-lg">call</span>
                  <p className="text-lg font-semibold">+590 590 XX XX XX</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 md:p-16 bg-white text-on-surface">
              <form className="space-y-6">
                <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg" placeholder="Nom Complet" />
                <button className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg">Envoyer ma demande</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
