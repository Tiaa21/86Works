"use client";

import React from "react";
import Image from "next/image";
import {
  HiOutlineHome,
  HiOutlineSquares2X2,
  HiOutlineBriefcase,
  HiOutlineNewspaper,
  HiOutlinePhone,
} from "react-icons/hi2";
import { BsArrowUpRight } from "react-icons/bs";

export default function Nav() {
  return (
    <>
      {/* TOP NAV */}
      <nav
        className="
          fixed top-0 left-0 w-full
          z-[999]
          px-5 md:px-10
          py-3

          flex items-center justify-between

          backdrop-blur-xl
          bg-[#efefef]/20
          border-b border-black/5
        "
      >
        {/* LEFT LOGO */}
        <div className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-14 text-[17px] font-medium text-black">
          <a className="hover:opacity-60 transition-opacity cursor-pointer" href="/">
            Home
          </a>

          <a className="hover:opacity-60 transition-opacity cursor-pointer" href="#works">
            Our Works
          </a>

          <a className="hover:opacity-60 transition-opacity cursor-pointer" href="#timeline">
            Timeline
          </a>

           <a className="hover:opacity-60 transition-opacity cursor-pointer" href="/portofolio">
            Portofolio
          </a>

          <a className="hover:opacity-60 transition-opacity" href="#contact">
            Contact
          </a>
        </div>

        {/* RIGHT BUTTON */}
        <button
          className="
            bg-black text-white
            px-4 md:px-6
            py-2.5 md:py-3

            rounded-xl md:rounded-2xl

            text-sm md:text-[16px]
            font-medium

            flex items-center gap-2

            hover:scale-105
            transition-all
          "
        >
          Let’s Talk

          <BsArrowUpRight className="text-lg" />
        </button>
      </nav>

      {/* MOBILE BOTTOM NAV */}
      <div
        className="
          md:hidden

          fixed bottom-5 left-1/2
          -translate-x-1/2

          z-[9999]

          w-[92%]
          max-w-md

          flex items-center justify-around

          py-3 px-4

          rounded-full
          backdrop-blur-xl
          bg-white/90

          border border-black/10
          shadow-2xl
        "
      >
        {[
          { icon: <HiOutlineHome />, id: "About" },
          { icon: <HiOutlineSquares2X2 />, id: "Services" },
          { icon: <HiOutlineBriefcase />, id: "Works" },
          { icon: <HiOutlineNewspaper />, id: "Insights" },
          { icon: <HiOutlinePhone />, id: "Contact" },
        ].map((item) => (
          <button
            key={item.id}
            className="
              w-11 h-11
              rounded-xl

              flex items-center justify-center

              text-[22px]
              text-black/70

              active:scale-90
              hover:bg-black
              hover:text-white

              transition-all
            "
          >
            {item.icon}
          </button>
        ))}
      </div>
    </>
  );
}