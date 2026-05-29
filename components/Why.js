// components/Why.js

"use client";

import { HiOutlineLightBulb } from "react-icons/hi";
import { TiArrowMaximise } from "react-icons/ti";
import { TbCalendarClock } from "react-icons/tb";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.22,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 80,
        scale: 0.9,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Why() {

    return (
        <section className="relative bg-[#050505] overflow-hidden flex items-center justify-center px-6 py-32">

            <style>{`
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
            }
            `}</style>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]" />

            {/* Noise Overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
                style={{
                    backgroundImage:
                        "url('https://grainy-gradients.vercel.app/noise.svg')",
                }}
            />

            <div className="relative z-10 max-w-[1400px] w-full flex flex-col items-center">

                {/* TOP TAG */}
                <div className="shadow-lg px-6 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/80 text-xs tracking-[0.2em] uppercase mb-8">
                    Why Choose Us
                </div>

                {/* HEADING */}
                <h2 className="text-center text-white font-semibold leading-[1.05] tracking-[-2px] text-[clamp(30px,5vw,60px)] max-w-[900px]">
                    Your Growth, Our Priority.
                    <br />
                    86 WORKS.
                </h2>

                {/* ── DESKTOP LAYOUT (lg ke atas) ── */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative mt-22 w-full items-center justify-center hidden lg:flex"
                >
                    {/* CURVED LINE */}
                    <div className="absolute top-10 z-20 bg-transparent border-b-2 border-white w-1/2 h-1/2 rounded-[100%]"></div>

                    {/* LEFT CARD */}
                    <motion.div
                        variants={item}
                        className="absolute left-[2%] -top-[15%] max-w-[280px]"
                        style={{ animation: "float 4s ease-in-out infinite" }}
                    >
                        <div className="w-16 h-16 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                            <RiPoliceBadgeLine />
                        </div>
                        <h3 className="text-white text-2xl font-medium mt-7">
                            Rooted in the Spirit of "Siap Laksanakan"
                        </h3>
                        <p className="text-white/55 leading-relaxed mt-4 text-[15px]">
                            We don't just create — we execute. Every idea we develop comes with full commitment to make it real.
                        </p>
                    </motion.div>

                    {/* RIGHT CARD */}
                    <motion.div
                        variants={item}
                        className="absolute right-[2%] -top-[15%] max-w-[280px] text-right"
                        style={{ animation: "float 4s ease-in-out infinite 1.3s" }}
                    >
                        <div className="ml-auto w-16 h-16 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-4xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                            <TiArrowMaximise />
                        </div>
                        <h3 className="text-white text-2xl font-medium mt-7">
                            Industry Versatility
                        </h3>
                        <p className="text-white/55 leading-relaxed mt-4 text-[15px]">
                            F&B, beauty, tech, fashion, or corporate — we understand each industry's language and adapt to its rhythm.
                        </p>
                    </motion.div>

                    {/* BOTTOM LEFT CARD */}
                    <motion.div
                        variants={item}
                        className="absolute top-[45%] left-1/3 -translate-x-1/2 text-center max-w-[340px] z-20"
                        style={{ animation: "float 4s ease-in-out infinite 2.6s" }}
                    >
                        <div className="mx-auto w-16 h-16 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-4xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                            <HiOutlineLightBulb />
                        </div>
                        <h3 className="text-white text-2xl font-medium mt-7">
                            Creativity with Purpose
                        </h3>
                        <p className="text-white/55 leading-relaxed mt-4 text-[15px]">
                            Our work isn't just about aesthetics — it's about clarity, connection, and real impact.
                        </p>
                    </motion.div>

                    {/* BOTTOM RIGHT CARD */}
                    <motion.div
                        variants={item}
                        className="absolute top-[45%] right-1/3 translate-x-1/2 text-center max-w-[340px] z-20"
                        style={{ animation: "float 4s ease-in-out infinite 2.6s" }}
                    >
                        <div className="mx-auto w-16 h-16 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                            <TbCalendarClock />
                        </div>
                        <h3 className="text-white text-2xl font-medium mt-7">
                            Built for Long-Term Growth
                        </h3>
                        <p className="text-white/55 leading-relaxed mt-4 text-[15px]">
                            We're not here for one project — we're here to grow with you.
                        </p>
                    </motion.div>

                    {/* PEOPLE */}
                    <div className="relative -top-40 flex items-end justify-center z-10">
                        <img
                            src="images/why.png"
                            alt=""
                            className="w-2/5 object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* CENTER GLOW */}
                    <div className="absolute w-[100px] h-[100px] rounded-full bg-white/10 blur-[140px]" />
                </motion.div>

                {/* ── TABLET & MOBILE LAYOUT (di bawah lg) ── */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex lg:hidden flex-col items-center w-full mt-12 gap-4"
                >
                    {/* IMAGE */}
                    <div className="flex items-end justify-center w-full mb-2">
                        <img
                            src="images/why.png"
                            alt=""
                            className="w-3/4 sm:w-1/2 object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* CARDS GRID — 2 kolom di tablet, 1 kolom di mobile kecil */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl px-2">

                        {/* Card 1 */}
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center text-center"
                            style={{ animation: "float 4s ease-in-out infinite" }}
                        >
                            <div className="w-14 h-14 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-2xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                                <RiPoliceBadgeLine />
                            </div>
                            <h3 className="text-white text-lg font-medium mt-5">
                                Rooted in the Spirit of "Siap Laksanakan"
                            </h3>
                            <p className="text-white/55 leading-relaxed mt-3 text-sm">
                                We don't just create — we execute. Every idea we develop comes with full commitment to make it real.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center text-center"
                            style={{ animation: "float 4s ease-in-out infinite 1.3s" }}
                        >
                            <div className="w-14 h-14 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-2xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                                <TiArrowMaximise />
                            </div>
                            <h3 className="text-white text-lg font-medium mt-5">
                                Industry Versatility
                            </h3>
                            <p className="text-white/55 leading-relaxed mt-3 text-sm">
                                F&B, beauty, tech, fashion, or corporate — we understand each industry's language and adapt to its rhythm.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center text-center"
                            style={{ animation: "float 4s ease-in-out infinite 2.6s" }}
                        >
                            <div className="w-14 h-14 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-2xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                                <HiOutlineLightBulb />
                            </div>
                            <h3 className="text-white text-lg font-medium mt-5">
                                Creativity with Purpose
                            </h3>
                            <p className="text-white/55 leading-relaxed mt-3 text-sm">
                                Our work isn't just about aesthetics — it's about clarity, connection, and real impact.
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            variants={item}
                            className="flex flex-col items-center text-center"
                            style={{ animation: "float 4s ease-in-out infinite 3.9s" }}
                        >
                            <div className="w-14 h-14 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-2xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                                <TbCalendarClock />
                            </div>
                            <h3 className="text-white text-lg font-medium mt-5">
                                Built for Long-Term Growth
                            </h3>
                            <p className="text-white/55 leading-relaxed mt-3 text-sm">
                                We're not here for one project — we're here to grow with you.
                            </p>
                        </motion.div>

                    </div>

                    {/* CENTER GLOW */}
                    <div className="absolute w-[100px] h-[100px] rounded-full bg-white/10 blur-[140px]" />
                </motion.div>

            </div>
        </section>
    );
}