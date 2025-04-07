"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AlignRight, X } from "lucide-react";
import { Button } from "./ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isSignUpPage = pathname === "/auth/signup";

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about-us" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="container mx-auto relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/assets/images/nav-logo.svg"
            alt="Banner Icon"
            width={45}
            height={45}
            className="bg-orange-50 rounded-md"
            draggable="false"
          />
        </Link>

        {/* Buttons & Toggle */}
        <div className="flex lg:order-2 space-x-3 rtl:space-x-reverse">
          <Button asChild variant={isSignUpPage ? "default" : "link"}>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
          <Button asChild variant={isSignUpPage ? "link" : "default"}>
            <Link href="/auth/login">Login</Link>
          </Button>
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded hover:bg-gray-100"
          >
            <AlignRight />
          </button>
        </div>

        {/* Desktop Menu (visible from lg and up) */}
        <div className="hidden lg:flex lg:order-1 mr-auto ml-12">
          <ul className="flex space-x-8 font-normal">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`py-2 px-3 text-sm text-grey-15 ${
                    pathname === item.path
                      ? "bg-white-95 rounded-lg"
                      : "hover:bg-white-95 hover:rounded-lg"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Offcanvas Menu (for mobile & tablet) */}
      <div
        className={`bg-absolute-white fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="p-1">
            <X />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                onClick={() => setIsOpen(false)} // close menu on click
                className={`block py-2 px-4 rounded ${
                  pathname === item.path ? "bg-gray-200" : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (for background blur on offcanvas open) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
