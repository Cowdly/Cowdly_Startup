"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navigate } from "react-router-dom";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import logo from "../../app/images/Group (1).svg";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Navlinks = [
    { name: "اتصل بنا", href: "" },
    { name: " التوظيف", href: "/jobs" },
    { name: "المدونه", href: "/blogs" },
    { name: "المكودين", href: "/team" },
    { name: "اعمالنا", href: "/products" },
    { name: "خدماتنا", href: "/servicess" },
    { name: "حولنا", href: "/aboutUs" },
    { name: "الرئيسيه", href: "/" },
  ];

  return (
    <header className="xl:container m-auto fixed inset-x-0 top-0 z-50 mx-auto max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* أيقونة القائمة لشاشات صغيرة */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 focus:outline-none">
              <FaBars size={30} />
            </button>
          </div>

          {/* زر الرجوع لشاشات أكبر */}
          <div className="hidden sm:flex shrink-0">
            <Link
              aria-current="page"
              className="flex items-center text-[20px] w-[55px] h-[55px] text-white hover:text-gray-400 bg-[#5665AE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[50px] text-sm px-5 py-2.5 text-center"
              href="/customerRequest">
              <FaArrowLeft />
            </Link>
          </div>

          {/* روابط التنقل لشاشات كبيرة */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            {Navlinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold leading-6 text-gray-900">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3">
            <Image
              className="h-[9vh]"
              src="/logo.svg"
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>

        {/* قائمة التنقل لشاشات صغيرة */}
        {menuOpen && (
          <div className="fixed right-0 top-[60px] w-[80%] bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton">
              {Navlinks.map((link) => (
                <li>
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <Link
              href="/customerRequest"
              className="text-[20px] w-[55px] h-[55px] text-white hover:text-gray-400 bg-[#5665AE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[50px] px-5 py-2.5 text-center block text-sm  ">
              <FaArrowLeft />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
