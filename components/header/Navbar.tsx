"use client";

import React from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../app/images/Group (1).svg";

export default function Navbar() {
  const Navlinks = [
    { name: "اتصل بنا", href: "#" },
    { name: "المدونه", href: "#" },
    { name: "المكودين", href: "#" },
    { name: "اعمالنا", href: "#" },
    { name: "خدماتنا", href: "#" },
    { name: "حولنا", href: "#" },
    { name: "الرئيسيه", href: "#" },
  ];

  return (
    <header className="xl:container m-auto fixed inset-x-0 top-0 z-50 mx-auto  max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <button className=" text-[20px]  w-[55px] h-[55px]  text-white hover:text-gray-400 bg-[#5665AE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[50px] text-sm px-5 py-2.5 text-center ">
                <FaArrowLeft />
              </button>

              <p className="sr-only">Website Title</p>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            {Navlinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold leading-6 text-gray-900">
                {link.name}
              </a>
            ))}
          </div>
          <div className=" flex items-center justify-end gap-3">
            <Image
              className="h-[9vh] absolute"
              src="/logo.svg"
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
}
