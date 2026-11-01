"use client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "@/lib/auth-client";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign In Data:", data);
    const {data:resData,error}=await signIn.email({
        email:data.email as string,
        password:data.password as string,
        callbackURL:'/'

    })
    console.log(resData,error);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F4F7F4] p-4 text-gray-800">
      {/* হেডার টাইটেল */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mt-13 tracking-tight text-gray-900">
          সাইন ইন
        </h1>
        <p className="mt-2.5 text-sm text-gray-600">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* মূল ফর্ম কার্ড */}
      <div className="w-full max-w-md rounded-3xl border border-gray-200/80 bg-white p-8 shadow-sm">
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "সঠিক ইমেইল ঠিকানা দিন";
              }
              return null;
            }}
          >
            <Label className="text-sm font-medium text-gray-700">ইমেইল</Label>
            <Input
              className="mt-1 border border-[#E1E8E1]"
              placeholder="you@example.com"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField className="w-full" name="password" isRequired>
            <Label className="text-sm font-medium text-gray-700">
              পাসওয়ার্ড
            </Label>
            <InputGroup className="mt-1 border border-[#E1E8E1]">
              <InputGroup.Input
                className="w-full"
                type={isVisible ? "text" : "password"}
                placeholder="কমপক্ষে ৮ অক্ষর"
              />
              <InputGroup.Suffix className="pe-0">
                <Button
                  isIconOnly
                  aria-label="Toggle password visibility"
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          <Button
            type="submit"
            className="mt-2 h-11 w-full rounded-xl bg-[#1B8339] font-medium text-white shadow-md hover:bg-[#156c2e]"
          >
            সাইন ইন
          </Button>
        </Form>

        {/* অথবা ডিভাইডার */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative bg-white px-3 text-xs text-gray-500">
            অথবা
          </div>
        </div>

        {/* সোশ্যাল লগইন বাটন */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition"
          >
            <Image src="/Google.png" width={15} height={15} alt="Google Logo" />
            <span className="font-semibold">Google দিয়ে চালিয়ে যান</span>
          </button>

          <button
            type="button"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition"
          >
            <Image src="/github.png" width={15} height={15} alt="Github Logo" />
            <span className="font-semibold">GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        {/* সাইন আপ লিংক */}
        <p className="mt-6 text-center text-sm text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-[#1B8339] hover:underline"
          >
            সাইন আপ করুন
          </Link>
        </p>
      </div>

      {/* ব্যাক লিংক */}
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-all duration-200 hover:-translate-x-1"
        >
          <span>←</span> হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;