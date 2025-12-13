import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ASSETS } from '../constants/assets';

const equipmentDetails = [
  {
    name: "Bộ thực hành PLC S7-1500",
    model: "CPU 1516-3 PN/DP",
    specs: [
      "Màn hình hiển thị tích hợp: Chẩn đoán lỗi, xem IP, trạng thái.",
      "Bộ nhớ làm việc: 1 MB cho Program, 5 MB cho Data.",
      "Cổng giao tiếp: 2 cổng PROFINET (1 GB), 1 cổng PROFIBUS.",
      "Tốc độ xử lý: 10 ns cho lệnh bit.",
      "Module IO: DI/DO/AI/AO tích hợp trên Rack."
    ],
    application: "Dùng cho học phần SCADA, Mạng truyền thông công nghiệp, Điều khiển Servo/Motion.",
    image: ASSETS.EQUIPMENT.S7_1500
  },
  {
    name: "Bộ thực hành PLC S7-1200",
    model: "CPU 1214C DC/DC/DC",
    specs: [
      "Nguồn cấp: 24V DC.",
      "Ngõ vào/ra: 14 DI, 10 DO, 2 AI (0-10V).",
      "Giao tiếp: 1 cổng PROFINET.",
      "Tính năng mở rộng: Hỗ trợ Signal Board, Communication Module (LTE, RS485).",
      "Webserver: Tích hợp sẵn."
    ],
    application: "Dùng cho học phần PLC cơ bản, Đồ án môn học, Tự động hóa quá trình.",
    image: ASSETS.EQUIPMENT.S7_1200
  },
  {
    name: "Hệ truyền động Servo SINAMICS V90",
    model: "V90 PN & Simotics S-1fl6",
    specs: [
      "Công suất: 0.4 kW - 1.0 kW.",
      "Encoder: Tuyệt đối 20-bit độ phân giải cao.",
      "Chế độ điều khiển: Vị trí (EPOS), Vận tốc, Momen.",
      "Giao tiếp: PROFINET IRT (Real-time).",
    ],
    application: "Thực hành điều khiển chuyển động chính xác, Cánh tay robot, Máy CNC.",
    image: ASSETS.EQUIPMENT.SERVO
  },
  {
    name: "Industrial IoT Gateway",
    model: "SIMATIC IOT2050 / CP 1243-7 LTE",
    specs: [
      "Hệ điều hành: Simatic Industrial OS (Linux-based).",
      "Giao thức hỗ trợ: MQTT, OPC UA, Modbus TCP.",
      "Kết nối Cloud: MindSphere, AWS, Azure.",
      "Lập trình: Node-RED, Python, C++."
    ],
    application: "Thu thập dữ liệu biên (Edge Computing), Đẩy dữ liệu lên Cloud, Dashboard giám sát từ xa.",
    image: ASSETS.EQUIPMENT.IOT_KIT
  }
];

export const EquipmentPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trang Thiết Bị</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hệ thống thiết bị được đầu tư đồng bộ, chính hãng từ Siemens (Đức), đảm bảo tiêu chuẩn công nghiệp và cập nhật công nghệ mới nhất.
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {equipmentDetails.map((item, idx) => (
            <ScrollReveal key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
               {/* Image Side */}
               <div className="w-full lg:w-1/2">
                 <div className="relative group rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
               </div>

               {/* Content Side */}
               <div className="w-full lg:w-1/2 space-y-6">
                 <h2 className="text-3xl font-bold text-gray-900">{item.name}</h2>
                 <div className="inline-block px-4 py-2 bg-green-100 text-green-800 font-mono text-sm rounded-lg font-bold">
                    Model: {item.model}
                 </div>
                 
                 <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-gray-800 mb-3 uppercase text-xs tracking-wider">Thông số nổi bật</h4>
                    <ul className="space-y-2">
                        {item.specs.map((spec, i) => (
                            <li key={i} className="flex gap-3 text-gray-700">
                                <span className="text-green-500 mt-1.5">•</span>
                                <span>{spec}</span>
                            </li>
                        ))}
                    </ul>
                 </div>

                 <div>
                    <h4 className="font-bold text-gray-800 mb-2 uppercase text-xs tracking-wider">Ứng dụng đào tạo</h4>
                    <p className="text-gray-600 italic">
                        "{item.application}"
                    </p>
                 </div>
               </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};