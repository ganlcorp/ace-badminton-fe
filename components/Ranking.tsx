import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Search, ChevronDown, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getLocalImage } from "../utils/imageUtils";

interface Player {
  rank: number;
  name: string;
  age: number;
  tournaments: number;
  points: number;
  imageName: string;
}

const Ranking: React.FC = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample Data
  const players: Player[] = [
    { rank: 1, name: "Cao Nhut Linh", age: 27, tournaments: 2, points: 1000, imageName: "linhcn.jpg" },
    { rank: 2, name: "Le Phuc Minh Quan", age: 25, tournaments: 2, points: 970, imageName: "mql.jpg" },
    { rank: 3, name: "Tran Xuan Huy", age: 27, tournaments: 2, points: 950, imageName: "huytx.jpg" },
    { rank: 4, name: "Nguyen Thi Thu Uyen", age: 26, tournaments: 2, points: 910, imageName: "uyenng.jpg" },
    { rank: 5, name: "Nguyen Huu Hoang An", age: 23, tournaments: 2, points: 890, imageName: "annhh.jpg" },
    { rank: 7, name: "Nguyen Thi Hong Anh", age: 22, tournaments: 1, points: 150, imageName: "anhnth.jpg" },
    // Adding dummy data to demonstrate pagination if needed
    // { rank: 8, name: "Demo User 1", age: 20, tournaments: 1, points: 140, imageName: "" },
    // { rank: 9, name: "Demo User 2", age: 20, tournaments: 1, points: 130, imageName: "" },
    // { rank: 10, name: "Demo User 3", age: 20, tournaments: 1, points: 120, imageName: "" },
    // { rank: 11, name: "Demo User 4", age: 20, tournaments: 1, points: 110, imageName: "" },
  ];

  const top3 = players.slice(0, 3);

  // Filter "others" based on search and exclude top 3
  const allOthers = players.slice(3).filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate Pagination
  const totalPages = Math.ceil(allOthers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allOthers.slice(indexOfFirstItem, indexOfLastItem);

  // Handlers
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.1
      }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  const podiumVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 12, delay: 0.3 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full flex flex-col items-center bg-background-light min-h-screen"
    >
      {/* Top Banner & Podium Section */}
      <div className="relative w-full bg-gradient-to-b from-emerald-300 to-emerald-800 pb-32 pt-32 px-4">
        {/* Updated Background Image using getLocalImage */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: `url('${getLocalImage("ranking-bg.jpg")}')` }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <motion.h1
            variants={itemVariants}
            className="text-white text-4xl font-bold font-display mb-28 drop-shadow-md text-center"
          >
            {t.ranking.title}
          </motion.h1>

          {/* Podium */}
          <motion.div
            variants={podiumVariants}
            className="flex items-end justify-center gap-4 md:gap-12 mb-8"
          >
            {/* Rank 2 */}
            <div className="flex flex-col items-center order-1">
              <div className="relative group cursor-pointer">
                <div className="size-24 md:size-32 rounded-full border-4 border-gray-300 overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105 bg-gray-200">
                  <img
                    src={getLocalImage(top3[1].imageName)}
                    alt={top3[1].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        // Ẩn ảnh nếu lỗi để hiện background màu
                        e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute -top-2 -right-2 size-8 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center font-bold shadow-md border-2 border-white">
                  2
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-lg">{top3[1].name}</h3>
                <p className="text-gray-300 text-sm">{t.ranking.age}: {top3[1].age}</p>
                <span className="mt-2 inline-block px-4 py-1 rounded-full bg-primary text-white text-sm font-bold shadow-lg">
                  {top3[1].points} {t.ranking.pts}
                </span>
              </div>
            </div>

            {/* Rank 1 */}
            <div className="flex flex-col items-center order-2 -mt-10 md:-mt-16 z-10">
              <div className="relative group cursor-pointer">
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce">
                     <Trophy className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.6)]" fill="currentColor" />
                 </div>
                <div className="size-32 md:size-40 rounded-full border-4 border-yellow-400 overflow-hidden shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-transform duration-300 group-hover:scale-105 bg-yellow-100">
                  <img
                    src={getLocalImage(top3[0].imageName)}
                    alt={top3[0].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute -top-2 -right-2 size-10 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center font-bold text-xl shadow-md border-2 border-white">
                  1
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-xl md:text-2xl">{top3[0].name}</h3>
                <p className="text-gray-300 text-sm">{t.ranking.age}: {top3[0].age}</p>
                <span className="mt-2 inline-block px-5 py-1.5 rounded-full bg-yellow-400 text-yellow-900 text-base font-bold shadow-lg">
                  {top3[0].points} {t.ranking.pts}
                </span>
              </div>
            </div>

            {/* Rank 3 */}
            <div className="flex flex-col items-center order-3">
              <div className="relative group cursor-pointer">
                <div className="size-24 md:size-32 rounded-full border-4 border-orange-700 overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105 bg-orange-100">
                  <img
                    src={getLocalImage(top3[2].imageName)}
                    alt={top3[2].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute -top-2 -right-2 size-8 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold shadow-md border-2 border-white">
                  3
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-lg">{top3[2].name}</h3>
                <p className="text-gray-300 text-sm">{t.ranking.age}: {top3[2].age}</p>
                <span className="mt-2 inline-block px-4 py-1 rounded-full bg-primary text-white text-sm font-bold shadow-lg">
                  {top3[2].points} {t.ranking.pts}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Table Section */}
      <motion.div
        variants={itemVariants}
        className="w-full max-w-[1200px] px-4 -mt-20 z-20 mb-20"
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Controls Header */}
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t.ranking.search_placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{t.ranking.show}</span>
              <div className="relative">
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className="appearance-none bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-3 pr-8 focus:outline-none cursor-pointer hover:bg-gray-100 transition-colors"
                >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <span>{t.ranking.entries}</span>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-24">
                    {t.ranking.headers.rank}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {t.ranking.headers.name}
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {t.ranking.headers.tournaments}
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {t.ranking.headers.points}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentItems.length > 0 ? (
                  currentItems.map((player, index) => (
                    <motion.tr
                      key={player.rank}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="hover:bg-blue-50/30 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className={`size-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            player.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                            player.rank === 2 ? 'bg-gray-100 text-gray-700' :
                            player.rank === 3 ? 'bg-orange-100 text-orange-800' :
                            'text-gray-500'
                        }`}>
                          {player.rank}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                              <div className="size-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                                  {getLocalImage(player.imageName) ? (
                                      <img
                                        src={getLocalImage(player.imageName)}
                                        alt={player.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                          e.currentTarget.style.display = 'none';
                                          e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-blue-100', 'text-primary', 'font-bold');
                                          if (e.currentTarget.parentElement) {
                                              e.currentTarget.parentElement.innerText = player.name.charAt(0) + (player.name.split(' ')[1]?.charAt(0) || '');
                                          }
                                        }}
                                      />
                                  ) : (
                                      <div className="w-full h-full bg-blue-100 flex items-center justify-center text-primary font-bold">
                                          {player.name.charAt(0)}{player.name.split(' ')[1]?.charAt(0)}
                                      </div>
                                  )}
                              </div>
                              <div>
                                  <p className="font-bold text-[#111418] group-hover:text-primary transition-colors">{player.name}</p>
                                  <p className="text-xs text-gray-400">{t.ranking.age}: {player.age}</p>
                              </div>
                          </div>
                      </td>
                      <td className="px-6 py-4 text-right text-gray-600 font-medium">
                          {player.tournaments}
                      </td>
                      <td className="px-6 py-4 text-right">
                          <span className="text-primary font-bold">{player.points}</span>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                   <tr>
                     <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                       No results found.
                     </td>
                   </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Dynamic Pagination */}
          <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
               {t.ranking.showing} <span className="font-bold text-gray-800">{allOthers.length > 0 ? indexOfFirstItem + 1 : 0}</span> {t.ranking.to} <span className="font-bold text-gray-800">{Math.min(indexOfLastItem, allOthers.length)}</span> {t.ranking.of} <span className="font-bold text-gray-800">{allOthers.length}</span> {t.ranking.entries}
            </div>

            {/* Pagination Buttons - Only show if total pages > 0 */}
            {totalPages > 0 && (
              <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="size-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      <ChevronLeft className="w-4 h-4" />
                  </button>

                  {/* Generate Page Numbers Dynamically */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`size-8 flex items-center justify-center rounded transition-colors text-sm font-medium ${
                        currentPage === number
                          ? "bg-primary text-white font-bold shadow-md"
                          : "border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="size-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                      <ChevronRight className="w-4 h-4" />
                  </button>
              </div>
            )}
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Ranking;