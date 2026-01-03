import React from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../contexts/LanguageContext";
import { getLocalImage } from "../utils/imageUtils";

interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  imageName: string;
  fallbackImage: string;
}

const Hosts: React.FC = () => {
  const { t } = useLanguage();

  const members: Member[] = [
    {
      id: 1,
      name: "Nhut Linh",
      role: t.hosts.items[0].role,
      description: t.hosts.items[0].desc,
      imageName: "linhcn.jpg",
      fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOZYkjEKyGrytA3oaBxv9cMSjCNgN6L9NubIL5z76Wp0OCKn8vT3WkYiH4SctqwLni4zabmeq8DNt1Xg-Dxl9RztAlBD_p4B6iorYvN0WTBvTF-B7Wm9lpmOVvezVzfspQcMn4g4JUx1pBtWhDAdBes1qmpaA6qEp5zqdGrt11u35a9Iyl5ArNt8J_K2khqalgHnpRzdh-oa-f4Z6jh8kFssoswdErlmALHqaPAOq0a9mfCZf-sViMm-7LCBNoktvQDWBTOoc6p4yY"
    },
    {
      id: 2,
      name: "Xuan Huy",
      role: t.hosts.items[1].role,
      description: t.hosts.items[1].desc,
      imageName: "huytx.jpg",
      fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOZYkjEKyGrytA3oaBxv9cMSjCNgN6L9NubIL5z76Wp0OCKn8vT3WkYiH4SctqwLni4zabmeq8DNt1Xg-Dxl9RztAlBD_p4B6iorYvN0WTBvTF-B7Wm9lpmOVvezVzfspQcMn4g4JUx1pBtWhDAdBes1qmpaA6qEp5zqdGrt11u35a9Iyl5ArNt8J_K2khqalgHnpRzdh-oa-f4Z6jh8kFssoswdErlmALHqaPAOq0a9mfCZf-sViMm-7LCBNoktvQDWBTOoc6p4yY"
    },
    {
      id: 3,
      name: "Thu Uyen",
      role: t.hosts.items[2].role,
      description: t.hosts.items[2].desc,
      imageName: "uyenng.jpg",
      fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOZYkjEKyGrytA3oaBxv9cMSjCNgN6L9NubIL5z76Wp0OCKn8vT3WkYiH4SctqwLni4zabmeq8DNt1Xg-Dxl9RztAlBD_p4B6iorYvN0WTBvTF-B7Wm9lpmOVvezVzfspQcMn4g4JUx1pBtWhDAdBes1qmpaA6qEp5zqdGrt11u35a9Iyl5ArNt8J_K2khqalgHnpRzdh-oa-f4Z6jh8kFssoswdErlmALHqaPAOq0a9mfCZf-sViMm-7LCBNoktvQDWBTOoc6p4yY"
    },
    {
      id: 4,
      name: "Minh Quan",
      role: t.hosts.items[3].role,
      description: t.hosts.items[3].desc,
      imageName: "mql.jpg",
      fallbackImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOZYkjEKyGrytA3oaBxv9cMSjCNgN6L9NubIL5z76Wp0OCKn8vT3WkYiH4SctqwLni4zabmeq8DNt1Xg-Dxl9RztAlBD_p4B6iorYvN0WTBvTF-B7Wm9lpmOVvezVzfspQcMn4g4JUx1pBtWhDAdBes1qmpaA6qEp5zqdGrt11u35a9Iyl5ArNt8J_K2khqalgHnpRzdh-oa-f4Z6jh8kFssoswdErlmALHqaPAOq0a9mfCZf-sViMm-7LCBNoktvQDWBTOoc6p4yY"
    }
  ];

  return (
    <section className="flex flex-col items-center bg-emerald-900/80 py-16 px-4 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-[1000px] w-full flex flex-col gap-10">
        <ScrollReveal>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight text-center font-display">
            {t.hosts.title}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors duration-300 group">
                <div className="size-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg relative">
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${getLocalImage(member.imageName, member.fallbackImage)}')` }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-medium text-sm uppercase tracking-wider mt-1">{member.role}</p>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hosts;