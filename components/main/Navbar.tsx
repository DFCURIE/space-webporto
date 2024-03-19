import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-[65px]">
      <a href="#about-me" className="flex-shrink-0">
        <Image
          src="/dflogo.png"
          alt="logo"
          width={120}  // Twice the original width (70 * 2)
          height={120} // Twice the original height (70 * 2)
          className="cursor-pointer hover:animate-slowspin"
        />
      </a>


          <div className="hidden md:flex space-x-8">
            <NavLink href="#about-me">About me</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
          </div>

          <div id="socialSection" className="flex items-center">
  <div className="flex space-x-4">
    {Socials.map((social, index) => (
      <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
        <Image
          src={social.src}
          alt={social.name}
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-80"
        />
      </a>
    ))}
  </div>
</div>

          <div className="flex md:hidden">
            <button className="p-2 inline-flex items-center justify-center text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLinkMobile href="#about-me">About me</NavLinkMobile>
          <NavLinkMobile href="#skills">Skills</NavLinkMobile>
          <NavLinkMobile href="#projects">Projects</NavLinkMobile>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-base font-medium text-gray-300 hover:text-white"
    >
      {children}
    </a>
  );
};

const NavLinkMobile = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
    >
      {children}
    </a>
  );
};

export default Navbar;

