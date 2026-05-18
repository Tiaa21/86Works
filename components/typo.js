"use client";

import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

function Typo() {
  let lenis;
  const text = new SplitType(".target");
  const chars = text.chars;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const initSmooth = () => {
      lenis = new Lenis({
        lerp: 0.2,
        smooth: true,
      });

      lenis.on("scroll", () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const scroll = () => {
      const text = new SplitType(".target");
      const chars = text.chars;

      chars.forEach((char) => gsap.set(char.parentNode, { perspective: 1000 }));

      gsap.fromTo(
        chars,
        {
          willChange: "opacity, transform",
          opacity: 0.2,
          z: -800,
        },
        {
          ease: "back.out(1.2)",
          opacity: 1,
          z: 0,
          stagger: 0.04,
          scrollTrigger: {
            trigger: chars,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    };

    const init = () => {
      initSmooth();
      scroll();
    };

    init();
  }, []);

  return (
    <div>
      <div className="flex flex-col w-screen relative px-8 py-6 mt-[150px]">
        <h2 className="content_title text-[8vw] leading-[0.8] text-center grid gap-8">
          <span className="uppercase target">DREAM BIG</span>
          <span className="uppercase target">NEVER SETTLE</span>
          <span className="uppercase target mb-[100px]">NEVER QUIT</span>
        </h2>
      </div>

      <div className="flex flex-col w-screen relative px-8 py-6 mb-[350px]">
        <p className="max-w-[600px] mx-auto my-6 text-[1.25rem] leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
    </div>
  );
}

export default Typo;
