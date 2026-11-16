"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

function EnquiryForm() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    tel: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Auto-populate message if product query parameter is present (e.g. from Product Detail page)
  useEffect(() => {
    const productSlug = searchParams.get("product");
    if (productSlug) {
      const productName = productSlug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setFormData((prev) => ({
        ...prev,
        message: `Hello, we would like to request price quotations, test certificates, and samples for ${productName}. Please advise on delivery timelines and packing options.`,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setServerError(null);
    setFieldErrors({});

    try {
      const res = await fetch("http://localhost:8080/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(
            `${process.env.NEXT_PUBLIC_ENQUIRY_USERNAME}:${process.env.NEXT_PUBLIC_ENQUIRY_PASSWORD}`
          )}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", address: "", email: "", tel: "", message: "" });
      } else if (res.status === 400 && data.details) {
        // Backend validation errors mapping
        setFieldErrors(data.details);
      } else {
        setServerError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setServerError("Unable to connect to the backend server. Please verify Spring Boot is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-brand-earth/95 rounded-3xl border border-brand-sand dark:border-brand-sand/15 p-8 md:p-12 shadow-sm space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold text-brand-earth dark:text-white">Enquiry Intake Sheet</h2>
        <p className="text-xs text-foreground/60 dark:text-brand-sand/60">Fields marked with * are mandatory for processing.</p>
      </div>

      {/* Success Notification */}
      {success && (
        <div className="flex items-start space-x-3 bg-brand-green/10 dark:bg-brand-green/15 border border-brand-green/20 dark:border-brand-green/25 text-brand-green dark:text-brand-green-light p-4 rounded-xl">
          <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold">Enquiry Submitted Successfully!</h4>
            <p className="text-xs leading-relaxed mt-0.5">
              Thank you for your interest!
            </p>
          </div>
        </div>
      )}

      {/* General Server Error Notification */}
      {serverError && (
        <div className="flex items-start space-x-3 bg-brand-spice/10 dark:bg-brand-spice/15 border border-brand-spice/20 dark:border-brand-spice/25 text-brand-spice dark:text-brand-spice-light p-4 rounded-xl">
          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-bold">Submission Failed</h4>
            <p className="text-xs leading-relaxed mt-0.5">{serverError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="space-y-1">
          <label htmlFor="name" className="block text-sm font-semibold text-brand-earth dark:text-brand-sand">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 ${
              fieldErrors.name 
                ? "border-brand-spice focus:ring-brand-spice/20" 
                : "border-brand-sand dark:border-brand-sand/10 focus:ring-brand-green/20 focus:border-brand-green"
            }`}
          />
          {fieldErrors.name && (
            <span className="block text-xs font-semibold text-brand-spice">{fieldErrors.name}</span>
          )}
        </div>

        {/* Email Input */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-semibold text-brand-earth dark:text-brand-sand">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="customer@domain.com"
            className={`w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 ${
              fieldErrors.email 
                ? "border-brand-spice focus:ring-brand-spice/20" 
                : "border-brand-sand dark:border-brand-sand/10 focus:ring-brand-green/20 focus:border-brand-green"
            }`}
          />
          {fieldErrors.email && (
            <span className="block text-xs font-semibold text-brand-spice">{fieldErrors.email}</span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Input */}
          <div className="space-y-1">
            <label htmlFor="tel" className="block text-sm font-semibold text-brand-earth dark:text-brand-sand">
              Telephone / Mobile
            </label>
            <input
              type="text"
              id="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              placeholder="+1 (555) 019-2834"
              className="w-full px-4 py-3 rounded-xl border border-brand-sand dark:border-brand-sand/10 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
            />
          </div>

          {/* Address Input */}
          <div className="space-y-1">
            <label htmlFor="address" className="block text-sm font-semibold text-brand-earth dark:text-brand-sand">
              Physical Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Street, State, Country"
              className="w-full px-4 py-3 rounded-xl border border-brand-sand dark:border-brand-sand/10 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
            />
          </div>
        </div>

        {/* Requirement Message Input */}
        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-semibold text-brand-earth dark:text-brand-sand">
            Requirement Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="List specifications, volume (MT), packaging preference, and target port..."
            className={`w-full px-4 py-3 rounded-xl border bg-background text-sm focus:outline-none focus:ring-2 ${
              fieldErrors.message 
                ? "border-brand-spice focus:ring-brand-spice/20" 
                : "border-brand-sand dark:border-brand-sand/10 focus:ring-brand-green/20 focus:border-brand-green"
            }`}
          />
          {fieldErrors.message && (
            <span className="block text-xs font-semibold text-brand-spice">{fieldErrors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-brand-green text-white font-bold hover:bg-brand-earth transition-colors disabled:opacity-50 disabled:cursor-not-allowed group shadow"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting Enquiry...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Submit Request
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function EnquiryPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header Hero */}
      <section className="bg-brand-earth text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,67,50,0.25),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Send an Enquiry</h1>
          <p className="text-brand-sand/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Fill in the form below. We will analyze your specification requirements and respond promptly.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="bg-white dark:bg-brand-earth/95 rounded-3xl border border-brand-sand p-8 md:p-12 shadow-sm text-center py-16 flex flex-col items-center justify-center space-y-3">
              <Loader2 className="h-8 w-8 text-brand-green animate-spin" />
              <p className="text-sm text-foreground/50">Loading Enquiry Form...</p>
            </div>
          }
        >
          <EnquiryForm />
        </Suspense>
      </section>
    </div>
  );
}
