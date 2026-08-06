"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Wheat } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Quality Policy", href: "/quality" },
    { name: "Enquiry Form", href: "/enquiry" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-brand-sand dark:border-brand-sand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-brand-green p-2 rounded-lg text-brand-gold group-hover:scale-105 transition-transform">
              <Wheat className="h-6 w-6" />
            </div>
            <span className="font-sans text-xl font-bold tracking-tight text-brand-earth dark:text-white">
              DIYAN <span className="text-brand-green dark:text-brand-gold">EXPORTS</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-colors hover:text-brand-green dark:hover:text-green-400 ${
                  isActive(link.href)
                    ? "text-brand-green dark:text-green-400 font-semibold"
                    : "text-foreground/75"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand-green text-white font-medium text-sm hover:bg-brand-earth transition-colors group"
            >
              Get a Quote
              <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-brand-sand transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-brand-sand bg-background">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${
                  isActive(link.href)
                    ? "bg-brand-sand dark:bg-brand-earth text-brand-green dark:text-green-400 font-semibold"
                    : "text-foreground/75 hover:bg-brand-sand dark:hover:bg-brand-earth hover:text-brand-green dark:hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                href="/enquiry"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-brand-green text-white font-medium text-base hover:bg-brand-earth transition-colors"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
