import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export const TrainingPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Chương Trình Đào Tạo</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kết hợp lý thuyết vững chắc và thực hành chuyên sâu trên thiết bị thật, chuẩn bị hành trang tốt nhất cho kỹ sư Tự động hóa tương lai.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Undergraduate Course */}
            <ScrollReveal className="bg-white rounded-3xl p-8 shadow-sm border-t-4 border-green-500 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wide">Đại học</span>
                    <h2 className="text-2xl font-bold mt-4 mb-2">Điều khiển Lập trình (PLC)</h2>
                    <p className="text-gray-500 font-mono text-sm">Mã học phần: CN406</p>
                </div>
                <div className="space-y-4 text-gray-600">
                    <p>Học phần cung cấp kiến thức nền tảng về bộ điều khiển logic khả trình S7-1200.</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex gap-2"><svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Cấu trúc phần cứng & đấu nối PLC.</li>
                        <li className="flex gap-2"><svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Tập lệnh Logic, Timer, Counter.</li>
                        <li className="flex gap-2"><svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Xử lý tín hiệu Analog.</li>
                        <li className="flex gap-2"><svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Thiết kế giao diện HMI cơ bản.</li>
                    </ul>
                </div>
            </ScrollReveal>

            {/* Advanced Course */}
            <ScrollReveal delay={100} className="bg-white rounded-3xl p-8 shadow-sm border-t-4 border-blue-500 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wide">Đại học / Cao học</span>
                    <h2 className="text-2xl font-bold mt-4 mb-2">Mạng truyền thông CN & SCADA</h2>
                    <p className="text-gray-500 font-mono text-sm">Mã học phần: CN516 / CN615</p>
                </div>
                <div className="space-y-4 text-gray-600">
                    <p>Đi sâu vào các giao thức truyền tin và xây dựng hệ thống giám sát phân tán.</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex gap-2"><svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Mạng PROFINET, PROFIBUS, Modbus.</li>
                        <li className="flex gap-2"><svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Cấu hình WinCC Professional / Unified.</li>
                        <li className="flex gap-2"><svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Lưu trữ dữ liệu SQL Server.</li>
                        <li className="flex gap-2"><svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Web Navigator & Report.</li>
                    </ul>
                </div>
            </ScrollReveal>

            {/* IoT Course */}
            <ScrollReveal delay={200} className="bg-white rounded-3xl p-8 shadow-sm border-t-4 border-purple-500 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wide">Chuyên đề</span>
                    <h2 className="text-2xl font-bold mt-4 mb-2">Industrial IoT (IIoT)</h2>
                    <p className="text-gray-500 font-mono text-sm">Mã học phần: KC326</p>
                </div>
                <div className="space-y-4 text-gray-600">
                    <p>Ứng dụng công nghệ Internet vạn vật trong môi trường sản xuất công nghiệp.</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex gap-2"><svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Giao thức MQTT, OPC UA.</li>
                        <li className="flex gap-2"><svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Lập trình Node-RED trên IOT2050.</li>
                        <li className="flex gap-2"><svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Dashboard giám sát từ xa.</li>
                        <li className="flex gap-2"><svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg> Tích hợp AI nhận diện lỗi sản phẩm.</li>
                    </ul>
                </div>
            </ScrollReveal>
        </div>

        <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Đào Tạo Theo Nhu Cầu Doanh Nghiệp</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Chúng tôi cung cấp các khóa short-course (3-5 ngày) thiết kế riêng cho kỹ sư bảo trì, vận hành tại nhà máy theo yêu cầu cụ thể (Troubleshooting, Nâng cấp hệ thống, Migration S7-300 to S7-1500...).
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-colors">
                Liên hệ tư vấn khóa học
            </a>
        </div>
      </div>
    </div>
  );
};