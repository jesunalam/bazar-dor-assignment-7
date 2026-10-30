"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
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

const NavBar = () => {
  return (
    <div>
      <header className="w-full bg-white border-b border-gray-200 py-4 px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 px-6 ">
          
          {/* লোগো এবং নাম */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 bg-[#05893E] rounded-xl flex items-center justify-center text-white shadow-sm shrink-0">
              <Image
                src="/logo-icon.png"
                alt="Bazarer Dor Logo"
                width={20}
                height={20}
              />
            </div>
            <div className="min-w-0">
              <h1 className="font-bold text-base sm:text-lg text-gray-900 leading-tight">
                বাজার দর
              </h1>
              <div className="text-[11px] sm:text-xs text-gray-400 truncate max-w-[180px] sm:max-w-none">
                <Suspense fallback={<span>তারিখ লোড হচ্ছে...</span>}>
                  <TodayDate />
                </Suspense>
              </div>
            </div>
          </div>

          {/* সাইন আপ / সাইন ইন বাটন */}
          <div className="flex items-center gap-2 shrink-0">
            <Button >Sign Up</Button>
            <Button >Sign In</Button>
          </div>

        </div>
      </header>
    </div>
  );
};

export default NavBar;