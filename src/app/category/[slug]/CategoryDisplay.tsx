"use client";

import Link from "next/link";
import { useState } from "react";

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

interface CategoryDisplayProps {
  products: ProductItem[];
  categoryName: string;
  categoryIcon: string;
  totalProducts: number;
}

export default function CategoryDisplay({
  products,
  categoryName,
  categoryIcon,
  totalProducts,
}: CategoryDisplayProps) {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "low-high") {
      return a.today - b.today;
    }

    if (sortBy === "high-low") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <Link href="/" className="hover:text-green-600 font-bold">
          <span className="transition-transform group-hover:-translate-x-1 mr-1.5">
            ←
          </span>
          হোমে ফিরে যাই
        </Link>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
        <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center text-3xl shadow-inner">
          {categoryIcon}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            {categoryName}
          </h1>

          <p className="text-gray-500 text-sm mt-0.5">
            {totalProducts}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
        <p className="text-gray-600 text-sm">
          মোট {totalProducts} টি পণ্য পাওয়া গেছে
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>সাজান</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 bg-white outline-none cursor-pointer"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-high"> কম থেকে বেশি</option>
            <option value="high-low"> বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((p) => {
          const isUp = p.change?.dir === "up";

          return (
            <Link
              href={`/details/${p.id}`}
              key={p.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
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

              {/* Bottom Section: Price & Change */}
              <div className="flex items-end justify-between mt-6 pt-4 border-t border-gray-50">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">আজকের দাম</p>

                  <p className="text-2xl font-extrabold text-gray-900">
                    {p.today}{" "}
                    <span className="text-sm font-normal text-gray-600">
                      টাকা
                    </span>
                  </p>
                </div>

                {p.change && (
                  <div
                    className={`text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 ${
                      isUp
                        ? "bg-red-50 text-red-600"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    <span>{isUp ? "▲" : "▼"}</span>
                    <span>{p.change.pct}%</span>
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
