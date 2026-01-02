import React from "react";
import { Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-emerald-900/95 border-t border-emerald-800 py-10 px-10 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-white/10 rounded-full flex items-center justify-center text-primary">
            <Award className="w-5 h-5" />
          </div>
          <span className="font-bold text-white font-display">
            ACE Badminton
          </span>
        </div>
        <div className="flex gap-6">
          <a
            className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
            href="#"
          >
            {t.footer.privacy}
          </a>
          <a
            className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
            href="#"
          >
            {t.footer.terms}
          </a>
        </div>
        <div className="text-gray-400 text-sm">
          © 2023 ACE Badminton. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
