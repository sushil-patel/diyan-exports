import Link from "next/link";
import { ArrowRight, Wheat, Flame, Sun, Sparkles, Sprout } from "lucide-react";

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

interface CategoryThemeConfig {
  icon: typeof Wheat;
  badgeLabel: string;
}

const categoryThemeMap: Record<string, CategoryThemeConfig> = {
  spices: {
    badgeLabel: "Whole Spices",
    icon: Flame,
  },
  "oil-seeds": {
    badgeLabel: "Hulled Seeds",
    icon: Sun,
  },
  "powdered-spices": {
    badgeLabel: "Ground & Blends",
    icon: Sparkles,
  },
  herbs: {
    badgeLabel: "Organic Botanicals",
    icon: Sprout,
  },
};

const fallbackThemeCycle: CategoryThemeConfig[] = [
  categoryThemeMap.spices,
  categoryThemeMap["oil-seeds"],
  categoryThemeMap["powdered-spices"],
  categoryThemeMap.herbs,
];

export default async function ProductsPage() {
  const categories: Category[] = await getCategories();

  return (
    <div className="bg-background min-h-screen">
      {/* Header Hero */}
      <section className="bg-brand-earth text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,134,11,0.2),transparent_45%)]" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block">
            Agricultural Export Division
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Our Product Categories</h1>
          <p className="text-brand-sand/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore our diverse range of premium agricultural commodities sourced directly from trusted growers and processed under global export standards.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.length === 0 ? (
          <div className="text-center py-16 bg-brand-sand/30 dark:bg-brand-earth/40 rounded-3xl border border-brand-sand/50 dark:border-brand-sand/15 space-y-4">
            <Wheat className="h-12 w-12 text-brand-gold mx-auto animate-pulse" />
            <h2 className="text-xl font-bold text-brand-earth dark:text-white">Product Catalog Temporarily Offline</h2>
            <p className="text-foreground/70 dark:text-brand-sand/70 max-w-md mx-auto text-sm">
              Please contact the administrator or verify your backend service is running.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const theme = categoryThemeMap[cat.slug] || fallbackThemeCycle[idx % fallbackThemeCycle.length];
              const Icon = theme.icon;

              return (
                <div
                  key={cat.id}
                  className="bg-white dark:bg-brand-earth/80 rounded-2xl border border-brand-sand/60 dark:border-white/10 p-7 flex flex-col justify-between hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-xl bg-brand-sand/30 dark:bg-white/5 border border-brand-sand/50 dark:border-white/10 flex items-center justify-center text-brand-gold transition-colors group-hover:bg-brand-gold group-hover:text-brand-earth">
                        <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-xs font-medium tracking-wide px-3 py-1 rounded-full bg-brand-sand/30 dark:bg-white/5 text-foreground/70 dark:text-brand-sand/80 border border-brand-sand/40 dark:border-white/10">
                        {theme.badgeLabel}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-brand-earth dark:text-white group-hover:text-brand-gold transition-colors">
                        {cat.name}
                      </h2>
                      <p className="text-sm text-foreground/70 dark:text-brand-sand/70 leading-relaxed">
                        High grade commodity collection for international {cat.name.toLowerCase()} exports.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-sand/40 dark:border-white/10">
                    <Link
                      href={`/products/${cat.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors group/link"
                    >
                      Explore {cat.name}
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
