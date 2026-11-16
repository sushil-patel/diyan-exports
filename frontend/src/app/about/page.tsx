import { Award, ShieldCheck, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Hero */}
      <section className="bg-brand-earth text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,67,50,0.25),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">About Us</h1>
          <p className="text-brand-sand/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Learn about Diyan Exports' legacy, values, and commitment to global trade quality.
          </p>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
              Government Recognized Export House
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-earth dark:text-white">
              About Diyan Exports
            </h2>
            <p className="text-foreground/75 dark:text-brand-sand/80 leading-relaxed">
              Diyan Exports is a name synonymous with premium Spices, Herbs, and Agricultural Commodities for several years. We are a professionally managed firm powered by a team of committed experts who understand the diverse tastes, strict quality regulations, and logistics demands of our esteemed clients across the globe.
            </p>
            <p className="text-foreground/75 dark:text-brand-sand/80 leading-relaxed">
              Our product range encompasses the entire spectrum of spices and their derivatives, processed, cleaned, and packed strictly as per the requirements of customers. We pride ourselves on competitiveness, consistent quality, and building long-term global relationships.
            </p>
          </div>

          <div className="bg-brand-sand/40 dark:bg-brand-earth/50 p-8 rounded-3xl border border-brand-sand dark:border-brand-sand/15 space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-brand-green/15 p-2.5 rounded-xl text-brand-green dark:text-brand-green-light border border-brand-green/20 mt-1 shadow-sm">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-brand-earth dark:text-white text-lg">World-Class Standards</h3>
                <p className="text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed mt-1">
                  We maintain strict quality check guidelines from initial stage of procurement directly from farmers to final container seal.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-brand-green/15 p-2.5 rounded-xl text-brand-green dark:text-brand-green-light border border-brand-green/20 mt-1 shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-brand-earth dark:text-white text-lg">Safe Airtight Packing</h3>
                <p className="text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed mt-1">
                  Products are packed in customized poly packs or high-density bags to ensure zero moisture contamination during transit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Our Team Section */}
        <div className="space-y-8 pt-8 border-t border-brand-sand dark:border-brand-sand/15">
          <div className="text-center space-y-3">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
              Operational Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-earth dark:text-white">
              Our Strength lies in Our Experts
            </h2>
            <p className="text-foreground/70 dark:text-brand-sand/70 max-w-xl mx-auto text-sm">
              Our team consists of specialists with rich experience in marketing, commodity grading, and international logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-brand-earth/95 p-6 rounded-2xl border border-brand-sand dark:border-brand-sand/15 border-t-2 border-t-brand-green dark:border-t-brand-green-light text-center space-y-3 shadow-sm group">
              <div className="bg-brand-green/15 text-brand-green dark:text-brand-green-light h-12 w-12 rounded-2xl border border-brand-green/20 flex items-center justify-center mx-auto text-lg font-bold group-hover:scale-105 transition-transform shadow-sm">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-brand-earth dark:text-white group-hover:text-brand-green dark:group-hover:text-brand-green-light transition-colors">Procurement Specialists</h3>
              <p className="text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed">
                Directly connected with farmer cooperatives in APMC market yards (specifically Unjha and surrounding regions) to source raw seeds at peak freshness.
              </p>
            </div>

            <div className="bg-white dark:bg-brand-earth/95 p-6 rounded-2xl border border-brand-sand dark:border-brand-sand/15 border-t-2 border-t-brand-green dark:border-t-brand-green-light text-center space-y-3 shadow-sm group">
              <div className="bg-brand-green/15 text-brand-green dark:text-brand-green-light h-12 w-12 rounded-2xl border border-brand-green/20 flex items-center justify-center mx-auto text-lg font-bold group-hover:scale-105 transition-transform shadow-sm">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-brand-earth dark:text-white group-hover:text-brand-green dark:group-hover:text-brand-green-light transition-colors">Logistics Operators</h3>
              <p className="text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed">
                Experts in container logistics, custom clearances at major Indian ports, and international shipping guidelines to ensure hassle-free deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
