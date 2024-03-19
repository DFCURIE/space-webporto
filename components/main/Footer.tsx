import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center">
            <div className="font-bold text-lg mb-4">Community</div>
            <p className="flex items-center my-2 cursor-pointer">
              <RxGithubLogo className="w-6 h-6 mr-2" />
              <span>Github</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-lg mb-4">Social Media</div>
            <p className="flex items-center my-2 cursor-pointer">
              <FaYoutube className="w-6 h-6 mr-2" />
              <span>Instagram</span>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
              <RxLinkedinLogo className="w-6 h-6 mr-2" />
              <span>Linkedin</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-lg mb-4">About</div>
            <p className="flex items-center my-2 cursor-pointer">
              <span>Become Sponsor</span>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
              <span>Work with me</span>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
              <span>difamuhammad28@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-center">
          &copy; Muhammad Difa Dhiyaul Haq 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
