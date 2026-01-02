import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any; // Translation object
}

const translations = {
  en: {
    nav: {
      home: "Home",
      ranking: "Ranking",
      schedule: "Schedule",
      tournament: "Tournament",
      contact: "Contact"
    },
    hero: {
      title_start: "Welcome to",
      title_end: "ACE Badminton",
      desc: "Welcome to ACE Badminton – where passion meets teamwork! Whether you're a pro or a beginner, join us to stay updated on training schedules, internal tournaments, and exciting social events. Relive every fiery match through our highlight gallery and gain valuable tips from our veterans. Let’s join the community and create unforgettable memories together!",
      join: "Join Now",
      learn: "Learn More",
      next_tour: "Next Tournament"
    },
    activities: {
      header_sub: "Train & Compete",
      header_title: "Our Activities",
      details: "See Details",
      items: [
        {
          title: "Counquer the winter",
          desc: "Winter Badminton Tournament 2024",
          label: "Sunday, 22/12/2024"
        },
        {
          title: "Amazing Summer Tournament",
          desc: "Amazing Summer Tournament 2025",
          label: "Weekends"
        }
      ]
    },
    hosts: {
      title: "ACE Badminton admin team",
      items: [
        { role: "Team Admin", desc: "Cao Nhut Linh - 1998" },
        { role: "Team Admin", desc: "Tran Xuan Huy - 1998" },
        { role: "Team Admin", desc: "Nguyen Thi Thu Uyen - 1999" },
        { role: "Team Admin", desc: "Le Phuc Minh Quan - 2000" }
      ]
    },
    form: {
      title: "Join ACE Badminton now",
      subtitle: "Fill in your details to start your membership application.",
      labels: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        category: "Category",
        level: "Level",
        members: "Number of Members",
        submit: "Next"
      },
      options: {
        singles: "Singles",
        doubles: "Doubles",
        mixed: "Mixed Doubles",
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        pro: "Pro"
      }
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved."
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      ranking: "Xếp hạng",
      schedule: "Lịch tập",
      tournament: "Giải đấu",
      contact: "Liên hệ"
    },
    hero: {
      title_start: "Chào mừng bạn đến với",
      title_end: "ACE Badminton",
      desc: "Chào mừng bạn đến với ACE Badminton – cộng đồng kết nối đam mê và tinh thần đồng đội! Dù ở trình độ nào, bạn cũng sẽ được cập nhật liên tục lịch tập, giải đấu, kỹ thuật chuyên môn và lưu giữ những khoảnh khắc rực rỡ trên sân. Cảm ơn bạn đã tham gia, hãy cùng nhau tạo nên những kỷ niệm khó quên!",
      join: "Tham gia ngay",
      learn: "Tìm hiểu thêm",
      next_tour: "Giải đấu sắp tới"
    },
    activities: {
      header_sub: "Tập luyện & Thi đấu",
      header_title: "Hoạt động CLB",
      details: "Chi tiết",
      items: [
        {
          title: "Giải cầu lông mùa đông 2024",
          desc: "Giải cầu lông mùa đông 2024",
          label: "Chủ nhật, 22/12/2024"
        },
        {
          title: "Giải cầu lông mùa hè tuyệt vời",
          desc: "Giải cầu lông mùa hè tuyệt vời 2025",
          label: "Chủ nhật, 22/06/2025"
        }
      ]
    },
    hosts: {
      title: "Đội ngũ của chúng tôi",
      items: [
        { role: "Team Admin", desc: "Cao Nhut Linh - 1998" },
        { role: "Team Admin", desc: "Tran Xuan Huy - 1998" },
        { role: "Team Admin", desc: "Nguyen Thi Thu Uyen - 1999" },
        { role: "Team Admin", desc: "Le Phuc Minh Quan - 2000" }
      ]
    },
    form: {
      title: "Đăng ký tham gia",
      subtitle: "Điền thông tin chi tiết để bắt đầu đăng ký thành viên.",
      labels: {
        name: "Họ và tên",
        email: "Email",
        phone: "Số điện thoại",
        category: "Nội dung",
        level: "Trình độ",
        members: "Số lượng thành viên",
        submit: "Tiếp tục"
      },
      options: {
        singles: "Đơn",
        doubles: "Đôi",
        mixed: "Đôi nam nữ",
        beginner: "Mới chơi",
        intermediate: "Trung bình",
        advanced: "Nâng cao",
        pro: "Chuyên nghiệp"
      }
    },
    footer: {
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản dịch vụ",
      rights: "Đã đăng ký bản quyền."
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
