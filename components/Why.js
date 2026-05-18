// components/Why.js

"use client";

import { HiOutlineChartBar } from "react-icons/hi";
import { PiUsersThreeLight, PiPencilSimpleLineLight } from "react-icons/pi";

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

            <div className="relative z-10 max-w-[1300px] w-full flex flex-col items-center">

                {/* TOP TAG */}
                <div className="px-6 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/80 text-xs tracking-[0.2em] uppercase mb-8">
                    Why Choose Us
                </div>

                {/* HEADING */}
                <h2 className="text-center text-white font-semibold leading-[1.05] tracking-[-2px] text-[clamp(30px,5vw,60px)] max-w-[900px]">
                    Your Growth, Our Priority.
                    <br />
                    Results That Matter.
                </h2>

                {/* CENTER VISUAL */}
                <div className="relative mt-44 w-full flex items-center justify-center">

                    {/* CURVED LINE */}
                    <div className="absolute top-0 z-20 bg-transparent border-b-2 border-white w-1/2 h-1/2 rounded-[100%]"></div>

                    {/* LEFT CARD */}
                    <div className="absolute left-[2%] top-[10%] max-w-[250px]" style={{ animation: "float 4s ease-in-out infinite" }}
                    >
                        <div className="w-16 h-16 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                            <HiOutlineChartBar />
                        </div>

                        <h3 className="text-white text-2xl font-medium mt-7">
                            Data-Driven Strategy
                        </h3>

                        <p className="text-white/55 leading-relaxed mt-4 text-[15px]">
                            We turn insights into actions that drive measurable growth
                            and real business impact.
                        </p>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="absolute right-[2%] top-[10%] max-w-[260px] text-right" style={{ animation: "float 4s ease-in-out infinite 1.3s" }}
                    >
                        <div className="ml-auto w-16 h-16 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                            <PiUsersThreeLight />
                        </div>

                        <h3 className="text-white text-2xl font-medium mt-7">
                            The Right Connections
                        </h3>

                        <p className="text-white/55 leading-relaxed mt-4 text-[15px]">
                            We collaborate with trusted KOLs and communities that align
                            with your brand and amplify your message.
                        </p>
                    </div>

                    {/* BOTTOM CARD */}
                    <div className="absolute top-[45%] left-1/2 -translate-x-1/2 text-center max-w-[340px] z-20" style={{ animation: "float 4s ease-in-out infinite 2.6s" }}
                    >
                        <div className="mx-auto w-16 h-16 rounded-full border border-white/20 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white text-3xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                            <PiPencilSimpleLineLight />
                        </div>

                        <h3 className="text-white text-2xl font-medium mt-7">
                            Creative That Connects
                        </h3>

                        <p className="text-white/55 leading-relaxed mt-4 text-[15px]">
                            We craft content that captures attention, sparks engagement,
                            and leaves a lasting impression.
                        </p>
                    </div>

                    {/* PEOPLE */}
                    <div className="relative -top-60 flex items-end justify-center z-10">

                        <img
                            src="images/why.png"
                            alt=""
                            className="w-1/2 object-contain drop-shadow-2xl"
                        />

                    </div>

                    {/* CENTER GLOW */}
                    <div className="absolute w-[100px] h-[100px] rounded-full bg-white/10 blur-[140px]" />
                </div>
            </div>
        </section>
    );
}