"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { gsap } from "gsap";
import NavLogo from "../public/sahl-logo - Copy-2 1.svg";

export default function Navbar() {
  useEffect(() => {
    // اخفاء جميع العناصر في البداية
    gsap.set([".nav-link", ".logo", ".arrow-button"], {
      autoAlpha: 0, // اخفاء العناصر
    });

    // تنزيل اللينكات من الاعلي
    gsap.to(".nav-link", {
      y: 0, // تحريك اللينكات إلى موضعها النهائي
      autoAlpha: 1, // ظهور اللينكات
      stagger: 0.2, // تأخير بين كل لينك
      duration: 0.5, // مدة التحريك
      ease: "",
      delay: 0.2, // تأخير قبل بدء التحريك
    });

    // جلب الصورة من اليمين
    gsap.to(".logo", {
      x: 0, // تحريك الصورة إلى موضعها النهائي
      autoAlpha: 1, // ظهور الصورة
      duration: 0.5, // مدة التحريك
      ease: "power2.inOut",
      delay: 0.5, // تأخير قبل بدء التحريك
    });

    // جلب الزر من اليسار
    gsap.to(".arrow-button", {
      x: 0, // تحريك الزر إلى موضعه النهائي
      autoAlpha: 1, // ظهور الزر
      duration: 0.5, // مدة التحريك
      ease: "power2.inOut",
      delay: 0.5, // تأخير قبل بدء التحريك
    });
  }, []);

  const Navlinks = [
    {
      name: "اتصل بنا ",
      href: "#",
    },
    {
      name: "المدونة",
      href: "#",
    },
    {
      name: "المكودين ",
      href: "#",
    },

    {
      name: "خدماتنا  ",
      href: "#",
    },
    {
      name: "اعمالنا ",
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
    <header className="fixed inset-x-0 top-0 z-[999] mx-auto w-[1,240px] h-[90px] px-[6px] gap-[240px] items-center justify-between max-w-screen-md border border-gray-100 bg-white py-5 shadow backdrop-blur-lg md:top-[53px] md:rounded-[9px] lg:max-w-[1240px]">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end gap-3">
            <a
              className="inline-flex items-center justify-center rounded-full w-[55px] h-[55px] border-gray-400 border-4 bg-[#5665AE] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 arrow-button"
              href="">
              <FaArrowLeft />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            {Navlinks.map((link) => (
              <a
                key={link.name}
                className="mx-3 text-sm leading-[42px] font-medium tracking-[1%] text-gray-900 nav-link"
                href={link.href}>
                {link.name}
              </a>
            ))}
          </div>

          <div className="w-[80px]">
            {/* <a aria-current="page" className="flex items-center" href="/"> */}
            <Image className="h-7 w-[150]" src={NavLogo} alt="logo" />
            {/* <p className="sr-only">Website Title</p> */}
            {/* </a> */}
          </div>
        </div>
      </div>
    </header>
  );
}
