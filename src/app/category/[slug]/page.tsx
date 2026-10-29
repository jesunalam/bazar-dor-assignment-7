
import { Suspense } from "react";
import CategoryDisplay from "./CategoryDisplay";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface ProductItem {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  change: { dir: string; pct: number };
}

async function CategoryContent({ params }: PageProps) {
  const { slug } = await params;

  // API থেকে ডেটা ফেচ করা
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`,
    {
      cache: "no-store",
    }
  );

  const products: ProductItem[] = await res.json();


  const categoryName = products[0]?.categoryNameBn || slug;
  const categoryIcon = products[0]?.categoryIcon || "📦";
  const totalProducts = products.length;

  return (
    <CategoryDisplay
      products={products}
      categoryName={categoryName}
      categoryIcon={categoryIcon}
      totalProducts={totalProducts}
    />
  );
}

export default function CategoryPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center text-gray-500">
          লোড হচ্ছে...
        </div>
      }
    >
      <CategoryContent params={params} />
    </Suspense>
  );
}
