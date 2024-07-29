import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function UpcomingEvents() {
  const cardList = [
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
      title: "Event 1",
      description: "Description for Event 1",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
      title: "Event 2",
      description: "Description for Event 2",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
      title: "Event 3",
      description: "Description for Event 3",
    },
  ];

  const [clickedButton, setClickedButton] = useState(null);

  const SearchBar = (
    <form className="w-full mx-auto relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full p-4 rounded-full border border-solid border-slate-300 bg-white   "
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-400 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );

  const Filter = (
    <div className=" flex justify-center col-12 px-4">
      <div className="p-2 relative flex items-stretch w-full mb-2 mr-sm-2  fill">
        <select
          className="transition duration-150 ease-in-out bg-slate-100  border-2 border-slate-200 rounded block w-full h-[calc(1.5em_+_0.75rem_+_2px)] text-base font-normal leading-normal text-[#495057]  bg-clip-padding px-3 py-1.5"
          id="club"
        >
          <option>Clubs</option>
          <option>Club1</option>
          <option>Past Events</option>
        </select>
      </div>
      <div className="p-2 relative flex items-stretch w-full mb-2 mr-sm-2  fill">
        <select
          className="transition duration-150 ease-in-out bg-slate-100  border-2 border-slate-200 rounded block w-full h-[calc(1.5em_+_0.75rem_+_2px)] text-base font-normal leading-normal text-[#495057]  bg-clip-padding px-3 py-1.5"
          id="property"
        >
          <option>Sort by</option>
          <option>Upcoming</option>
          <option>Past Events</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      <div className="heading-container py-8 md:py-20" id="upcoming-events">
        <h1 className="text-3xl font-bold text-black mb-4 mt-8 ">
          UPCOMING EVENTS
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="max-w-[800px] w-full">
          {SearchBar}
          {Filter}
        </div>
      </div>
      <div className="flex justify-between w-full md:px-28 px-4 gap-4">
        {cardList.map((card, id) => (
          <div
            key={id}
            className={`flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px] ${
              clickedButton === id ? "clicked" : ""
            }`}
          >
            <img src={card.img} alt="box_img" className="w-[75px] mb-4" />
            <p className="text-[24px] font-bold uppercase mb-7">{card.title}</p>
            <p className="text-[15px] font-medium leading-2 w-full mb-4">
              {card.description}
            </p>
            <button
              className={`${
                clickedButton === id
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white py-2 px-4 rounded-full`}
              onClick={() => setClickedButton(id)}
            >
              <Link to="/eventdetails">View More</Link>
            </button>
            {/* <li><Link to="/eventdetails">View More</Link></li> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
