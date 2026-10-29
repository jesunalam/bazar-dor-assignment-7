import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

interface ChangeData {
  dir: string;
  pct: number;
}

interface Product {
  id: number;
  nameBn: string;
  categoryNameBn: string;
  image: string;
  today: number;
  change?: ChangeData;
}

const MovedNavs = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const products: Product[] = await res.json();

  const limitedProducts = products.slice(0, 10);

  return (
    <div className="bg-[#FAFCFA] py-2 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <Marquee speed={120}>
          <div className="flex items-center">
            {
              limitedProducts.map((p) => {
               const bengaliPrice = Number(p.today).toLocaleString('bn-BD');
               
               const isUp = p.change?.dir === 'up';
               const dirIcon = isUp ? "▲" : "▼";
               const dirColor = isUp ? "text-green-600" : "text-red-600";
               
               const bengaliPct = p.change?.pct ? Number(p.change.pct).toLocaleString('bn-BD') : '';

               return (
                 <Link href={"/"} key={p.id} className="inline-flex items-center text-sm text-gray-700 hover:text-black mx-4">
                   <span className="mr-2">{p.image}</span>
                   <span className="font-medium">{p.nameBn}</span>
                   <span className="ml-1.5">{bengaliPrice} টাকা/কেজি</span>
                   
                   <span className={`ml-1.5 font-bold inline-flex items-center gap-0.5 ${dirColor}`}>
                     <span>{dirIcon}</span>
                     <span>{bengaliPct}%</span>
                   </span>

                   <span className="ml-6 text-gray-400">
                     ㆍ
                   </span>
                 </Link>
               );
              })
            }
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MovedNavs;