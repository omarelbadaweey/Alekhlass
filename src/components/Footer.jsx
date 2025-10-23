import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { motion } from "framer-motion";
import ShowAlert from "./ShowAlert";

const Footer = () => {
  //__Alert__//
  const [showAlert, setShowAlert] = useState(false);

  return (
    <footer className="mt-20 relative bg-gradient-to-br from-blue-300 via-black to-blue-400 text-white py-10 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-0"></div>

      {/*__Parent_Motion_Div*/}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {/*__About__*/}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">مؤسسة الإخلاص للصيانة</h2>
          <p className="text-gray-200 leading-relaxed">
            خبرة أكثر من 10 سنوات في صيانة الافران والتكييفات بجميع أنواعها.
            نقدم خدماتنا في مدينتى جده ومكه المكرمه بأكملها بجودة واحترافية عالية.
          </p>
        </motion.div>

        {/*__Contact__*/}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-2 hover:translate-x-1 transition">
              <FaPhoneAlt className="text-green-300" /> +966 555 000 123
            </li>
            <li className="flex items-center gap-2 hover:translate-x-1 transition">
              <FaEnvelope className="text-green-300" /> info@ikhlaas-sa.com
            </li>
          </ul>
        </motion.div>

        {/*__Social__*/}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">تابعنا</h3>
          <div className="flex gap-4 justify-start sm:justify-center lg:justify-start">
            {/*__Array_In_Div*/}
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaWhatsapp />, link: "https://wa.me/01008790584" },
            ].map((item, index) => (
              <motion.a
                key={index}
                target="_blank"
                href={item.link}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/10 p-3 rounded-full hover:bg-green-400 transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/*__CopyRight__*/}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 mt-10 border-t border-white/20 pt-6 text-center text-white text-sm"
      >
        جميع الحقوق محفوظة © {new Date().getFullYear()} مؤسسة الإخلاص للصيانة
      </motion.div>

      {/*__Fixed_Button_Send_Message__*/}
      <motion.button
        onClick={() => setShowAlert(true)}
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="cursor-pointer fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition"
      >
        <MdMessage size={26} />
      </motion.button>

      {showAlert && (
        <ShowAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </footer>
  );
};

export default Footer;