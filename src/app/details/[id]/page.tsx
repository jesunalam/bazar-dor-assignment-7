
import { Suspense } from "react";
import MarketUI from "./MarketUI";


interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function ProductDetailsContent({ params }: ProductPageProps) {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Product data load করা যায়নি");
  }

  const product = await res.json();

  return <MarketUI product={product} />;
}

export default function ProductDetailsPage({
  params,
}: ProductPageProps) {
  return (
    <Suspense fallback={<div className="p-10 text-center">লোড হচ্ছে...</div>}>
      <ProductDetailsContent params={params} />
    </Suspense>
  );
}
