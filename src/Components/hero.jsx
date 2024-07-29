import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero h-lvh" id="hero">
      <div className="hero-flex">
        <div className="hero-text">
          <h1 className="hero__title text-slate-50">
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
        <div className="opacity-0 hero-image">
          <img src="../assets/event.avif" alt="Event Calendar" />
        </div>
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
