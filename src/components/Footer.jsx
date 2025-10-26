//__Footer__//
import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { motion } from "framer-motion";
import ShowAlert from "./ShowAlert";

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <footer className="mt-20 relative bg-gradient-to-br from-blue-600 via-gray-700 to-gray-700 text-white py-12 px-6 md:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40 z-0"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Company Name with Gradient */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="p-2 text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-200 via-blue-100 to-gray-200 bg-clip-text text-transparent">
            مؤسسة الإخلاص للصيانة
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-gray-300 mx-auto rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          <span className="bg-gradient-to-l from-blue-200 to-gray-200 bg-clip-text text-transparent font-semibold">
            خبرة أكثر من 10 سنوات
          </span>{" "}
          في صيانة الافران والتكييفات بجميع أنواعها. نقدم خدماتنا في مدينتى جده
          ومكه المكرمه بأكملها بجودة واحترافية عالية.
        </motion.p>

        {/* Contact Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-8 mb-8"
        >
          {/* Phone Icon */}
          <motion.a
            href="tel:+966548415191"
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-2xl shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-300">
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              اتصل بنا
            </div>
          </motion.a>

          {/* WhatsApp Icon */}
          <motion.a
            href="https://wa.me/966548415191?text=مؤسسه الاخلاص"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative"
          >
            <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-2xl shadow-2xl group-hover:shadow-green-500/25 transition-all duration-300">
              <FaWhatsapp className="text-white text-2xl" />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              واتساب
            </div>
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/30 pt-6"
        >
          <p className="text-gray-200 text-sm">
            جميع الحقوق محفوظة © {new Date().getFullYear()}{" "}
            <span className=" bg-gradient-to-r from-blue-200 to-gray-200 bg-clip-text text-transparent font-semibold">
              مؤسسة الإخلاص للصيانة
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Contact Button */}
      <motion.button
        onClick={() => setShowAlert(true)}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-8 cursor-pointer bg-gradient-to-br from-blue-500 to-gray-600 hover:from-blue-600 hover:to-gray-700 text-white p-4 rounded-2xl shadow-2xl z-50 transition-all duration-300"
      >
        <MdMessage className="text-2xl" />
      </motion.button>

      {showAlert && (
        <ShowAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </footer>
  );
};

export default Footer;
