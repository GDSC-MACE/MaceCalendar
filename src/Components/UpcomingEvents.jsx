import React, { useState } from 'react';
import { Link } from "react-router-dom";

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

  return (
    
    <>
    
      {cardList.map((card, id) => (
        <div
          key={id}
          className={`flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div max-w-screen-md min-h-[260px] ${
            clickedButton === id ? 'clicked' : ''
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
                ? 'bg-green-500 hover:bg-green-700'
                : 'bg-blue-500 hover:bg-blue-700'
            } text-white py-2 px-4 rounded-full`}
            onClick={() => setClickedButton(id)}
          ><Link to="/eventdetails">View More</Link></button>
          {/* <li><Link to="/eventdetails">View More</Link></li> */}
        </div>
      ))}
    </>
  );
}

export default UpcomingEvents;
