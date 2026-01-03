import React from "react";
import { motion, Variants } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getLocalImage } from "../utils/imageUtils";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  // List of image filenames corresponding to the order in LanguageContext
  // 1. Cao Nhut Linh
  // 2. Tran Xuan Huy
  // 3. Nguyen Thi Thu Uyen
  // 4. Le Phuc Minh Quan
  const teamImages = [
    "linhcn.jpg",
    "huytx.jpg",
    "uyenng.jpg",
    "mql.jpg"
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center min-h-screen bg-background-light pb-20 pt-28 px-4 md:px-10"
    >
      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-[#111418] text-4xl md:text-5xl font-black font-display mb-4">
          {t.contact.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          {t.contact.subtitle}
        </p>
      </motion.div>

      {/* Team Grid */}
      <div className="w-full max-w-[1000px] flex flex-col gap-8">
        {t.contact.team.map((member: any, index: number) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="w-full bg-emerald-50/70 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-100"
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 ${!isEven ? 'md:flex-row-reverse' : ''}`}>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-[#111418] font-display mb-1">
                    {member.name}
                  </h2>
                  <p className="text-primary font-bold text-sm tracking-wide uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.desc}
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white transition-colors group cursor-pointer border border-transparent hover:border-emerald-200"
                    >
                      <div className="size-8 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors truncate">
                        {member.email}
                      </span>
                    </a>

                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white transition-colors group cursor-pointer border border-transparent hover:border-emerald-200"
                    >
                      <div className="size-8 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                        {member.phone}
                      </span>
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-[350px] shrink-0">
                  <div className="aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-md bg-gray-200">
                    <img
                      src={getLocalImage(teamImages[index], "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2000&auto=format&fit=crop")}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Contact;