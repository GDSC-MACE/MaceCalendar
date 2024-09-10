import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://13.233.74.175/post/allposts");
      if (!response.data.length) console.log("No upcoming events found.");
      else {
        setEvents(response.data);
        console.log("Upcoming events fetched successfully:", response.data);
        setEvents(response.data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    console.log("events:", events);
  }, [events]);

  // const cardList = [
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 1",
  //     description: "Description for Event 1",
  //   },
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 2",
  //     description: "Description for Event 2",
  //   },
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 3",
  //     description: "Description for Event 3",
  //   },
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 3",
  //     description: "Description for Event 3",
  //   },
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 3",
  //     description: "Description for Event 3",
  //   },
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 3",
  //     description: "Description for Event 3",
  //   },
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 3",
  //     description: "Description for Event 3",
  //   },
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 3",
  //     description: "Description for Event 3",
  //   },
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 3",
  //     description: "Description for Event 3",
  //   },
  //   {
  //     img: "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",
  //     title: "Event 3",
  //     description: "Description for Event 3",
  //   },
  // ];

  const SearchBar = (
    <form className="w-full mx-auto relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full p-3 rounded-full border border-solid border-slate-300 bg-white outline-non hover:border-2 outline-none"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-slate-400 rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );

  const Filter = (
    <div className=" flex justify-center col-12 px-4">
      <div className="p-2 relative flex items-stretch w-full mb-2 mr-sm-2  fill">
        <select
          className="transition outline-none duration-150 ease-in-out bg-white shadow-inner rounded block w-full h-[calc(1.5em_+_0.75rem_+_2px)] text-base font-normal leading-normal text-[#495057]  bg-clip-padding px-3 py-1.5"
          id="club"
        >
          <option>Clubs</option>
          <option>Club1</option>
          <option>Past Events</option>
        </select>
      </div>
      <div className="p-2 relative flex items-stretch w-full mb-2 mr-sm-2  fill">
        <select
          className="transition duration-150 ease-in-out bg-white shadow-inner rounded block w-full h-[calc(1.5em_+_0.75rem_+_2px)] text-base font-normal leading-normal text-[#495057]  bg-clip-padding px-3 py-1.5"
          id="property"
        >
          <option>Sort by</option>
          <option>Upcoming</option>
          <option>Past Events</option>
        </select>
      </div>
    </div>
  );
  const [clickedButton, setClickedButton] = useState(false);
  const [eventSet, setEventSet] = useState(false);
  const [showEvent, setShowEvent] = useState([]);
  const eventDetail = (event) => {
    setShowEvent(event);
    setEventSet(true);
    setClickedButton(!clickedButton);
  };

  useEffect(() => {
    console.log("show event: ", showEvent);
  }, [showEvent]);

  return (
    <section className=" pb-2 bg-yellow-200 bg-opacity-5">
      <div className=" sticky sm:fixed z-50 w-full bg-blue-500 place-content-center items-center grid grid-cols-1 sm:grid-cols-3 p-3 gap-x-3 shadow-xl">
        <div className=" col-span-1">{SearchBar}</div>
        <div className=" sm:col-span-2 col-span-1">{Filter}</div>
      </div>
      <div className="grid grid-rows-5 grid-cols-1 sm:grid-rows-1 sm:grid-cols-3 h-screen">
        <div className=" order-2 z-10 sm:order-1 row-span-4 sm:col-span-2 pt-0 sm:pt-24 overflow-y-auto">
          <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 px-2">
            {events.map((event, id) => (
              <div
                className="relative w-fullmt-4 bg-black shadow-lg overflow-hidden group ease-in-out duration-300 rounded-md border-4 border-blue-50"
                key={id}
              >
                <img
                  src={event.image_url}
                  alt="box_img"
                  className="ease-in-out duration-300 w-full group-hover:scale-105 group-hover:opacity-70"
                />
                <button
                  onClick={() => eventDetail(event)}
                  className=" font-medium text-sm absolute bottom-0 left-0 w-full bg-slate-50 translate-y-full transition-transform ease-in-out duration-300 group-hover:translate-y-0"
                >
                  See More
                </button>
              </div>
            ))}
          </div>
        </div>

        <div
          className={` order-1 relative z-40 overflow-scroll h-96 sm:h-auto sm:order-2 row-span-1 sm:col-span-1 bg-white border-b-2 sm:border-b-0 border-slate-400 sm:bg-yellow-400 sm:bg-opacity-20 shadow-inner ${
            clickedButton ? "flex" : "hidden"
          } sm:flex  flex-col pt-0 sm:pt-24 sm:px-2`}
        >
          <button
            onClick={() => setClickedButton(false)}
            className="flex sm:hidden shadow-lg bg-red-600 hover:bg-red-800 text-white justify-center items-center p-1 px-2 absolute left-2 rounded-md top-2"
          >
            close
          </button>
          <div>
            <div className=" h-52  sm:h-auto overflow-scroll">
              <img
                src={eventSet ? showEvent.image_url : events[0]?.image_url}
                alt="box_img"
                className="ease-in-out duration-300 w-full group-hover:scale-105 group-hover:opacity-80"
              />
            </div>
            <div className=" font-semibold">
              <h3>{eventSet ? showEvent.event_name : events[0]?.event_name}</h3>
              <p>{eventSet ? showEvent.description : events[0]?.description}</p>
              <p>
                {eventSet
                  ? showEvent.event_date != null
                    ? showEvent.event_date
                    : "no date provided"
                  : events[0]?.event_date != null
                  ? events[0].event_date
                  : "no date provided"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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

// {cardList.map((card, id) => (
//   <div
//     key={id}
//     className={` col-span-1 flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px] ${
//       clickedButton === id ? "clicked" : ""
//     }`}
//   >
//     <img src={card.img} alt="box_img" className="w-[75px] mb-4" />
//     <p className="text-[24px] font-bold uppercase mb-7">{card.title}</p>
//     <p className="text-[15px] font-medium leading-2 w-full mb-4">
//       {card.description}
//     </p>
//     <button
//       className={`${
//         clickedButton === id
//           ? "bg-green-500 hover:bg-green-700"
//           : "bg-blue-500 hover:bg-blue-700"
//       } text-white py-2 px-4 rounded-full`}
//       onClick={() => setClickedButton(id)}
//     >
//       <Link to="/eventdetails">View More</Link>
//     </button>
//     {/* <li><Link to="/eventdetails">View More</Link></li> */}
//   </div>
// ))}
