import Link from "next/link";
interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

interface Product {
  id: number;
  nameBn: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  change: {
    dir: string;
    pct: number;
  };
  markets: Market[];
}

const MarketUI = ({ product }: { product: Product }) => {
  const allMarkets = product.markets ?? [];

  const lowestPrice = allMarkets.length
    ? Math.min(...allMarkets.map((m) => m.min))
    : 0;

  const highestPrice = allMarkets.length
    ? Math.max(...allMarkets.map((m) => m.max))
    : 0;

  const averagePrice = allMarkets.length
    ? allMarkets.reduce((total, m) => total + (m.min + m.max) / 2, 0) /
      allMarkets.length
    : 0;

  const formatPrice = (price: number) =>
    price.toLocaleString("bn-BD", { maximumFractionDigits: 2 });

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 text-[#26352c] md:px-8">
      <div className="mx-auto max-w-7xl space-y-4">
        {/* Breadcrumb */}

        <div>
          <Link href="/" className="hover:text-green-600 font-bold">
          <span className="transition-transform group-hover:-translate-x-1 mr-1.5">
            ←
          </span>
            হোমে ফিরে যাই
          </Link>
        </div>

        {/* Product Card */}
        <section className="flex items-center justify-between gap-4 rounded-2xl border border-[#e0e9e0] bg-[#fafcfb] p-4 md:p-6">
          <div className="flex items-center gap-3">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
              {product.image || product.categoryIcon}
            </div>

            <div>
              <h1 className="text-xl font-bold md:text-2xl">
                {product.nameBn}
              </h1>
              <p className="text-sm text-gray-500">
                {product.categoryNameBn} · {product.unit}
              </p>
              <p className="mt-1 text-[20]">
                গতকালের তুলনায় আজকের দাম:{" "}
                {formatPrice(product.today - product.yesterday)} টাকা
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-[#f0f5f0] px-4 py-3 text-center">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="text-2xl font-bold">{formatPrice(product.today)}</p>
            <p className="text-xs text-gray-500">টাকা / {product.unit}</p>
            <p
              className={`mt-1 text-xs font-semibold ${
                product.change.dir === "up" ? "text-red-500" : "text-green-600"
              }`}
            >
              {product.change.dir === "up" ? "▲" : "▼"}{" "}
              {formatPrice(product.change.pct)}%
            </p>
          </div>
        </section>

        {/* Price Summary */}
        <section className="rounded-2xl border border-[#e0e9e0] bg-[#fafcfb] p-4 md:p-6">
          <h2 className="mb-4 font-bold">দামের সারসংক্ষেপ</h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e0e9e0] p-4">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-2xl font-bold text-green-600">
                {formatPrice(lowestPrice)} টাকা
              </p>
            </div>

            <div className="rounded-xl border border-[#e0e9e0] p-4">
              <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-2xl font-bold text-red-500">
                {formatPrice(highestPrice)} টাকা
              </p>
            </div>

            <div className="rounded-xl border border-[#e0e9e0] p-4">
              <p className="text-xs text-gray-500">গড় দাম</p>
              <p className="mt-1 text-2xl font-bold text-green-600">
                {formatPrice(averagePrice)} টাকা
              </p>
            </div>
          </div>

          {/* Market Table */}
          <h2 className="mb-3 mt-6 font-bold">বাজারভিত্তিক আজকের দাম</h2>

          <div className="overflow-x-auto rounded-xl border border-[#e0e9e0]">
            <table className="w-full min-w-[650px] border-collapse text-left text-sm">
              <thead className="bg-[#f8fbf8] text-gray-500">
                <tr>
                  <th className="px-3 py-3 font-medium">বাজার</th>
                  <th className="px-3 py-3 font-medium">বিভাগ</th>
                  <th className="px-3 py-3 text-right font-medium">
                    সর্বনিম্ন
                  </th>
                  <th className="px-3 py-3 text-right font-medium">সর্বোচ্চ</th>
                  <th className="px-3 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>

              <tbody>
                {allMarkets.map((m, i) => (
                  <tr
                    key={m.market}
                    className={`border-t border-[#d5ded5] ${
                      i % 2 === 0 ? "bg-[#f0f5f0]" : "bg-[#fafcfb]"
                    }`}
                  >
                    <td className="px-3 py-3">{m.market}</td>
                    <td className="px-3 py-3">{m.division}</td>
                    <td className="px-3 py-3 text-right">
                      {formatPrice(m.min)} টাকা
                    </td>
                    <td className="px-3 py-3 text-right">
                      {formatPrice(m.max)} টাকা
                    </td>
                    <td className="px-3 py-3 text-right font-semibold">
                      {formatPrice((m.min + m.max) / 2)} টাকা
                    </td>
                  </tr>
                ))}

                {allMarkets.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-3 py-6 text-center text-gray-500"
                    >
                      কোনো বাজারের তথ্য পাওয়া যায়নি।
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MarketUI;
