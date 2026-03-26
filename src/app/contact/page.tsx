export default function Contact() {
  return (
    <main>
      <section className="py-20 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="label-md text-primary mb-4 block">Contact Us</span>
          <h1 className="display-lg text-on-surface mb-8">
            Let’s bring <span className="text-primary italic">clarity</span> to your workspace.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            Experience the precision of high-end maintenance. Based in Baie-Mahault, we serve businesses across Guadeloupe with an editorial eye for hygiene and detail.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl transform lg:translate-x-12">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtaZIv5fqftZ7HmnnM4U4g_dYdLHsoUQVvS-7rs5WZXl4aTebhzmmWmB5JpUI0NSiAuAg-x1b8fWgjltmhkok0EMzxihYMtF-2GltOfMlVLzZMM4YVYvOhG5ECtjhuXZgS00ulh1pVcuRjAtcKoB_7DgWSPnsxabin7yrr-8fXgE_DfSKQkLuDpvZzVAxTcIv9dAgWZ3s4MtbWwScNMSIiUprm8Gx5h15ADg5uidYQjrkrMCPk8xWzgTPAfbtt94pdic-p6ltlhixu" 
              alt="Contact Hero" 
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Info Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Direct Access</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">call</span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface-variant font-medium mb-1">Phone Inquiry</p>
                    <p className="text-lg font-bold text-on-surface">+590 690 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface-variant font-medium mb-1">Email Support</p>
                    <p className="text-lg font-bold text-on-surface">contact@sublimproprete.gp</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface-variant font-medium mb-1">Office Location</p>
                    <p className="text-lg font-bold text-on-surface">Z.I. Jarry, Baie-Mahault<br />97122, Guadeloupe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 lg:p-14 rounded-xl editorial-shadow">
              <h2 className="text-2xl font-bold mb-2">Request a consultation</h2>
              <p className="text-on-surface-variant mb-10">Fill out the form below and our regional manager will contact you within 24 hours.</p>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="label-md text-on-surface-variant">FULL NAME</label>
                    <input className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all" placeholder="Jean Dupont" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="label-md text-on-surface-variant">COMPANY NAME</label>
                    <input className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all" placeholder="Ets. Guadeloupe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="label-md text-on-surface-variant">EMAIL ADDRESS</label>
                    <input className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all" placeholder="jean@company.gp" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="label-md text-on-surface-variant">PHONE NUMBER</label>
                    <input className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all" placeholder="+590 690 ..." type="tel" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant">SERVICE OF INTEREST</label>
                  <select className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all">
                    <option>Industrial Cleaning</option>
                    <option>Office Maintenance</option>
                    <option>Post-Construction Cleanup</option>
                    <option>Specialized Glass Treatment</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant">MESSAGE</label>
                  <textarea className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-white transition-all" placeholder="Tell us about your requirements..." rows={4}></textarea>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0" type="submit">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full relative overflow-hidden">
        <div className="absolute inset-0 grayscale contrast-125 opacity-40">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF2_lRDwQ3CZ2eXrkXMuxOGBI-pcPljzeIljT0P9z6Iu23Jv_nTb78MTYLlHcelJtb-O0zJPKCo_WS9J-zN3_v_ZTEL2TH7JrRDacUu3I6utO--ie8VIWzPy62HApyS0anW4vVRbe4j6H5jR76KRXmNUS0sTKzbfPvttiLYT4Sl8qkOKVE9cp0lSgnHAc0lXfCn-MkVxFBfXLuKkC9E1mItMWkQZmtimjohHIOq1-WoDuMDg6hv6qiiOtZa7ZThk4LYaY_vYjgVMfp" alt="Map" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low via-transparent to-surface-container"></div>
        <div className="relative h-full flex items-center justify-center px-8">
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl max-w-md text-center shadow-xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">explore</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Visit our HQ</h2>
            <p className="text-on-surface-variant mb-6 text-sm">Zone Industrielle de Jarry, Baie-Mahault. We are located at the heart of Guadeloupe's business hub.</p>
            <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="#">
              Open in Google Maps
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
