// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer/Footer';

// const EventDetails = () => {
//   return (
//     <div>
//       <Navbar/>
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <img src="/src/assets/event2.jpg" alt="Event Poster" className="mb-4 rounded-lg shadow-md w-full h-auto" />

//         <h2 className="text-2xl font-bold mb-2">Event Details</h2>

//         <div className="mb-4">
//           <p className="text-gray-600">Date and Time: January 30, 2024 - 2:00 PM</p>
//           <p className="text-gray-600">Location: Event Venue, City</p>
//         </div>

//         <h3 className="text-xl font-bold mb-2">Competitions</h3>

//         <ul className="list-disc list-inside">
//           <li>Competition 1: Description of the competition</li>
//           <li>Competition 2: Description of the competition</li>
//           {/* Add more competitions as needed */}
//         </ul>

//         <h3 className="text-xl font-bold mb-2 mt-4">Prizes</h3>

//         <ul className="list-disc list-inside">
//           <li>1st Place: Cash prize and trophy</li>
//           <li>2nd Place: Gift card and certificate</li>
//           {/* Add more prize details as needed */}
//         </ul>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default EventDetails;

// src/EventDetails.jsx
import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar';

const EventDetails = () => {
  return (
    <div>
      <Navbar/>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full h-full md:max-w-3xl flex flex-col md:flex-row items-center md:justify-between overflow-hidden">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 transition-transform transform hover:scale-105">
          <img src="/src/assets/event2.jpg" alt="Event Poster" className="rounded-lg shadow-md w-full h-full md:w-48 h-auto" />
        </div>

        <div className="flex-grow">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Details</h2>

          <div className="mb-4">
            <p className="text-gray-600">Date and Time: January 30, 2024 - 2:00 PM</p>
            <p className="text-gray-600">Location: Event Venue, City</p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-2">Competitions</h3>

          <ul className="list-disc list-inside">
            <li>Competition 1: Description of the competition</li>
            <li>Competition 2: Description of the competition</li>
            {/* Add more competitions as needed */}
          </ul>

          <h3 className="text-2xl md:text-3xl font-bold mb-2 mt-4">Prizes</h3>

          <ul className="list-disc list-inside">
            <li>1st Place: Cash prize and trophy</li>
            <li>2nd Place: Gift card and certificate</li>
            {/* Add more prize details as needed */}
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default EventDetails;
