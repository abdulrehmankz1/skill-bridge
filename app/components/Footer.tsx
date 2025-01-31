import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-absolute-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/images/nav-logo.svg"
                alt="Banner Icon"
                width={45}
                height={45}
                className="bg-orange-50 rounded-md"
                draggable="false"
              />
            </Link>
            <div className="mt-8">
              <div className="flex items-center">
                <Mail className="mr-2 text-md" />
                hello@skillbridge.com
              </div>
              <div className="flex mt-4 items-center">
                <Phone className="mr-2 text-md" />
                +91 91813 23 2309
              </div>
              <div className="flex mt-4 items-center">
                <MapPin className="mr-2 text-md" />
                Somewhere in the World{" "}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Home
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="" className="hover:underline">
                    Benefits
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="hover:underline">
                    Our Courses
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="hover:underline">
                    Our Testimonials
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="hover:underline">
                    Our FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                About Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="" className="hover:underline">
                    Company
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="hover:underline">
                    Achievements
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="" className="hover:underline">
                    Our Goals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Social Profiles
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex items-center justify-between">
                <li className="mr-3 bg-white-97 h-10 w-10 rounded-md flex items-center justify-center">
                  <Link href="#">
                    <Facebook />
                  </Link>
                </li>
                <li className="mr-3 bg-white-97 h-10 w-10 rounded-md flex items-center justify-center">
                  <Link href="#">
                    <Twitter />
                  </Link>
                </li>
                <li className="mr-3 bg-white-97 h-10 w-10 rounded-md flex items-center justify-center">
                  <Link href="#">
                    <Linkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">
            © 2023
            <Link href="/" className="hover:underline">
              Skillbridge
            </Link>
            . All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
