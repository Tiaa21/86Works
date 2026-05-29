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
        imageClass: "w-[100px] h-[180px] md:w-[140px] md:h-[200px] xl:w-[160px] xl:h-[240px] md:right-10 xl:right-4 top-5",
    },
    {
        title: "Content\nCreation",
        desc: "Creative content that connects your brand straight with your audience.",
        image: "/images/photo.svg",
        icon: <MdOutlineCameraAlt />,
        imageClass: "w-[140px] h-[220px] md:w-[200px] md:h-[220px] xl:w-[200px] xl:h-[260px] md:right-6 xl:-right-4 -top-8",
    },
    {
        title: "Strategy &\nCampaign",
        desc: "Data-driven strategy and campaigns that bring real results and impact.",
        image: "/images/Campaign.svg",
        icon: <HiOutlineChartBar />,
        imageClass: "w-[140px] h-[220px] md:w-[200px] md:h-[220px] xl:w-[200px] xl:h-[260px] md:right-6 xl:right-2 top-0 xl:top-2",
    },
    {
        title: "KOL\nSpecialist",
        desc: "Connect your brand with the right KOLs to boost reach and engagement.",
        image: "/images/KOLSpecialist.svg",
        icon: <PiTelevisionSimple />,
        imageClass: "w-[130px] h-[210px] md:w-[180px] md:h-[220px] xl:w-[180px] xl:h-[260px] md:right-6 xl:right-2 top-2",
    },
];

export default function ServicesCards() {
    return (
        <section className="w-full px-8 py-10 bg-[#efefef]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className="group relative shadow-lg/10 flex flex-col justify-between bg-[#ededed] border-1 border-[#d1d1d1] rounded-2xl p-6 h-[220px] md:h-[240px] xl:h-[280px] overflow-visible transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        {/* Icon */}
                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center text-sm shrink-0">
                            {card.icon}
                        </div>

                        {/* Title + desc */}
                        <div className="mt-2.5 md:mt-4 xl:flex-1">
                            <h3 className="text-[20px] md:text-[26px] xl:text-[26px] font-semibold leading-[1.1] tracking-normal md:tracking-[-1px] whitespace-pre-line text-black">
                                {card.title}
                            </h3>
                            <p className="mt-1.5 md:mt-3 text-[11px] md:text-[14px] xl:text-[13px] leading-relaxed text-black/55 md:w-[270px] xl:max-w-[170px]">
                                {card.desc}
                            </p>
                        </div>

                        {/* Arrow */}
                        <button className="text-black text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 w-fit">
                            <BsArrowUpRight />
                        </button>

                        {/* Image */}
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