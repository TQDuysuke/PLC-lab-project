import React from 'react';
import { Navbar } from './components/Navbar';
import { ContactForm } from './components/ContactForm';
import { ScrollReveal } from './components/ScrollReveal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { TrainingPage } from './pages/TrainingPage';
import { ResearchPage } from './pages/ResearchPage';
import { GalleryPage } from './pages/GalleryPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-green-100 selection:text-green-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section id="home">
          <HomePage />
        </section>

        <section id="about" className="border-t border-gray-100">
          <AboutPage />
        </section>

        <section id="equipment" className="border-t border-gray-100">
          <EquipmentPage />
        </section>

        <section id="education" className="border-t border-gray-100">
          <TrainingPage />
        </section>

        <section id="research" className="border-t border-gray-100">
          <ResearchPage />
        </section>

        <section id="gallery" className="border-t border-gray-100">
          <GalleryPage />
        </section>
      </main>

      {/* Global CTA / Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-gray-100">
          <ScrollReveal className="max-w-6xl mx-auto px-6">
            <div className="bg-green-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm">
                {/* Decoration */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  
                  {/* Left Side: Info */}
                  <div className="text-left pt-4">
                    <span className="inline-block py-1 px-3 bg-white text-green-700 rounded-full text-xs font-bold mb-4 border border-green-100 shadow-sm uppercase tracking-wider">
                      Liên hệ
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">Hợp tác cùng <br/>PLC & IIoT Lab</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Chúng tôi luôn sẵn sàng lắng nghe và trao đổi về các cơ hội hợp tác đào tạo, nghiên cứu và chuyển giao công nghệ cho doanh nghiệp.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 uppercase font-bold mb-1 tracking-wide">Trưởng phòng thí nghiệm</p>
                                <h4 className="text-lg font-bold text-gray-900">TS. Nguyễn Văn Khanh</h4>
                                <a href="mailto:vankhanh@ctu.edu.vn" className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2 mt-1 font-medium">
                                  vankhanh@ctu.edu.vn
                                </a>
                              </div>
                            </div>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 uppercase font-bold mb-1 tracking-wide">Tư vấn Đào tạo (CTA)</p>
                                <h4 className="text-lg font-bold text-gray-900">TS. Nguyễn Hoàng Dũng</h4>
                                <div className="flex flex-col sm:flex-row gap-x-6 gap-y-1 mt-1">
                                  <a href="tel:0918755755" className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2 font-medium">
                                    0918 755 755
                                  </a>
                                  <a href="mailto:hoangdung@ctu.edu.vn" className="text-gray-600 hover:text-green-600 transition-colors flex items-center gap-2 font-medium">
                                    hoangdung@ctu.edu.vn
                                  </a>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>

                  {/* Right Side: Form */}
                  <div className="relative">
                    <ContactForm />
                  </div>

                </div>
            </div>
          </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16 text-sm mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">PLC & IIoT Lab</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Bộ môn Tự động hóa, Khoa Công Nghệ, Đại học Cần Thơ.<br/>
              Đơn vị tiên phong trong nghiên cứu và đào tạo kỹ thuật điều khiển công nghiệp hiện đại.
            </p>
            <p className="text-gray-500">© 2024 PLC & IIoT Lab CTU. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-200">Liên kết</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-green-500 transition-colors">Trang chủ</a></li>
              <li><a href="#about" className="hover:text-green-500 transition-colors">Giới thiệu</a></li>
              <li><a href="#education" className="hover:text-green-500 transition-colors">Đào tạo</a></li>
              <li><a href="https://ctu.edu.vn" target="_blank" rel="noreferrer" className="hover:text-green-500 transition-colors">Đại học Cần Thơ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-200">Địa chỉ</h4>
            <p className="text-gray-400 leading-relaxed">
              Khu II, Đ. 3/2, P. Xuân Khánh,<br/> Q. Ninh Kiều, TP. Cần Thơ.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;