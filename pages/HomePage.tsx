import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ASSETS } from '../constants/assets';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.HERO.BACKGROUND}
            alt="PLC & IIoT Lab Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 via-gray-50/40 to-transparent" />
        </div>

        <ScrollReveal className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <span className="inline-block py-1 px-3 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
            Thành lập 2021
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-3xl text-gray-900">
            Tiên phong Công nghệ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">
              PLC & IoT Công nghiệp
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl font-light">
            Phòng thí nghiệm hiện đại nhất khu vực, chuyên sâu về Tự động hóa, SCADA và Chuyển đổi số công nghiệp.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#education" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-green-500/30">
              Chương trình Đào tạo
            </a>
            <a href="#research" className="px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-full font-medium hover:border-gray-900 transition-all duration-300">
              Dự án Nghiên cứu
            </a>
          </div>
        </ScrollReveal>
      </header>

      {/* Intro Stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal delay={100} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">06+</p>
                <p className="text-gray-600 font-medium">Bộ S7-1500 Advanced</p>
              </ScrollReveal>
              <ScrollReveal delay={200} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">IoT</p>
                <p className="text-gray-600 font-medium">Công nghệ Số hóa</p>
              </ScrollReveal>
              <ScrollReveal delay={300} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">100%</p>
                <p className="text-gray-600 font-medium">Chuẩn công nghiệp</p>
              </ScrollReveal>
              <ScrollReveal delay={400} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                 <p className="text-4xl font-bold text-green-600 mb-2">CTA</p>
                 <p className="text-gray-600 font-medium">Đào tạo & Chuyển giao</p>
              </ScrollReveal>
           </div>
        </div>
      </section>
    </div>
  );
};