import Link from "next/link";
import { Wheat, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Quality Policy", href: "/quality" },
      { name: "Contact Us", href: "/contact" },
    ],
    products: [
      { name: "Spices", href: "/products/spices" },
      { name: "Oil Seeds", href: "/products/oil-seeds" },
      { name: "Powdered Spices", href: "/products/powdered-spices" },
      { name: "Herbs", href: "/products/herbs" },
    ],
  };

  return (
    <footer className="bg-brand-earth text-brand-sand border-t border-brand-earth/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-green p-1.5 rounded text-brand-gold">
                <Wheat className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                DIYAN <span className="text-brand-gold">EXPORTS</span>
              </span>
            </div>
            <p className="text-sm text-brand-sand/70 leading-relaxed">
              Exporting premium quality spices, oil seeds, herbs, and grains from India to the world. Committed to purity, standard quality, and trust.
            </p>
          </div>

          {/* Links: Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-sand/80">
              {links.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-brand-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-sand/80">
              {links.products.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-brand-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info: Contact Address */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Registered Office
            </h3>
            <ul className="space-y-3 text-sm text-brand-sand/80">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-gold flex-shrink-0" />
                <span>
                  Poojan complex, G-9, Modhera Rd, Mehsana, Gujarat, India.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span>+91 9904061671, +91 7016174814</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:inquiry@diyanexports.com" className="hover:text-brand-gold transition-colors">
                  inquiry@diyanexports.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-brand-sand/15 text-center text-xs text-brand-sand/50">
          <p>© {currentYear} Diyan Exports. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
