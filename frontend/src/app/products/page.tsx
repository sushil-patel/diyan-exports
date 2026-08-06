import Link from "next/link";
import { ArrowRight, Wheat } from "lucide-react";

// Server component fetching categories from Spring Boot API on the server side
async function getCategories() {
  try {
    const res = await fetch("http://localhost:8080/api/categories", {
      next: { revalidate: 60 } // Cache data for 60 seconds
    });
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching categories, falling back to empty list:", error);
    return [];
  }
}

interface Category {
  id: number;
  name: string;
  slug: string;
  url: string;
}

export default async function ProductsPage() {
  const categories: Category[] = await getCategories();

  return (
    <div className="bg-background min-h-screen">
      {/* Header Hero */}
      <section className="bg-brand-earth text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,138,0,0.2),transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Our Products</h1>
          <p className="text-brand-sand/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore our diverse range of premium agricultural commodities sourced directly from trusted growers.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.length === 0 ? (
          <div className="text-center py-16 bg-brand-sand/30 rounded-3xl border border-brand-sand/50 space-y-4">
            <Wheat className="h-12 w-12 text-brand-gold mx-auto animate-pulse" />
            <h2 className="text-xl font-bold text-brand-earth">Product Catalog Temporarily Offline</h2>
            <p className="text-foreground/70 max-w-md mx-auto text-sm">
              Please make sure the Spring Boot backend is running locally at <code className="bg-brand-sand px-1.5 py-0.5 rounded text-brand-spice">http://localhost:8080</code> and H2 database has seeded categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white dark:bg-brand-earth/95 rounded-3xl border border-brand-sand dark:border-brand-sand/10 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                {/* Visual Placeholder Block with Brand Color (since we have solid color images) */}
                <div className="h-48 w-full relative bg-brand-sand dark:bg-brand-earth/30 flex items-center justify-center border-b border-brand-sand dark:border-brand-sand/10">
                  <Wheat className="h-10 w-10 text-brand-green/30 group-hover:scale-110 transition-transform" />
                  <span className="absolute bottom-4 left-4 bg-brand-earth/80 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-sm">
                    Premium Category
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-brand-earth dark:text-white group-hover:text-brand-green transition-colors">
                      {cat.name}
                    </h2>
                    <p className="text-sm text-foreground/75 dark:text-brand-sand/85 leading-relaxed">
                      High grade commodity collection for international {cat.name.toLowerCase()} exports.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/products/${cat.slug}`}
                      className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-brand-sand dark:bg-brand-earth text-brand-earth dark:text-brand-sand font-bold text-sm hover:bg-brand-green hover:text-white dark:hover:bg-brand-green dark:hover:text-white transition-all group-hover:translate-y-[-1px]"
                    >
                      Explore {cat.name}
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
