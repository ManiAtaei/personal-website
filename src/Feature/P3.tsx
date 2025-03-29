import React from "react";
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";

const P3: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-[#1A1E23] flex items-center justify-center text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/path-to-code-background.png')", 
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12F7D6] mb-12 sm:mb-16 relative">
          Skills
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-16 h-0.5 bg-[#12F7D6]"></span>
        </h2>

        <div className="w-full flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-[#2A3439] border-2 border-[#12F7D6] rounded-lg p-4 sm:p-6 flex-1 max-w-[300px] text-center">
            <p className="text-[#12F7D6] text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
              Web Development
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              HTML • CSS • JS • REACT
            </p>
          </div>

        </div>

        <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#E34F26] rounded-full flex items-center justify-center">
              <SiHtml5 className="text-white text-3xl sm:text-4xl lg:text-5xl" />
            </div>
            <p className="mt-2 text-sm sm:text-base lg:text-lg">HTML</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#1572B6] rounded-full flex items-center justify-center">
              <SiCss3 className="text-white text-3xl sm:text-4xl lg:text-5xl" />
            </div>
            <p className="mt-2 text-sm sm:text-base lg:text-lg">CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#F7DF1E] rounded-full flex items-center justify-center">
              <SiJavascript className="text-black text-3xl sm:text-4xl lg:text-5xl" />
            </div>
            <p className="mt-2 text-sm sm:text-base lg:text-lg">JS</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#61DAFB] rounded-full flex items-center justify-center">
              <SiReact className="text-black text-3xl sm:text-4xl lg:text-5xl" />
            </div>
            <p className="mt-2 text-sm sm:text-base lg:text-lg">REACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P3;