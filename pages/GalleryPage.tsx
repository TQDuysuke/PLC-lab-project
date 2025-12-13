import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ASSETS } from '../constants/assets';

const galleryImages = [
  { src: ASSETS.GALLERY.IMG1, alt: "Tổng quan phòng thí nghiệm" },
  { src: ASSETS.GALLERY.IMG2, alt: "Sinh viên thực hành" },
  { src: ASSETS.GALLERY.IMG3, alt: "Hội thảo khoa học" },
  { src: ASSETS.GALLERY.IMG4, alt: "Chi tiết mạch điện" },
  { src: ASSETS.GALLERY.IMG5, alt: "Robot công nghiệp" },
  { src: ASSETS.GALLERY.IMG6, alt: "Thảo luận nhóm" },
  { src: ASSETS.EQUIPMENT.S7_1500, alt: "Kit thực hành S7-1500" },
  { src: ASSETS.EQUIPMENT.IOT_KIT, alt: "Thiết bị IoT Gateway" },
];

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-white">
       <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Thư Viện Hình Ảnh</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lưu giữ những khoảnh khắc đẹp trong quá trình học tập, nghiên cứu và các sự kiện tại INC Lab.
            </p>
          </ScrollReveal>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
               <ScrollReveal key={idx} delay={idx * 50} className="break-inside-avoid">
                 <div className="relative group rounded-2xl overflow-hidden bg-gray-100">
                    <img src={img.src} alt={img.alt} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p className="text-white font-bold">{img.alt}</p>
                    </div>
                 </div>
               </ScrollReveal>
            ))}
          </div>
       </div>
    </div>
  );
};