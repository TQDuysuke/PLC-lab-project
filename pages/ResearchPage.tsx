import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ASSETS } from '../constants/assets';

export const ResearchPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nghiên Cứu Khoa Học</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Các hướng nghiên cứu trọng tâm tập trung vào giải quyết bài toán thực tế của vùng ĐBSCL kết hợp công nghệ 4.0.
          </p>
        </ScrollReveal>

        <div className="space-y-20">
            {/* Project 1 */}
            <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">Dự án Cấp Bộ / Trường</div>
                    <h2 className="text-3xl font-bold mb-4">Hệ thống giám sát và cảnh báo chất lượng nước nuôi tôm thâm canh</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Phát triển trạm quan trắc IoT sử dụng năng lượng mặt trời, đo đạc các chỉ số pH, Oxy hòa tan, độ mặn, nhiệt độ. Dữ liệu được gửi về Cloud server và cảnh báo tức thời qua ứng dụng di động cho người nông dân.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-blue-500">
                        <p className="text-sm font-semibold text-gray-800">Công nghệ:</p>
                        <p className="text-sm text-gray-600">S7-1200, LoRaWAN, MQTT, Firebase, Android App.</p>
                    </div>
                </div>
                <div className="order-1 md:order-2 h-80 rounded-2xl overflow-hidden shadow-lg">
                     <img src={ASSETS.RESEARCH.AGRICULTURE} alt="Smart Agriculture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
            </ScrollReveal>

            {/* Project 2 */}
            <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
                     <img src={ASSETS.RESEARCH.AUTOMATION} alt="Digital Twin" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
                <div>
                    <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold mb-4">Nghiên cứu cơ bản</div>
                    <h2 className="text-3xl font-bold mb-4">Mô hình bản sao số (Digital Twin) cho hệ thống phân loại sản phẩm</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Xây dựng mô hình ảo hóa của dây chuyền thực tế trên nền tảng Siemens NX MCD. Cho phép chạy mô phỏng (Virtual Commissioning) kiểm tra lỗi thuật toán PLC trước khi nạp xuống phần cứng thật, giúp giảm rủi ro và chi phí vận hành.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-purple-500">
                        <p className="text-sm font-semibold text-gray-800">Công nghệ:</p>
                        <p className="text-sm text-gray-600">NX MCD, PLCSIM Advanced, S7-1500, OPC UA.</p>
                    </div>
                </div>
            </ScrollReveal>

             {/* Project 3 */}
             <ScrollReveal className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-4">Chuyển giao công nghệ</div>
                    <h2 className="text-3xl font-bold mb-4">Hệ thống SCADA nhà máy xay xát lúa gạo</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Tư vấn và thiết kế hệ thống điều khiển tự động hóa hoàn toàn cho nhà máy gạo, tích hợp cân định lượng tự động, điều khiển băng tải và quản lý năng suất theo thời gian thực.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-500">
                        <p className="text-sm font-semibold text-gray-800">Công nghệ:</p>
                        <p className="text-sm text-gray-600">PCS7, WinCC Professional, Biến tần G120.</p>
                    </div>
                </div>
                <div className="order-1 md:order-2 h-80 rounded-2xl overflow-hidden shadow-lg">
                     <img src={ASSETS.RESEARCH.EDUCATION} alt="SCADA System" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </div>
  );
};