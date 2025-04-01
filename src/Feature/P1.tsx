import React from "react";
import Container from "@/components/Countainer";
import Header from "@/components/Header";
import { GoDownload } from "react-icons/go";

interface ProfileData {
  name: string;
  role: string;
  email: string;
  location: string;
  employmentType: string;
  website: string;
  skills: string[];
  experience: string;
  languages: number;
  tools: number;
}

const profile: ProfileData = {
  name: "Mani Ataei",
  role: "Front End Developer",
  email: "maniat925@gmail.com",
  location: "Iran / Tehran",
  employmentType: "Part-time / Freelancer",
  website: "www.maniataei.ir",
  skills: ["HTML", "CSS", "JS", "React", "Next"],
  experience: "2",
  languages: 2,
  tools: 8,
};

const P1: React.FC = () => {
  return (
    <div className="w-screen bg-[#1A1E23] text-white">
      <Header />

      <Container>
        <p className="hidden xl:block text-center text-[125px] text-[#12F7D6]">
          Developer
        </p>
        <div className="mt-16 flex flex-col justify-between items-center pb-16 lg:flex-row lg:gap-8 xl:gap-16">
          <div className="relative w-[280px] p-6 border border-[#12F7D6] rounded-tl-[120px] rounded-br-[120px] bg-[#292F36] flex flex-col items-center">
            <img
              src="/icon/Profile photo.png"
              alt={`${profile.name}'s profile photo`}
              className="w-24 h-24 rounded-full mb-4"
            />

            <div className="flex flex-col items-center mb-4">
              <p className="text-lg font-semibold">{profile.name}</p>
              <p className="text-sm text-gray-400">{profile.role}</p>
            </div>

            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-3">
                <img
                  src="/icon/icon-mail.svg"
                  alt="Email icon"
                  className="w-5 h-5"
                />
                <p>{profile.email}</p>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icon/icon-map-pin.svg"
                  alt="Location icon"
                  className="w-5 h-5"
                />
                <p>{profile.location}</p>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icon/icon-briefcase.svg"
                  alt="Employment type icon"
                  className="w-5 h-5"
                />
                <p>{profile.employmentType}</p>
              </li>
              <li className="flex items-center gap-3">
                <img
                  src="/icon/icon-link.svg"
                  alt="Website icon"
                  className="w-5 h-5"
                />
                <p>{profile.website}</p>
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {profile.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#12F7D6] rounded-full text-black px-3 py-1 text-xs font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>

            <button className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#12F7D6] px-6 py-2 text-[#1A1E23] hover:bg-[#0DE0C2] transition-colors">
              Download CV
              <GoDownload size={16} />
            </button>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:gap-8 xl:gap-16 mt-8 lg:mt-0">
            <div className="flex flex-col gap-6 items-center  text-center lg:text-left xl:mr-[10rem]">
              <div className="text-[#12F7D6] text-4xl lg:text-5xl xl:text-6xl font-bold">
                <p>Hey</p>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <p>I’m</p>
                  <p className="text-white">{profile.name.split(" ")[0]}</p>
                </div>
                <p>{profile.role}</p>
              </div>

              <p className="text-gray-400 max-w-md">
                I help business grow by crafting amazing web experiences. If
                you’re looking for a developer that likes to get stuff done,
              </p>

              
            </div>

            <div className="bg-[#292F36] w-[220px] flex flex-col items-center mt-8 lg:mt-0 py-8 px-6 rounded-[60px] gap-8">
              <div className="flex items-center gap-4">
                <p className="text-4xl text-[#12F7D6] font-bold">
                  {profile.languages}
                </p>
                <div>
                  <p>Programming</p>
                  <p>Language</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-4xl text-[#12F7D6] font-bold">
                  {profile.tools}
                </p>
                <div>
                  <p>Development</p>
                  <p>Tools</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-4xl text-[#12F7D6] font-bold">
                  {profile.experience}
                </p>
                <div>
                  <p>Years of</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default P1;
