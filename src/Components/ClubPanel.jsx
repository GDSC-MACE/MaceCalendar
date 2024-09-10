import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

const ClubPanel = () => {
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    description: "",
    image_url: "",
    event_date: "",
    contacts: [
      { name: "", contact: "" },
      { name: "", contact: "" },
    ],
  });

  // Function to handle changes in event details
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("contact_")) {
      const index = parseInt(name.split("_")[2]);
      const fieldName = name.includes("name") ? "name" : "contact";
      const updatedContacts = [...newEvent.contacts];
      updatedContacts[index][fieldName] = value;

      setNewEvent((prevState) => ({
        ...prevState,
        contacts: updatedContacts,
      }));
    } else {
      setNewEvent((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const saveEvent = async (e) => {
    e.preventDefault();

    // Prepare data in the required format
    const formattedData = {
      name: newEvent.event_name,
      description: newEvent.description,
      date: newEvent.event_date,
      image: newEvent.image_url,
      contacts: newEvent.contacts.map((contact) => ({
        name: contact.name,
        number: contact.contact,
      })),
    };

    try {
      // Post data to the server
      axios.defaults.withCredentials = true;
      const response = await axios(
        "http://13.233.74.175/post/createPost",
        {
          method: "post",
          data: formattedData,
          withCredentials: true,
        } // Send cookies with the request
      );

      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      const data = await response;
      console.log("Event saved successfully:", data);

      // Clear the form after saving
      setNewEvent({
        event_name: "",
        description: "",
        image_url: "",
        event_date: "",
        contacts: [
          { name: "", contact: "" },
          { name: "", contact: "" },
        ],
      });

      // Refresh the list of events after saving
      getClubEvents();
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  // Get the events added by the club

  const location = useLocation();
  const { userId } = location.state || {};
  console.log("userId", userId);

  const [events, setEvents] = useState([]);

  const getClubEvents = async () => {
    try {
      const response = await axios.get(
        `http://13.233.74.175/post/uniqueposts/${userId}`,
        {
          withCredentials: true,
        }
      );
      setEvents(response.data); // Ensure the events are stored here
      console.log("club events", response.data);
    } catch (error) {
      console.error("Error fetching club events:", error);
    }
  };

  useEffect(() => {
    getClubEvents();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Club Panel</h1>
        <form onSubmit={saveEvent} className="mb-6 flex flex-col">
          <div className="flex mb-2">
            <input
              type="text"
              name="event_name"
              className="border border-gray-300 rounded-md py-2 px-4 mr-2"
              placeholder="Event Name"
              value={newEvent.event_name}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="event_date"
              className="border border-gray-300 rounded-md py-2 px-4"
              placeholder="Event Date"
              value={newEvent.event_date}
              onChange={handleInputChange}
            />
          </div>
          <textarea
            name="description"
            className="border border-gray-300 rounded-md py-2 px-4 mb-2 h-32"
            placeholder="Event Description"
            value={newEvent.description}
            onChange={handleInputChange}
          />
          {/* Contact details */}
          {newEvent.contacts.map((contact, index) => (
            <div className="flex mb-2 gap-2" key={index}>
              <input
                type="text"
                name={`contact_name_${index}`}
                className="border border-gray-300 rounded-md p-2"
                placeholder={`Contact Name ${index + 1}`}
                value={contact.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name={`contact_contact_${index}`}
                className="border border-gray-300 rounded-md p-2"
                placeholder={`Contact ${index + 1}`}
                value={contact.contact}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <input
            type="text"
            name="image_url"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Image URL"
            value={newEvent.image_url}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
          >
            Add Event
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">My Events</h2>
        {events.map((event, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{event.event_name}</h3>
            <p className="mb-2">{event.description}</p>
            <p className="mb-2">{event.event_date}</p>
            {event.image_url && (
              <img
                src={event.image_url}
                alt={event.event_name}
                className="mb-2 w-full h-64 object-cover rounded-md"
              />
            )}
            <div className="flex gap-2">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ClubPanel;
