import React, { useRef } from "react";
import { Activity } from "../types";
import { Calendar, Users, Trophy, GraduationCap, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../contexts/LanguageContext";

const Activities: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const activities: Activity[] = [
    {
      id: 1,
      title: t.activities.items[0].title,
      description: t.activities.items[0].desc,
      image: "../images/spring_2024.jpg",
      label: t.activities.items[0].label,
      icon: Calendar
    },
    {
      id: 2,
      title: t.activities.items[1].title,
      description: t.activities.items[1].desc,
      image: "../images/summer_2025.jpg",
      label: t.activities.items[1].label,
      icon: Users
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Approx card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="flex flex-col items-center bg-emerald-900/80 py-16 px-4 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-[1200px] w-full flex flex-col gap-8">
        <ScrollReveal>
          <div className="flex flex-col gap-2 items-center text-center">
            <span className="text-white/80 font-bold tracking-wider uppercase text-sm">
              {t.activities.header_sub}
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight font-display">
              {t.activities.header_title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-2 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {activities.map((activity, index) => (
              <div key={activity.id} className="min-w-[300px] md:min-w-[360px] flex-1 snap-center">
                <ScrollReveal delay={index * 0.1} direction="right" className="h-full">
                  <div className="flex flex-col h-full rounded-xl bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent overflow-hidden group/card">
                    <div className="h-48 w-full overflow-hidden">
                      <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover/card:scale-110"
                        style={{ backgroundImage: `url('${activity.image}')` }}
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-3 flex-1 relative z-10 bg-white">
                      <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wide">
                        <activity.icon className="w-4 h-4" />
                        {activity.label}
                      </div>
                      <h3 className="text-xl font-bold text-[#111418] font-display">
                        {activity.title}
                      </h3>
                      <p className="text-[#617589] text-sm leading-relaxed mb-4">
                        {activity.description}
                      </p>
                      <div className="mt-auto">
                        <button className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all group/btn">
                          {t.activities.details} <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous"
              className="size-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#111418] hover:bg-gray-50 hover:scale-110 transition-all active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next"
              className="size-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#111418] hover:bg-gray-50 hover:scale-110 transition-all active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
