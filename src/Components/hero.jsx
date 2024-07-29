import React from "react";
import "./hero.css";
const Hero = () => {
  return <section className=" h-dvh bg-blue-700 overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 h-dvh">
    <div className=" col-span-1 flex flex-col justify-center gap-2 items-center">
    <h1 className=" text-slate-50 text-5xl font-bold">
            <span className=" drop-shadow-2xl  text-red-400">G</span>
            <span className=" drop-shadow-2xl  text-blue-400">D</span>
            <span className=" drop-shadow-2xl  text-green-400">S</span>
            <span className=" drop-shadow-2xl  text-yellow-400">C</span> Event
            Calendar
          </h1>
          <p className=" text-white">
            An event calendar to display all the events conducted by Mar
            Athanasius College of Engineering, Kothamangalam
          </p>
         <div className=" relative pt-2">
         <a href="" className=" text-lg w-10 h-10 shadow-md bg-white rounded-full place-items-center flex items-center gap-5  absolute overflow-hidden hover:w-32 group ease-in-out duration-700">
         <img className=" left-2 ease-in-out duration-700 group-hover:left-4 relative" width="20" height="20" src="https://img.icons8.com/ios-filled/50/1A1A1A/more-than.png" alt="sort-right"/> 
         <img className=" opacity-0 left-2 duration-500 group-hover:left-6 group-hover:opacity-100 absolute" width="20" height="20" src="https://img.icons8.com/ios-filled/50/1A1A1A/more-than.png" alt="sort-right"/> 
         <p className=" pb-1 pl-2 font-semibold text-blue-600">explore</p></a>
         </div>
         
    </div>
     <div className=" col-span-1 flex justify-center items-center">
     <div className=" h-full"><iframe className=" pointer-events-none" src="https://giphy.com/embed/3xz2BXmsnwlfAyuJGM" width="100%" height="100%"  allowFullScreen></iframe></div> 
     </div>
    </div> 
     <div>
     <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
     </div> 
  </section>
  return (
    <div className=" h-lvh" >
      <div className="">
        <div className="">
          <h1 className=" text-slate-50">
            <span className=" drop-shadow-2xl  text-red-400">G</span>
            <span className=" drop-shadow-2xl  text-blue-400">D</span>
            <span className=" drop-shadow-2xl  text-green-400">S</span>
            <span className=" drop-shadow-2xl  text-yellow-400">C</span> Event
            Calendar
          </h1>
          <p>
            An event calendar to display all the events conducted by Mar
            Athanasius College of Engineering, Kothamangalam
          </p>
          <button className="explore">
            <a href="#upcoming-events">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Explore</span>
            </a>
          </button>
        </div>
        {/* <div className="opacity-0 ">
          <img src="../assets/event.avif" alt="Event Calendar" />
        </div> */}
        {/* <div className=" w-full"><iframe src="https://giphy.com/embed/3xz2BXmsnwlfAyuJGM" width="100%" height="100%"  allowFullScreen></iframe></div> */}
      </div>
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
      <div className="cube" />
    </div>
  );
};

export default Hero;
