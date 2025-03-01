"use client";

import React, { useState } from "react";
import StudentsTestimonials from "@/app/components/ui/StudentsTestimonials";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/app/components/ui/Button";
import Image from "next/image";
import { ArrowUpRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mx-auto pt-10 sm:pt-20 pb-16 sm:pb-32 px-4 sm:px-6">
      {/* Grid Layout for Testimonials & Login Form */}
      <div className="grid grid-cols-1 md:grid-cols-11 gap-10 md:gap-20 items-center md:flex-row-reverse">
        {/* Students Testimonials (5/11 on larger screens) */}
        <div className="md:col-span-5">
          <StudentsTestimonials />
        </div>

        {/* Login Form (6/11 on larger screens) */}
        <div className="md:col-span-6">
          <Card className="bg-absolute-white rounded-xl p-6 sm:p-10 border-none">
            <CardHeader className="p-0">
              <CardTitle className="text-3xl sm:text-4xl text-grey-15 text-center">
                Sign Up
              </CardTitle>
              <CardDescription className="text-grey-30 text-center text-base mt-2">
                Create an account to unlock exclusive features.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-6 sm:mt-10">
              <form>
                <div className="flex flex-col gap-6">
                  {/* Full Name Field */}
                  <div className="grid gap-2.5">
                    <Label
                      htmlFor="name"
                      className="text-grey-15 font-medium text-base"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your Name"
                      className="p-4 sm:p-5 bg-white-99 border border-white-95 rounded-lg h-14 sm:h-16 placeholder:text-grey-15"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="grid gap-2.5">
                    <Label
                      htmlFor="email"
                      className="text-grey-15 font-medium text-base"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your Email"
                      className="p-4 sm:p-5 bg-white-99 border border-white-95 rounded-lg h-14 sm:h-16 placeholder:text-grey-15"
                      required
                    />
                  </div>

                  {/* Password Field with Eye Icon */}
                  <div className="grid gap-2.5 relative">
                    <Label
                      htmlFor="password"
                      className="text-grey-15 font-medium text-base"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="Enter your Password"
                        className="p-4 sm:p-5 bg-white-99 border border-white-95 rounded-lg h-14 sm:h-16 placeholder:text-grey-15 pr-14"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-grey-30"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>

                    <a
                      href="#"
                      className="ml-auto inline-block text-sm sm:text-base text-grey-30 mt-2.5 underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        className="h-5 w-5 bg-white-99 border border-white-95 text-grey-30"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm sm:text-base text-grey-40 font-medium"
                      >
                        I agree with
                        <Link href="/auth/signup" className="underline mx-1">
                          Terms of Use
                        </Link>
                        and
                        <Link href="/auth/signup" className="underline ml-1">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>

                  {/* Login Button */}
                  <Button type="submit" size="lg" className="py-3 sm:py-4">
                  Sign Up
                  </Button>

                  {/* OR Separator */}
                  <div className="flex items-center gap-4 my-4">
                    <div className="h-px flex-1 bg-gray-300"></div>
                    <span className="text-gray-500 text-sm">OR</span>
                    <div className="h-px flex-1 bg-gray-300"></div>
                  </div>

                  {/* Google Login Button */}
                  <Button
                    variant="secondary"
                    size="lg"
                    className="py-3 sm:py-4"
                  >
                    <Image
                      src="/assets/images/google_icon.svg"
                      alt="Google Icon"
                      width={24}
                      height={24}
                      className="mr-3"
                      draggable="false"
                    />
                    Sign Up with Google
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm text-grey-30 flex items-center justify-center">
                  Already have an account
                  <a
                    href="#"
                    className="underline underline-offset-4 ml-1 flex font-semibold"
                  >
                    Login
                    <ArrowUpRight className="text-grey-30" />
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
