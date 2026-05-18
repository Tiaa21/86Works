"use client";

import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function ColsAnim() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let lenis;

    const grid = document.querySelector(".columns");
    const columns = [...grid.querySelectorAll(".column")];

    const items = columns.map((column, pos) => {
      return [...column.querySelectorAll(".col-item")].map((item) => ({
        element: item,
        column: pos,
        wrapper: item.querySelector(".img-wrap"),
        image: item.querySelector(".img"),
      }));
    });

    const mergedItems = items.flat();

    const SmoothScroll = () => {
      lenis = new Lenis({
        lerp: 0.15,
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const ScrollAni = () => {
      mergedItems.forEach((item) => {
        let xPercentValue,
          scaleXvalue,
          scaleYvalue,
          transformOrigin,
          filterValue;

        switch (item.column) {
          case 0:
            xPercentValue = -400;
            transformOrigin = "0% 50%";
            scaleXvalue = 6;
            scaleYvalue = 0.3;
            filterValue = "blur(10px)";
            break;
          case 1:
            xPercentValue = 0;
            transformOrigin = "50% 50%";
            scaleXvalue = 0.7;
            scaleYvalue = 0.7;
            filterValue = "blur(5px)";
            break;
          case 2:
            xPercentValue = 400;
            transformOrigin = "100% 50%";
            scaleXvalue = 6;
            scaleYvalue = 0.3;
            filterValue = "blur(10px)";
            break;
        }

        gsap.fromTo(
          item.wrapper,
          {
            willChange: "filter",
            xPercent: xPercentValue,
            opacity: 0,
            scaleX: scaleXvalue,
            scaleY: scaleYvalue,
            filter: filterValue,
          },
          {
            startAt: { transformOrigin: transformOrigin },
            scrollTrigger: {
              trigger: item.element,
              start: "clamp(top bottom)",
              end: "clamp(bottom top)",
              scrub: true,
            },
            xPercent: 0,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            filter: "blur(0px)",
          }
        );
      });
    };

    SmoothScroll();
    ScrollAni();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="grid place-items-center w-[100%] relative">
        <div
          className="columns w-full max-w-[1200px] relative px-[0] py-[20px] 
        grid place-items-center grid-cols-[repeat(3,_1fr)] gap-[2vw] mt-[100px]"
        >
          <div className="column w-full relative grid gap-[2vw] grid-cols-[100%]">
            <div className="col-item m-0 relative z-1">
              <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <img
                  src="../images/img1.jpg"
                  alt=""
                  className="img absolute top-0 left-0 h-full w-full object-cover bg-cover bg-[50%_20%] [backface-visibility:hidden]"
                />
              </div>
            </div>
            <div className="col-item m-0 relative z-1">
              <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <img
                  src="../images/img2.jpg"
                  alt=""
                  className="img absolute top-0 left-0 h-full w-full object-cover bg-cover bg-[50%_20%] [backface-visibility:hidden]"
                />
              </div>
            </div>
            <div className="col-item m-0 relative z-1">
              <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <img
                  src="../images/img3.jpg"
                  alt=""
                  className="img absolute top-0 left-0 h-full w-full object-cover bg-cover bg-[50%_20%] [backface-visibility:hidden]"
                />
              </div>
            </div>
          </div>

          <div className="column w-full relative grid gap-[2vw] grid-cols-[100%]">
            <div className="col-item m-0 relative z-1">
              <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <img
                  src="../images/img4.jpg"
                  alt=""
                  className="img absolute top-0 left-0 h-full w-full object-cover bg-cover bg-[50%_20%] [backface-visibility:hidden]"
                />
              </div>
            </div>
            <div className="col-item m-0 relative z-1">
              <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <img
                  src="../images/img5.jpg"
                  alt=""
                  className="img absolute top-0 left-0 h-full w-full object-cover bg-cover bg-[50%_20%] [backface-visibility:hidden]"
                />
              </div>
            </div>
            <div className="col-item m-0 relative z-1">
              <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <img
                  src="../images/img6.jpg"
                  alt=""
                  className="img absolute top-0 left-0 h-full w-full object-cover bg-cover bg-[50%_20%] [backface-visibility:hidden]"
                />
              </div>
            </div>
          </div>

          <div className="column w-full relative grid gap-[2vw] grid-cols-[100%]">
            <div className="col-item m-0 relative z-1">
              <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <img
                  src="../images/img7.jpg"
                  alt=""
                  className="img absolute top-0 left-0 h-full w-full object-cover bg-cover bg-[50%_20%] [backface-visibility:hidden]"
                />
              </div>
            </div>
            <div className="col-item m-0 relative z-1">
              <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <img
                  src="../images/img8.jpg"
                  alt=""
                  className="img absolute top-0 left-0 h-full w-full object-cover bg-cover bg-[50%_20%] [backface-visibility:hidden]"
                />
              </div>
            </div>
            <div className="col-item m-0 relative z-1">
              <div className="img-wrap w-full [aspect-ratio:0.6] h-auto relative overflow-hidden rounded-none">
                <img
                  src="../images/img9.jpg"
                  alt=""
                  className="img absolute top-0 left-0 h-full w-full object-cover bg-cover bg-[50%_20%] [backface-visibility:hidden]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColsAnim;
