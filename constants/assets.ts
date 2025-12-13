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
    BACKGROUND: "https://picsum.photos/1920/1080", 
  },
  EQUIPMENT: {
    // Đề xuất: /images/equipment/s7-1200-kit.jpg
    S7_1200: "https://picsum.photos/seed/S7-1200/800/600",
    // Đề xuất: /images/equipment/s7-1500-kit.jpg
    S7_1500: "https://picsum.photos/seed/S7-1500/800/600",
    // Đề xuất: /images/equipment/servo-v90.jpg
    SERVO: "https://picsum.photos/seed/Servo/800/600",
    // Đề xuất: /images/equipment/iot-gateway.jpg
    IOT_KIT: "https://picsum.photos/seed/IoT/800/600",
  },
  RESEARCH: {
    // Đề xuất: /images/research/automation-solution.jpg
    AUTOMATION: "https://picsum.photos/seed/research0/400/300",
    // Đề xuất: /images/research/education-kit.jpg
    EDUCATION: "https://picsum.photos/seed/research1/400/300",
    // Đề xuất: /images/research/agriculture-iot.jpg
    AGRICULTURE: "https://picsum.photos/seed/research2/400/300",
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
    IMG1: "https://picsum.photos/seed/gal1/800/800", // Vuông hoặc chữ nhật lớn
    // Đề xuất: /images/gallery/students-working.jpg
    IMG2: "https://picsum.photos/seed/gal2/600/800", // Dọc
    // Đề xuất: /images/gallery/seminar.jpg
    IMG3: "https://picsum.photos/seed/gal3/800/600", // Ngang
    // Đề xuất: /images/gallery/circuit-detail.jpg
    IMG4: "https://picsum.photos/seed/gal4/600/600", // Vuông nhỏ
    // Đề xuất: /images/gallery/robot-arm.jpg
    IMG5: "https://picsum.photos/seed/gal5/800/600", // Ngang
    // Đề xuất: /images/gallery/team-discussion.jpg
    IMG6: "https://picsum.photos/seed/gal6/600/800", // Dọc
  }
};
