import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../contexts/LanguageContext";

const JoinForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "Singles",
    level: "Beginner",
    members: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application Started! (This is a demo)");
  };

  return (
    <section className="flex flex-col items-center justify-center bg-emerald-900/80 py-16 px-4 backdrop-blur-sm border-t border-white/10">
      <ScrollReveal className="w-full max-w-[1200px]" direction="up">
        <div className="w-full bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-[#111418] text-2xl font-bold font-display">{t.form.title}</h2>
            <p className="text-gray-500 mt-1">
              {t.form.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                {t.form.labels.name}
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-background-light border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 text-[#111418] placeholder-gray-400 outline-none transition-all hover:bg-gray-100"
                placeholder="Tran Van A"
                type="text"
                required
              />
            </div>

            <div className="w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                {t.form.labels.email}
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-background-light border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 text-[#111418] placeholder-gray-400 outline-none transition-all hover:bg-gray-100"
                placeholder="tranvana@example.com"
                type="email"
                required
              />
            </div>

            <div className="w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                {t.form.labels.phone}
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-background-light border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 text-[#111418] placeholder-gray-400 outline-none transition-all hover:bg-gray-100"
                placeholder="+84 934 657 292"
                type="tel"
              />
            </div>

            <div className="w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                {t.form.labels.category}
              </label>
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-12 pl-4 pr-10 rounded-lg bg-background-light border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 text-[#111418] appearance-none cursor-pointer outline-none transition-all hover:bg-gray-100"
                >
                  <option value="Singles">{t.form.options.singles}</option>
                  <option value="Doubles">{t.form.options.doubles}</option>
                  <option value="Mixed Doubles">{t.form.options.mixed}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                {t.form.labels.level}
              </label>
              <div className="relative">
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full h-12 pl-4 pr-10 rounded-lg bg-background-light border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 text-[#111418] appearance-none cursor-pointer outline-none transition-all hover:bg-gray-100"
                >
                  <option value="Beginner">{t.form.options.beginner}</option>
                  <option value="Intermediate">{t.form.options.intermediate}</option>
                  <option value="Advanced">{t.form.options.advanced}</option>
                  <option value="Pro">{t.form.options.pro}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                {t.form.labels.members}
              </label>
              <input
                name="members"
                value={formData.members}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-background-light border border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 text-[#111418] outline-none transition-all hover:bg-gray-100"
                min="1"
                type="number"
              />
            </div>

            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-end mt-4">
              <button
                type="submit"
                className="w-full md:w-auto h-12 px-8 bg-primary hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/40"
              >
                {t.form.labels.submit} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default JoinForm;
