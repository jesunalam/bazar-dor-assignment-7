"use client";
import { updateUser,  useSession, signOut } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const { data: session }= useSession();


  const handleUpdateUser = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    
    const resData = await updateUser({
      name: userData.name as string
    });

  };

  return (
    <div className="mx-auto max-w-3xl pt-16 space-y-6 pb-10">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
        <p className="text-sm text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </div>

      {/* User Info Card */}
      <div className="flex items-center justify-between p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B8339]/10 text-2xl font-bold text-[#1B8339]">
            {session?.user?.name?.[0]?.toUpperCase() || "U"}
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {session?.user?.name || ""}
            </h2>
            <p className="text-sm text-gray-500">
              {session?.user?.email || ""}
            </p>
          </div>
        </div>

        <Button 
          onClick={() =>signOut()}
          className="h-10 rounded-xl border border-red-200 bg-white px-4 text-sm font-medium text-red-600 shadow-sm transition hover:bg-red-50"
        >
          সাইন আউট
        </Button>
      </div>

      {/* Form Card (Screenshot এর সাথে হুবহু মিল রেখে স্টাইল করা) */}
      <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-6 pb-10">
        <h3 className="text-lg font-bold text-gray-900">তথ্য</h3>
        
        <Form onSubmit={handleUpdateUser} className="space-y-6">
          <Fieldset.Group>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-gray-700">নাম</Label>
              <Input 
                placeholder="" 
                variant="secondary" 
                className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-gray-800 outline-none focus:border-[#1B8339]" 
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>
          </Fieldset.Group>
          
          <Button 
            type="submit" 
            className="w-full h-11 rounded-xl bg-[#1B8339] text-white font-medium flex items-center justify-center shadow-sm transition hover:bg-[#156c2e]"
          >
            আপডেট
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;