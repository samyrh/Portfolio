import React, { useMemo, useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
    useReducedMotion,
} from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

/* ----------------------- Variants (same feel) ----------------------- */
const container = (reduced) => ({
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: reduced
            ? { duration: 0.2 }
            : {
                staggerChildren: 0.05,
                delayChildren: 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
            },
    },
});

const item = (reduced) => ({
    hidden: { opacity: 0, scale: 0.9, y: 18, filter: "blur(8px)" },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        transition: reduced
            ? { duration: 0.25 }
            : {
                type: "spring",
                stiffness: 260,
                damping: 26,
                mass: 0.6,
            },
    },
});

/* ----------------------- Categories (no data changes) ----------------------- */
const TABS = [
    "All",
    "Frontend",
    "Backend",
    "Databases",
    "Messaging",
    "ML/AI",
    "DevOps",
    "Testing",
    "Tools",
];

const MAP = {
    Frontend: new Set([
        "HTML 5",
        "CSS 3",
        "JavaScript",
        "TypeScript",
        "React JS",
        "Redux Toolkit",
        "AngularJS",
        "Vue.js",
        "Tailwind CSS",
        "Bootstrap",
        "Flutter",
    ]),
    Backend: new Set([
        "Node JS",
        "Spring Boot",
        "Spring Security",
        "Spring Cloud",
        "Spring Batch",
        "Spring AI",
        "JWT",
        "OAuth2",
        "Laravel",
        ".NET",
        "Rest API",
        "Graphql",
        "Flask",
        "FastAPI",
    ]),
    Databases: new Set(["MongoDB", "MySQL", "PostgreSQL", "Redis"]),
    Messaging: new Set(["RabbitMQ", "Kafka"]),
    "ML/AI": new Set([
        "Python",
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Anaconda",
    ]),
    DevOps: new Set(["docker", "Jenkins", "git", "Github", "Bitbucket"]),
    Testing: new Set(["JUnit", "Selenium"]),
    Tools: new Set([
        "figma",
        "Postman",
        "Insomnia",
        "Swagger",
        "IntelliJ IDEA",
        "WebStorm IDEA",
        "PyCharm IDEA",
        "VS Code",
    ]),
};

function getCategory(name) {
    // Handle empty or undefined names
    if (!name || name.trim() === "") return "Messaging"; // For Kafka
    
    // Clean the name by removing trailing spaces
    const cleanName = name.trim();
    
    for (const [cat, set] of Object.entries(MAP)) {
        if (set.has(cleanName)) return cat;
    }
    
    // If not found, try to match with cleaned names
    for (const [cat, set] of Object.entries(MAP)) {
        for (const techName of set) {
            if (techName.trim() === cleanName) return cat;
        }
    }
    
    return "Tools"; // fallback bucket
}

/* ----------------------- Icon Tile (your existing hover) ----------------------- */
function TechIcon({ t, reduced }) {
    const [bounds, setBounds] = React.useState({ w: 1, h: 1, left: 0, top: 0 });
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 200, damping: 30, mass: 0.5 });
    const sy = useSpring(my, { stiffness: 200, damping: 30, mass: 0.5 });

    const tx = useTransform(sx, [-0.5, 0.5], [-10, 10]);
    const ty = useTransform(sy, [-0.5, 0.5], [-10, 10]);
    const rotX = useTransform(sy, [-0.5, 0.5], [6, -6]);
    const rotY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

    const onMove = (e) => {
        if (reduced) return;
        const r = e.currentTarget.getBoundingClientRect();
        if (
            r.width !== bounds.w ||
            r.height !== bounds.h ||
            r.left !== bounds.left ||
            r.top !== bounds.top
        ) {
            setBounds({ w: r.width, h: r.height, left: r.left, top: r.top });
        }
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        mx.set(px - 0.5);
        my.set(py - 0.5);
    };

    const onLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <motion.div
            variants={item(reduced)}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative group flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
            title={t.name}
            aria-label={t.name}
            layout
        >
            {/* subtle glow */}
            <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 rounded-full blur-3xl bg-white/10" />
      </span>

            <motion.div
                style={
                    reduced
                        ? undefined
                        : {
                            x: tx,
                            y: ty,
                            rotateX: rotX,
                            rotateY: rotY,
                            transformStyle: "preserve-3d",
                        }
                }
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="will-change-transform"
            >
                {typeof t.icon === "string" ? (
                    <div className={`relative ${t.name === "Flask" ? "p-1" : ""}`}>
                        {t.name === "Flask" && (
                            <div className="absolute inset-0 bg-white rounded-full scale-105" />
                        )}
                        <img
                            src={t.icon}
                            alt={t.name}
                            loading="lazy"
                            className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.25)] ${
                                t.name === "Flask" ? "relative z-10" : ""
                            }`}
                        />
                    </div>
                ) : (
                    <div className={`relative ${t.name === "Flask" ? "p-1" : ""}`}>
                        {t.name === "Flask" && (
                            <div className="absolute inset-0 bg-white rounded-full scale-105" />
                        )}
                        <t.icon className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 drop-shadow-[0_6px_16px_rgba(0,0,0,0.25)] ${
                            t.name === "Flask" ? "relative z-10" : ""
                        }`} />
                    </div>
                )}
            </motion.div>

            <motion.p
                className="mt-2 text-[12px] sm:text-sm md:text-[15px] font-medium text-white/90 whitespace-nowrap text-center"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={reduced ? { duration: 0.2 } : { duration: 0.25, ease: "easeOut" }}
            >
                {t.name}
            </motion.p>
        </motion.div>
    );
}

/* ----------------------- Filters + Grid ----------------------- */
const Tech = () => {
    const reduced = useReducedMotion();
    const [active, setActive] = useState("All");
    const [key, setKey] = useState(0); // Add key for forcing re-render
    const [isTransitioning, setIsTransitioning] = useState(false); // Add transition state

    // attach categories without mutating original data
    const techWithCat = useMemo(
        () =>
            technologies.map((t, i) => {
                const category = getCategory(t.name);
                return {
                    ...t,
                    __cat: category,
                    __key: `${t.name || "tech"}-${i}`,
                };
            }),
        []
    );

    const filtered = useMemo(() => {
        if (active === "All") return techWithCat;
        const result = techWithCat.filter((t) => t.__cat === active);
        console.log(`Filtered ${result.length} items for category "${active}":`, result.map(t => t.name));
        return result;
    }, [active, techWithCat]);

    // Handle filter change with proper state reset
    const handleFilterChange = (newFilter) => {
        if (isTransitioning || newFilter === active) return; // Prevent multiple clicks
        
        setIsTransitioning(true);
        setActive(newFilter);
        setKey(prev => prev + 1); // Force re-render
        
        // Reset transition state after animation
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    // Reset viewport animation when filter changes
    useEffect(() => {
        // Small delay to ensure DOM updates
        const timer = setTimeout(() => {
            setKey(prev => prev + 1);
        }, 100);
        
        return () => clearTimeout(timer);
    }, [active]);

    return (
        <div className="w-full">
            {/* Centered, modern single-row filters */}
            <motion.div 
                className="mb-10 sm:mb-12 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div 
                    className="inline-flex items-center justify-center gap-1 sm:gap-2 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-xl p-1.5 sm:p-2 ring-1 ring-white/20 shadow-2xl relative overflow-hidden"
                    whileHover={{ 
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                        scale: 1.02
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                    
                    {TABS.map((tab) => {
                        const count = tab === "All" 
                            ? techWithCat.length 
                            : techWithCat.filter(t => t.__cat === tab).length;
                        
                        return (
                            <motion.button
                                key={tab}
                                onClick={() => handleFilterChange(tab)}
                                disabled={isTransitioning}
                                whileHover={!isTransitioning && active !== tab ? { scale: 1.05 } : {}}
                                whileTap={!isTransitioning ? { scale: 0.98 } : {}}
                                className={`relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-500 ease-out ${
                                    active === tab 
                                        ? "text-white font-semibold" 
                                        : "text-white/70 hover:text-white/90 hover:bg-white/5"
                                } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {active === tab && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 shadow-lg"
                                        transition={{ 
                                            type: "spring", 
                                            stiffness: 500, 
                                            damping: 35,
                                            mass: 0.8
                                        }}
                                    />
                                )}
                                
                                {/* Shining frame effect for active tab */}
                                {active === tab && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                                            backgroundSize: '200% 200%',
                                            animation: 'shimmer 2s ease-in-out infinite'
                                        }}
                                    />
                                )}
                                
                                {/* Glow effect for active tab */}
                                {active === tab && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-sm"
                                    />
                                )}
                                
                                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                                    {tab}
                                    <motion.span 
                                        key={`${tab}-${count}`}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className={`text-xs px-1.5 py-0.5 rounded-full transition-all duration-300 ${
                                            active === tab 
                                                ? "bg-white/25 text-white shadow-sm" 
                                                : "bg-white/10 text-white/60"
                                        }`}
                                    >
                                        {count}
                                    </motion.span>
                                </span>
                            </motion.button>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Grid */}
            <motion.div
                key={key} // Add key for forcing re-render
                variants={container(reduced)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
                className={`
                    grid place-items-center
                    gap-10 sm:gap-12 md:gap-14
                    ${filtered.length <= 6 
                        ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 justify-items-center' 
                        : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 xl:grid-cols-9'
                    }
                `}
            >
                {filtered.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="col-span-full text-center py-12"
                    >
                        <p className="text-white/60 text-lg">No technologies found in this category.</p>
                        <p className="text-white/40 text-sm mt-2">Try selecting a different filter or check the debug info above.</p>
                    </motion.div>
                ) : (
                    <AnimatePresence mode="popLayout" key={active}>
                        {filtered.map((t, index) => (
                            <motion.div
                                key={t.__key}
                                layout
                                initial={{ 
                                    opacity: 0, 
                                    scale: 0.8, 
                                    filter: "blur(12px)",
                                    y: 30,
                                    rotateX: -15
                                }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1, 
                                    filter: "blur(0px)",
                                    y: 0,
                                    rotateX: 0
                                }}
                                exit={{ 
                                    opacity: 0, 
                                    scale: 0.8, 
                                    filter: "blur(12px)",
                                    y: -30,
                                    rotateX: 15
                                }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 30,
                                    mass: 0.8,
                                    duration: 0.5,
                                    delay: index * 0.08 // Smoother staggered animation
                                }}
                                className="w-full flex items-center justify-center"
                            >
                                <TechIcon t={t} reduced={reduced} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Tech, "tech");
