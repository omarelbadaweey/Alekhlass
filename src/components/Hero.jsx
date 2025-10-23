//__Hero__//
import React from "react";
import Landing from "./Landing";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/*__Landing__Component__*/}
      <Landing />

      <div className="container mx-auto text-center relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">

          <div className="text-center animate-bounce " style={{animationDelay:'200ms'}}>
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              24/7
            </div>
            <div className="text-gray-600">خدمة عملاء</div>
          </div>

          <div className="text-center animate-bounce animation-delay-700">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
              100%
            </div>
            <div className="text-gray-600">ضمان الجودة</div>
          </div>
            
        </div>
      </div>
    </section>
  );
};
export default Hero;