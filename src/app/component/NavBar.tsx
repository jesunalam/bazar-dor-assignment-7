"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
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

const NavBar = () => {
  const { data: session } = useSession();
  console.log(session);
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
            {session?.user ? (
              <>
             <Link 
  href="/profile" 
  className="flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white px-4 py-2 shadow-sm transition-all duration-200 hover:border-[#1B8339]/50 hover:shadow-md group"
>
  {/* নামের প্রথম অক্ষর (Uppercase) */}
  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1B8339]/10 text-base font-bold text-[#1B8339] transition group-hover:bg-[#1B8339]/20">
    {session.user?.name?.[0]?.toUpperCase() || "U"}
  </div>

  {/* ইউজারনেম */}
  <span className="text-base font-bold text-gray-900 transition group-hover:text-[#1B8339]">
    {session.user?.name}
  </span>

  {/* Downward icon indicator */}
  <svg 
    className="ml-1 h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-[#1B8339]" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
  </svg>
</Link>
              </>
            ) : (
              <>
                <Link href="/sign-up">
                  <Button className="h-9 rounded-xl border border-[#1B8339] bg-white px-4 text-sm font-medium text-[#1B8339] shadow-sm transition hover:bg-[#F4F7F4]">
                    সাইন আপ
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button className="h-9 rounded-xl bg-[#1B8339] px-4 text-sm font-medium text-white shadow-sm transition hover:bg-[#156c2e]">
                    সাইন ইন
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
