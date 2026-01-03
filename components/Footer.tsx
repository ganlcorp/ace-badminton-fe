import React from "react";
import { Award, Facebook, Instagram, Music2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#111418] border-t border-white/10 py-12 px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 max-w-[1200px] mx-auto mb-12">
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start gap-6 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="size-12 bg-primary/20 rounded-full flex items-center justify-center text-primary shadow-lg shadow-primary/10">
              <Award className="w-7 h-7" />
            </div>
            <span className="font-bold text-white text-2xl font-display tracking-tight">
              ACE Badminton
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
             Where passion meets teamwork. Join us to create unforgettable memories on and off the court.
          </p>
        </div>

        {/* Right: Contact & Socials List */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <h3 className="text-white font-bold text-lg border-b-2 border-primary/50 pb-1">
            {t.nav.contact}
          </h3>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 hover:text-white group transition-all duration-300"
              aria-label="Facebook"
            >
              <div className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#1877F2] group-hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                https://www.facebook.com/share/g/1CwGxuEmhF/
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 hover:text-white group transition-all duration-300"
              aria-label="Instagram"
            >
              <div className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                @ace.badminton_team
              </span>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 text-gray-400 hover:text-white group transition-all duration-300"
              aria-label="TikTok"
            >
              <div className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors duration-300">
                <Music2 className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                @ace.badminton.official
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright Centered */}
      <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-4 text-xs text-gray-500 text-center">
        <p>
          © 2024 ACE Badminton. {t.footer.rights}
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a>
          <span className="text-white/10">•</span>
          <a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;