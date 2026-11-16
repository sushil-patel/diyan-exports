import Link from "next/link";
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react";

async function getProductDetail(productSlug: string) {
  try {
    const res = await fetch(`http://localhost:8080/api/products/${productSlug}`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch product details for ${productSlug}`);
    }
    return res.json();
  } catch (error) {
    console.error(`Error fetching product details for ${productSlug}:`, error);
    return null;
  }
}

interface Product {
  id: number;
  name: string;
  slug: string;
  botanicalName: string;
  description: string;
  specifications: Record<string, string>;
}

interface Props {
  params: Promise<{
    categorySlug: string;
    productSlug: string;
  }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { categorySlug, productSlug } = await params;
  const product: Product | null = await getProductDetail(productSlug);

  if (!product) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 p-8 bg-brand-sand/30 rounded-3xl border border-brand-sand/50 max-w-md">
          <h2 className="text-xl font-bold text-brand-earth">Product Not Found</h2>
          <p className="text-sm text-foreground/70">
            We couldn't retrieve details for <code className="bg-brand-sand px-1.5 py-0.5 rounded text-brand-spice">{productSlug}</code>. Make sure your local Spring Boot backend is running.
          </p>
          <Link href={`/products/${categorySlug}`} className="inline-flex items-center text-sm font-semibold text-brand-green hover:underline">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Category
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Header Hero */}
      <section className="bg-brand-earth text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,67,50,0.25),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            href={`/products/${categorySlug}`}
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Category Products
          </Link>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">{product.name}</h1>
          {product.botanicalName && (
            <span className="inline-block px-3 py-1 rounded bg-brand-green/30 border border-brand-green/20 text-brand-gold text-xs font-semibold italic tracking-wider">
              Botanical Name: {product.botanicalName}
            </span>
          )}
        </div>
      </section>

      {/* Main Content & Specs Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Description Block */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-brand-earth dark:text-white">Product Description</h2>
            <p className="text-foreground/75 dark:text-brand-sand/80 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>

            <div className="p-6 bg-brand-sand/30 dark:bg-brand-earth/50 rounded-2xl border border-brand-sand dark:border-brand-sand/15 space-y-4">
              <h3 className="font-bold text-brand-earth dark:text-white flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-brand-green dark:text-brand-green-light" />
                <span>Export Packaging Options</span>
              </h3>
              <p className="text-xs text-foreground/70 dark:text-brand-sand/80 leading-relaxed">
                Standard packing is available in 25 Kg, 50 Kg multi-layer Paper Bags, HDPE/PP bags, or customized jute bags with poly-liner inside. Labeling is customized according to buyer requirements.
              </p>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-brand-earth dark:text-white">Technical Specifications</h2>
            
            {product.specifications && Object.keys(product.specifications).length > 0 ? (
              <div className="border border-brand-sand dark:border-brand-sand/15 rounded-2xl overflow-hidden bg-white dark:bg-brand-earth/95 shadow-sm">
                <table className="min-w-full divide-y divide-brand-sand dark:divide-brand-sand/15">
                  <thead className="bg-brand-sand/50 dark:bg-brand-earth/50">
                    <tr>
                      <th scope="col" className="px-6 py-3.5 text-left text-xs font-bold text-brand-earth dark:text-brand-gold uppercase tracking-wider">
                        Parameter
                      </th>
                      <th scope="col" className="px-6 py-3.5 text-left text-xs font-bold text-brand-earth dark:text-brand-gold uppercase tracking-wider">
                        Specification Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-brand-sand dark:divide-brand-sand/15 text-sm">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <tr key={key} className="hover:bg-brand-sand/20 dark:hover:bg-brand-earth/40 transition-colors">
                        <td className="px-6 py-4 font-semibold text-brand-earth dark:text-brand-sand capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </td>
                        <td className="px-6 py-4 text-foreground/80 dark:text-brand-sand/90">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-foreground/60 dark:text-brand-sand/65 italic">
                No formal specifications defined for this product. Contact us for custom quality sheets.
              </p>
            )}

            {/* Quick Contact CTA */}
            <div className="bg-brand-earth text-white p-6 rounded-2xl space-y-4 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(27,67,50,0.4),transparent_50%)]" />
              <h3 className="font-bold relative z-10">Request Sample or Quote</h3>
              <p className="text-xs text-brand-sand/80 leading-relaxed relative z-10">
                Interested in bulk orders of {product.name}? Submit an enquiry specifying requirements and target port.
              </p>
              <div className="pt-2 relative z-10">
                <Link
                  href={`/enquiry?product=${product.slug}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand-gold text-brand-earth font-bold text-sm hover:bg-brand-gold/90 transition-colors"
                >
                  <Send className="mr-1.5 h-4 w-4" />
                  Inquire Now
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
