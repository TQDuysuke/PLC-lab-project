import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ASSETS } from '../constants/assets';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Giới Thiệu Chung</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Phòng thí nghiệm PLC & IoT Công nghiệp (Lab C102) trực thuộc Bộ môn Tự động hóa, Khoa Công nghệ, Đại học Cần Thơ.
          </p>
        </ScrollReveal>

        {/* Vision & Mission Detail */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <ScrollReveal className="bg-white p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    Tầm Nhìn
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                    Đến năm 2030, trở thành trung tâm hàng đầu tại Đồng bằng sông Cửu Long về đào tạo, nghiên cứu và chuyển giao công nghệ trong lĩnh vực Tự động hóa tích hợp (TIA) và Chuyển đổi số công nghiệp. Chúng tôi hướng tới việc xây dựng mô hình "Smart Lab" kết nối dữ liệu thực tế với hệ thống quản lý số.
                </p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="bg-white p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    Chức Năng & Nhiệm Vụ
                </h2>
                <ul className="text-gray-600 space-y-2">
                    <li className="flex gap-2"><span className="text-blue-500">•</span> Giảng dạy thực hành các học phần: PLC, Mạng truyền thông công nghiệp, SCADA, IoT.</li>
                    <li className="flex gap-2"><span className="text-blue-500">•</span> Đào tạo ngắn hạn nâng cao tay nghề cho kỹ sư nhà máy.</li>
                    <li className="flex gap-2"><span className="text-blue-500">•</span> Hợp tác với các đối tác chiến lược: Siemens, ESTEC, Rockwell Automation.</li>
                </ul>
            </ScrollReveal>
        </div>

        {/* Organization Structure */}
        <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Cơ Cấu Tổ Chức</h2>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex flex-col items-center">
                    {/* Level 1 */}
                    <div className="border-2 border-gray-900 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg mb-8">
                        Khoa Công Nghệ - Đại học Cần Thơ
                    </div>
                    <div className="h-8 w-0.5 bg-gray-300 mb-8"></div>
                    {/* Level 2 */}
                    <div className="border-2 border-green-600 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg shadow-sm mb-8">
                        Bộ môn Tự động hóa
                    </div>
                    <div className="h-8 w-0.5 bg-gray-300 mb-8"></div>
                    {/* Level 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                         <div className="flex flex-col items-center">
                             <div className="border border-gray-200 bg-gray-50 px-6 py-3 rounded-lg font-semibold text-gray-700 text-center w-full">
                                PTN Điều khiển tự động
                             </div>
                         </div>
                         <div className="flex flex-col items-center relative">
                             {/* Connector lines would be complex in pure CSS, simplifying visually */}
                             <div className="border-2 border-green-500 bg-green-50 px-6 py-4 rounded-xl font-bold text-green-800 text-center w-full shadow-md transform scale-110 z-10">
                                PTN PLC & IoT Công Nghiệp (INC Lab)
                                <p className="text-xs font-normal mt-1 text-gray-600">TS. Nguyễn Văn Khanh</p>
                             </div>
                         </div>
                         <div className="flex flex-col items-center">
                             <div className="border border-gray-200 bg-gray-50 px-6 py-3 rounded-lg font-semibold text-gray-700 text-center w-full">
                                PTN Vi điều khiển & Robot
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>

        {/* History Timeline Vertical */}
        <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Quá Trình Phát Triển</h2>
            <div className="relative border-l-4 border-green-200 ml-4 md:ml-0 space-y-12">
                
                <div className="relative flex items-start group">
                    <div className="absolute -left-[22px] bg-green-500 h-10 w-10 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-md">
                        21
                    </div>
                    <div className="ml-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full group-hover:border-green-300 transition-colors">
                        <span className="text-green-600 font-bold text-sm uppercase tracking-wide">27/01/2021</span>
                        <h3 className="text-xl font-bold mt-1 mb-2">Thành lập Phòng thí nghiệm</h3>
                        <p className="text-gray-600">Được thành lập dựa trên nhu cầu cấp thiết về việc tiếp cận công nghệ Tự động hóa tích hợp toàn diện (TIA) của Siemens.</p>
                    </div>
                </div>

                <div className="relative flex items-start group">
                    <div className="absolute -left-[22px] bg-blue-500 h-10 w-10 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-md">
                        22
                    </div>
                    <div className="ml-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full group-hover:border-blue-300 transition-colors">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">2022</span>
                        <h3 className="text-xl font-bold mt-1 mb-2">Đầu tư trọng điểm</h3>
                        <p className="text-gray-600">Tiếp nhận gói tài trợ thiết bị bao gồm 06 bộ S7-1500, Servo V90 và Biến tần G120 từ dự án Hợp tác Doanh nghiệp.</p>
                    </div>
                </div>

                <div className="relative flex items-start group">
                    <div className="absolute -left-[22px] bg-gray-800 h-10 w-10 rounded-full border-4 border-white flex items-center justify-center text-white font-bold shadow-md">
                        Now
                    </div>
                    <div className="ml-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full group-hover:border-gray-400 transition-colors">
                        <span className="text-gray-600 font-bold text-sm uppercase tracking-wide">2024 - Nay</span>
                        <h3 className="text-xl font-bold mt-1 mb-2">Mở rộng mảng IoT & AI</h3>
                        <p className="text-gray-600">Triển khai các hướng nghiên cứu về AI trong công nghiệp (Industrial AI) và xây dựng hệ thống Digital Twin cho mô hình nhà máy.</p>
                    </div>
                </div>

            </div>
        </section>

      </div>
    </div>
  );
};