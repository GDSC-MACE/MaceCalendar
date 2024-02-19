import React from 'react';
import "./hero.css";
const Hero = () => {
    return (
  <div className="hero" id='hero'>
    <div className="hero-flex">
      <div className="hero-text">
        <h1 className="hero__title">GDSC Event Calendar</h1>
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
      <div className="hero-image">
        <img src="../assets/event.avif" alt="Event Calendar" />
      </div>
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