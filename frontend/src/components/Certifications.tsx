"use client";

import { useState } from "react";
import { X, Award, ShieldCheck, FileCheck, CheckCircle2, BookmarkCheck } from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  authority: string;
  certNumber: string;
  scope: string;
  validUntil: string;
  details: string;
}

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: "iso22000",
      name: "ISO 22000:2018",
      authority: "Food Safety Management System (FSMS)",
      certNumber: "IN-908271-FS",
      scope: "Processing, Cleaning, Sorting, and Exporting of Seeds, Spices, and Agricultural Commodities.",
      validUntil: "12-Aug-2028",
      details: "Internationally recognized standard for control of food safety hazards across the export distribution chain.",
    },
    {
      id: "haccp",
      name: "HACCP Certified",
      authority: "Hazard Analysis Critical Control Point",
      certNumber: "HP-3091-HA",
      scope: "Hygienic processing, grading, sorting, and airtight packing of whole & ground spices.",
      validUntil: "24-Oct-2027",
      details: "Ensures critical processing points are continuously monitored to prevent physical, chemical, or biological contamination.",
    },
    {
      id: "spicesboard",
      name: "Spices Board of India",
      authority: "Ministry of Commerce & Industry, Govt. of India",
      certNumber: "SB-EXP-2026-882",
      scope: "Registered Exporter of Spices and Cardamom derivatives.",
      validUntil: "31-Mar-2030",
      details: "Mandatory registration confirming our standing as an official merchant exporter from the Govt. of India.",
    },
    {
      id: "apeda",
      name: "APEDA Member",
      authority: "Agricultural & Processed Food Products Export Development Authority",
      certNumber: "AP-REG-0987-AG",
      scope: "Export of agricultural commodities, pulses, oil seeds, and non-basmati grains.",
      validUntil: "15-Jan-2029",
      details: "Confirms our products comply with national export standards for quality, pest control, and standard packaging.",
    },
    {
      id: "fda",
      name: "FDA Compliant",
      authority: "US Food and Drug Administration (Facility Registry)",
      certNumber: "FDA-REG-1092873",
      scope: "Processing and export of human food commodities to the United States.",
      validUntil: "31-Dec-2027",
      details: "Confirms our facilities comply with USA food manufacturing guidelines and sanitary conditions.",
    },
    {
      id: "halal",
      name: "HALAL Certified",
      authority: "Halal India Certification Authority",
      certNumber: "HI-CERT-7736-H",
      scope: "100% vegetarian agricultural products, spices, and oil seeds.",
      validUntil: "09-Jun-2028",
      details: "Guarantees that products are prepared, processed, and packed strictly in accordance with Islamic dietary laws.",
    },
    {
      id: "kosher",
      name: "KOSHER Certified",
      authority: "Global Kosher Registries",
      certNumber: "GK-REG-4491-K",
      scope: "Pure spices, hulled seeds, and organic herbs.",
      validUntil: "20-Sep-2028",
      details: "Verifies the purity of processing systems, confirming zero cross-contamination with non-kosher ingredients.",
    },
  ];

  return (
    <section className="py-20 bg-brand-sand/15 overflow-hidden border-t border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
            Quality Credentials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-earth dark:text-white">
            Global Certifications & Accreditations
          </h2>
          <p className="text-foreground/75 max-w-xl mx-auto text-sm">
            Our processing systems are certified by leading global agencies, confirming compliance with hygiene, quality, and export trade regulations. Click any card to preview.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full flex overflow-x-hidden py-4">
          <div className="flex space-x-6 animate-marquee whitespace-nowrap min-w-full">
            {/* Double the list for infinite looping */}
            {[...certificates, ...certificates].map((cert, index) => (
              <button
                key={`${cert.id}-${index}`}
                onClick={() => setActiveCert(cert)}
                className="flex-shrink-0 w-72 bg-white dark:bg-brand-earth/95 p-6 rounded-2xl border border-brand-sand/70 dark:border-brand-sand/10 hover:border-brand-green hover:shadow-md hover:scale-[1.01] transition-all text-left flex flex-col justify-between cursor-pointer space-y-4"
              >
                <div className="space-y-2">
                  <div className="bg-brand-green/10 text-brand-green dark:text-green-400 p-2 rounded-xl w-fit">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-brand-earth dark:text-white whitespace-normal leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-brand-gold font-semibold tracking-wide uppercase">
                    {cert.authority.length > 35 ? `${cert.authority.substring(0, 35)}...` : cert.authority}
                  </p>
                </div>
                <div className="text-xs text-brand-green dark:text-green-400 font-bold flex items-center">
                  Click to View Certificate
                </div>
              </button>
            ))}
          </div>

          {/* Gradient Overlays for smooth side fades */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

      </div>

      {/* Certificate Modal Overlay */}
      {activeCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 transition-opacity">
          <div className="relative w-full max-w-2xl bg-[#fdfbf7] rounded-3xl border-4 border-double border-brand-gold/60 p-8 sm:p-12 shadow-2xl text-center space-y-8 flex flex-col justify-between items-center text-brand-earth max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-brand-sand/50 text-brand-earth transition-colors"
              aria-label="Close Modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Certificate Header Decoration */}
            <div className="space-y-2 flex flex-col items-center">
              <div className="bg-brand-green p-4 rounded-full text-brand-gold shadow-md">
                <ShieldCheck className="h-10 w-10 animate-pulse" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Certificate of Compliance
              </span>
            </div>

            {/* Certificate Document Content */}
            <div className="space-y-6 max-w-lg w-full border-t border-b border-brand-gold/20 py-6">
              <div>
                <span className="text-xs text-foreground/50 uppercase tracking-wider block">Standard</span>
                <h3 className="text-2xl font-extrabold tracking-tight text-brand-green">
                  {activeCert.name}
                </h3>
              </div>

              <div>
                <span className="text-xs text-foreground/50 uppercase tracking-wider block">Issued To</span>
                <span className="text-xl font-extrabold tracking-tight text-brand-earth">
                  DIYAN EXPORTS
                </span>
                <p className="text-xs text-foreground/60 mt-1">
                  Mehsana Office, Gujarat, India.
                </p>
              </div>

              <div>
                <span className="text-xs text-foreground/50 uppercase tracking-wider block">Scope of Certification</span>
                <p className="text-sm text-brand-earth/90 leading-relaxed font-medium mt-1">
                  {activeCert.scope}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-left bg-brand-sand/35 p-4 rounded-xl border border-brand-gold/10">
                <div>
                  <span className="text-[10px] text-foreground/50 uppercase tracking-wider block">Cert Number</span>
                  <span className="text-xs font-bold text-brand-earth">{activeCert.certNumber}</span>
                </div>
                <div>
                  <span className="text-[10px] text-foreground/50 uppercase tracking-wider block">Valid Until</span>
                  <span className="text-xs font-bold text-brand-earth">{activeCert.validUntil}</span>
                </div>
              </div>
            </div>

            {/* Certificate Footer Signature Seal */}
            <div className="flex justify-between items-center w-full max-w-md pt-4">
              <div className="text-left space-y-1">
                <div className="font-serif italic text-sm text-brand-earth/70">Diyan Quality Board</div>
                <div className="h-0.5 w-24 bg-brand-earth/30" />
                <div className="text-[10px] uppercase text-foreground/50 tracking-wider">Authorized Signature</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="border border-dashed border-brand-gold p-1 rounded-full">
                  <div className="bg-brand-gold/10 text-brand-gold rounded-full h-12 w-12 flex items-center justify-center text-xs font-extrabold uppercase border border-brand-gold/20">
                    SEAL
                  </div>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-brand-gold mt-1">Verified Authenticity</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
