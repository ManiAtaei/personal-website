import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";

export default function Header() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#home", label: "Blog" },
  ];

  const socialIcons = [
    { src: "/icon/icon-instagram.svg", alt: "Instagram" },
    { src: "/icon/discord.svg", alt: "Discord" },
    { src: "/icon/github.svg", alt: "GitHub" },
  ];

  return (
    <div className="p-6 xl:px-[128px] flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center text-base  md:text-[24px] xl:tex-[32px]">
          <p className="text-[#12F7D6]">&lt; M/ &gt;</p>
          <h1 className=" font-normal">Mani Ataei</h1>
        </div>

        <div className="flex gap-4 md:gap-16 items-center">
          <ul className="font-normal text-base xl:text-xl flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="relative">
            <IoSearchOutline className="w-5 h-5 md:absolute md:left-3 md:top-1/2 md:-translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="hidden lg:block w-64 p-2 pl-10 border border-gray-600 rounded-md bg-transparent text-white focus:outline-none focus:border-[#12F7D6]"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {socialIcons.map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-gray-600 mt-6"></div>
    </div>
  );
}