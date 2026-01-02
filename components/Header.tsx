import React, { useState } from "react";
import { Award, Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navItems = [
    t.nav.home,
    t.nav.ranking,
    t.nav.schedule,
    t.nav.tournament,
    t.nav.contact
  ];

  const toggleLanguage = (lang: 'en' | 'vi') => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/10 bg-black/10 backdrop-blur-md px-4 md:px-10 py-3 shadow-sm transition-all duration-300"
    >
      <div className="flex items-center gap-4 text-white">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="size-10 bg-white/20 rounded-full flex items-center justify-center text-white cursor-pointer"
        >
          <Award className="w-6 h-6" />
        </motion.div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block font-display">
          ACE Badminton
        </h2>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-9">
        {navItems.map((item: string, index: number) => (
          <motion.a
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.5 }}
            className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors cursor-pointer relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
         {/* Mobile Menu Trigger (Visual only for this demo) */}
         <button className="md:hidden flex size-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors border border-white/10 text-white">
          <Menu className="w-5 h-5" />
        </button>

        {/* Language Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex h-10 px-3 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors border border-white/10 gap-2 text-white"
          >
            <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇻🇳'}</span>
            <span className="text-sm font-medium hidden sm:block">{language === 'en' ? 'ENG' : 'VIE'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-xl overflow-hidden py-1 border border-gray-100"
              >
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${language === 'en' ? 'bg-blue-50 text-primary' : 'text-gray-700'}`}
                >
                  <span className="text-lg">🇺🇸</span>
                  <span className="text-sm font-medium">English</span>
                </button>
                <button
                  onClick={() => toggleLanguage('vi')}
                  className={`w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${language === 'vi' ? 'bg-blue-50 text-primary' : 'text-gray-700'}`}
                >
                  <span className="text-lg">🇻🇳</span>
                  <span className="text-sm font-medium">Tiếng Việt</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
