// follow.jsx
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const FollowImage = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 120, damping: 12 });
    const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 120, damping: 12 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - (rect.left + rect.width / 2);
        const offsetY = e.clientY - (rect.top + rect.height / 2);
        x.set(offsetX);
        y.set(offsetY);
    };

    return (
        <motion.div
            className="flex-shrink-0"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
        >
            <motion.div style={{ rotateX, rotateY }} transition={{ type: "spring", stiffness: 120, damping: 12 }}>
                <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#3730A3] p-2">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0F0F23] to-[#1A1A2E] relative">
                        <img
                            src="/sami.jpg"
                            alt="Sami Rhalim"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/20 via-transparent to-transparent rounded-xl" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FollowImage;
