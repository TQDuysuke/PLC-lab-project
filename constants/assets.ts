/**
 * QUẢN LÝ TÀI NGUYÊN HÌNH ẢNH (IMAGE ASSETS REGISTRY)
 * 
 * Để thay thế hình ảnh, bạn hãy tạo thư mục 'public/images' trong dự án
 * và cập nhật đường dẫn tương ứng bên dưới.
 * 
 * Cấu trúc thư mục đề xuất:
 * /public
 *   /images
 *     /hero
 *     /equipment
 *     /research
 *     /about
 *     /gallery
 */

export const ASSETS = {
  HERO: {
    // Đề xuất: /images/hero/main-banner.jpg
    BACKGROUND: "/picture/hero/hero-main-banner.jpg", 
  },
  EQUIPMENT: {
    // Đề xuất: /images/equipment/s7-1200-kit.jpg
    S7_1200: "/picture/equipment/s7-1200-kit.jpg",
    // Đề xuất: /images/equipment/s7-1500-kit.jpg
    S7_1500: "/picture/equipment/s7-1500-kit.jpg",
    // Đề xuất: /images/equipment/servo-v90.jpg
    SERVO: "/picture/equipment/servo-v90.jpg",
    // Đề xuất: /images/equipment/iot-gateway.jpg
    IOT_KIT: "/picture/equipment/iot-gateway.png",
  },
  RESEARCH: {
    // Đề xuất: /images/research/automation-solution.jpg
    AUTOMATION: "/picture/research/digital-twin-sim.jpg",
    // Đề xuất: /images/research/education-kit.jpg
    EDUCATION: "/picture/research/scada-monitor.jpg",
    // Đề xuất: /images/research/agriculture-iot.jpg
    AGRICULTURE: "/picture/research/smart-agriculture.jpg",
  },
  ABOUT: {
    // Đề xuất: /images/about/history-founding.jpg
    HISTORY: "https://picsum.photos/seed/history/600/800",
    // Đề xuất: /images/about/vision-future.jpg
    VISION: "https://picsum.photos/seed/vision/600/400",
    // Đề xuất: /images/about/mission-students.jpg
    MISSION: "https://picsum.photos/seed/mission/600/400",
  },
  GALLERY: {
    // Đề xuất: /images/gallery/lab-overview.jpg
    IMG1: "/picture/gallery/goc-lam-viec-chill.jpg", // Vuông hoặc chữ nhật lớn
    // Đề xuất: /images/gallery/students-working.jpg
    IMG2: "/picture/gallery/students-working.jpg", // Dọc
    // Đề xuất: /images/gallery/seminar.jpg
    IMG3: "/picture/gallery/teaching-session.jpg", // Ngang
    // Đề xuất: /images/gallery/circuit-detail.jpg
    IMG4: "/picture/gallery/circuit-macro.jpg", // Vuông nhỏ
    // Đề xuất: /images/gallery/robot-arm.jpg
    IMG5: "https://picsum.photos/seed/gal5/800/600", // Ngang
    // Đề xuất: /images/gallery/team-discussion.jpg
    IMG6: "https://picsum.photos/seed/gal6/600/800", // Dọc
  }
};
