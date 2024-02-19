import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar';

const ClubEvents = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Club Events</h1>
                <p className="text-lg mb-8 text-center">Welcome to our club events page! Here, you can find information about upcoming and past events organized by our club.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-md shadow-md overflow-hidden">
                        <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h2>
                        <div className="p-4">
                            <div className="animate-fadeIn mb-4">
                                <h3 className="text-xl font-semibold mb-2">Upcoming Event 1</h3>
                                <p className="text-gray-600">Description of upcoming event 1.</p>
                                <p className="text-gray-600">Date: Event date</p>
                            </div>
                            <div className="animate-fadeIn mb-4">
                                <h3 className="text-xl font-semibold mb-2">Upcoming Event 2</h3>
                                <p className="text-gray-600">Description of upcoming event 2.</p>
                                <p className="text-gray-600">Date: Event date</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-md shadow-md overflow-hidden">
                        <h2 className="text-2xl font-bold mb-4 text-center">Past Events</h2>
                        <div className="p-4">
                            <div className="animate-fadeIn mb-4">
                                <h3 className="text-xl font-semibold mb-2">Past Event 1</h3>
                                <p className="text-gray-600">Description of past event 1.</p>
                                <p className="text-gray-600">Date: Event date</p>
                            </div>
                            <div className="animate-fadeIn mb-4">
                                <h3 className="text-xl font-semibold mb-2">Past Event 2</h3>
                                <p className="text-gray-600">Description of past event 2.</p>
                                <p className="text-gray-600">Date: Event date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ClubEvents;
