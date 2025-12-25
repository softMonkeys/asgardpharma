import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import VastSection from './components/VastSection';
import FlipCard from './components/FlipCard';
import InteractiveBackground from './components/InteractiveBackground';



function App() {
  return (
    <Layout>

      <Hero />

      {/* Overview - Full Width Text Style */}
      <VastSection
        id="overview"
        type="full"
        title="OUR MISSION"
        subtitle="To produce affordable pharmaceuticals by licensing global innovations and utilizing Canadian biomanufacturing infrastructure."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Card 1: Affordability */}
          <div className="group p-8 bg-white border border-text-main/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold mb-6 text-text-main group-hover:text-accent transition-colors">
              Affordability
            </h3>
            <p className="text-lg text-text-muted leading-relaxed">
              We aim to challenge the dominance of US "Big Pharma" by reducing the burden of high cost vaccines & biologics on the Canadian taxpayer through leveraging domestic manufacturing capabilities.
            </p>
          </div>

          {/* Card 2: Our Vision */}
          <div className="group p-8 bg-white border border-text-main/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold mb-6 text-text-main group-hover:text-accent transition-colors">
              Our Vision
            </h3>
            <p className="text-lg text-text-muted leading-relaxed">
              Become Canada's first agile, cost-efficient bridge for licensing, developing, and commercializing innovative foreign intellectual property in large molecule pharmaceuticals.
            </p>
          </div>
        </div>
      </VastSection>

      {/* History - Moved Section */}
      <VastSection
        id="history"
        title="History"
        align="left"
        variant="dark"
        mediaContent={
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/images/history-connaught-vials.png" alt="Connaught Vials" className="w-full h-auto object-contain rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
            <img src="/assets/images/history-scientist.png" alt="Scientist" className="w-full h-auto object-contain rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
            <img src="/assets/images/history-map.png" alt="Historic Map" className="w-full h-auto object-contain rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
            <img src="/assets/images/history-building.png" alt="Connaught Building" className="w-full h-auto object-contain rounded-sm grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        }
      >
        <h3 className="text-2xl font-bold mb-6 text-white">
          Canada was <span className="text-accent">once a leader</span> in public vaccine manufacturing
        </h3>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <span className="text-accent text-xl mt-1">➤</span>
            <p className="text-lg leading-relaxed text-white/90">
              In 1914, Connaught Labs produced antitoxins as a <span className="font-bold text-white">public, not-for-profit institute</span> tied to the University of Toronto.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-accent text-xl mt-1">➤</span>
            <p className="text-lg leading-relaxed text-white/90">
              But by the 1990s, <span className="font-bold text-white">privatization and foreign acquisitions</span> (Connaught → Sanofi, Armand Frappier → GSK) dismantled our domestic capacity, leaving Canada <span className="font-bold text-white">exposed</span> during COVID 19.
            </p>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-accent text-xl mt-1">➤</span>
            <p className="text-lg leading-relaxed text-white/90">
              In response, the federal government invested $126 million in the Biologics Manufacturing Centre (BMC) — which today <span className="font-bold text-white">remains underutilized</span>, with only one confirmed partner.
            </p>
          </li>
        </ul>
      </VastSection>

      {/* Problem - Split Screen (Text Left, Image Right) */}
      <VastSection
        id="problem"
        title="THE CHALLENGE"
        image="/assets/images/challenge.png"
        align="left"
        className="bg-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FlipCard
            className="h-64"
            peekOnScroll={true}
            autoPeek={true}
            staggerDelay={0}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Cost"
            description="High out-of-pocket costs"
            backDescription="Even with public and private coverage, patients still pay high out-of-pocket costs—while taxpayers foot inflated bills driven by pharma pricing power."
          />
          <FlipCard
            className="h-64"
            autoPeek={true}
            staggerDelay={200}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Fragile Health Sovereignty"
            description="Reliance on foreign giants"
            backDescription="Canada relies on foreign pharma giants, with little control over supply, pricing, or production."
          />
          <FlipCard
            className="h-64"
            autoPeek={true}
            staggerDelay={400}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            }
            title="Vulnerable Supply Chains"
            description="Exposed inability to produce"
            backDescription="Pandemics and geopolitics have exposed our inability to produce critical medicines when it matters most."
          />
          <FlipCard
            className="h-64"
            autoPeek={true}
            staggerDelay={600}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Innovation Bottleneck"
            description="Delayed therapies"
            backDescription="Cutting-edge therapies abroad are delayed or unavailable in Canada due to lack of domestic licensing and trial pathways."
          />
        </div>
      </VastSection>

      {/* Solution - Split Screen (Image Left, Text Right) */}
      <VastSection
        id="solution"
        title="THE SOLUTION"
        image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
        align="right"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FlipCard
            className="h-64"
            autoPeek={true}
            staggerDelay={0}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            }
            title="Rebuild Domestic Biotech"
            description="Resilient domestic pipeline"
            backDescription="License late-phase global innovations and invest in Canadian-led development and commercialization, building a resilient domestic pipeline."
          />
          <FlipCard
            className="h-64"
            autoPeek={true}
            staggerDelay={200}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            title="Deploy Idle Capacity"
            description="Untapped national capacity"
            backDescription="Facilities like the Biologics Manufacturing Centre (BMC) represent untapped national capacity."
          />
          <FlipCard
            className="h-64"
            autoPeek={true}
            staggerDelay={400}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Slash Costs"
            description="Affordable biologics"
            backDescription="Avoid traditional R&D overhead and global distribution markups to offer affordable, locally made biologics for both patients and healthcare systems."
          />
          <FlipCard
            className="h-64"
            autoPeek={true}
            staggerDelay={600}
            icon={
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            }
            title="Eliminate Price Gouging"
            description="Minimize excessive markups"
            backDescription="Minimizing cost allows minimizing excessive markups to patients while still offering high-quality medicines."
          />
        </div>
      </VastSection>

      {/* Why Asgard - Static Cards */}
      <InteractiveBackground>
        <section className="py-32 px-8 bg-bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-text-main tracking-tighter mb-8 text-center">
              WHY ASGARD
            </h2>
            <p className="text-xl text-center text-text-muted max-w-4xl mx-auto mb-16 leading-relaxed">
              If drug development is supported by taxpayer dollars, then the public deserves access to its rewards—not just private shareholders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="group p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col justify-center items-center">
                <p className="text-xl md:text-2xl font-medium text-text-main leading-relaxed">
                  We believe that public funding should yield <span className="font-bold text-accent">public returns</span>.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col justify-center items-center">
                <p className="text-xl md:text-2xl font-medium text-text-main leading-relaxed">
                  We believe in a <span className="font-bold text-accent">resilient, self-sufficient</span> Canadian pharmaceutical system, free of foreign interference, ready for pandemics and supply chain shocks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </InteractiveBackground>



      {/* Contact - Full Width Center */}
      <section id="contact" className="py-32 px-8 bg-bg-secondary relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-text-main tracking-tighter mb-8">
            JOIN THE MISSION
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            Interested in partnering with Asgard Pharma? We'd love to hear from you.
          </p>
          <a
            href="mailto:info@asgardpharma.ca"
            className="inline-block px-12 py-6 border border-text-main text-text-main font-bold uppercase tracking-[0.2em] hover:bg-text-main hover:text-bg-main transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

    </Layout>
  );
}

export default App;
