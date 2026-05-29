"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GoArrowUpRight, GoPlus } from "react-icons/go";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

const projects = [
  {
    title: "Obamah's Bakery",
    category: "Food & Beverage",
    desc: "Social media management and content creation for bakery brand.",
    image: "/images/porto/27.png",
    href: "https://www.instagram.com/obamahsbakery/",
    logo: "/images/projects/44.webp",
  },
  {
    title: "Vlife Medical & Wellness",
    category: "Health & Wellness",
    desc: "Content strategy and campaign visuals for medical and wellness audiences.",
    image: "/images/porto/24.png",
    href: "https://www.instagram.com/vlifewellness/",
    logo: "/images/projects/47.webp",
  },
  {
    title: "BIG FU Restaurant",
    category: "Food & Beverage",
    desc: "Social media management and content creation for restaurant brand.",
    image: "/images/porto/28.png",
    href: "https://www.instagram.com/bigfu.id/",
    logo: "/images/projects/49.webp",
  },
  {
    title: "YOGA PLACE",
    category: "Health & Wellness",
    desc: "Content strategy and campaign visuals for yoga and pilates audiences.",
    image: "/images/porto/26.png",
    href: "https://www.instagram.com/yogaplace.pilates/",
    logo: "/images/projects/43.webp",
  },
  {
    title: "Hwanilla",
    category: "Beauty & Cosmetics",
    desc: "Social media management and content creation for beauty and cosmetics brand.",
    image: "/images/porto/25.png",
    href: "https://www.instagram.com/hwanilla.id/",
    logo: "/images/projects/45.webp",
  },
  {
    title: "Yogurt King",
    category: "Food & Beverage",
    desc: "Content strategy and campaign visuals for yogurt and healthy food audiences.",
    image: "/images/porto/23.png",
    href: "https://www.instagram.com/yogurtking.id/",
    logo: "/images/projects/52.webp",
  },
  {
    title: "Daon Jju",
    category: "Food & Beverage",
    desc: "Social media management and content creation for korean food audiences.",
    image: "/images/porto/daon.webp",
    href: "https://www.tiktok.com/@daonjju",
    logo: "/images/projects/46.webp",
  },
  {
    title: "Limitless Star",
    category: "Accessories",
    desc: "Content strategy and campaign visuals for accessories and fashion audiences.",
    image: "/images/porto/star.webp",
    href: "https://www.instagram.com/limitlesstar.id/",
    logo: "/images/projects/51.webp",
  },
  {
    title: "ICYEE",
    category: "Beauty & Cosmetics",
    desc: "Social media management and content creation for skincares and beauty brand.",
    image: "/images/porto/icyee.webp",
    href: "https://www.instagram.com/icyee_indonesia/",
    logo: "/images/projects/50.webp",
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide social media management, content creation, branding, creative strategy, ads campaign management, and visual production.",
  },
  {
    question: "How does the process work?",
    answer:
      "We begin with a discovery session, followed by strategy planning, content production, revisions, and execution.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Yes. Every package includes revision rounds to ensure the final result matches your expectations.",
  },
  {
    question: "Will I own the final content?",
    answer:
      "Yes. Once the project is completed, all approved final assets belong to your brand.",
  },
];

const filters = [
  "All Projects",
  "Food & Beverage",
  "Health & Wellness",
  "Beauty & Cosmetics",
  "Accessories",
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [openFaq, setOpenFaq] = useState(0);

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
        (project) => project.category === activeFilter
      );

  return (
    <main className="bg-[#efefef] text-black min-h-screen overflow-hidden">
      <Nav />

      {/* HERO */}
      <section className="px-5 md:px-10 pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <p className="uppercase tracking-[0.25em] text-[11px] md:text-sm mb-5 text-black/60">
              Our Projects
            </p>

            <h1 className="text-[52px] md:text-8xl leading-[0.9] font-semibold tracking-tight max-w-4xl">
              Work that
              <br />
              makes impact.
            </h1>
          </div>

          <p className="max-w-md text-black/60 text-base md:text-lg leading-relaxed">
            We collaborate with ambitious brands through strategy,
            content, campaigns, and visuals that actually connect
            with audiences.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="px-5 md:px-10 mb-8 md:mb-14">
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(item)}
              className={`shrink-0 px-5 py-2.5 rounded-full border text-sm transition-all duration-300 cursor-pointer ${activeFilter === item
                ? "bg-black text-white border-black"
                : "border-black/10 hover:border-black hover:bg-black hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="px-5 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.04,
                }}
                className="group relative overflow-hidden rounded-[20px] md:rounded-[24px] bg-black h-[420px] md:h-[520px] shadow-xl/20"
              >
                <Link
                  href={project.href}
                  target="_blank"
                  className="block w-full h-full"
                >
                  {/* IMAGE */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/50 md:group-hover:bg-black/80 transition-all duration-500" />

                  {/* CHIP */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 text-white text-[11px] md:text-xs px-3 md:px-4 py-2 rounded-full">
                      {project.category}
                    </div>
                  </div>

                  {/* CENTER LOGO */}
                  <div className="hidden md:flex absolute inset-0 z-20 items-center justify-center pointer-events-none mb-14">
                    <div className="w-32 h-32 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 p-6 flex">
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={120}
                        height={120}
                        className="object-contain w-full h-full brightness-0 invert"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 z-30 p-5 md:p-7">
                    <div className="flex flex-col">
                      <div className="transition-all duration-500 md:group-hover:-translate-y-2">
                        <h3 className="text-white text-2xl md:text-3xl font-semibold mb-3 tracking-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* DESKTOP DESC */}
                      <div className="hidden md:block overflow-hidden">
                        <p className="text-white/60 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                          {project.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-white text-sm mt-4">
                        View Social Media
                        <GoArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-14 md:gap-20">
            <div>
              <div className="inline-flex items-center border border-gray-300 bg-white/[0.03] backdrop-blur-md rounded-full px-4 py-1.5 mb-6 shadow-lg">
                <span className="text-xs tracking-[0.2em] uppercase text-gray-500">FAQ</span>
              </div>

              <h2 className="text-4xl md:text-7xl font-semibold leading-[0.95]">
                Frequently
                <br />
                Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;

                return (
                  <div
                    key={i}
                    className="border-b border-black/10 pb-5"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(isOpen ? null : i)
                      }
                      className="w-full flex items-center justify-between gap-5 text-left cursor-pointer"
                    >
                      <h3 className="text-base md:text-lg font-medium">
                        {faq.question}
                      </h3>

                      <div
                        className={`w-9 h-9 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen
                          ? "bg-black text-white rotate-45"
                          : "hover:bg-black hover:text-white"
                          }`}
                      >
                        <GoPlus size={16} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-5 text-black/60 leading-relaxed pr-10">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA
      <section className="px-5 md:px-10 pb-24">
        <div className="max-w-7xl mx-auto rounded-[8px] md:rounded-[20px] bg-black text-white px-6 md:px-10 py-12 md:py-16 flex flex-col md:flex-row gap-10 md:items-center md:justify-between">
          <div>
            <p className="text-white/60 mb-3 uppercase tracking-[0.2em] text-[11px] md:text-sm">
              Have a project in mind?
            </p>

            <h3 className="text-3xl md:text-6xl leading-[1] font-semibold max-w-2xl">
              Let’s create something amazing together.
            </h3>
          </div>

          <Link
            href="https://wa.me/6285779607008"
            target="_blank" className="w-fitcursor-pointer bg-white text-black rounded-full px-7 py-4 h-fit font-medium hover:scale-105 transition w-full md:w-fit">
            Let’s Talk
          </Link>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}