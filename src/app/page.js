"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./globals.css";
import Typo from "../../components/typo";
import ColsAnim from "../../components/ColsAnim";
import ServicesCards from "../../components/ServicesCards";
import TrustedBrands from "../../components/Brands";
import Why from "../../components/Why";
import { BsArrowUpRight } from "react-icons/bs";

const images = [
  "images/13.svg",
  "images/3.svg",
  "images/5.svg",
  "images/6.svg",
  "images/7.svg",
  "images/8.svg",
  "images/9.svg",
  "images/10.svg",
  "images/11.svg",
  "images/12.svg",
];

const MOCKUP_POSITIONS = {
  center: { top: "50%", left: "62%" },
  leftFan: { top: "54%", left: "62%" },
  rightFan: { top: "78%", left: "73%" },
  farRight: { top: "62%", left: "88%" },
  laptop: { top: "35%", left: "86%" },
};

export default function Home() {
  const titleRef = useRef(null);
  const imagesRef = useRef(null);
  const navRef = useRef(null);
  const heroLeftRef = useRef(null);
  const bgColor = useRef(null);
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const mockLeftRef = useRef(null);
  const mockRightRef = useRef(null);
  const mockFarRightRef = useRef(null);
  const mockLaptopRef = useRef(null);
  const ENABLE_OPENING_ANIMATION = true;

  const hasSeenAnimation =
    !ENABLE_OPENING_ANIMATION
      ? true
      : (
        typeof sessionStorage !== "undefined" &&
        sessionStorage.getItem("86works_seen") === "true"
      );

  const [showTypo, setShowTypo] = useState(hasSeenAnimation);
  const [imagePositions, setImagePositions] = useState([]);

  // ─── BLOCK SCROLL DURING ANIMATION ───────────────────────────────
  useEffect(() => {
    if (!showTypo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showTypo]);

  // ─── CUSTOM CURSOR ────────────────────────────────────────────────
  useEffect(() => {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, rafId;
    const onMove = (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      if (cursorDot.current) {
        cursorDot.current.style.left = mouseX - 5 + "px";
        cursorDot.current.style.top = mouseY - 5 + "px";
      }
    };
    const loop = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (cursorRing.current) {
        cursorRing.current.style.left = ringX - 20 + "px";
        cursorRing.current.style.top = ringY - 20 + "px";
      }
      rafId = requestAnimationFrame(loop);
    };
    document.addEventListener("mousemove", onMove);
    loop();
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafId); };
  }, []);

  useEffect(() => {
    const grow = () => { if (cursorDot.current) cursorDot.current.style.transform = "scale(3.5)"; if (cursorRing.current) cursorRing.current.style.transform = "scale(2.8)"; };
    const shrink = () => { if (cursorDot.current) cursorDot.current.style.transform = "scale(2)"; if (cursorRing.current) cursorRing.current.style.transform = "scale(2)"; };
    const els = document.querySelectorAll("a, button, .image");
    els.forEach(el => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });
    return () => els.forEach(el => { el.removeEventListener("mouseenter", grow); el.removeEventListener("mouseleave", shrink); });
  }, [showTypo]);

  // // ─── SKIP ANIMATION ──────────────────────────────────────────────
  // useEffect(() => {
  //   if (!hasSeenAnimation) return;
  //   if (bgColor.current) bgColor.current.style.backgroundColor = "#efefef";
  //   if (titleRef.current) titleRef.current.style.opacity = "0";
  //   if (navRef.current) { navRef.current.style.opacity = "1"; navRef.current.style.transform = "translateY(0)"; }
  //   if (heroLeftRef.current) heroLeftRef.current.style.opacity = "1";

  //   const setFinal = (ref, pos, rotate, w, h) => {
  //     if (!ref.current) return;
  //     Object.assign(ref.current.style, {
  //       opacity: "1", top: pos.top, left: pos.left,
  //       width: w, height: h,
  //       transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
  //       zIndex: "24",
  //     });
  //   };
  //   setFinal(mockLeftRef, MOCKUP_POSITIONS.leftFan, -18, "175px", "230px");
  //   setFinal(mockRightRef, MOCKUP_POSITIONS.rightFan, 0, "175px", "230px");
  //   setFinal(mockFarRightRef, MOCKUP_POSITIONS.farRight, 24, "155px", "200px");
  //   setFinal(mockLaptopRef, MOCKUP_POSITIONS.laptop, -5, "200px", "150px");
  // }, [hasSeenAnimation]);

  // ─── SCATTERED POSITIONS ─────────────────────────────────────────
  useEffect(() => {
    const used = [];
    const positions = images.map((_, i) => {
      if (i === 0) return { top: "50%", left: "50%" };
      let top, left, attempts = 0;
      do {
        top = Math.random() * 90;
        left = Math.random() * 90;
        attempts++;
      } while (
        used.some(p => Math.abs(p.top - top) < 25 && Math.abs(p.left - left) < 25) &&
        attempts < 100
      );
      used.push({ top, left });
      return { top: `${top}%`, left: `${left}%` };
    });
    setImagePositions(positions);
  }, []);

  // ─── OPENING ANIMATION ───────────────────────────────────────────
  useEffect(() => {
    if (imagePositions.length === 0 || hasSeenAnimation) return;

    if (process.env.NODE_ENV === "production") {
      sessionStorage.setItem("86works_seen", "true");
    }

    const timer = setTimeout(() => setShowTypo(true), 9500);

    // Title fades to white then out
    gsap.to(titleRef.current, {
      color: "#ffffff", duration: 2, delay: 0.5,
      onComplete: () => gsap.to(titleRef.current, { opacity: 0, duration: 1 }),
    });

    // Scatter images in
    const imageEls = imagesRef.current?.querySelectorAll(".image");

    gsap.set(imageEls, {
      opacity: 0,
    });

    gsap.fromTo(
      imageEls,
      { opacity: 0, scale: gsap.utils.random(1, 1.2) },
      { opacity: 1, scale: 1.2, stagger: 0.1, duration: 2.5, delay: 2 }
    );

    // Focus center image (i===0), scatter others away
    gsap.to(imageEls, {
      opacity: (i) => (i === 0 ? 1 : 0),
      scale: (i) => (i === 0 ? 0.8 : 1),
      x: (i) => (i === 0 ? 0 : gsap.utils.random(-200, 100)),
      y: (i) => (i === 0 ? 0 : gsap.utils.random(-200, 100)),
      rotate: (i) => (i === 0 ? 0 : gsap.utils.random(-10, 10)),
      duration: 3, delay: 5.5, ease: "power3.inOut",
    });

    // Nav + bg
    gsap.fromTo(
      navRef.current,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        delay: 9.8,
        duration: 1.5,
        ease: "power3.out",
      }
    );
    gsap.to(bgColor.current, { backgroundColor: "#efefef", delay: 8.5, duration: 1.5, ease: "none" });

    // Left text fades in
    gsap.fromTo(
      heroLeftRef.current,
      {
        opacity: 0,
        x: -40,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.8,
        delay: 10.2,
        ease: "power3.out",
      }
    );

    const centerImage = Array.from(imageEls)[0];

    // posisi final yang diinginkan
    const targetX = window.innerWidth * 0.48;
    const targetY = window.innerHeight * 0.50;

    // posisi sekarang
    const rect = centerImage.getBoundingClientRect();

    const currentX = rect.left + rect.width / 2;
    const currentY = rect.top + rect.height / 2;

    // delta movement
    const moveX = targetX - currentX;
    const moveY = targetY - currentY;

    // animate SATU image yang sama
    gsap.to(centerImage, {
      x: moveX,
      y: moveY,
      width: 680,
      height: 680,
      rotate: -3,
      duration: 2.4,
      delay: 9.0,
      ease: "expo.inOut",
      filter: "drop-shadow(0px 30px 60px rgba(0,0,0,0.35))",
    });

    // Flanking images peel out from behind mockCenter
    gsap.set([mockLeftRef.current, mockRightRef.current, mockFarRightRef.current, mockLaptopRef.current], {
      top: "50%", left: "50%",
      xPercent: -50, yPercent: -50,
      rotate: 0, opacity: 0, zIndex: 20,
    });

    gsap.to(mockLeftRef.current, {
      top: MOCKUP_POSITIONS.leftFan.top,
      left: MOCKUP_POSITIONS.leftFan.left,
      width: "375px", height: "280px", objectFit: "contain",
      rotate: -5, opacity: 1,
      duration: 1.0, delay: 9.8, ease: "power3.out", zIndex: 45,
    });

    gsap.to(mockRightRef.current, {
      top: MOCKUP_POSITIONS.rightFan.top,
      left: MOCKUP_POSITIONS.rightFan.left,
      width: "375px", height: "280px", objectFit: "contain",
      rotate: -10, opacity: 1,
      duration: 1.0, delay: 9.95, ease: "power3.out",
    });

    gsap.to(mockFarRightRef.current, {
      top: MOCKUP_POSITIONS.farRight.top,
      left: MOCKUP_POSITIONS.farRight.left,
      width: "270px", height: "480px", objectFit: "contain",
      rotate: -14, opacity: 1,
      duration: 1.0, delay: 10.1, ease: "power3.out",
    });

    gsap.to(mockLaptopRef.current, {
      top: MOCKUP_POSITIONS.laptop.top,
      left: MOCKUP_POSITIONS.laptop.left,
      width: "400px", height: "350px", objectFit: "contain",
      rotate: 10, opacity: 1,
      duration: 1.0, delay: 10.2, ease: "power3.out", zIndex: 10,
    });

    gsap.fromTo(
      ".floating-note",
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.12,
        duration: 1.2,
        delay: 10.0,
        ease: "power3.out",
      }
    );

    // ─── FLOATING ANIMATION ─────────────────────────

    gsap.to(".hero-title", {
      y: "-=4",
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(centerImage, {
      y: "-=6",
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(mockLeftRef.current, {
      y: "-=10",
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(mockRightRef.current, {
      y: "-=14",
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(mockFarRightRef.current, {
      y: "-=8",
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(mockLaptopRef.current, {
      y: "-=12",
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".floating-note", {
      rotate: "+=2",
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "sine.inOut",
    });

    return () => clearTimeout(timer);
  }, [imagePositions, hasSeenAnimation]);

  return (
    <main
      ref={bgColor}
      className="snap-y relative min-h-screen w-full bg-black"
      style={{
        cursor: "none",
        overflow: showTypo ? "visible" : "hidden",
      }}
    >
      {/* Custom cursor */}
      <div ref={cursorDot} style={{ position: "fixed", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#fff", pointerEvents: "none", zIndex: 99999, transition: "transform 0.15s ease", mixBlendMode: "difference" }} />
      <div ref={cursorRing} style={{ position: "fixed", width: "40px", height: "40px", border: "1.5px solid #fff", borderRadius: "50%", pointerEvents: "none", zIndex: 99998, transition: "transform 0.25s ease", opacity: 0.7, mixBlendMode: "difference" }} />

      <section className="relative h-screen overflow-hidden">

        {/* Scatter images — hidden entirely once showTypo=true */}
        <div ref={imagesRef} className="absolute inset-0" style={{ zIndex: 25 }}>
          {images.map((src, i) => {
            const depth = Math.random();
            const isCenter = i === 0;
            if (showTypo && i !== 0) return null;
            return (
              <img
                key={i}
                src={src}
                alt=""
                className="image absolute object-cover rounded-lg"
                style={{
                  width: isCenter ? "320px" : `clamp(90px, ${12 + depth * 10}vw, ${180 + depth * 120}px)`,
                  height: "auto",

                  top: imagePositions[i]?.top || "50%",
                  left: imagePositions[i]?.left || "50%",

                  transform: isCenter
                    ? "translate3d(-50%, -50%, 0)"
                    : `rotate(${Math.random() * 20 - 10}deg)`,

                  opacity: isCenter ? 1 : 0.3 + depth * 0.5,
                  zIndex: isCenter ? 25 : Math.floor(depth * 10),

                  filter: isCenter
                    ? "none"
                    : `blur(${(1 - depth) * 3}px)`,

                  willChange: "transform",
                  backfaceVisibility: "hidden",

                  objectFit: "contain",
                }}
              />
            );
          })}
        </div>

        {/* ── 4 permanent mockup images ──
            All start as opacity:0 so they're invisible during scatter.
            GSAP sets their initial position and animates them out.        */}
        <img ref={mockLeftRef} src="images/2.svg" alt="" className="absolute object-contain drop-shadow-2xl/50" style={{ opacity: 0, top: "54%", left: "60%", width: "175px", height: "230px", transform: "translate(-50%,-50%)" }} />
        <img ref={mockRightRef} src="images/1.svg" alt="" className="absolute object-contain drop-shadow-xl/50" style={{ opacity: 0, top: "78%", left: "73%", width: "375px", height: "280px", transform: "translate(-50%,-50%)" }} />
        <img ref={mockFarRightRef} src="images/4.svg" alt="" className="absolute object-contain drop-shadow-2xl/50" style={{ opacity: 0, top: "62%", left: "89%", width: "270px", height: "480px", transform: "translate(-50%,-50%)" }} />
        <img ref={mockLaptopRef} src="images/laptop.svg" alt="" className="absolute object-contain drop-shadow-xl/50" style={{ opacity: 0, top: "35%", left: "86%", width: "400px", height: "350px", transform: "translate(-50%,-50%)" }} />

        <div
          className="floating-note absolute z-[35] bg-white rounded-3xl px-6 py-5 shadow-xl"
          style={{
            top: "22%",
            left: "60%",
            width: "230px",
            rotate: "-2deg",
          }}
        >
          <p className="text-[12px] text-black/70 leading-relaxed">
            We handle your social media strategically.
          </p>

          <p className="mt-3 text-[14px] font-semibold italic text-black leading-tight">
            Let’s build your presence.
          </p>
        </div>

        {/* CIRCLE LOGO STICKER */}
        <div
          className="floating-note absolute z-[40] bg-[#f5f1ea] rounded-full shadow-lg flex items-center justify-center"
          style={{
            top: "16%",
            left: "71%",
            width: "90px",
            height: "90px",
            rotate: "10deg",
          }}
        >
          <img
            src="images/logo.svg"
            alt=""
            className="w-10 h-10 object-contain"
          />

          <div className="floating-noteabsolute inset-0 rounded-full border border-black/10" />
        </div>

        {/* YELLOW STICKY NOTE */}
        <div
          className="floating-note absolute z-[10] bg-[#efe2a8] rounded-md shadow-xl/50 px-5 py-5"
          style={{
            top: "40%",
            left: "69%",
            width: "140px",
            rotate: "7deg",
          }}
        >
          <img src="images/tape.svg" alt="" className="absolute -top-10 right-6 w-20 h-20 object-contain opacity-80" />
          <ul className="flex flex-col gap-2 text-[12px] text-black font-semibold">
            <li>✓ Strategy</li>
            <li>✓ Content</li>
            <li>✓ Design</li>
            <li>✓ Management</li>
            <li>✓ Ads Campaign</li>
          </ul>
        </div>

        {/* SMALL WHITE BOTTOM NOTE */}
        <div
          className="floating-note absolute z-[36] bg-[#f8f5f1] rounded-2xl shadow-xl px-5 py-5"
          style={{
            top: "76%",
            left: "38%",
            width: "180px",
            rotate: "8deg",
          }}
        >
          <img src="images/tape.svg" alt="" className="absolute -top-10 right-10 w-20 h-20 object-contain opacity-90" />
          <p className="text-[15px] leading-relaxed text-black">
            Increase your <br />
            <strong>brand awareness</strong> <br />
            with us.
          </p>
        </div>

        {/* VERTICAL CARD */}
        <div
          className="floating-note absolute z-[38] bg-gradient-to-b from-zinc-50 to-zinc-300 border-1 border-zinc-300 shadow-xl rounded-md flex flex-col justify-between"
          style={{
            top: "70%",
            left: "78%",
            width: "120px",
            height: "200px",
            rotate: "2deg",
            padding: "18px",
          }}
        >
          <div className="text-[14px] leading-snug font-medium text-black">
            Creative
            <br />
            Solutions
            <br />
            That Grow
            <br />
            Your Brand.
          </div>

          <div className="text-[12px] text-black/60">
            86 works
          </div>
        </div>

        {/* Nav */}
        <nav
          ref={navRef}
          className="absolute top-0 left-0 w-full z-50 px-10 py-7 flex items-center justify-between"
        >
          {/* LEFT LOGO */}
          <div className="flex flex-col leading-none">
            <img src="images/logo.svg" className="h-16 w-16 object-cover" alt="" />
          </div>

          {/* CENTER MENU */}
          <div className="flex items-center gap-14 text-[18px] font-medium text-black">
            <a className="hover:opacity-60 transition-opacity" href="">
              About Us
            </a>

            <a className="hover:opacity-60 transition-opacity flex items-center gap-1" href="">
              Services
              <span className="text-[10px]">▼</span>
            </a>

            <a className="hover:opacity-60 transition-opacity" href="">
              Our Works
            </a>

            <a className="hover:opacity-60 transition-opacity" href="">
              Insights
            </a>

            <a className="hover:opacity-60 transition-opacity" href="">
              Contact
            </a>
          </div>

          {/* RIGHT BUTTON */}
          <button
            className="bg-black text-white px-6 py-3 rounded-2xl text-[16px] font-medium flex items-center gap-3 hover:scale-[1.02] transition-transform"
            style={{ cursor: "none" }}
          >
            Let’s Talk
            <span className="pl-2.5"><BsArrowUpRight className="text-white text-lg" /></span>
          </button>
        </nav>

        {/* Initial title */}
        <h1
          ref={titleRef}
          className="absolute top-1/2 left-1/2 text-6xl font-bold -translate-x-1/2 -translate-y-1/2 z-10 uppercase"
          style={{ color: "#3a3a3a", opacity: hasSeenAnimation ? 0 : 1 }}
        >
          86 Creative Works
        </h1>

        {/* Left column */}
        <div
          ref={heroLeftRef}
          className="absolute z-40 flex items-end"
          style={{ top: 0, bottom: 0, left: 0, width: "42%", paddingLeft: "56px", paddingBottom: "88px", opacity: hasSeenAnimation ? 1 : 0 }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5 mb-2">
              <span className="text-[12px] tracking-[0.25em] font-semibold text-black uppercase">
                WE ARE 86 CREATIVE WORKS
              </span>

              <div className="w-10 h-[1px] bg-black/40" />
            </div>

            <h2
              className="hero-title font-black uppercase text-black leading-[0.9]"
              style={{
                fontSize: "clamp(68px, 7vw, 100px)",
                letterSpacing: "-4px",
              }}
            >
              CREATIVE.<br />COMMITED.<br />86 READY.
            </h2>

            <p className="text-md text-gray-600 leading-relaxed" style={{ maxWidth: "500px" }}>
              We’re more than just a creative agency. We’re your thought <strong className="text-black"> partner, your problem-solver, and your builder</strong>.
              Every idea starts with rasa — and we carry that emotion through strategy, design, and execution.
            </p>

            <div className="flex items-center gap-3 mt-3">
              <button
                className="bg-black text-white px-7 py-3 rounded-xl text-sm font-medium flex items-center gap-3 hover:scale-[1.02] transition-transform"
                style={{ cursor: "none" }}
              >
                Our Services
                <span className="pl-2">
                  <BsArrowUpRight className="text-white text-xl" />
                </span>
              </button>
              <button
                className="border border-black/20 text-black px-7 py-3 rounded-xl text-sm font-medium hover:bg-white/60 transition-all"
                style={{ cursor: "none" }}
              >
                See Our Works
              </button>
            </div>

            <div className="flex items-center gap-6 mt-1">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[40, 30, 43, 29].map((n) => (
                    <img key={n} src={`images/brands/${n}.svg`} alt="" className="bg-white w-10 h-10 rounded-full object-cover border-2 border-white" />
                  ))}
                </div>
                <div className="ml-1">
                  <p className="text-sm font-bold text-black leading-tight">50+</p>
                  <p className="text-sm text-gray-500 leading-tight">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div
        style={{
          opacity: showTypo ? 1 : 0,
          pointerEvents: showTypo ? "auto" : "none",
          transition: "opacity 0.8s ease",
        }}
      ></div>

      {showTypo && (
        <section className="-mt-10 flex items-center justify-center overflow-hidden">
          <ServicesCards />
        </section>
      )}
      {showTypo && (
        <section>
          <TrustedBrands />
        </section>
      )}
      {showTypo && (
        <section className="snap-center mt-60">
          <Why />
        </section>
      )}

    </main>
  );
}