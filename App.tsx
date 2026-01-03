import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Hosts from "./components/Hosts";
import JoinForm from "./components/JoinForm";
import Footer from "./components/Footer";
import Ranking from "./components/Ranking";
import Tournament from "./components/Tournament";
import Contact from "./components/Contact";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  // State to track current view
  const [activeTab, setActiveTab] = useState<string>('home');

  // Mouse Spotlight Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 250); // Offset to center the 500px spotlight
      cursorY.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/*
        Fixed Background Layer (Global)
      */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-emerald-950">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Mouse Spotlight Effect */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none z-10 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />

      {/* Content Layer - Explicit z-index 20 to sit above spotlight */}
      <div className="relative flex min-h-screen w-full flex-col group/design-root z-20">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex flex-col grow">
          <AnimatePresence mode="wait">
            {activeTab === 'ranking' ? (
              <Ranking key="ranking" />
            ) : activeTab === 'tournament' ? (
              <Tournament key="tournament" />
            ) : activeTab === 'contact' ? (
              <Contact key="contact" />
            ) : (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Hero />
                <Activities />
                <Hosts />
                <JoinForm />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;