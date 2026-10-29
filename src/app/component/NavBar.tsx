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
      <header className="w-full bg-white border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#05893E] rounded-xl flex items-center justify-center text-white shadow-sm">
              <Image
                src="/logo-icon.png"
                alt="Bazarer Dor Logo"
                width={20}
                height={20}
              />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900 leading-tight">
                বাজার দর
              </h1>
              <Suspense
                fallback={
                  <p className="text-xs text-gray-400">তারিখ লোড হচ্ছে...</p>
                }
              >
                <TodayDate />
              </Suspense>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-1.5 rounded-full transition">
            <Button>Sign Up</Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
