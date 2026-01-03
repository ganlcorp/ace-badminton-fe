import React, { useState } from "react";
import { Award, Menu, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Map internal IDs to display labels
  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'ranking', label: t.nav.ranking },
    { id: 'tournament', label: t.nav.tournament },
    { id: 'contact', label: t.nav.contact }
  ];

  const toggleLanguage = (lang: 'en' | 'vi') => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  const handleMobileNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap px-4 md:px-10 py-3 bg-emerald-950/95 backdrop-blur-md shadow-lg border-b border-emerald-900/50 transition-all duration-500"
      >
        <div
          className="flex items-center gap-3 md:gap-4 text-white cursor-pointer z-50 shrink-0"
          onClick={() => setActiveTab('home')}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="size-9 md:size-10 bg-white/20 rounded-full flex items-center justify-center text-white"
          >
            <Award className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
          <h2 className="text-base md:text-lg font-bold leading-tight tracking-[-0.015em] font-display">
            <span className="hidden sm:inline">ACE Badminton</span>
            <span className="sm:hidden">ACE</span>
          </h2>
        </div>

        {/* Desktop Nav - Centered Absolutely */}
        <nav className="hidden md:flex items-center gap-9 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={index}
                onClick={() => setActiveTab(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.5 }}
                className={`text-sm font-medium leading-normal transition-colors cursor-pointer relative group ${
                  isActive ? 'text-primary' : 'text-white hover:text-primary'
                }`}
              >
                {item.label}
                {/* Highlight Line */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </motion.button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-4 z-50">
           {/* Mobile Menu Trigger */}
           <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex size-9 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors border border-white/10 text-white z-50"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Language Switcher Dropdown - Always visible now but smaller on mobile */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex h-9 md:h-10 px-2 md:px-3 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors border border-white/10 gap-1 md:gap-2 text-white"
            >
              <span className="text-base md:text-lg">{language === 'en' ? '🇺🇸' : '🇻🇳'}</span>
              <span className="text-sm font-medium hidden sm:block">{language === 'en' ? 'ENG' : 'VIE'}</span>
              <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
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

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-emerald-950 pt-24 px-6 md:hidden flex flex-col gap-8 overflow-hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navItems.map((item, index) => {
                const isActive = activeTab === item.id;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    onClick={() => handleMobileNavClick(item.id)}
                    className={`text-2xl font-bold transition-colors ${
                      isActive ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8"
            >
              <p className="text-white/50 text-sm">Select Language</p>
              <div className="flex gap-4">
                 <button
                  onClick={() => toggleLanguage('en')}
                  className={`px-6 py-2 rounded-full border ${language === 'en' ? 'bg-white text-emerald-900 border-white' : 'border-white/30 text-white'}`}
                 >
                   🇺🇸 English
                 </button>
                 <button
                  onClick={() => toggleLanguage('vi')}
                  className={`px-6 py-2 rounded-full border ${language === 'vi' ? 'bg-white text-emerald-900 border-white' : 'border-white/30 text-white'}`}
                 >
                   🇻🇳 Tiếng Việt
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;