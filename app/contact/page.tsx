import React from "react";
import HeroHeading from "../components/ui/HeroHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../components/ui/Button";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto lg:p-0 p-4">
      <HeroHeading
        heading="Contact Us"
        paragraph="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
      />
      <div>
        <div className="flex flex-col md:flex-row bg-absolute-white rounded-2xl lg:mb-20 mb-12">
          <div className="w-full md:w-[70%] bg lg:p-14 p-7 border-r border-[#F1F1F3]">
            <div>
              {/* First row - 2 columns on md+ screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div className="w-full">
                  <Label
                    htmlFor="first-name"
                    className="text-grey-15 font-medium"
                  >
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="first-name"
                    className="bg-white-99 border border-white-95 rounded-md text-grey-40 mt-3"
                    placeholder="Enter First Name"
                  />
                </div>

                {/* Last Name */}
                <div className="w-full">
                  <Label
                    htmlFor="last-name"
                    className="text-grey-15 font-medium"
                  >
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="last-name"
                    className="bg-white-99 border border-white-95 rounded-md text-grey-40 mt-3"
                    placeholder="Enter Last Name"
                  />
                </div>

                {/* Email */}
                <div className="w-full">
                  <Label htmlFor="email" className="text-grey-15 font-medium">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    className="bg-white-99 border border-white-95 rounded-md text-grey-40 mt-3"
                    placeholder="Enter your Email"
                  />
                </div>

                {/* Phone */}
                <div className="w-full">
                  <Label htmlFor="phone" className="text-grey-15 font-medium">
                    Phone
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    className="bg-white-99 border border-white-95 rounded-md text-grey-40 mt-3"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>

              {/* Second row - always full width */}
              <div className="grid grid-cols-1 lg:gap-10 gap-5">
                {/* Subject */}
                <div className="w-full">
                  <Label htmlFor="subject" className="text-grey-15 font-medium">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    className="bg-white-99 border border-white-95 rounded-md text-grey-40 mt-3"
                    placeholder="Enter your Subject"
                  />
                </div>

                {/* Message */}
                <div className="w-full">
                  <Label htmlFor="message" className="text-grey-15 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    className="bg-white-99 border border-white-95 rounded-md text-grey-40 mt-3 h-[138px]"
                    placeholder="Enter your Message here..."
                  />
                </div>
              </div>
              <div className="lg:mt-10 mt-5 flex justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="font-medium w-full lg:w-fit"
                >
                  Send Your Message
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%] bg- p-14">
            <div className="bg-white-99 border border-white-95 rounded-md p-7 flex items-center justify-center flex-col mb-5">
              <div className="bg-white-99 border border-white-95 rounded-md p-3 w-fit">
                <Mail />
              </div>
              <div className="text-grey-30 mt-3.5">support@skillbridge.com</div>
            </div>
            <div className="bg-white-99 border border-white-95 rounded-md p-7 flex items-center justify-center flex-col mb-5">
              <div className="bg-white-99 border border-white-95 rounded-md p-3 w-fit">
                <Phone />
              </div>
              <div className="text-grey-30 mt-3.5">+91 00000 00000</div>
            </div>
            <div className="bg-white-99 border border-white-95 rounded-md p-7 flex items-center justify-center flex-col mb-5">
              <div className="bg-white-99 border border-white-95 rounded-md p-3 w-fit">
                <MapPin />
              </div>
              <div className="text-grey-30 mt-3.5">Some Where in the World</div>
            </div>
            <div className="bg-white-99 border border-white-95 rounded-md p-7 flex items-center justify-center flex-col">
              <div className="flex gap-2.5">
                <div className="bg-white-99 border border-white-95 rounded-md p-3 w-fit">
                  <Facebook />
                </div>
                <div className="bg-white-99 border border-white-95 rounded-md p-3 w-fit">
                  <Twitter />
                </div>
                <div className="bg-white-99 border border-white-95 rounded-md p-3 w-fit">
                  <Linkedin />
                </div>
              </div>
              <div className="text-grey-30 mt-3.5">Social Profiles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
