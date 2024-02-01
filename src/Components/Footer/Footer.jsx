import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  // return (
  //   <footer className="bg-gray-900 text-white">
  //     <ItemsContainer />
  //     <div
  //       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
  //     text-center pt-2 text-gray-400 text-sm pb-8"
  //     >
  //       <span>© 2020 Appy. All rights reserved.</span>
  //       <span>Terms · Privacy Policy</span>
  //       <SocialIcons Icons={Icons} />
  //     </div>
  //   </footer>
  // );

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-wrap items-start justify-between md:items-center md:flex-row">
        {/* First Row */}
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <img src="/path/to/your/logo.png" alt="Logo" className="h-8 w-8 mb-2" />
        </div>

        {/* Second Row */}
        <div className="w-full md:w-auto mb-4 md:mb-0 flex flex-col md:flex-row md:space-x-12">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Upcoming Events</a>
          <a href="#" className="hover:text-gray-300">Clubs</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
        </div>

        {/* Third Row */}
        <div className="w-full md:w-auto mb-4 md:mb-0 text-left md:text-center">
          <p className="text-lg font-bold mb-2">GDSC MACE</p>
          <p>Email</p>
          <p>Contact No.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-2 w-full md:w-auto mb-4 md:mb-0">
          <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-gray-300"><FaLinkedin /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <p>&copy; 2024 GDSC Mace. All rights reserved.</p>
      </div>
    </footer>
  );

};

export default Footer;
