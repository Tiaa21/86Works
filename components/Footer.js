// components/Footer.js

"use client";

import Link from "next/link";
import {
    BsInstagram,
    BsTiktok,
    BsWhatsapp,
} from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
    return (
        <footer className="mt-10 relative overflow-hidden bg-[#050505] text-white pt-24 pb-10 px-5 sm:px-6 md:px-10 lg:px-16">

            {/* TOP GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

            {/* NOISE */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
                style={{
                    backgroundImage:
                        "url('https://grainy-gradients.vercel.app/noise.svg')",
                }}
            />

            <div className="relative z-10 max-w-[1500px] mx-auto">

                {/* TOP SECTION */}
                <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 justify-between">

                    {/* LEFT */}
                    <div className="max-w-2xl">

                        {/* TAG */}
                        <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/70 text-xs tracking-[0.2em] uppercase mb-8">
                            86 Creative Works
                        </div>

                        {/* TITLE */}
                        <h2 className="text-[clamp(32px,8vw,90px)] leading-[0.9] font-semibold tracking-[-4px]">
                            Let’s Build
                            <br />
                            Something
                            <br />
                            Great.
                        </h2>

                        {/* DESC */}
                        <p className="mt-8 text-white/55 leading-relaxed text-sm sm:text-base max-w-xl">
                            We help brands grow through strategy, visuals,
                            content, and digital experiences that truly connect
                            with audiences.
                        </p>

                        {/* CTA */}
                        <Link
                            href="https://wa.me/6285779607008"
                            target="_blank" className="w-fit group mt-10 bg-white text-black px-7 py-4 rounded-2xl font-medium flex items-center gap-3 hover:scale-[1.02] transition-all duration-300">
                            Let&apos;s Talk

                            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <GoArrowUpRight size={18} />
                            </span>
                        </Link>
                    </div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-16">

                        {/* MENU */}
                        <div>
                            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6">
                                Navigation
                            </h3>

                            <div className="flex flex-col gap-4 text-white/75">
                                <a href="#about" className="hover:text-white transition">
                                    About Us
                                </a>

                                <a href="#services" className="hover:text-white transition">
                                    Services
                                </a>

                                <a href="#works" className="hover:text-white transition">
                                    Our Works
                                </a>

                                <a href="#timeline" className="hover:text-white transition">
                                    Timeline
                                </a>

                                <a href="#contact" className="hover:text-white transition">
                                    Contact
                                </a>
                            </div>
                        </div>

                        {/* SOCIAL */}
                        <div>
                            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6">
                                Socials
                            </h3>

                            <div className="flex flex-col gap-4 text-white/75">

                                <Link
                                    href="https://www.instagram.com/86works.id/"
                                    target="_blank"
                                    className="flex items-center gap-3 hover:text-white transition"
                                >
                                    <BsInstagram />
                                    Instagram
                                </Link>

                                <Link
                                    href="https://wa.me/6285779607008"
                                    target="_blank"
                                    className="flex items-center gap-3 hover:text-white transition"
                                >
                                    <BsWhatsapp />
                                    WhatsApp
                                </Link>
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div className="col-span-2 sm:col-span-1">
                            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-6">
                                Contact
                            </h3>

                            <div className="space-y-4 text-white/75">

                                <div>
                                    <p className="text-white/40 text-sm mb-1">
                                        Email
                                    </p>

                                    <p>86works.id@gmail.com</p>
                                </div>

                                <div>
                                    <p className="text-white/40 text-sm mb-1">
                                        Location
                                    </p>

                                    <p>Indonesia - Jabodetabek</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* BIG DIVIDER */}
                <div className="my-16 h-px bg-white/10" />

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row gap-5 items-center justify-between">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                        <img
                            src="/images/logo.svg"
                            alt="86 Works"
                            className="w-12 h-12 object-contain"
                        />

                        <div>
                            <p className="font-semibold text-sm">
                                86 Creative Works
                            </p>

                            <p className="text-white/40 text-xs mt-1">
                                Creative Agency & Social Media Partner
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">

                        <p>
                            © 2026 86 Creative Works
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}