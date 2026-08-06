import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const contactDetails = {
    address: "Poojan complex, G-9, Modhera Rd, Mehsana, Gujarat, India.",
    phone: ["+91 9904061671", "+91 7016174814"],
    email: "inquiry@diyanexports.com",
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM (IST)",
  };

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header Hero */}
      <section className="bg-brand-earth text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,63,32,0.25),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Contact Us</h1>
          <p className="text-brand-sand/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Get in touch with us for trade collaborations, sample requests, or custom export queries.
          </p>
        </div>
      </section>

      {/* 2. Office Information and Options */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-earth dark:text-white">
                Headquarters
              </h2>
              <p className="text-foreground/75 dark:text-brand-sand/80 leading-relaxed">
                Our central operations and commodity grading office is located in Mehsana, Gujarat, India. Visit us or write to our customer support desk.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/10 p-3 rounded-xl text-brand-green mt-0.5 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-earth dark:text-brand-gold">Address</h3>
                  <p className="text-sm text-foreground/75 dark:text-brand-sand/80 leading-relaxed mt-1">
                    {contactDetails.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/10 p-3 rounded-xl text-brand-green mt-0.5 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-earth dark:text-brand-gold">Call Us</h3>
                  <ul className="text-sm text-foreground/75 dark:text-brand-sand/80 space-y-1 mt-1">
                    {contactDetails.phone.map((ph, idx) => (
                      <li key={idx}>
                        <a href={`tel:${ph.replace(/\s+/g, "")}`} className="hover:text-brand-green transition-colors">
                          {ph}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/10 p-3 rounded-xl text-brand-green mt-0.5 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-earth dark:text-brand-gold">Email</h3>
                  <p className="text-sm mt-1">
                    <a href={`mailto:${contactDetails.email}`} className="text-brand-green hover:underline">
                      {contactDetails.email}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-brand-green/10 p-3 rounded-xl text-brand-green mt-0.5 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-earth dark:text-brand-gold">Business Hours</h3>
                  <p className="text-sm text-foreground/75 dark:text-brand-sand/80 mt-1">
                    {contactDetails.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-brand-sand/40 dark:bg-brand-earth/50 p-8 rounded-3xl border border-brand-sand dark:border-brand-sand/15 text-center space-y-6">
            <h3 className="text-xl font-bold text-brand-earth dark:text-white">How Can We Help You?</h3>
            <p className="text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed">
              We process container loads for spices (Cumin, Fennel, Chilli), sesame seeds, and pulses. If you need a price quotation, sample testing certificate, or shipping cost calculations, please submit our detailed enquiry form.
            </p>
            <div className="pt-4">
              <Link
                href="/enquiry"
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-brand-green text-white font-bold hover:bg-brand-earth transition-colors group shadow"
              >
                Go to Enquiry Form
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
