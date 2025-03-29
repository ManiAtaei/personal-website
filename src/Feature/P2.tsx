import React from "react";

const P2: React.FC = () => {
  return (
    <div className="w-screen min-h-screen bg-[#1A1E23] flex items-center justify-center text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/path-to-your-pattern.png')", 
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold border-2 border-[#12F7D6] w-fit px-4 py-2 sm:px-6 sm:py-3 rounded-tl-[40px] rounded-br-[40px]">
            About Me
          </h2>

          <div className="bg-[#2A3439] p-4 sm:p-6 rounded-lg shadow-lg text-sm sm:text-base lg:text-lg">
            <p className="text-[#12F7D6] font-mono">&lt;p&gt;</p>
            <div className="pl-4 sm:pl-6">
              <p className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                Hello!
              </p>
              <p className="text-gray-300 mb-4">
                My name is Mami and I specialize in web development that
                utilizes HTML, CSS, JS, REACT and Next etc.
              </p>
              <p className="text-gray-300 mb-4">
                I am a highly motivated individual and eternal optimist dedicated
                to writing clear, concise, robust code that works. Striving to
                never stop learning and improving.
              </p>
              <p className="text-gray-300">
                When I’m not coding, I am writing blogs, reading, or picking up
                some new hands-on art project like photography. I like to have my
                perspective and belief systems challenged so that I see the world
                through new eyes.
              </p>
            </div>
            <p className="text-[#12F7D6] font-mono">&lt;/p&gt;</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/icon/Image-lap.svg"
            alt="Developer working on laptop"
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default P2;