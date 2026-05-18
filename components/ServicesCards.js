"use client";

import { BsArrowUpRight } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";

const cards = [
    {
        title: "Social Media\nManagement",
        desc: "We manage your social media to build engagement and brand loyalty.",
        image: "/images/socialmanage.svg",
        icon: <FaPenNib />,
        imageClass: "w-[160px] h-[240px] right-4 top-5", // lebih kecil
    },
    {
        title: "Content\nCreation",
        desc: "Creative content that connects your brand with your audience.",
        image: "/images/photo.svg",
        icon: <MdOutlineCameraAlt />,
        imageClass: "w-[200px] h-[260px] -right-4 -top-8",
    },
    {
        title: "Strategy &\nCampaign",
        desc: "Data-driven strategy and campaigns that bring real results.",
        image: "/images/Campaign.svg",
        icon: <HiOutlineChartBar />,
        imageClass: "w-[200px] h-[260px] right-2 top-2",
    },
    {
        title: "KOL\nSpecialist",
        desc: "Connect your brand with the right KOLs to boost reach and engagement.",
        image: "/images/KOLSpecialist.svg",
        icon: <PiTelevisionSimple />,
        imageClass: "w-[180px] h-[260px] right-2 top-2",
    },
];

export default function ServicesCards() {
    return (
        <section className="w-full px-8 py-10 bg-[#efefef]">
            <div className="grid grid-cols-4 gap-8">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className="group relative flex flex-col justify-between bg-[#ededed] border-1 border-[#d1d1d1] rounded-2xl p-6 h-[280px] overflow-visible transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm shrink-0">
                            {card.icon}
                        </div>

                        {/* Title + desc */}
                        <div className="mt-4 flex-1">
                            <h3 className="text-[26px] font-semibold leading-[1.1] tracking-[-1px] whitespace-pre-line text-black">
                                {card.title}
                            </h3>
                            <p className="mt-3 text-[13px] leading-relaxed text-black/55 max-w-[170px]">
                                {card.desc}
                            </p>
                        </div>

                        {/* Arrow */}
                        <button className="text-black text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 w-fit">
                            <BsArrowUpRight />
                        </button>

                        {/* Image — overflows out of card to the right and top */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className={`absolute top-0 right-0 object-contain transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1 drop-shadow-xl ${card.imageClass}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}