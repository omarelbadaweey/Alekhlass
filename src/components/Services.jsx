//__Services__//
import React, { useState } from "react";
import ShowAlert from "./ShowAlert";

const Services = () => {
  //__Data_For_Services__// 
  const services = [
    {
      icon: "❄️",
      title: "صيانة التكييفات",
      description:
        "صيانة جميع أنواع التكييفات المركزية والسبليت مع ضمان على قطع الغيار",
      features: ["تنظيف كامل", "صيانة دورية", "إصلاح الأعطال"],
      color: "blue",
    },

    {
      icon: "🔥",
      title: "صيانة الافران",
      description: "صيانة افران الغاز والكهرباء بأسعار مناسبة وجودة عالية",
      features: ["فحص السلامة", "إصلاح الشعلات", "صيانة الكهرباء"],
      color: "red",
    },
  ];
  
  //__Alert__//
  const [showAlert, setShowAlert] = useState(false);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-4">
          خدماتنا
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          نقدم مجموعة متكاملة من خدمات صيانة الافران والتكييفات بجودة عالية
          وأسعار مناسبة
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/*__Map__Data__Services__*/}
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
                  service.color === "blue"
                    ? "text-blue-400"
                    : service.color === "green"
                    ? "text-green-400"
                    : "text-red-500"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {/*__Map__Array_In_Array_For_Data_Services__*/}
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center  text-gray-700">
                    <span
                      className={`w-2 h-2 rounded-full mx-3  ${
                        service.color === "blue"
                          ? "bg-blue-400"
                          : service.color === "green"
                          ? "bg-green-400"
                          : "bg-red-500"
                      }`}
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowAlert(true)}
                className={`cursor-pointer w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                  service.color === "blue"
                    ? "bg-blue-400 hover:bg-blue-500"
                    : service.color === "green"
                    ? "bg-green-400 hover:bg-green-500"
                    : "bg-red-500 hover:bg-red-600"
                }`}
              >
                اطلب الخدمة
              </button>
            </div>
          ))}
        </div>
      </div>

      {showAlert && (
        <ShowAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </section>
  );
};

export default Services;
