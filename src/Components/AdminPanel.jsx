import React, { useState } from "react";
import axios from "axios"; // Import axios
import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

const AdminPanel = () => {
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
      const response = await axios.post(
        "http://localhost:3000/post/createPost",
        formattedData,
        { withCredentials: true } // Send cookies with the request
      );

      console.log("Event saved successfully:", response.data);

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
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Admin Panel</h1>
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
      <Footer />
    </div>
  );
};

export default AdminPanel;
