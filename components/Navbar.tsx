"use client";

import React from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function Navbar() {
  const Navlinks = [
    {
      name: "اتصل بنا ",
      href: "#",
    },
    {
      name: "اعمالنا ",
      href: "#",
    },

    {
      name: "خدماتنا  ",
      href: "#",
    },

    {
      name: "حولنا ",
      href: "#",
    },

    {
      name: "الرئيسيه",
      href: "#",
    },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-[999] mx-auto w-1,240px h-[90px] px-[6px] gap-[240px] items-center justify-between max-w-screen-md border border-gray-100 bg-white py-5 shadow backdrop-blur-lg md:top-[53px] md:rounded-[9px] lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-around">
          <div className="flex items-center justify-end gap-3">
            <a
              className="inline-flex items-center justify-center rounded-full w-[55px] h-[55px] border-gray-400 border-4 bg-[#5665AE] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="">
              <FaArrowLeft />
            </a>
          </div>
          <div className=" hidden md:flex md:items-center md:justify-center md:gap-5">
            {Navlinks.map((link) => (
              <a
                key={link.name}
                className=" mx-3 text-sm leading-[42px] font-medium	tracking-[1%] text-gray-900"
                href={link.href}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <Image className="h-7 w-auto" src="" alt="logo" />
              <p className="sr-only">Website Title</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
