export default function About() {
  return (
    <main>
      {/* Hero Section: Editorial Header */}
      <section className="py-28 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <span className="label-md text-primary mb-4 block">Our Heritage</span>
            <h1 className="display-lg text-on-surface mb-8">
              Elevating Excellence in <span className="text-primary">Guadeloupe</span>.
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-xl">
              Rooted in Baie-Mahault, SUBLIM' PROPRETÉ is more than a cleaning service. We are the custodians of professional environments, delivering pristine results through meticulous care and local commitment.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <img 
              alt="Modern office architecture" 
              className="rounded-xl editorial-shadow w-full aspect-[4/3] object-cover relative z-10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOUSBJofZ3JuMbiVVDkpk2JjAeshIdsqQ1SBhxzARdUkTOvoxMWxBp4w9j6WshUtJhnHOD3eyzgJt4A0CkHVzMTQ27uhS42BKnlVOOFYxTJ_mp7E93Wa6m0KWHA9kbWu_YmWVRUPOfg2GTke_eahqOws23y2ahMmft0H7ngMjhsJEeEx1zIBfFi3psEvqfjPwIpQTGN1AfwGRt11hTaNXr1oqLvbHy0H2hfjuJSIBctz3gbBS-qTesqZl6xzoMmJq2NA0DMhw7FGk7" 
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-surface-container-low py-28 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <img 
              alt="Fabienne Enjaric" 
              className="rounded-xl editorial-shadow w-full aspect-[3/4] object-cover border-8 border-white" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn4xTSn4fnFPxkR5rzPXVKaio1dQjt7k6m1JAQe9VbNqA45oQNECQX13-_PwoojPHoO0SOFaC1LeLrV5xQYDXm1cv43AGxIeVURgmyZ9nljrGSsTADUBY_67r_kjJnVMX9ciY4qQdL1nyL-fDAXWme-quM5f0UxjoMMsM3odiTE-Gs621-lQKxm-MCQ5WcDXF0cISFWptwCQOEKjklUR6Vh1r7O4v4Um0t8-y4MtsQDRNlb3fkwv4eWsN3HGSnenVCDFBF-a1Qj_jw" 
            />
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <span className="label-md text-primary mb-4 block">The Visionary</span>
            <h2 className="headline-md text-on-surface mb-6">Fabienne Enjaric</h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>Driven by a passion for impeccable service and a deep love for her home region, Fabienne Enjaric founded SUBLIM' PROPRETÉ to bridge the gap between high-end industrial maintenance and local accessibility.</p>
              <p>With a vision rooted in the vibrant business ecosystem of Baie-Mahault, she has built a company that prioritizes human connection alongside technical precision.</p>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="bg-white p-4 rounded-lg editorial-shadow flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary">verified</span>
                <span className="text-sm font-semibold">Local Certified</span>
              </div>
              <div className="bg-white p-4 rounded-lg editorial-shadow flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">star</span>
                <span className="text-sm font-semibold">Visionary Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Commitment Section */}
      <section className="bg-on-surface text-white py-28 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="label-md text-primary-container mb-4 block">Guadeloupe First</span>
            <h2 className="headline-md mb-8">Our Local Commitment</h2>
            <p className="text-lg opacity-80 leading-relaxed mb-8">
              As a proud Guadeloupean enterprise, we are dedicated to the sustainable growth of our community. We prioritize local recruitment and respect the unique environmental beauty of our archipelago.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-primary-container">100%</span>
                <span className="text-xs uppercase font-bold tracking-widest opacity-60">Local Staff</span>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-primary-container">24h</span>
                <span className="text-xs uppercase font-bold tracking-widest opacity-60">Local Support</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img className="rounded-xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDou9z6UZsQxcUEzJ1xIdf27pVcE6jj2t2cBzPTMNWicLrKeBXhTk8tXgbkXwOTnO8OErCIS1qAz6cujEiPbXMkr3aYUaKMaf7JTBiPC7-FSjHtCSMigyU8pnjqgiy5xr-ARiaJsb3hjESBka2mWrZ8pNuV8ScylbiRGGLS363Xxn1rmkVAwtdQL0nVENbpGfDj8-0At_oNp5tpuusMvx-aw25RKG2Tqi6dIOF_kkChR6TjCFmpZV4op8LBiZ6XU2c3CXo5RNB39O1d" alt="Guadeloupe" />
            <img className="rounded-xl w-full aspect-square object-cover mt-8 grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATCt2CnBvFwZXROJfogy8pUtlG_9NBIkzENlI9ik3Igc1FQMvJxvzdU1MkUIzM7EmVZ6-ju3urn6tNuDv2QMs9SPgz1BuzIXSYfgCN9Neirpe6Iscxw0PUno5xzAbcWnCjrKkGvFFMPteA6Q6h1MJDy0OSEh_D7u6G6V_JYuZUBlT7smziSePNrXe1mQ4qCb1chi5Jv7oBgq9TFBz1fso_6Z8S9pb9GQkn4Jczwan9YDutN2oPLCpuRmBaqtLnHXhdI0mv7ICYjS9w" alt="Baie-Mahault" />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-28 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container p-12 rounded-3xl overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-3/5">
              <h2 className="headline-md text-on-surface mb-6">Expertise in Every Detail</h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Our professionals are trained in the latest sanitization protocols. We invest in high-grade equipment to guarantee results that not only look clean but are hygienically superior.
              </p>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white p-2 rounded-2xl editorial-shadow">
                <img className="rounded-xl object-cover w-full h-64" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn-_b0f-7HssuvqRyEU2aDQiRKXbW4UXDwR303bn249t88sBtCVSklsiZVp9Gb0BMi-mfl0PdERr-pWbB_DpBdJTZ7tFcC_4Km9kLSgyXscIg1d-Hh5l2yV3XUtpNa2mj63MhzNT4NVAgoLO0wXdZGCHPNurSrdPDslHrZhmPMFM2Ij2FHOELOPmKUwhdP0lgQKWMhWT1Jj5beYOg3Kf7kZP8lEErcZm-UwQWTlHbQbCMdpxkLihGWr9svtBECkT95dtsBkfMJVgoN" alt="Equipment" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
