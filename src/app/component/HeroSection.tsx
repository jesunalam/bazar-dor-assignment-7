"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


function TodayDate() {
  const today = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return today;
}



const HeroSectionPage = () => {
  return (
    <div className="w-full py-6 px-4">
      <div className="max-w-7xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="flex-1 space-y-4 text-left">
          {/* Date Badge */}
          <div className="inline-block bg-[#E6F4EA] text-[#137333] text-xs md:text-sm font-medium px-3 py-1 rounded-full">
            <Suspense fallback=''>
                <TodayDate />
            </Suspense>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed">
           চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          {/* Button */}
          <div className="pt-2">
            <Link
              href="#all-products"
              className="inline-block bg-[#1B8339] hover:bg-[#156d2e] text-white font-medium px-6 py-3 rounded-xl shadow-md transition-all duration-200"
            >
              সব পণ্য দেখুন
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-auto flex justify-center items-center flex-shrink-0">
          <div className="relative w-64 h-48 md:w-80 md:h-60">
            
            <Image
             
              src="/bazar-hero.png"
              alt="Bazar Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSectionPage;