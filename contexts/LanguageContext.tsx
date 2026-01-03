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
          title: "Conquer the winter",
          desc: "Winter Badminton Tournament 2024",
          label: "Sunday, 22/12/2024"
        },
        {
          title: "Amazing Summer Tournament",
          desc: "Amazing Summer Tournament 2025",
          label: "Weekends"
        },
        // Fillers to prevent crashes if array is accessed by index
        { title: "Coming Soon", desc: "", label: "" },
        { title: "Coming Soon", desc: "", label: "" }
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
    ranking: {
      title: "Current Rankings",
      search_placeholder: "Search for players...",
      show: "Show:",
      entries: "entries",
      headers: {
        rank: "Rank",
        name: "Name",
        tournaments: "Tournaments",
        points: "Points"
      },
      age: "Age",
      pts: "pts",
      showing: "Showing",
      to: "to",
      of: "of"
    },
    tournament: {
      next_big_event: "Next Event:",
      summer_smash: "Amazing Summer Tournament 2025",
      event_desc: "Explode into a scorching Summer 2025 with the ACE crew!",
      date_label: "Date",
      location_label: "Location",
      prize_label: "Prize Pool",
      register_now: "Register Now",
      view_details: "View Details",
      schedule_title: "Upcoming Tournament Schedule",
      schedule_sub: "Plan your season ahead. Check out the upcoming tournaments and secure your spot in the competition.",
      items: {
        autumn_open: "Comming soon",
        autumn_desc: "You will see soon.",
        junior_champ: "Comming soon",
        junior_desc: "You will see soon.",
        club_ladder: "Comming soon",
        ladder_desc: "You will see soon.",
        open_for_all: "OPEN FOR ALL",
        juniors_only: "JUNIORS ONLY",
        members_only: "MEMBERS ONLY"
      },
      notify_title: "Don't see a tournament for you?",
      notify_desc: "We are constantly adding new events. Subscribe to our newsletter to get notified about upcoming tournaments in your area.",
      notify_placeholder: "Enter your email",
      notify_btn: "Notify Me"
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have questions about memberships, tournaments, or training? Reach out to our dedicated team members below.",
      team: [
        {
          name: "Cao Nhựt Linh",
          role: "Admin",
          desc: "Admin member",
          email: "nhutlinhisme@gmail.com",
          phone: "090x.xxx.xxx"
        },
        {
          name: "Trần Xuân Huy",
          role: "Admin",
          desc: "Admin member",
          email: "huy.tran@gmail.com",
          phone: "090x.xxx.xxx"
        },
        {
          name: "Nguyễn Thị Thu Uyên",
          role: "Admin",
          desc: "Admin member",
          email: "uyen.nguyen@gmail.com",
          phone: "090x.xxx.xxx"
        },
        {
          name: "Lê Phúc Minh Quân",
          role: "Admin",
          desc: "Admin member",
          email: "mql@gmail.com",
          phone: "090x.xxx.xxx"
        }
      ]
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
        },
        { title: "Sắp ra mắt", desc: "", label: "" },
        { title: "Sắp ra mắt", desc: "", label: "" }
      ]
    },
    hosts: {
      title: "Đội ngũ Admin ACE",
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
    ranking: {
      title: "Bảng Xếp Hạng",
      search_placeholder: "Tìm kiếm người chơi...",
      show: "Hiển thị:",
      entries: "mục",
      headers: {
        rank: "Hạng",
        name: "Tên",
        tournaments: "Giải đấu",
        points: "Điểm"
      },
      age: "Tuổi",
      pts: "điểm",
      showing: "Hiển thị",
      to: "đến",
      of: "của"
    },
    tournament: {
      next_big_event: "Sự kiện Diễn ra sắp tới",
      summer_smash: "Mùa Hè diệu kì 2025",
      event_desc: "Cùng Tham gia giải đấu để có một mùa hè bùng nổ.!",
      date_label: "Ngày",
      location_label: "Địa điểm",
      prize_label: "Giải thưởng",
      register_now: "Đăng ký ngay",
      view_details: "Xem chi tiết",
      schedule_title: "Lịch Trình Giải Đấu Sắp Tới",
      schedule_sub: "Lên kế hoạch cho mùa giải của bạn. Kiểm tra các giải đấu sắp tới và đảm bảo suất thi đấu của bạn.",
      items: {
        autumn_open: "Sắp diễn ra",
        autumn_desc: "Chúng tôi sẽ gặp lại bạn sớm thôi, đón chờ nhé.",
        junior_champ: "Sắp diễn ra",
        junior_desc: "Chúng tôi sẽ gặp lại bạn sớm thôi, đón chờ nhé.",
        club_ladder: "Sắp diễn ra",
        ladder_desc: "Chúng tôi sẽ gặp lại bạn sớm thôi, đón chờ nhé.",
        open_for_all: "MỞ CHO TẤT CẢ",
        juniors_only: "CHỈ DÀNH CHO THIẾU NIÊN",
        members_only: "CHỈ DÀNH CHO THÀNH VIÊN"
      },
      notify_title: "Không thấy giải đấu phù hợp?",
      notify_desc: "Chúng tôi liên tục bổ sung các sự kiện mới. Đăng ký nhận bản tin để được thông báo về các giải đấu sắp tới trong khu vực của bạn.",
      notify_placeholder: "Nhập email của bạn",
      notify_btn: "Thông báo cho tôi"
    },
    contact: {
      title: "Liên Hệ",
      subtitle: "Bạn có câu hỏi về quyền thành viên, giải đấu hoặc tập luyện? Hãy liên hệ với các thành viên trong đội ngũ chuyên trách của chúng tôi dưới đây.",
      team: [
        {
          name: "Cao Nhựt Linh",
          role: "Admin",
          desc: "Admin member",
          email: "nhutlinhisme@gmail.com",
          phone: "090x.xxx.xxx"
        },
        {
          name: "Trần Xuân Huy",
          role: "Admin",
          desc: "Admin member",
          email: "huy.tran@gmail.com",
          phone: "090x.xxx.xxx"
        },
        {
          name: "Nguyễn Thị Thu Uyên",
          role: "Admin",
          desc: "Admin member",
          email: "uyen.nguyen@gmail.com",
          phone: "090x.xxx.xxx"
        },
        {
          name: "Lê Phúc Minh Quân",
          role: "Admin",
          desc: "Admin member",
          email: "mql@gmail.com",
          phone: "090x.xxx.xxx"
        }
      ]
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