import React from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, Trophy, Users, Star, ArrowRight, Bell, Flag, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getLocalImage } from "../utils/imageUtils";

const Tournament: React.FC = () => {
  const { t } = useLanguage();

  // Animation Variants

  // Stagger container for Hero
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Hero Text: Slide Up + Fade
  const heroTextVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  // Hero Image: Slide In from Right + Bounce
  const heroImageVariants: Variants = {
    hidden: { x: -100, opacity: 0, scale: 0.9 }, // Adjusted for Left side entrance
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 0.2
      }
    }
  };

  // Timeline Cards: "Jump In" effect (Enhanced Bounce)
  const cardLeftVariants: Variants = {
    hidden: { x: -100, opacity: 0, scale: 0.5, rotate: -5 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15, // Lower damping for more bounce
        mass: 1.2
      }
    }
  };

  const cardRightVariants: Variants = {
    hidden: { x: 100, opacity: 0, scale: 0.5, rotate: 5 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 1.2
      }
    }
  };

  const centerNodeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center bg-emerald-50 min-h-screen pb-20"
    >
      {/*
        SECTION 1: NEXT BIG EVENT (Hero)
        Background: Gradient blending downwards
      */}
      <div className="w-full relative overflow-hidden pt-24 pb-16 px-4 md:px-10">
        {/* Background Image Layer */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${getLocalImage("tournament-hero.jpg", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop")}')` }}
        />
        {/* Overlay: Gradient Light Green blending to transparent/next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/90 via-emerald-50/85 to-emerald-100/95 backdrop-blur-sm" />

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* IMAGE COLUMN (Left) */}
          <motion.div variants={heroImageVariants} className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500 group border-4 border-white/60 bg-white/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent z-10 pointer-events-none" />
              <img
                src={getLocalImage("summer_2025.jpg", "https://images.unsplash.com/photo-1626224583764-84786c71971e?q=80&w=2070&auto=format&fit=crop")}
                alt="Summer Smash Tournament"
                className="w-full h-[300px] md:h-[400px] object-contain transition-transform duration-700 bg-emerald-50/30"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="flex items-center gap-2 bg-emerald-600/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-sm font-bold shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Registration Open
                </div>
              </div>
            </div>
            {/* Decorative Element - Blending Green */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-emerald-200/40 rounded-2xl -rotate-6 backdrop-blur-sm" />
          </motion.div>

          {/* TEXT COLUMN (Right) */}
          <motion.div variants={heroTextVariants} className="flex flex-col gap-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold w-fit shadow-sm">
              <Clock className="w-3 h-3 text-emerald-600" />
              <span>COMING SOON</span>
            </div>

            <div>
              <h2 className="text-emerald-950 text-3xl md:text-5xl font-black font-display leading-tight">
                {t.tournament.next_big_event} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">{t.tournament.summer_smash}</span>
              </h2>
            </div>

            <p className="text-emerald-900/80 text-base md:text-lg leading-relaxed">
              {t.tournament.event_desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/60 border border-emerald-200 rounded-lg text-emerald-600 shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-emerald-900/60 font-bold uppercase">{t.tournament.date_label}</p>
                  <p className="font-bold text-emerald-950">Aug 24-25, 2024</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/60 border border-emerald-200 rounded-lg text-emerald-600 shadow-sm">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-emerald-900/60 font-bold uppercase">{t.tournament.prize_label}</p>
                  <p className="font-bold text-emerald-950">$2,000 USD</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/60 border border-emerald-200 rounded-lg text-emerald-600 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-emerald-900/60 font-bold uppercase">{t.tournament.location_label}</p>
                  <p className="font-bold text-emerald-950">City Sports Hall</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="h-12 px-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/30 flex-1 sm:flex-none">
                {t.tournament.register_now}
              </button>
              <button className="h-12 px-8 rounded-lg border border-emerald-600/30 hover:bg-emerald-100/50 text-emerald-800 font-bold transition-all bg-transparent flex-1 sm:flex-none">
                {t.tournament.view_details}
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/*
        SECTION 2: TIMELINE SCHEDULE
        Background: Seamless blending from previous section (Emerald Gradient)
      */}
      <div className="w-full py-20 px-4 md:px-10 relative">
        {/* Background Image Layer */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop')` }}
        />
        {/* Overlay: Smooth Gradient from Emerald-100 to Emerald-50 and back to Emerald-100 */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/95 via-emerald-50/90 to-emerald-100/95 backdrop-blur-sm" />

        <div className="max-w-[1000px] mx-auto flex flex-col items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <h2 className="text-emerald-950 text-3xl font-bold font-display mb-3">
              {t.tournament.schedule_title}
            </h2>
            <p className="text-emerald-800/70 max-w-lg mx-auto">
              {t.tournament.schedule_sub}
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative w-full">
            {/* Vertical Line - Center on desktop, left on mobile */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 -translate-x-1/2" />

            {/* MONTH HEADER */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center mb-12 relative z-10"
            >
              <span className="bg-white/80 backdrop-blur border border-emerald-200 px-6 py-2 rounded-full text-emerald-800 font-bold shadow-sm">
                September 2024
              </span>
            </motion.div>

            {/* ITEM 1 (Right on desktop) */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 w-full group">
              {/* Card - Right side desktop, full width mobile */}
              <motion.div
                variants={cardRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="order-2 md:order-1 md:w-[45%] mb-4 md:mb-0 md:pr-10 md:text-right hidden md:block"
              >
                 <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative overflow-hidden p-6 rounded-xl shadow-lg border border-emerald-100 bg-white/60 backdrop-blur-md transition-all duration-300 hover:bg-white/80"
                 >
                   {/* Card Background Texture - Subtle */}
                   <div
                      className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
                      style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }}
                   />

                   {/* Content */}
                   <div className="relative z-10">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wide border border-emerald-200">
                        {t.tournament.items.open_for_all}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-emerald-950 mb-2">{t.tournament.items.autumn_open}</h3>
                    <p className="text-sm text-emerald-900/80 mb-4 font-medium">{t.tournament.items.autumn_desc}</p>
                    <div className="flex justify-end gap-4 text-xs font-semibold text-emerald-800">
                      <span className="flex items-center gap-1"><Trophy className="w-3 h-3 text-yellow-500" /> $500 Prize</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3 text-emerald-600" /> Singles/Doubles</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

               {/* Center Node - Aligned to line */}
              <motion.div
                variants={centerNodeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center z-10 shadow-lg border-4 border-emerald-50 order-1"
              >
                 <Calendar className="w-4 h-4" />
              </motion.div>

              {/* Date/Time - Left side desktop, Right side of line mobile */}
              <motion.div
                initial={{ opacity: 0, x: -50 }} // Simple fade for text
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pl-16 md:pl-10 order-2 md:order-2 w-full md:w-[45%] text-left"
              >
                 {/* Mobile Card shown here (Slide from Right on mobile) */}
                 <motion.div
                    variants={cardRightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="md:hidden relative overflow-hidden p-6 rounded-xl shadow-lg border border-emerald-100 bg-white/60 backdrop-blur-md mb-2 hover:bg-white/80"
                 >
                    {/* Card Background Texture */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
                        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wide border border-emerald-200">
                          {t.tournament.items.open_for_all}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-emerald-950 mb-2">{t.tournament.items.autumn_open}</h3>
                      <p className="text-sm text-emerald-900/80 mb-4 font-medium">{t.tournament.items.autumn_desc}</p>
                      <div className="flex gap-4 text-xs font-semibold text-emerald-800">
                        <span className="flex items-center gap-1"><Trophy className="w-3 h-3 text-yellow-500" /> $500 Prize</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3 text-emerald-600" /> Singles/Doubles</span>
                      </div>
                    </div>
                 </motion.div>

                 <h4 className="text-emerald-700 font-bold text-lg">Sept 10th</h4>
                 <p className="text-emerald-600/70 font-medium text-sm">09:00 AM - 06:00 PM</p>
              </motion.div>
            </div>

            {/* ITEM 2 (Left on desktop) */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 w-full group">
               {/* Date/Time - Right side desktop */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:block order-2 md:order-1 md:w-[45%] mb-4 md:mb-0 md:pr-10 md:text-right"
              >
                  <h4 className="text-emerald-700 font-bold text-lg">Sept 22nd</h4>
                  <p className="text-emerald-600/70 font-medium text-sm">10:00 AM - 04:00 PM</p>
              </motion.div>

               {/* Center Node */}
              <motion.div
                variants={centerNodeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-emerald-400 border-2 border-emerald-200 flex items-center justify-center z-10 shadow-sm order-1 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-colors"
              >
                 <Trophy className="w-4 h-4" />
              </motion.div>

              {/* Card - Left side desktop */}
              <motion.div
                variants={cardLeftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="pl-16 md:pl-10 order-2 md:order-2 w-full md:w-[45%] text-left"
              >
                <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative overflow-hidden p-6 rounded-xl shadow-lg border border-emerald-100 bg-white/60 backdrop-blur-md transition-all duration-300 hover:bg-white/80"
                >
                   {/* Card Background Texture */}
                   <div
                      className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
                      style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }}
                   />

                   <div className="relative z-10">
                     {/* Arrow decoration for desktop left side */}
                     <div className="hidden md:block absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-white/60 backdrop-blur-md rotate-45 border-l border-b border-emerald-100 z-0"></div>

                    <div className="flex items-center gap-2 mb-2 relative z-10">
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wide border border-blue-100">
                        {t.tournament.items.juniors_only}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-emerald-950 mb-2 relative z-10">{t.tournament.items.junior_champ}</h3>
                    <p className="text-sm text-emerald-900/80 mb-4 font-medium relative z-10">{t.tournament.items.junior_desc}</p>
                    <div className="flex gap-4 text-xs font-semibold text-emerald-800 relative z-10">
                      <span className="flex items-center gap-1"><Trophy className="w-3 h-3 text-yellow-500" /> Trophies & Medals</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3 text-emerald-600" /> U15 / U17</span>
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Date - shown below card */}
                <div className="md:hidden mt-2">
                    <h4 className="text-emerald-700 font-bold text-lg">Sept 22nd</h4>
                    <p className="text-emerald-600/70 font-medium text-sm">10:00 AM - 04:00 PM</p>
                </div>
              </motion.div>
            </div>

            {/* MONTH HEADER */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center mb-12 relative z-10"
            >
              <span className="bg-white/80 backdrop-blur border border-emerald-200 px-6 py-2 rounded-full text-emerald-800 font-bold shadow-sm">
                October 2024
              </span>
            </motion.div>

            {/* ITEM 3 (Right on desktop) */}
             <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 w-full group">
              {/* Card - Right side desktop, full width mobile */}
              <motion.div
                variants={cardRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="order-2 md:order-1 md:w-[45%] mb-4 md:mb-0 md:pr-10 md:text-right hidden md:block"
              >
                 <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative overflow-hidden p-6 rounded-xl shadow-lg border border-emerald-100 bg-white/60 backdrop-blur-md transition-all duration-300 hover:bg-white/80"
                 >
                    {/* Card Background Texture */}
                   <div
                      className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
                      style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }}
                   />

                   <div className="relative z-10">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-wide border border-purple-100">
                        {t.tournament.items.members_only}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-emerald-950 mb-2">{t.tournament.items.club_ladder}</h3>
                    <p className="text-sm text-emerald-900/80 mb-4 font-medium">{t.tournament.items.ladder_desc}</p>
                    <div className="flex justify-end gap-4 text-xs font-semibold text-emerald-800">
                      <span className="flex items-center gap-1"><Flag className="w-3 h-3 text-emerald-600" /> Ranking Points</span>
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> Top 8 Invite</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

               {/* Center Node */}
              <motion.div
                variants={centerNodeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-emerald-400 border-2 border-emerald-200 flex items-center justify-center z-10 shadow-sm order-1 group-hover:border-emerald-500 group-hover:text-emerald-600 transition-colors"
              >
                 <Flag className="w-4 h-4" />
              </motion.div>

              {/* Date/Time - Left side desktop, Right side of line mobile */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pl-16 md:pl-10 order-2 md:order-2 w-full md:w-[45%] text-left"
              >
                 {/* Mobile Card shown here (Slide from Right) */}
                 <motion.div
                    variants={cardRightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="md:hidden relative overflow-hidden p-6 rounded-xl shadow-lg border border-emerald-100 bg-white/60 backdrop-blur-md mb-2 hover:bg-white/80"
                 >
                    {/* Card Background Texture */}
                   <div
                      className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
                      style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }}
                   />

                   <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-700 text-[10px] font-bold uppercase tracking-wide border border-purple-100">
                          {t.tournament.items.members_only}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-emerald-950 mb-2">{t.tournament.items.club_ladder}</h3>
                      <p className="text-sm text-emerald-900/80 mb-4 font-medium">{t.tournament.items.ladder_desc}</p>
                       <div className="flex gap-4 text-xs font-semibold text-emerald-800">
                        <span className="flex items-center gap-1"><Flag className="w-3 h-3 text-emerald-600" /> Ranking Points</span>
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> Top 8 Invite</span>
                      </div>
                    </div>
                 </motion.div>

                 <h4 className="text-emerald-700 font-bold text-lg">Oct 05th</h4>
                 <p className="text-emerald-600/70 font-medium text-sm">01:00 PM - 08:00 PM</p>
              </motion.div>
            </div>

             {/* End Node */}
             <div className="absolute left-6 md:left-1/2 bottom-0 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-200" />
          </div>
        </div>
      </div>

      {/*
        SECTION 3: NOTIFICATION CTA
        Background: Gradient continuing the flow (Emerald to White)
      */}
      <div className="w-full py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="max-w-[800px] mx-auto bg-gradient-to-br from-white via-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-12 text-center border border-emerald-100 shadow-xl"
        >
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-emerald-600 border border-emerald-50">
            <Bell className="w-8 h-8" />
          </div>
          <h3 className="text-emerald-950 text-2xl font-bold font-display mb-3">
            {t.tournament.notify_title}
          </h3>
          <p className="text-emerald-900/70 mb-8 max-w-md mx-auto">
            {t.tournament.notify_desc}
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t.tournament.notify_placeholder}
              className="flex-1 h-12 px-4 rounded-lg border border-emerald-100 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none bg-white/80 text-emerald-900"
            />
            <button className="h-12 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors whitespace-nowrap shadow-md">
              {t.tournament.notify_btn}
            </button>
          </form>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Tournament;