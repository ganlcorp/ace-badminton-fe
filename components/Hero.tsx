import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Parallax logic for mouse movement
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Calculate percentage from center (-1 to 1)
    const xPct = (clientX / innerWidth - 0.5) * 2;
    const yPct = (clientY / innerHeight - 0.5) * 2;

    x.set(xPct * 20); // Move 20px
    y.set(yPct * 20);
  };

  // Parallax logic for scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Text moves slower
  const y2 = useTransform(scrollY, [0, 500], [0, -100]); // Image moves faster

  // Combine scroll and mouse parallax for text y-axis
  const yText = useTransform([y1, mouseYSpring], ([latestY1, latestMouseY]) => (latestY1 as number) + (latestMouseY as number));

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center py-16 px-4 md:px-10 lg:px-20 min-h-[90vh] overflow-hidden"
    >
      {/* Dynamic Animated Background Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage:
              "url('../images/background.jpg')",
          }}
        ></div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-900/80"></div>

        {/* Animated decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-[1200px] w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">

          {/* Text Content */}
          <motion.div
            style={{ y: yText, x: mouseXSpring }}
            className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] font-display drop-shadow-xl"
            >
              {t.hero.title_start} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">{t.hero.title_end}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-200 text-lg font-normal leading-relaxed"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start pt-4"
            >
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 text-white text-base font-bold shadow-[0_0_20px_rgba(19,127,236,0.5)]">
                {t.hero.join}
              </button>
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95 text-white text-base font-bold backdrop-blur-sm border border-white/20">
                {t.hero.learn}
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 group transform transition-transform hover:scale-[1.02] duration-500">
              <div
                className="absolute inset-0 bg-[length:70%] bg-[center_top_70%] transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('../images/highlight.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/20"
              >
                <p className="text-white text-xs font-bold">{t.hero.next_tour}</p>
                <p className="text-primary text-sm font-bold">Comming soon</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
