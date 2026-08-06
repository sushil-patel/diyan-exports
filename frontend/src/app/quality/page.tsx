import { CheckCircle2, Eye, Compass } from "lucide-react";

export default function Quality() {
  const points = [
    "Products are tested by the Spices Board of India and SGS Labs to ensure international compliance.",
    "Aflatoxin levels (4 levels check) and Sudan Dye levels (5 levels check) are strictly verified.",
    "Raw materials are stored in dry, temperature-controlled warehouse conditions to prevent pest or mold infestation.",
    "Pesticide residue testing is carried out for all organic shipments to ensure zero trace contaminants.",
    "Airtight poly packs and corrugated master cartoon boxes are used to prevent leakage during sea transit.",
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Hero */}
      <section className="bg-brand-earth text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,138,0,0.2),transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Quality Policy</h1>
          <p className="text-brand-sand/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Purity and standard compliance are the foundation of Diyan Exports.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-earth dark:text-white">
              Our Commitment to Purity
            </h2>
            <p className="text-foreground/75 dark:text-brand-sand/85 leading-relaxed">
              We understand the critical regulatory rules that global governments enforce for food items. To guarantee absolute safety, our spices and seeds pass through stringent quality checks right from the stage of farm procurement to loading:
            </p>
            <ul className="space-y-4">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80 dark:text-brand-sand/90 leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision & Mission Card */}
          <div className="bg-brand-sand/40 dark:bg-brand-earth/50 p-8 rounded-3xl border border-brand-sand dark:border-brand-sand/15 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-earth dark:text-brand-gold uppercase tracking-wider">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed">
                To become the one-stop destination for agricultural products across global retail, industrial, and food service segments, constantly innovating to deliver premium value for money.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-earth dark:text-brand-gold uppercase tracking-wider">
                  Our Mission
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed list-disc list-inside">
                <li>Adopt international grading and hygiene practices.</li>
                <li>Support a sustainable global environment.</li>
                <li>Ensure fair pricing structure to under-privileged farmers.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
