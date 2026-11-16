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

interface ThemeConfig {
  borderTop: string;
  titleHover: string;
  badge: string;
  buttonBg: string;
  buttonHover: string;
  heroGlow: string;
}

const categoryThemeMap: Record<string, ThemeConfig> = {
  spices: {
    borderTop: "border-t-4 border-t-brand-spice hover:border-brand-spice/60",
    titleHover: "group-hover:text-brand-spice dark:group-hover:text-brand-spice-light",
    badge: "bg-brand-spice/15 text-brand-spice dark:text-brand-spice-light border border-brand-spice/30",
    buttonBg: "bg-brand-spice/10 dark:bg-brand-spice/20 text-brand-spice dark:text-brand-spice-light border border-brand-spice/30",
    buttonHover: "hover:bg-brand-spice hover:text-white dark:hover:bg-brand-spice dark:hover:text-white",
    heroGlow: "rgba(160,82,45,0.3)",
  },
  "oil-seeds": {
    borderTop: "border-t-4 border-t-brand-gold hover:border-brand-gold/60",
    titleHover: "group-hover:text-brand-gold dark:group-hover:text-brand-gold-light",
    badge: "bg-brand-gold/15 text-brand-gold dark:text-brand-gold-light border border-brand-gold/30",
    buttonBg: "bg-brand-gold/10 dark:bg-brand-gold/20 text-brand-gold dark:text-brand-gold-light border border-brand-gold/30",
    buttonHover: "hover:bg-brand-gold hover:text-brand-earth dark:hover:bg-brand-gold dark:hover:text-brand-earth",
    heroGlow: "rgba(184,134,11,0.3)",
  },
  "powdered-spices": {
    borderTop: "border-t-4 border-t-amber-600 dark:border-t-amber-500 hover:border-amber-500/60",
    titleHover: "group-hover:text-amber-600 dark:group-hover:text-amber-300",
    badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30",
    buttonBg: "bg-amber-600/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-600/30",
    buttonHover: "hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white",
    heroGlow: "rgba(217,119,6,0.3)",
  },
  herbs: {
    borderTop: "border-t-4 border-t-brand-green dark:border-t-brand-green-light hover:border-brand-green/60",
    titleHover: "group-hover:text-brand-green dark:group-hover:text-brand-green-light",
    badge: "bg-brand-green/15 dark:bg-brand-green-light/20 text-brand-green dark:text-brand-green-light border border-brand-green/30 dark:border-brand-green-light/30",
    buttonBg: "bg-brand-green/10 dark:bg-brand-green-light/15 text-brand-green dark:text-brand-green-light border border-brand-green/30 dark:border-brand-green-light/30",
    buttonHover: "hover:bg-brand-green hover:text-white dark:hover:bg-brand-green-light dark:hover:text-brand-earth",
    heroGlow: "rgba(45,106,79,0.3)",
  },
};

const defaultTheme: ThemeConfig = categoryThemeMap.spices;

export default async function CategoryProductsPage({ params }: Props) {
  const { categorySlug } = await params;
  const products: Product[] = await getCategoryProducts(categorySlug);
  const theme = categoryThemeMap[categorySlug] || defaultTheme;
  
  // Format slug name for presentation if fallback is empty
  const categoryName = categorySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bg-background min-h-screen">
      {/* Header Hero */}
      <section className="bg-brand-earth text-white py-16 sm:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at top right, ${theme.heroGlow}, transparent 50%)`
          }}
        />
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
            High-grade quality parameters processed at our Mehsana operations hub conforming to international export regulations.
          </p>
        </div>
      </section>

      {/* Products Listing Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.length === 0 ? (
          <div className="text-center py-16 bg-brand-sand/30 dark:bg-brand-earth/40 rounded-3xl border border-brand-sand/50 dark:border-brand-sand/15 space-y-4">
            <Wheat className="h-12 w-12 text-brand-gold mx-auto animate-pulse" />
            <h2 className="text-xl font-bold text-brand-earth dark:text-white">No Products Found</h2>
            <p className="text-foreground/70 dark:text-brand-sand/70 max-w-md mx-auto text-sm">
              Please check if the backend contains seed data for the category <code className="bg-brand-sand dark:bg-brand-earth px-1.5 py-0.5 rounded text-brand-spice">{categorySlug}</code>.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div
                key={prod.id}
                className={`bg-white dark:bg-brand-earth/95 rounded-3xl border border-brand-sand dark:border-brand-sand/10 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between ${theme.borderTop}`}
              >
                <div className="p-6 space-y-4 flex-grow">
                  <div className="space-y-1">
                    <h2 className={`text-2xl font-bold text-brand-earth dark:text-white ${theme.titleHover} transition-colors`}>
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
                    className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl ${theme.buttonBg} ${theme.buttonHover} font-bold text-sm transition-all group-hover:translate-y-[-1px] shadow-sm`}
                  >
                    View Details
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
