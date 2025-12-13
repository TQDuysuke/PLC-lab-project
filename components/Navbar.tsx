import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple ScrollSpy logic
      const sections = ['home', 'about', 'equipment', 'education', 'research', 'gallery', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is roughly in the middle of the viewport or near top
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break; 
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll is handled by CSS html { scroll-behavior: smooth }
    // We just need to manually set active for immediate feedback
    setActiveSection(id);
  };

  const navClass = (id: string) => 
    `cursor-pointer transition-colors ${activeSection === id ? "text-green-600 font-bold" : "hover:text-green-600 text-gray-800"}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-4' : 'bg-white/50 backdrop-blur-sm py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#home" onClick={() => handleNavClick('home')} className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xl group-hover:bg-green-700 transition-colors">
            P
          </div>
          <div className="flex flex-col text-gray-900">
             <span className="font-bold text-lg leading-tight tracking-tight">PLC & IIoT Lab</span>
             <span className="text-xs uppercase tracking-wider opacity-80">Can Tho University</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#about" className={navClass('about')}>Giới thiệu</a>
          <a href="#equipment" className={navClass('equipment')}>Thiết bị</a>
          <a href="#education" className={navClass('education')}>Đào tạo</a>
          <a href="#research" className={navClass('research')}>Nghiên cứu</a>
          <a href="#gallery" className={navClass('gallery')}>Thư viện</a>
          <a href="#contact" className="px-5 py-2.5 bg-gray-900 text-white rounded-full hover:bg-green-600 transition-colors">
            Liên hệ
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden">
          <a href="#about" onClick={() => handleNavClick('about')} className="text-lg font-medium text-gray-800">Giới thiệu</a>
          <a href="#equipment" onClick={() => handleNavClick('equipment')} className="text-lg font-medium text-gray-800">Thiết bị</a>
          <a href="#education" onClick={() => handleNavClick('education')} className="text-lg font-medium text-gray-800">Đào tạo</a>
          <a href="#research" onClick={() => handleNavClick('research')} className="text-lg font-medium text-gray-800">Nghiên cứu</a>
          <a href="#gallery" onClick={() => handleNavClick('gallery')} className="text-lg font-medium text-gray-800">Thư viện</a>
          <a href="#contact" onClick={() => handleNavClick('contact')} className="text-lg font-medium text-green-600">Liên hệ ngay</a>
        </div>
      )}
    </nav>
  );
};