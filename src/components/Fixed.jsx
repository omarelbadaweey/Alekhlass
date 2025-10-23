//__Fixed__//
import React from "react";

const Fixed = () => {
  return (
    <section className="relative  mb-20">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
        <div className="group relative h-[300px] md:h-[500px] overflow-hidden">
          <img
            src="/img/fix-1.webp"
            alt="صيانة التكييفات"
            className="group-hover:scale-[1.1] group-hover:rotate-2 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              صيانة التكييفات
            </h3>
          </div>
        </div>

        <div className="group relative h-[300px] md:h-[500px] overflow-hidden">
          <img
            src="/img/fix-2.jpg"
            alt="صيانة الأفران"
            className="group-hover:scale-[1.1] group-hover:rotate-2 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              صيانة الأفران
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fixed;