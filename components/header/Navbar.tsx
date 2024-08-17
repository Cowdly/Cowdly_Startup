"use client";

import React from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../app/images/Group (1).svg";

export default function Navbar() {
  const Navlinks = [
    { name: "اتصل بنا", href: "#" },
    { name: "اعمالنا", href: "#" },
    { name: "خدماتنا", href: "#" },
    { name: "حولنا", href: "#" },
    { name: "الرئيسيه", href: "#" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full h-[90px] px-6 flex items-center justify-between bg-white border-b border-gray-100 shadow-md backdrop-blur-lg">
      <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
        <a
          className="inline-flex items-center justify-center rounded-full w-[55px] h-[55px] border-gray-400 border-4 bg-[#5665AE] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus:outline-none"
          href=""
        >
          <FaArrowLeft />
        </a>
        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
          {Navlinks.map((link) => (
            <a
              key={link.name}
              className="mx-3 text-sm font-medium text-gray-900 hover:text-gray-700"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>
        <a aria-current="page" className="flex items-center" href="/">
          <Image
            className="h-7 w-auto"
            src={logo}
            alt="logo"
            width={100}
            height={100}
            loading="lazy"
          />
          <p className="sr-only">Website Title</p>
        </a>
      </div>
    </header>
  );
}
