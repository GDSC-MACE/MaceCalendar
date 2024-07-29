import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ServiceData } from "../../constants/cons";

const Footer = () => {
  const clubs=[{
    name:''
  }]
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

  
    // <footer className="bg-gray-800 text-white p-8">
    //   <div className="container mx-auto flex flex-wrap items-start justify-between md:items-center md:flex-row">
    //     {/* First Row */}
    //     <div className="w-full md:w-auto mb-4 md:mb-0">
    //       <img src="/path/to/your/logo.png" alt="Logo" className="h-8 w-8 mb-2" />
    //     </div>

    //     {/* Second Row */}
    //     {/* <div className="w-full md:w-auto mb-4 md:mb-0 flex flex-col md:flex-row md:space-x-12">
    //       <a href="#hero" className="hover:text-gray-300">Home</a>
    //       <a href="#upcoming-events" className="hover:text-gray-300">Upcoming Events</a>
    //       <a href="#clubs" className="hover:text-gray-300">Clubs</a>
    //       <a href="#aboutus" className="hover:text-gray-300">About Us</a>
    //       <a href="#" className="hover:text-gray-300">Contact Us</a>
    //     </div> */}

    //     {/* Third Row */}
    //     <div className="w-full md:w-auto mb-4 md:mb-0 text-left md:text-center">
    //       <p className="text-lg font-bold mb-2">GDSC MACE</p>
    //       <p>Email</p>
    //       <p>Contact No.</p>
    //     </div>

    //     {/* Social Media Icons */}
    //     <div className="flex items-center space-x-2 w-full md:w-auto mb-4 md:mb-0">
    //       <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
    //       <a href="#" className="text-white hover:text-gray-300"><FaLinkedin /></a>
    //     </div>
    //   </div>

    //   {/* Copyright */}
    //   <div className="text-center mt-4">
    //     <p>&copy; 2024 GDSC Mace. All rights reserved.</p>
    //   </div>
    // </footer>
    return (
    <footer className="bg-gray-800 text-white p-2 md:p-4">
          <div className=" grid grid-cols-1 md:grid-cols-8 place-items-center"><div className="col-span-1 md:col-span-2 flex-col gap-1 items-center justify-center "><h1 className=" text-2xl font-bold text-blue-600">Event Calender</h1>
          <h2 className="font-mono text-sm">exclusive events page of MACE</h2>
          <div className=" flex justify-center gap-2 mt-2">
          <a href=""><img className=" opacity-90 hover:opacity-100" width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png"  alt="instagram-new--v1"/></a>
          <a href=""><img className=" opacity-90 hover:opacity-100" width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"  alt="instagram-new--v1"/></a>
          <a href=""><img className=" opacity-90 hover:opacity-100" width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/gmail-new.png"  alt="instagram-new--v1"/></a>
          <a href=""><img className=" opacity-90 hover:opacity-100" width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png"   alt="instagram-new--v1"/></a>
          </div></div>
          <div className=" col-span-1 my-3 md:m-0 h-[1px] w-full md:h-full md:w-[1.5px] rounded-md bg-blue-500"></div>
          <div className="col-span-1   md:col-span-5 flex-col gap-5 justify-center">
          <h1 className="text-lg font-semibold">Our clubs</h1>
          <div className=" flex flex-col">
          <div className=" flex flex-wrap gap-2 p-2 justify-center">
          {ServiceData.map((club,ind)=>club.tech&&
            <a key={club} href={club.url} className={` ease-linear duration-300 border border-blue-600  font-medium text-xs p-1 px-2 rounded-md hover:bg-blue-600`}>{club.title}</a>)}
          </div>
          <div className=" flex flex-wrap gap-2 p-2 justify-center">
          {ServiceData.map((club,ind)=>!club.tech&&
            <a key={club} href={club.url} className={`ease-linear duration-300 border border-green-600  font-medium text-xs p-1 px-2 rounded-md hover:bg-green-600`}>{club.title}</a>)}
          </div>
          </div></div></div>
          <div className="text-center mt-6">
         <p>&copy; 2024 GDSC Mace. All rights reserved.</p>
       </div>
    </footer>
  );

};

export default Footer;
