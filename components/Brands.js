"use client";

import { useEffect, useState } from "react";

export default function TrustedBrands() {
    const [brandLogos, setBrandLogos] = useState([]);

    useEffect(() => {
        fetch("/api/brands")
            .then((r) => r.json())
            .then(setBrandLogos);
    }, []);

    const repeated = [...brandLogos, ...brandLogos, ...brandLogos];

    return (
        <div className="relative flex items-center w-full overflow-hidden  py-4">

            {/* Static label */}
            <div className="shrink-0 flex flex-col pr-6 pl-8 border-r border-black/10 z-10 ">
                <span className="text-[22px] font-semiboldd uppercase text-black/40 leading-tight">Trusted by brands of all kinds</span>
            </div>

            {/* Scrolling track */}
            <div className="flex items-center overflow-hidden flex-1">
                <div
                    className="flex items-center gap-12 whitespace-nowrap"
                    style={{
                        animation: "marquee 30s linear infinite",
                    }}
                >
                    {repeated.map((logo, i) => (
                        <img
                            key={i}
                            src={`/images/brands/${logo}`}
                            alt=""
                            className="h-26 w-auto object-contain hover:grayscale hover:opacity-100 transition-all duration-300 shrink-0"
                        />
                    ))}
                </div>
            </div>

            {/* Fade edges */}
            <div className="absolute left-[400px] top-0 bottom-0 w-16 bg-gradient-to-r from-[#efefef] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#efefef] to-transparent pointer-events-none z-10" />
        </div>
    );
}