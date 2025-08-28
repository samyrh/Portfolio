import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

import { navLinks } from "../constants";
import { s, menu, close, linkedin, github } from "/public/assets";
import engCv from "/public/assets/eng_cv.pdf";
import frCv from "/public/assets/fr_cv.pdf";

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [cvOpen, setCvOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState("success");

    // use portal only when DOM is available (avoids SSR issues)
    const canUseDOM =
        typeof window !== "undefined" && typeof document !== "undefined";

    // ↓ smaller offset to match smaller bar height
    const scrollOffsetPx = 62;
    const sectionIds = useMemo(() => navLinks.map((n) => n.id), []);
    const idToTitle = useMemo(
        () => new Map(navLinks.map((n) => [n.id, n.title])),
        []
    );
    const observerRef = useRef(null);

    const showToastNotification = (message, type = "success") => {
        setToastMessage(message);
        setToastType(type);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    const handleDownload = (lang) => {
        const url = lang === "en" ? engCv : frCv;
        const link = document.createElement("a");
        link.href = url;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setCvOpen(false);
        showToastNotification(
            lang === "en"
                ? "English CV downloaded successfully."
                : "CV Français téléchargé avec succès.",
            "success"
        );
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // lock body scroll when modal is open
    useEffect(() => {
        if (!canUseDOM) return;
        const body = document.body;
        const prev = body.style.overflow;
        if (cvOpen) body.style.overflow = "hidden";
        return () => {
            body.style.overflow = prev;
        };
    }, [cvOpen, canUseDOM]);

    const handleNavClick = (id, title) => (e) => {
        e.preventDefault();
        setActive(title);
        setToggle(false);
        const el = document.getElementById(id);
        if (!el) {
            window.location.hash = `#${id}`;
            return;
        }
        const rect = el.getBoundingClientRect();
        const y = window.scrollY + rect.top - scrollOffsetPx;
        window.scrollTo({ top: y, behavior: "smooth" });
        history.replaceState(null, "", `#${id}`);
    };

    useEffect(() => {
        if (observerRef.current) observerRef.current.disconnect();
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
                if (visible.length > 0) {
                    const id = visible[0].target.id;
                    const title = idToTitle.get(id);
                    if (title && title !== active) setActive(title);
                }
            },
            {
                root: null,
                rootMargin: `-${scrollOffsetPx + 1}px 0px -55% 0px`,
                threshold: [0, 0.01, 0.25, 0.5, 0.75, 1],
            }
        );
        observerRef.current = observer;

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const sync = () => {
            let bestId = null;
            let bestDelta = Number.POSITIVE_INFINITY;
            sectionIds.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const delta = Math.abs(rect.top - scrollOffsetPx);
                if (delta < bestDelta) {
                    bestDelta = delta;
                    bestId = id;
                }
            });
            if (bestId) {
                const title = idToTitle.get(bestId);
                if (title && title !== active) setActive(title);
            }
        };
        sync();

        return () => observer.disconnect();
    }, [active, idToTitle, sectionIds]);

    return (
        <nav
            className={`
        w-full fixed top-0 z-20 py-4 transition-colors duration-300
        ${scrolled ? "bg-primary/90 backdrop-blur-sm shadow-lg" : "bg-transparent"}
      `}
            role="navigation"
            aria-label="Primary"
        >
            {/* grid container */}
            <div className="relative w-full min-w-0 grid grid-cols-[auto_1fr_auto] items-center px-3 sm:px-6 md:px-12 lg:px-6">
                {/* LEFT: logo + name */}
                <Link
                    to="/"
                    className="flex items-center gap-2 sm:gap-2.5 md:gap-3"
                    onClick={() => {
                        setActive("Home");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={s}
                        alt="Logo"
                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain"
                    />
                    <span className="text-white font-extrabold leading-none tracking-tight whitespace-nowrap text-[clamp(18px,2.2vw,30px)]">
            Sami Rhalim
          </span>
                </Link>

                {/* CENTER: desktop nav */}
                <ul className="hidden sm:flex justify-self-center items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 px-1">
                    {navLinks
                        .filter((nav) => nav.id !== "contact")
                        .map((nav) => (
                            <li
                                key={nav.id}
                                className={`group relative cursor-pointer transition-colors duration-300 ${
                                    active === nav.title ? "text-white" : "text-secondary hover:text-white"
                                }`}
                            >
                                <a
                                    href={`#${nav.id}`}
                                    onClick={(e) => handleNavClick(nav.id, nav.title)(e)}
                                    className="text-[12px] md:text-[13px] lg:text-[14px] font-medium whitespace-nowrap"
                                >
                                    {nav.title}
                                </a>
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] w-full rounded bg-white origin-left transition-transform duration-300 ${
                                        active === nav.title ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </li>
                        ))}
                </ul>

                {/* RIGHT: desktop CTAs */}
                <div className="hidden sm:flex ml-auto items-center gap-2.5 md:gap-3">
                    {/* Hire Me */}
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 h-8 text-[13px] font-medium text-white tracking-wide shadow-md transition-all duration-300"
                    >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 opacity-90" />
                        <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                        <span className="pointer-events-none absolute -inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.indigo.500),theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.indigo.500))] blur-[0.5px] group-hover:animate-[spin_2s_linear_infinite]" />
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_180deg,theme(colors.fuchsia.500),theme(colors.violet.500),theme(colors.indigo.500),theme(colors.fuchsia.500))] opacity-70 blur-[1px] group-hover:animate-[spin_3s_linear_infinite] [animation-direction:reverse]" />
            </span>
                        <span className="absolute inset-0 rounded-full [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Hire Me</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/samyrh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 h-8 text-[13px] font-medium text-white tracking-wide shadow-md transition-all duration-300"
                    >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 opacity-90" />
                        <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                        <span className="pointer-events-none absolute -inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.indigo.500),theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.indigo.500))] blur-[0.5px] group-hover:animate-[spin_2s_linear_infinite]" />
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_180deg,theme(colors.fuchsia.500),theme(colors.violet.500),theme(colors.indigo.500),theme(colors.fuchsia.500))] opacity-70 blur-[1px] group-hover:animate-[spin_3s_linear_infinite] [animation-direction:reverse]" />
            </span>
                        <span className="absolute inset-0 rounded-full [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-1.5">
              <img src={github} alt="" className="w-4 h-4 object-contain" />
              GitHub
            </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/sami-rhalim-b444792ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 h-8 text-[13px] font-medium text-white tracking-wide shadow-md transition-all duration-300"
                    >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 opacity-90" />
                        <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                        <span className="pointer-events-none absolute -inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.indigo.500),theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.indigo.500))] blur-[0.5px] group-hover:animate-[spin_2s_linear_infinite]" />
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_180deg,theme(colors.fuchsia.500),theme(colors.violet.500),theme(colors.indigo.500),theme(colors.fuchsia.500))] opacity-70 blur-[1px] group-hover:animate-[spin_3s_linear_infinite] [animation-direction:reverse]" />
            </span>
                        <span className="absolute inset-0 rounded-full [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 flex items-center gap-1.5">
              <img src={linkedin} alt="" className="w-5 h-5 object-contain" />
              LinkedIn
            </span>
                    </a>

                    {/* Download CV */}
                    <button
                        onClick={() => setCvOpen(true)}
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-4 h-8 text-[13px] font-medium text-white tracking-wide shadow-md transition-all duration-300"
                    >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 opacity-90" />
                        <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                        <span className="pointer-events-none absolute -inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.indigo.500),theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.indigo.500))] blur-[0.5px] group-hover:animate-[spin_2s_linear_infinite]" />
              <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_180deg,theme(colors.fuchsia.500),theme(colors.violet.500),theme(colors.indigo.500),theme(colors.fuchsia.500))] opacity-70 blur-[1px] group-hover:animate-[spin_3s_linear_infinite] [animation-direction:reverse]" />
            </span>
                        <span className="absolute inset-0 rounded-full [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Download CV</span>
                    </button>
                </div>

                {/* RIGHT: mobile menu button */}
                <div className="sm:hidden ml-auto flex items-center">
                    <button
                        aria-label="Toggle menu"
                        aria-expanded={toggle}
                        onClick={() => setToggle((t) => !t)}
                        className="p-1.5"
                    >
                        <img
                            src={toggle ? close : menu}
                            alt="Menu"
                            className="w-[24px] h-[24px] object-contain"
                        />
                    </button>

                    {/* Mobile drawer with overlay and animation */}
                    <AnimatePresence>
                        {toggle && (
                            <>
                                <motion.button
                                    key="overlay"
                                    aria-label="Close menu"
                                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setToggle(false)}
                                />
                                <motion.div
                                    key="panel"
                                    initial={{ opacity: 0, y: -12, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                    className="p-4 black-gradient fixed top-16 right-0 mx-3 my-2 min-w-[70%] max-w-[380px] z-40 rounded-2xl border border-white/10 shadow-2xl"
                                >
                                    <ul className="flex flex-col gap-2 w-full">
                                        {navLinks.map((nav, idx) => (
                                            <motion.li
                                                key={nav.id}
                                                initial={{ opacity: 0, x: 8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.02 * idx }}
                                            >
                                                <button
                                                    className="w-full text-left text-[15px] font-medium cursor-pointer text-secondary hover:text-white px-3 py-2 rounded-xl hover:bg-white/5 transition-colors"
                                                    onClick={(e) => handleNavClick(nav.id, nav.title)(e)}
                                                >
                                                    {nav.title}
                                                </button>
                                            </motion.li>
                                        ))}
                                        <div className="h-px my-2 bg-white/10" />
                                        <li>
                                            <button
                                                onClick={() => {
                                                    setCvOpen(true);
                                                    setToggle(false);
                                                }}
                                                className="relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-6 py-3 text-[14px] font-semibold text-white tracking-wide shadow-lg transition-all duration-300"
                                                aria-label="Download CV"
                                            >
                                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 opacity-90" />
                                                <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                                                <span className="absolute -inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.indigo.500),theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.indigo.500))] animate-[spin_2s_linear_infinite] blur-[0.5px]" />
                        </span>
                                                <span className="absolute inset-0 rounded-full [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] animate-[pulse_2.5s_ease-in-out_infinite]" />
                                                <span className="relative z-10">Download CV</span>
                                            </button>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/samyrh"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-6 py-3 text-[14px] font-semibold text-white tracking-wide shadow-lg transition-all duration-300"
                                                aria-label="Open GitHub profile"
                                            >
                                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 opacity-90" />
                                                <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                                                <span className="absolute -inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.indigo.500),theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.indigo.500))] animate-[spin_2s_linear_infinite] blur-[0.5px]" />
                        </span>
                                                <span className="absolute inset-0 rounded-full [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] animate-[pulse_2.5s_ease-in-out_infinite]" />
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                          <img src={github} alt="" className="w-5 h-5 object-contain" />
                          <span className="font-semibold">GitHub</span>
                        </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.linkedin.com/in/sami-rhalim-b444792ba/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-6 py-3 text-[14px] font-semibold text-white tracking-wide shadow-lg transition-all duration-300"
                                                aria-label="Open LinkedIn profile"
                                            >
                                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 opacity-90" />
                                                <span className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                                                <span className="absolute -inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.fuchsia.500),theme(colors.violet.500),theme(colors.indigo.500),theme(colors.fuchsia.500))] animate-[spin_2.4s_linear_infinite] [animation-direction:reverse] blur-[0.5px]" />
                        </span>
                                                <span className="absolute inset-0 rounded-full [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] animate-[pulse_2.5s_ease-in-out_infinite]" />
                                                <span className="relative z-10 flex items-center justify-center gap-2 leading-none">
                          <img src={linkedin} alt="" className="w-5 h-5 object-contain" />
                          <span className="font-semibold">LinkedIn</span>
                        </span>
                                            </a>
                                        </li>
                                    </ul>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>

                {/* CV Modal (portal) */}
                {canUseDOM &&
                    cvOpen &&
                    createPortal(
                        <div
                            className="fixed inset-0 z-[10000] flex items-center justify-center p-6"
                            role="dialog"
                            aria-modal="true"
                        >
                            {/* overlay */}
                            <div
                                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                                onClick={() => setCvOpen(false)}
                            />
                            {/* panel */}
                            <div className="relative z-[10001] w-full max-w-2xl rounded-3xl overflow-hidden">
                                <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-7 ring-1 ring-white/10">
                                    <div className="absolute -inset-[2px] rounded-3xl [background:radial-gradient(1200px_600px_at_10%_-20%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(1200px_600px_at_110%_120%,rgba(236,72,153,0.14),transparent_60%)] pointer-events-none" />
                                    <h3 className="text-white text-xl font-extrabold tracking-tight">
                                        Download CV
                                    </h3>
                                    <p className="mt-1.5 text-sm text-white/70">
                                        Select your preferred language.
                                    </p>

                                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                        <button
                                            onClick={() => handleDownload("en")}
                                            className="group relative inline-flex items-center justify-center rounded-full px-5 py-3.5 text-white font-semibold ring-1 ring-white/10 overflow-hidden shadow-lg"
                                        >
                                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600" />
                                            <span className="absolute -inset-[3px] rounded-full">
                        <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.indigo.500),theme(colors.violet.500),theme(colors.fuchsia.500),theme(colors.indigo.500))] blur-[0.5px] [animation-play-state:paused] group-hover:animate-[spin_2.2s_linear_infinite]" />
                      </span>
                                            <span className="relative">Download English CV</span>
                                        </button>

                                        <button
                                            onClick={() => handleDownload("fr")}
                                            className="group relative inline-flex items-center justify-center rounded-full px-5 py-3.5 text-white font-semibold ring-1 ring-white/10 overflow-hidden shadow-lg"
                                        >
                                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600" />
                                            <span className="absolute -inset-[3px] rounded-full">
                        <span className="absolute inset-0 rounded-full p-[2px] [background:conic-gradient(from_0deg,theme(colors.fuchsia.500),theme(colors.violet.500),theme(colors.indigo.500),theme(colors.fuchsia.500))] blur-[0.5px] [animation-play-state:paused] group-hover:animate-[spin_2.4s_linear_infinite] [animation-direction:reverse]" />
                      </span>
                                            <span className="relative">Télécharger CV Français</span>
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setCvOpen(false)}
                                        className="mt-7 w-full rounded-2xl bg-white/10 hover:bg-white/15 text-white py-2.5 font-semibold transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>,
                        document.body
                    )}

                {/* Toast (you can also portal this if you like) */}
                <AnimatePresence>
                    {showToast && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 60, filter: "blur(8px)" }}
                            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.9, y: 60, filter: "blur(8px)" }}
                            transition={{ type: "spring", stiffness: 200, damping: 24 }}
                            className={`
                fixed bottom-7 right-7 z-[9999] w-[380px] max-w-[92vw]
                px-6 py-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                backdrop-blur-xl bg-white/10 border
                ${
                                toastType === "success"
                                    ? "border-green-400/40 text-green-100"
                                    : "border-red-400/40 text-red-100"
                            }
              `}
                        >
                            <div className="flex items-start gap-3.5">
                                <div className="text-3xl mt-0.5">
                                    {toastType === "success" ? "🎉" : "🚫"}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-[15px] font-medium leading-relaxed">
                                        {toastMessage}
                                    </p>
                                    <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                                        <motion.div
                                            initial={{ width: "100%" }}
                                            animate={{ width: 0 }}
                                            transition={{ duration: 4, ease: "linear" }}
                                            className={`h-full rounded-full ${
                                                toastType === "success" ? "bg-green-400" : "bg-red-400"
                                            }`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
