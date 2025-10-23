//__Header__//
import React, { useState, useEffect } from "react";
import { SiWhatsapp } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  //__Scroll_Header__//
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-3" : "shadow-sm bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex gap-2 md:gap-4 items-center space-x-2 rtl:space-x-reverse">
          <img
            src="/img/logo.png"
            className="w-12 h-12 bg-blue-400 rounded-full "
            alt="شعار شركه الاخلاص"
          />
          <span className="text-2xl md:text-3xl capitalize bg-gradient-to-bl text-transparent bg-clip-text from-gray-800  to-blue-400 font-bold p-1">
            الاخلاص
          </span>
        </div>

        <div className="gap-2 md:gap-3 flex items-center text-md md:text-lg">
          <a
            href="tel:0568514272"
            className="flex items-center gap-2 md:gap-3 cursor-pointer bg-blue-400 text-white px-2 md:px-4 p-1 md:py-2 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            اتصل بنا <FaPhoneAlt className="text-lg md:text-xl" />
          </a>
          <a
            href="https://wa.me/966568514272?text=مؤسسه الاخلاص "
            target="_blank"
            className="flex gap-2 md:gap-3 items-center cursor-pointer bg-green-500 text-white px-2 md:px-4 p-1 md:py-2 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            راسلنا <SiWhatsapp className="text-xl md:text-2xl" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
