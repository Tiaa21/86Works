// HowWeWork.tsx
// Next.js + Tailwind CSS component

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "DEALING",
        description:
            "We listen, understand your needs, and align on the best way forward.",
        note: "Understanding today, shaping tomorrow.",
        image: "/images/timeline/14.webp",
    },
    {
        number: "02",
        title: "CONCEPT MEETING",
        description:
            "We brainstorm, research, and shape creative concepts that connect.",
        note: null,
        image: "/images/timeline/15.webp",
    },
    {
        number: "03",
        title: "EXECUTION",
        description:
            "We create high-quality content and bring the concept to life seamlessly.",
        note: "Crafting content that connects.",
        image: "/images/timeline/16.webp",
    },
    {
        number: "04",
        title: "EVALUATIONS",
        description:
            "We analyze results and measure performance for continuous growth.",
        note: "Data-driven decisions, real growth.",
        image: "/images/timeline/17.webp",
    },
];

export default function Timeline() {
    return (
        <section className="min-h-screen py-14 px-6 md:px-12 lg:px-20 font-sans">

            {/* ── Top Row ── */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
                {/* Left: heading block */}
                <div className="max-w-sm">
                    <div className="inline-flex items-center border border-gray-300 bg-white/[0.03] backdrop-blur-md rounded-full px-4 py-1.5 mb-6 shadow-lg">
                        <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Our Timeline Project</span>
                    </div>

                    <h2 className="font-semibold leading-[1.05] tracking-[-2px] text-[clamp(30px,6vw,60px)] text-gray-900 max-w-xl">
                        How We Work
                    </h2>
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                        A simple, proven process that turns ideas into{" "}
                        <strong className="text-gray-900">powerful brand presence.</strong>
                    </p>
                </div>

                {/* Right: sticky-note quote + logo */}
                <div className="relative self-start mt-2">
                    {/* Logo badge */}
                    <div className="absolute -top-2 -right-2 z-10 flex flex-col items-center justify-center w-14 h-14 rounded-full border-2 border-gray-900 bg-[#F5F2EE]">
                        <span className="text-lg font-black leading-none">86</span>
                        <span className="text-[7px] font-bold tracking-widest uppercase leading-tight text-center">
                            Creative
                            <br />
                            Works
                        </span>
                    </div>

                    {/* Sticky note */}
                    <div className="bg-[#EDE8DF] shadow-md rotate-1 px-6 py-5 w-56 rounded-sm">
                        <p className="font-['Georgia',serif] italic text-gray-800 text-base leading-snug">
                            Great process
                            <br />
                            brings clarity.
                            <br />
                            Clarity brings
                            <br />
                            <span className="font-bold underline decoration-2">results.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Steps Grid ── */}
            {/*
                DESKTOP (md ke atas): grid-cols-4  → tidak diubah
                TABLET  (sm–md)     : grid-cols-2, margin bawah lebih longgar buat sticky note
                MOBILE  (< sm)      : grid-cols-1, padding dalam kartu lebih kecil
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-14 gap-y-16 sm:gap-y-20 md:gap-14">
                {steps.map((step, i) => (
                    <React.Fragment key={step.number}>
                        <motion.div
                            initial={{ opacity: 0, y: 80, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.15,
                                ease: "easeOut",
                            }}
                            className="relative bg-[#fbfbfb] rounded-2xl flex flex-col shadow-lg/40"
                        >
                            {/* Step header */}
                            <div className="flex px-5 sm:px-7 md:px-10 pt-6 sm:pt-8 md:pt-10 items-center gap-3 align-middle">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white text-xl font-bold shrink-0">
                                    {step.number}
                                </span>
                                <span className="text-xl font-bold text-gray-800 uppercase">
                                    {step.title}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="mt-4 px-5 sm:px-7 md:px-10 pb-4 text-sm text-gray-800 leading-relaxed">
                                {step.description}
                            </p>

                            <img
                                src={step.image}
                                alt={step.title}
                                width={400}
                                height={280}
                                className="w-full h-full object-cover rounded-xl"
                            />

                            {/* Sticky note (conditional) */}
                            {step.note && (
                                <div className="absolute -bottom-3 -left-3 sm:-left-6 bg-[#EDE8DF] shadow px-3 py-2 rounded-sm -rotate-2 max-w-[120px]">
                                    <img className="bottom-17 left-8 rotate-2 absolute w-16" src="/images/tape.svg" alt="Tape" />
                                    <p className="mt-4 font-['Georgia',serif] italic text-gray-700 text-[13px] leading-snug">
                                        {step.note}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </React.Fragment>
                ))}
            </div>

            {/* ── CTA Bar ── */}
            {/*
                DESKTOP: w-1/2  → tidak diubah
                TABLET & MOBILE: w-full (max-w-lg agar tidak terlalu lebar di tablet)
            */}
            <div className="flex justify-center mt-16">
                <div className="w-full max-w-lg sm:max-w-xl md:w-1/2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl px-5 sm:px-6 py-5 shadow-sm">
                    {/* Avatars + text */}
                    <div className="flex items-center gap-4">
                        {/* Avatar stack */}
                        <div className="flex -space-x-3">
                            {[0, 1, 2].map((n) => (
                                <div
                                    key={n}
                                    className="w-9 h-9 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                                    </svg>
                                </div>
                            ))}
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                Ready to start your project?
                            </p>
                            <p className="text-xs text-gray-500">
                                Let&apos;s build something great together.
                            </p>
                        </div>
                    </div>

                    {/* CTA button */}
                    <Link
                        href="https://wa.me/6285779607008"
                        target="_blank" className="cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-full whitespace-nowrap">
                        Let&apos;s Talk
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 17L17 7M17 7H7M17 7v10"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}