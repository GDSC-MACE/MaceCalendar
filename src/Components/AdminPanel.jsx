import React, { useState } from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar';

const AdminPanel = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        name: '',
        date: '',
        description: '',
        venue: '',
        type: '',
        guests: [],
        images: [],
        videos: []
    });
    const [editIndex, setEditIndex] = useState(-1); // Index of the event being edited

    // Function to add a new event or update an existing event
    const saveEvent = () => {
        if (editIndex === -1) {
            // Add new event
            if (newEvent.name.trim() !== '') {
                setEvents([...events, newEvent]);
                setNewEvent({
                    name: '',
                    date: '',
                    description: '',
                    venue: '',
                    type: '',
                    guests: [],
                    images: [],
                    videos: []
                });
            }
        } else {
            // Update existing event
            const updatedEvents = [...events];
            updatedEvents[editIndex] = newEvent;
            setEvents(updatedEvents);
            setEditIndex(-1);
            setNewEvent({
                name: '',
                date: '',
                description: '',
                venue: '',
                type: '',
                guests: [],
                images: [],
                videos: []
            });
        }
    };

    // Function to handle changes in event details
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    // Function to add guest to the event
    const addGuest = () => {
        const updatedGuests = [...newEvent.guests, ''];
        setNewEvent({ ...newEvent, guests: updatedGuests });
    };

    // Function to remove guest from the event
    const removeGuest = (index) => {
        const updatedGuests = [...newEvent.guests];
        updatedGuests.splice(index, 1);
        setNewEvent({ ...newEvent, guests: updatedGuests });
    };

    // Function to add images to the event
    const addImage = (e) => {
        const image = e.target.files[0];
        if (image) {
            setNewEvent({ ...newEvent, images: [...newEvent.images, image] });
        }
    };

    // Function to remove an image from the event
    const removeImage = (index) => {
        const updatedImages = [...newEvent.images];
        updatedImages.splice(index, 1);
        setNewEvent({ ...newEvent, images: updatedImages });
    };

    // Function to add videos to the event
    const addVideo = (e) => {
        const video = e.target.files[0];
        if (video) {
            setNewEvent({ ...newEvent, videos: [...newEvent.videos, video] });
        }
    };

    // Function to remove a video from the event
    const removeVideo = (index) => {
        const updatedVideos = [...newEvent.videos];
        updatedVideos.splice(index, 1);
        setNewEvent({ ...newEvent, videos: updatedVideos });
    };

    // Function to edit an event
    const editEvent = (index) => {
        setEditIndex(index);
        setNewEvent(events[index]);
    };

    // Function to remove an event
    const removeEvent = (index) => {
        const updatedEvents = [...events];
        updatedEvents.splice(index, 1);
        setEvents(updatedEvents);
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Admin Panel</h1>
                <div className="mb-6 flex flex-col">
                    {/* Input fields for event details */}
                    <div className="flex mb-2">
                        <input
                            type="text"
                            name="name"
                            className="border border-gray-300 rounded-md py-2 px-4 mr-2"
                            placeholder="Event Name"
                            value={newEvent.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="date"
                            className="border border-gray-300 rounded-md py-2 px-4"
                            placeholder="Event Date"
                            value={newEvent.date}
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
                    <div className="flex mb-2">
                        <input
                            type="text"
                            name="venue"
                            className="border border-gray-300 rounded-md py-2 px-4 mr-2"
                            placeholder="Event Venue"
                            value={newEvent.venue}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="type"
                            className="border border-gray-300 rounded-md py-2 px-4"
                            placeholder="Event Type"
                            value={newEvent.type}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">Event Guests:</label>
                        {newEvent.guests.map((guest, index) => (
                            <div key={index} className="flex items-center mb-1">
                                <input
                                    type="text"
                                    value={guest}
                                    onChange={(e) => {
                                        const updatedGuests = [...newEvent.guests];
                                        updatedGuests[index] = e.target.value;
                                        setNewEvent({ ...newEvent, guests: updatedGuests });
                                    }}
                                    className="border border-gray-300 rounded-md py-1 px-2 mr-2"
                                    placeholder="Guest Name"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeGuest(index)}
                                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addGuest}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md"
                        >
                            Add Guest
                        </button>
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">Event Images:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={addImage}
                            className="mb-2"
                        />
                        {newEvent.images.map((image, index) => (
                            <div key={index} className="flex items-center mb-1">
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Event Image ${index + 1}`}
                                    className="h-16 mr-2"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">Event Videos:</label>
                        <input
                            type="file"
                            accept="video/*"
                            onChange={addVideo}
                            className="mb-2"
                        />
                        {newEvent.videos.map((video, index) => (
                            <div key={index} className="flex items-center mb-1">
                                <video
                                    src={URL.createObjectURL(video)}
                                    controls
                                    className="h-16 mr-2"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeVideo(index)}
                                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                        onClick={saveEvent}
                    >
                        {editIndex === -1 ? 'Add Event' : 'Save Changes'}
                    </button>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Events List</h2>
                    {events.map((event, index) => (
                        <div key={index} className="bg-white rounded-md shadow-md p-4 mb-4">
                            <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                            <p className="text-gray-600">Date: {event.date}</p>
                            <p className="text-gray-600">Description: {event.description}</p>
                            <p className="text-gray-600">Venue: {event.venue}</p>
                            <p className="text-gray-600">Type: {event.type}</p>
                            <p className="text-gray-600">Guests: {event.guests.join(', ')}</p>
                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2"
                                    onClick={() => editEvent(index)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                                    onClick={() => removeEvent(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminPanel;
