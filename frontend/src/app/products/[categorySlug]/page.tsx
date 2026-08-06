import Link from "next/link";
import { ArrowLeft, ArrowRight, Wheat } from "lucide-react";

async function getCategoryProducts(categorySlug: string) {
  try {
    const res = await fetch(`http://localhost:8080/api/categories/${categorySlug}`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch products for category ${categorySlug}`);
    }
    return res.json();
  } catch (error) {
    console.error(`Error fetching products for ${categorySlug}:`, error);
    return [];
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
  }>;
}

export default async function CategoryProductsPage({ params }: Props) {
  const { categorySlug } = await params;
  const products: Product[] = await getCategoryProducts(categorySlug);
  
  // Format slug name for presentation if fallback is empty
  const categoryName = categorySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bg-background min-h-screen">
      {/* Header Hero */}
      <section className="bg-brand-earth text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,63,32,0.25),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Link
            href="/products"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Categories
          </Link>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">{categoryName}</h1>
          <p className="text-brand-sand/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            High-grade quality parameters processed at our Mehsana operations hub.
          </p>
        </div>
      </section>

      {/* Products Listing Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.length === 0 ? (
          <div className="text-center py-16 bg-brand-sand/30 rounded-3xl border border-brand-sand/50 space-y-4">
            <Wheat className="h-12 w-12 text-brand-gold mx-auto animate-pulse" />
            <h2 className="text-xl font-bold text-brand-earth">No Products Found</h2>
            <p className="text-foreground/70 max-w-md mx-auto text-sm">
              Please check if the backend contains seed data for the category <code className="bg-brand-sand px-1.5 py-0.5 rounded text-brand-spice">{categorySlug}</code>.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="bg-white dark:bg-brand-earth/95 rounded-3xl border border-brand-sand dark:border-brand-sand/10 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="p-6 space-y-4 flex-grow">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-brand-earth dark:text-white group-hover:text-brand-green transition-colors">
                      {prod.name}
                    </h2>
                    {prod.botanicalName && (
                      <span className="block text-xs font-semibold text-brand-gold italic tracking-wider">
                        Botanical Name: {prod.botanicalName}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed line-clamp-3">
                    {prod.description}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link
                    href={`/products/${categorySlug}/${prod.slug}`}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-brand-sand dark:bg-brand-earth text-brand-earth dark:text-brand-sand font-bold text-sm hover:bg-brand-green hover:text-white dark:hover:bg-brand-green dark:hover:text-white transition-all group"
                  >
                    View Details
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
