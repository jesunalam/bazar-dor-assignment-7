import Link from "next/link";
import React from "react";

interface ChangeData {
  dir: "up" | "down";
  pct: number;
}

interface Product {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change?: ChangeData;
}

const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/products",
      {
        cache: "force-cache",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const PriceTrendsSection = async () => {
  const products = await getProducts();

  const increasedProducts = products
    .filter((p) => p.change?.dir === "up")
    .slice(0, 6);

  const decreasedProducts = products
    .filter((p) => p.change?.dir === "down")
    .slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* ১. আজ দাম বেড়েছে সেকশন */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            আজ দাম বেড়েছে
          </h2>
          <span className="text-red-600 text-lg font-bold">▲</span>                  
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {increasedProducts.map((p) => {
            const bengaliPrice = Number(p.today).toLocaleString("bn-BD");
            const bengaliPct = p.change?.pct
              ? Number(p.change.pct).toLocaleString("bn-BD")
              : "";

            return (
              <Link
                href={`/products/${p.id}`}
                key={p.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                {/* Top Section: Image & Name */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl bg-gray-50 p-2.5 rounded-2xl flex items-center justify-center">
                    {p.image}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {p.nameBn}
                    </h3>
                    <p className="text-xs text-gray-400">
                      প্রতি {p.unit || "কেজি"}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Price & Percentage Badge */}
                <div className="flex items-end justify-between mt-6">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">আজকের দাম</p>
                    <p className="text-2xl font-extrabold text-gray-900">
                      {bengaliPrice}{" "}
                      <span className="text-sm font-normal text-gray-600">
                        টাকা
                      </span>
                    </p>
                  </div>

                  {/* Percentage Change Badge */}
                  {p.change && (
                    <div
                      className={`text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 ${
                        p.change.dir === "up"
                          ? "bg-red-50 text-red-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      <span>{p.change.dir === "up" ? "▲" : "▼"}</span>
                      <span>{bengaliPct}%</span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ২. আজ দাম কমেছে সেকশন */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            আজ দাম কমেছে
          </h2>
          <span className="text-green-600 text-lg font-bold">▼</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {decreasedProducts.map((p) => {
            const bengaliPrice = Number(p.today).toLocaleString("bn-BD");
            const bengaliPct = p.change?.pct
              ? Number(p.change.pct).toLocaleString("bn-BD")
              : "";

            return (
              <Link
                href={`/products/${p.id}`}
                key={p.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                {/* Top Section: Image & Name */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl bg-gray-50 p-2.5 rounded-2xl flex items-center justify-center">
                    {p.image}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {p.nameBn}
                    </h3>
                    <p className="text-xs text-gray-400">
                      প্রতি {p.unit || "কেজি"}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Price & Percentage Badge */}
                <div className="flex items-end justify-between mt-6">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">আজকের দাম</p>
                    <p className="text-2xl font-extrabold text-gray-900">
                      {bengaliPrice}{" "}
                      <span className="text-sm font-normal text-gray-600">
                        টাকা
                      </span>
                    </p>
                  </div>

                  {/* Percentage Change Badge */}
                  {p.change && (
                    <div
                      className={`text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 ${
                        p.change.dir === "up"
                          ? "bg-red-50 text-red-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      <span>{p.change.dir === "up" ? "▲" : "▼"}</span>
                      <span>{bengaliPct}%</span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PriceTrendsSection;