import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe, Settings, Award, HeartHandshake, Flame, Sun, Sparkles, Sprout } from "lucide-react";
import Certifications from "@/components/Certifications";

export default function Home() {
  const categories = [
    {
      name: "Spices",
      slug: "spices",
      desc: "Pure whole seeds (Cumin, Fennel, Coriander, Red Chilli, Black Pepper) cleaned to 99% purity.",
      badge: "Whole Seeds",
      icon: Flame,
      theme: {
        border: "border-t-4 border-t-brand-spice border-brand-sand dark:border-brand-sand/10 hover:border-brand-spice/60",
        badge: "bg-brand-spice/15 text-brand-spice dark:text-brand-spice-light border border-brand-spice/30",
        iconBox: "bg-brand-spice/15 text-brand-spice dark:text-brand-spice-light border border-brand-spice/20",
        link: "text-brand-spice dark:text-brand-spice-light hover:text-brand-spice/80",
        hoverTitle: "group-hover:text-brand-spice dark:group-hover:text-brand-spice-light",
      },
    },
    {
      name: "Oil Seeds",
      slug: "oil-seeds",
      desc: "Mechanically hulled sesame seeds, groundnuts, mustard, and castor seeds processed sanitarily.",
      badge: "Hulled Seeds",
      icon: Sun,
      theme: {
        border: "border-t-4 border-t-brand-gold border-brand-sand dark:border-brand-sand/10 hover:border-brand-gold/60",
        badge: "bg-brand-gold/15 text-brand-gold dark:text-brand-gold-light border border-brand-gold/30",
        iconBox: "bg-brand-gold/15 text-brand-gold dark:text-brand-gold-light border border-brand-gold/20",
        link: "text-brand-gold dark:text-brand-gold-light hover:text-brand-gold/80",
        hoverTitle: "group-hover:text-brand-gold dark:group-hover:text-brand-gold-light",
      },
    },
    {
      name: "Powdered Spices",
      slug: "powdered-spices",
      desc: "Fine grounded chillies, cumin, coriander, and turmeric powders with locked-in natural oils.",
      badge: "Ground & Blends",
      icon: Sparkles,
      theme: {
        border: "border-t-4 border-t-amber-600 dark:border-t-amber-500 border-brand-sand dark:border-brand-sand/10 hover:border-amber-500/60",
        badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30",
        iconBox: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/20",
        link: "text-amber-700 dark:text-amber-300 hover:text-amber-800",
        hoverTitle: "group-hover:text-amber-600 dark:group-hover:text-amber-300",
      },
    },
    {
      name: "Herbs",
      slug: "herbs",
      desc: "High quality organic psyllium husk (Isabgol), senna leaves, and ajwain seeds.",
      badge: "Botanicals",
      icon: Sprout,
      theme: {
        border: "border-t-4 border-t-brand-green dark:border-t-brand-green-light border-brand-sand dark:border-brand-sand/10 hover:border-brand-green/60",
        badge: "bg-brand-green/15 dark:bg-brand-green-light/15 text-brand-green dark:text-brand-green-light border border-brand-green/30 dark:border-brand-green-light/30",
        iconBox: "bg-brand-green/15 dark:bg-brand-green-light/15 text-brand-green dark:text-brand-green-light border border-brand-green/30 dark:border-brand-green-light/30",
        link: "text-brand-green dark:text-brand-green-light hover:text-brand-green/80",
        hoverTitle: "group-hover:text-brand-green dark:group-hover:text-brand-green-light",
      },
    },
  ];

  const features = [
    {
      title: "Stringent Quality Control",
      desc: "Every batch is inspected for Aflatoxin and Sudan dye compliance, verified by Spices Board of India and SGS Labs.",
      icon: ShieldCheck,
    },
    {
      title: "Global Custom Logistics",
      desc: "Handling sea-cargo freight and customs clearances to major ports worldwide with precision.",
      icon: Globe,
    },
    {
      title: "Customer-First Blending",
      desc: "We customize grinding mesh sizes, packaging weight, labeling, and purity grades to match your specific country laws.",
      icon: HeartHandshake,
    },
    {
      title: "Advanced Processing Hub",
      desc: "Cleaned, sorted, and packed using state-of-the-art color sorter and gravity separator systems.",
      icon: Settings,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-brand-earth py-24 sm:py-32 flex items-center justify-center min-h-[85vh]">
        {/* Background Gradients and Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,67,50,0.35),transparent_50%)]" />
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-green/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-brand-gold/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-gold text-xs font-semibold uppercase tracking-wider">
            <Award className="h-4 w-4" />
            <span>Government Recognized Export House</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none max-w-4xl mx-auto">
            Connecting India's Premium <span className="text-brand-gold">Agriculture</span> to Global Markets
          </h1>

          <p className="text-lg sm:text-xl text-brand-sand/80 max-w-2xl mx-auto leading-relaxed">
            Diyan Exports is a customer-first international trading house based in Mehsana, Gujarat. We source, process, and supply customized agricultural commodities meeting global quality compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-green text-white font-semibold shadow-lg hover:bg-brand-green/90 hover:translate-y-[-1px] active:translate-y-[0px] transition-all group"
            >
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-transparent text-white font-semibold border border-brand-sand/30 hover:bg-white/5 transition-colors"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Brand Positioning Section (Swani Spice Style) */}
      <section className="py-20 bg-background border-b border-brand-sand dark:border-brand-sand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
                Purely Customer Centric
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-earth dark:text-white">
                Uncompromising Quality. Tailored to Your Specifications.
              </h2>
              <p className="text-foreground/75 dark:text-brand-sand/80 leading-relaxed">
                As a new-generation merchant exporter, we focus strictly on **Customer Satisfaction**. We don't believe in one-size-fits-all. Diyan Exports delivers customized processing solutions, aligning sorting parameters, packing weights, and blending grades to match your specific corporate and geographic standards.
              </p>
              <p className="text-foreground/75 dark:text-brand-sand/80 leading-relaxed">
                From procurement at major APMC yards to final containerization, our systems prioritize hygiene and chemical safety. We partner with farmers to procure raw seeds, ensuring freshness, organic viability, and traceability.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-brand-earth/50 p-6 rounded-2xl border border-brand-sand dark:border-brand-sand/10 border-t-2 border-t-brand-green dark:border-t-brand-green-light text-center space-y-2 shadow-sm">
                <span className="block text-4xl font-extrabold text-brand-green dark:text-brand-green-light">100%</span>
                <span className="text-xs font-semibold text-brand-earth dark:text-white uppercase tracking-wider">Aflatoxin Compliant</span>
              </div>
              <div className="bg-white dark:bg-brand-earth/50 p-6 rounded-2xl border border-brand-sand dark:border-brand-sand/10 border-t-2 border-t-brand-green dark:border-t-brand-green-light text-center space-y-2 shadow-sm">
                <span className="block text-4xl font-extrabold text-brand-green dark:text-brand-green-light">99.5%</span>
                <span className="text-xs font-semibold text-brand-earth dark:text-white uppercase tracking-wider">Seed Purity Grade</span>
              </div>
              <div className="bg-white dark:bg-brand-earth/50 p-6 rounded-2xl border border-brand-sand dark:border-brand-sand/10 border-t-2 border-t-brand-green dark:border-t-brand-green-light text-center space-y-2 shadow-sm">
                <span className="block text-4xl font-extrabold text-brand-green dark:text-brand-green-light">Flexible</span>
                <span className="text-xs font-semibold text-brand-earth dark:text-white uppercase tracking-wider">Airtight Packaging</span>
              </div>
              <div className="bg-white dark:bg-brand-earth/50 p-6 rounded-2xl border border-brand-sand dark:border-brand-sand/10 border-t-2 border-t-brand-green dark:border-t-brand-green-light text-center space-y-2 shadow-sm">
                <span className="block text-4xl font-extrabold text-brand-green dark:text-brand-green-light">Client</span>
                <span className="text-xs font-semibold text-brand-earth dark:text-white uppercase tracking-wider">First Philosophy</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Categories (Proper Color Grading) */}
      <section className="py-20 bg-brand-sand/20 dark:bg-brand-earth/30 relative overflow-hidden">
        {/* Subtle Ambient Decorative Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-gold/5 dark:bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
              Direct from India's Agro Belts
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-earth dark:text-white">
              Exporter Commodities
            </h2>
            <p className="text-foreground/70 dark:text-brand-sand/70 max-w-xl mx-auto">
              We process and pack spices, seeds, grains, and herbs conforming to global import parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className={`bg-white dark:bg-brand-earth/95 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border flex flex-col justify-between group ${cat.theme.border}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl ${cat.theme.iconBox} shadow-sm group-hover:scale-110 transition-transform`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${cat.theme.badge}`}>
                        {cat.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className={`font-bold text-lg text-brand-earth dark:text-white ${cat.theme.hoverTitle} transition-colors`}>
                        {cat.name}
                      </h3>
                      <p className="text-sm text-foreground/75 dark:text-brand-sand/80 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/products/${cat.slug}`}
                    className={`mt-6 inline-flex items-center text-sm font-semibold ${cat.theme.link} transition-colors group/link`}
                  >
                    Explore Catalog
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Rolling Certifications Carousel */}
      <Certifications />

      {/* 5. Key Strengths / Why Choose Us (Proper Color Grading) */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-3">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-earth dark:text-white">
              Why Global Buyers Partner with Diyan Exports
            </h2>
            <p className="text-foreground/70 dark:text-brand-sand/70 max-w-xl mx-auto text-sm">
              We align our manufacturing, logistics, and quality assurance divisions to focus entirely on customer delivery standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="space-y-4 text-center sm:text-left bg-white dark:bg-brand-earth/95 p-6 rounded-2xl border border-brand-sand dark:border-brand-sand/10 border-t-2 border-t-brand-green dark:border-t-brand-green-light hover:border-brand-green/50 dark:hover:border-brand-green-light/50 shadow-sm transition-all group"
                >
                  <div className="mx-auto sm:mx-0 p-3 rounded-xl w-fit bg-brand-green/15 dark:bg-brand-green-light/20 text-brand-green dark:text-brand-green-light border border-brand-green/20 dark:border-brand-green-light/30 shadow-sm group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg text-brand-earth dark:text-white group-hover:text-brand-green dark:group-hover:text-brand-green-light transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Banner Call-to-action */}
      <section className="bg-brand-green py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,134,11,0.2),transparent_40%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Need Premium Commodities Formulated to Your Specifications?
          </h2>
          <p className="text-brand-sand/85 max-w-xl mx-auto">
            Get in touch with our trade specialists. We customize grain sorting, moisture content, grinding mesh sizing, and bag labeling to match your exact commercial requirements.
          </p>
          <div className="pt-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-gold text-brand-earth font-bold hover:bg-brand-gold/90 transition-colors shadow-lg"
            >
              Launch Enquiry Sheet
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
