//__Divices__//
import React, { useState } from "react";
import {
  FaClock,
  FaCogs,
  FaHandshake,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";
import ShowAlert from "./ShowAlert";

function Divices() {
  //__Alert__//
  const [showAlert, setShowAlert] = useState(false);

  return (
    <section className="relative bg-Divices  bg-fixed text-white py-20 px-6 md:px-16">
      <div className="absolute inset-0 bg-black/50 "></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-300 drop-shadow-lg">
          مميزات مؤسسة الإخلاص
          <p className="mt-3 text-4xl animate-bounce">🔧</p>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed">
          نقدم خدمات صيانة وتنظيف وتركيب جميع أنواع الأفران والتكييفات المنزلية
          والتجارية، <br /> مع فنيين مختصين وخدمة سريعة في جميع أنحاء مدينتى
          جده ومكه المكرمه.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/*__Array_In_Div__*/}
          {[
            {
              icon: (
                <FaSearch className="text-4xl text-blue-400 mx-auto mb-4" />
              ),
              title: "تشخيص الأعطال بدقة",
              desc: "فحص شامل للأفران وتحديد المشكلة قبل أي عملية صيانة.",
            },
            {
              icon: <FaClock className="text-4xl text-blue-400 mx-auto mb-4" />,
              title: "صيانة فورية في نفس اليوم",
              desc: "نصل إليك خلال ساعات لإصلاح الأعطال دون تأخير.",
            },
            {
              icon: <FaCogs className="text-4xl text-blue-400 mx-auto mb-4" />,
              title: "قطع غيار أصلية ومضمونة",
              desc: "نستخدم فقط قطع غيار أصلية للحفاظ على أداء الجهاز وجودته.",
            },
            {
              icon: (
                <FaHandshake className="text-4xl text-blue-400 mx-auto mb-4" />
              ),
              title: "خدمة ما بعد الصيانة",
              desc: "نحرص على رضاك الكامل بمتابعة حالة الجهاز بعد الإصلاح.",
            },
            {
              icon: (
                <FaPhoneAlt className="text-4xl text-blue-400 mx-auto mb-4" />
              ),
              title: "دعم فني متاح 24/7",
              desc: "تواصل معنا في أي وقت عبر الهاتف أو واتساب.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-2xl border border-blue-400/40 hover:border-blue-400 hover:scale-105 transition duration-300 shadow-md backdrop-blur-sm"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 text-blue-200">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* زر الدعوة للإجراء */}
        <div className="mt-12">
          <button
            onClick={() => setShowAlert(true)}
            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-10 rounded-full text-lg shadow-lg transition duration-300 hover:shadow-blue-500/40"
          >
            احجز زيارتك الآن 🔥
          </button>
        </div>
      </div>

      {showAlert && (
        <ShowAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </section>
  );
}

export default Divices;
