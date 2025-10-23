//__Landing__//
import React, { useState } from "react";
import ShowAlert from "./ShowAlert";

const Landing = () => {
  //__Alert__//
  const [showAlert, setShowAlert] = useState(false);
  //__scroll_To_Services__//
  const scrollToServices = () => {
    const services = document.getElementById("services");
    if (services) {
      services.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className=" relative min-h-[350px] grid grid-cols-1 lg:grid-cols-2  gap-3 rounded-3xl w-[90%] mx-auto p-4 md:p-8 bg-gradient-to-br from-blue-400 to-gray-500">
        <div className="mt-5">
          <p className=" text-xl text-right md:text-2xl lg:w-[60%] text-white  max-w-3xl mr-10 mb-8 mlg:mb-24 ">
            أفضل خدمة صيانة 
             <span className="text-red-700 font-semibold underline">
              {" "}
              افران{" "}
            </span>
            و
            <span className="text-blue-300 font-semibold underline">
              {" "}
              تكييفات
            </span>{" "}
            في جميع أنحاء مدينتى جده ومكه المكرمه
          </p>

          <div className=" lg:mt-15 flex flex-col sm:flex-row gap-4 justify-center ml-0 lg:ml-[50px] xl:ml-[150px]  items-center">
            <button
              onClick={() => setShowAlert(true)}
              className="cursor-pointer min-w-[fit-content] bg-blue-400 text-white px-2 lg:px-6 py-2 lg:py-4 rounded-full text-lg font-semibold hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-white"
            >
              اطلب خدمة الصيانة
            </button>
            <button
              onClick={scrollToServices}
              className="cursor-pointer border-2 border-gray-300 text-white min-w-[fit-content] px-2 lg:px-6 py-2 lg:py-4 rounded-full text-lg font-semibold hover:border-blue-400 hover:text-blue-400 hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
            >
              تعرف على خدماتنا
            </button>
          </div>
        </div>
        <div>
          <video
            className="rounded-3xl border-2 border-amber-50  lg:min-h-[300px]"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            poster="/img/poster.webp"
          >
            <source src="/videos/video-1.mp4" type="video/mp4" />
            <source src="/videos/video-1.webm" type="video/webm" />
            <source src="/videos/video-1.ogg" type="video/ogg" />
          </video>
        </div>
      </div>
      {showAlert && (
        <ShowAlert showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </section>
  );
};

export default Landing;
