"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiBreadFill } from "react-icons/pi";
import { GiHealthCapsule, GiDelicatePerfume } from "react-icons/gi";
import { TbSoupFilled } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { RiDrinksFill } from "react-icons/ri";

const projects = [
    {
        id: "01",
        title: "Obamah's Bakery",
        category: "BAKERY",
        icon: <PiBreadFill />,
        color: "#775a43",
        img: "/images/porto/27.png",
        link: "https://www.instagram.com/obamahsbakery/"
    },
    {
        id: "02",
        title: "Vlife Medical & Wellness",
        category: "HEALTH & WELLNESS",
        icon: <GiHealthCapsule />,
        color: "#144a3e",
        img: "/images/porto/24.png",
        link: "https://www.instagram.com/vlifewellness/"
    },
    {
        id: "03",
        title: "BIG FU Restaurant",
        category: "FOOD & BEVERAGE",
        icon: <TbSoupFilled />,
        color: "#766a5a",
        img: "/images/porto/28.png",
        link: "https://www.instagram.com/bigfu.id/"
    },
    {
        id: "04",
        title: "YOGA PLACE",
        category: "YOGA & LIFESTYLE",
        icon: <GrYoga />,
        color: "#6996b8",
        img: "/images/porto/26.png",
        link: "https://www.instagram.com/yogaplace.pilates/"
    },
    {
        id: "05",
        title: "Hwanilla",
        category: "PERFUME",
        icon: <GiDelicatePerfume />,
        color: "#c9b99a",
        img: "/images/porto/25.png",
        link: "https://www.instagram.com/hwanilla.id/"
    },
    {
        id: "06",
        title: "Yogurt King",
        category: "YOGURT & DRINKS",
        icon: <RiDrinksFill />,
        color: "#b66271",
        img: "/images/porto/23.png",
        link: "https://www.instagram.com/yogurtking.id/"
    },
];

const rotations = [-12, 10, 2, -2, -5, 5];

// Each path connects card N to card N+1
const paths = [
    "M 62 -18  C 58 12, 42 16, 28 20",
    "M 38 20 C 42 40, 58 42, 82 47",
    "M 62 42  C 58 52, 42 56, 28 60",
    "M 28 60 C 42 70, 58 72, 82 76",
    "M 82 76 C 58 82, 42 84, 28 88",
    "M 28 88 C 42 92, 58 94, 82 97",
];

function useInView(options = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { threshold: 0.15, ...options });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
}

function Pin() {
    return (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="w-7 h-7 rounded-full bg-[#3a3a3a] shadow-md border-2 border-[#555] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#888]" />
            </div>
        </div>
    );
}

function AnimatedCard({ project, index, delay = 0 }) {
    const [hovered, setHovered] = useState(false);
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer w-100"
            style={{
                transform: inView
                    ? hovered
                        ? "rotate(0deg) scale(1.05) translateY(0px)"
                        : `rotate(${rotations[index]}deg) scale(1) translateY(0px)`
                    : `rotate(${rotations[index]}deg) scale(0.85) translateY(40px)`,
                opacity: inView ? 1 : 0,
                transition: inView
                    ? `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, opacity 0.5s ease ${delay}ms`
                    : "none",
                zIndex: hovered ? 30 : 10,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Pin />
            <div className="bg-white rounded-4xl shadow-2xl/50 p-5">
                <div className="w-full aspect-square">
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-contain rounded-t-4xl"
                    />
                </div>
                <div className="mt-3 px-4 flex items-center justify-between">
                    <div>
                        <p className="text-[20px] text-gray-400 font-mono mb-0.5">{project.id}</p>
                        <h3 className="text-xl leading-tight font-semibold text-gray-900">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                            {project.icon && (
                                <span style={{ color: project.color }} className="text-[20px]">
                                    {project.icon}
                                </span>
                            )}
                            <p className="text-[14px] tracking-[0.18em] text-gray-500 font-mono uppercase">
                                {project.category}
                            </p>
                        </div>
                    </div>
                    <button className="flex items-center justify-center text-black hover:opacity-50 transition-all duration-200 flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 10 10" fill="none">
                            <path
                                d="M2 8L8 2M8 2H3M8 2V7"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

// Animated SVG path that "draws" itself when in view
function AnimatedPath({ d, delay = 0 }) {
    const pathRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [length, setLength] = useState(1000);

    useEffect(() => {
        if (pathRef.current) {
            setLength(pathRef.current.getTotalLength());
        }
    }, []);

    useEffect(() => {
        const el = pathRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <path
            ref={pathRef}
            d={d}
            stroke="#ddd"
            strokeWidth="0.15"
            strokeDasharray={length}
            strokeDashoffset={inView ? 0 : length}
            fill="none"
            style={{
                transition: inView
                    ? `stroke-dashoffset 1s ease ${delay}ms`
                    : "none",
            }}
        />
    );
}

function AnimatedTagline({ delay = 0 }) {
    const [ref, inView] = useInView();
    return (
        <div
            ref={ref}
            className="absolute"
            style={{
                bottom: "10px",
                right: "60px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0px)" : "translateY(16px)",
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
            }}
        >
            <p className="handwritten text-2xl text-gray-400 italic">
                Built to stand out.
                <span className="block mt-1 border-b border-gray-300 w-40" />
            </p>
        </div>
    );
}

// ── Tablet card: lebih besar dari mobile, pakai Pin, slight hover ──
function TabletCard({ project, index }) {
    const [hovered, setHovered] = useState(false);
    const [ref, inView] = useInView();
    const rot = index % 2 === 0 ? 1.5 : -1.5;

    return (
        <div
            ref={ref}
            className="relative cursor-pointer"
            style={{
                transform: inView
                    ? hovered
                        ? "rotate(0deg) scale(1.03)"
                        : `rotate(${rot}deg) scale(1)`
                    : `rotate(${rot}deg) scale(0.88) translateY(30px)`,
                opacity: inView ? 1 : 0,
                transition: inView
                    ? `transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 80}ms, opacity 0.5s ease ${index * 80}ms`
                    : "none",
                zIndex: hovered ? 20 : 10,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => window.open(project.link, "_blank")}
        >
            <Pin />
            <div className="bg-white rounded-3xl shadow-xl p-4 pt-6">
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-50">
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="mt-3 px-2 flex items-center justify-between">
                    <div>
                        <p className="text-[13px] text-gray-400 font-mono mb-0.5">{project.id}</p>
                        <h3 className="text-base leading-tight font-semibold text-gray-900">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1">
                            {project.icon && (
                                <span style={{ color: project.color }} className="text-[15px]">
                                    {project.icon}
                                </span>
                            )}
                            <p className="text-[11px] tracking-[0.15em] text-gray-500 font-mono uppercase">
                                {project.category}
                            </p>
                        </div>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:opacity-50 transition-opacity flex-shrink-0">
                        <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                            <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── Mobile card: polish dari yang sudah ada ──
function MobileCard({ project, index }) {
    const [ref, inView] = useInView();
    const rot = index % 2 === 0 ? 2 : -2;

    return (
        <div
            ref={ref}
            className="relative cursor-pointer w-56"
            style={{
                transform: inView
                    ? `rotate(${rot}deg) scale(1)`
                    : `rotate(${rot}deg) scale(0.88) translateY(24px)`,
                opacity: inView ? 1 : 0,
                transition: inView
                    ? `transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 60}ms, opacity 0.5s ease ${index * 60}ms`
                    : "none",
            }}
            onClick={() => window.open(project.link, "_blank")}
        >
            <Pin />
            <div className="bg-white rounded-2xl shadow-[0_6px_28px_rgba(0,0,0,0.11)] p-3 pt-5">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
                    <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="mt-2.5 px-1 flex items-center justify-between">
                    <div>
                        <p className="text-[11px] text-gray-400 font-mono mb-0.5">{project.id}</p>
                        <h3 className="text-[15px] font-semibold text-gray-900 leading-tight">{project.title}</h3>
                        <div className="flex items-center gap-1 mt-0.5">
                            {project.icon && (
                                <span style={{ color: project.color }} className="text-[14px]">{project.icon}</span>
                            )}
                            <p className="text-[9px] tracking-[0.15em] text-gray-400 font-mono uppercase">
                                {project.category}
                            </p>
                        </div>
                    </div>
                    <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 8L8 2M8 2H3M8 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    return (
        <section className="min-h-screen font-sans py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            <style>{`
                .handwritten {
                    font-style: italic;
                    font-weight: 400;
                }
            `}</style>

            <div className="max-w-[1300px] mx-auto">

                {/* Header */}
                <div className="mb-8 md:mb-10">
                    <div className="inline-flex items-center border border-gray-300 bg-white/[0.03] backdrop-blur-md rounded-full px-4 py-1.5 mb-6 shadow-lg">
                        <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Our Portofolio Highlights</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <h2 className="font-semibold leading-[1.05] tracking-[-2px] text-[clamp(30px,6vw,60px)] text-gray-900 max-w-xl">
                                Work we&rsquo;re proud of,<br />
                                results our clients love.
                            </h2>
                            <p className="text-sm text-gray-600 mt-4 max-w-lg leading-relaxed">
                                At 86 Works, we believe that great creativity adapts.
                                We've partnered with brands across a <strong className="text-gray-900">wide range of sectors</strong>, each with its own rhythm, audience, and story.
                                — we shape ideas that fit the industry, and stand out from the crowd.
                            </p>
                        </div>
                        <div className="hidden md:block text-gray-300 select-none mb-2">
                            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="14" r="5" stroke="#ccc" strokeWidth="1.5" />
                                <circle cx="11" cy="34" r="5" stroke="#ccc" strokeWidth="1.5" />
                                <line x1="15" y1="16" x2="40" y2="28" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
                                <line x1="15" y1="32" x2="40" y2="20" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* ── DESKTOP — tidak diubah sama sekali ── */}
                {/* DESKTOP */}
                <div className="hidden xl:block relative" style={{ height: "1900px" }}>

                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        style={{ zIndex: 0 }}
                        aria-hidden="true"
                    >
                        {paths.map((d, i) => (
                            <AnimatedPath key={i} d={d} delay={i * 300} />
                        ))}
                    </svg>

                    <div className="absolute" style={{ top: "-250px", right: "200px" }}>
                        <AnimatedCard project={projects[0]} index={0} delay={0} />
                    </div>
                    <div className="absolute" style={{ top: "50px", left: "120px" }}>
                        <AnimatedCard project={projects[1]} index={1} delay={100} />
                    </div>
                    <div className="absolute" style={{ top: "400px", right: "160px" }}>
                        <AnimatedCard project={projects[2]} index={2} delay={0} />
                    </div>
                    <div className="absolute" style={{ top: "700px", left: "60px" }}>
                        <AnimatedCard project={projects[3]} index={3} delay={0} />
                    </div>
                    <div className="absolute" style={{ top: "1100px", right: "60px" }}>
                        <AnimatedCard project={projects[4]} index={4} delay={0} />
                    </div>
                    <div className="absolute" style={{ top: "1350px", left: "60px" }}>
                        <AnimatedCard project={projects[5]} index={5} delay={0} />
                    </div>

                    <AnimatedTagline delay={200} />
                </div>

                {/* ── TABLET (iPad) — sm sampai md ── */}
                <div className="hidden md:grid xl:hidden grid-cols-2 gap-x-8 gap-y-14 px-4 py-6 place-items-center">
                    {projects.map((p, i) => (
                        <TabletCard key={p.id} project={p} index={i} />
                    ))}
                    <p className="handwritten col-span-2 text-xl text-gray-400 italic text-center mt-4">
                        Built to stand out.
                        <span className="block mt-1 mx-auto border-b border-gray-300 w-36" />
                    </p>
                </div>

                {/* ── MOBILE — di bawah sm ── */}
                <div className="sm:hidden flex flex-col gap-10 items-center py-4">
                    {projects.map((p, i) => (
                        <MobileCard key={p.id} project={p} index={i} />
                    ))}
                    <p className="handwritten text-xl text-gray-400 italic text-center mt-2">
                        Built to stand out.
                    </p>
                </div>

            </div>
        </section>
    );
}