import React from 'react';

function Filter() {
    return (
        <div className="m-10 flex justify-center col-12">
            <div className="p-2 relative flex items-stretch w-full mb-2 mr-sm-2 flex fill">
                <div className="FilterType">
                    <div className="flex items-center text-base font-normal leading-normal text-[#495057] text-center whitespace-nowrap bg-[#e9ecef] border rounded mb-0 px-3 py-1.5 border-solid border-[#ced4da]" id="upcoming-label">
                        Clubs
                    </div>
                </div>
                <select className="transition duration-150 ease-in-out border-[#ced4da] rounded block w-full h-[calc(1.5em_+_0.75rem_+_2px)] text-base font-normal leading-normal text-[#495057] bg-white bg-clip-padding px-3 py-1.5" id="club">
                    <option>All</option>
                    <option>Club1</option>
                    <option>Past Events</option>
                </select>
            </div>
            <div className="p-2 relative flex items-stretch w-full mb-2 mr-sm-2 flex fill">
                <div className="FilterType">
                    <div className="flex items-center text-base font-normal leading-normal text-[#495057] text-center whitespace-nowrap bg-[#e9ecef] border rounded mb-0 px-3 py-1.5 border-solid border-[#ced4da]" id="upcoming-label">
                        Upcoming/Past
                    </div>
                </div>
                <select className="transition duration-150 ease-in-out border-[#ced4da] rounded block w-full h-[calc(1.5em_+_0.75rem_+_2px)] text-base font-normal leading-normal text-[#495057] bg-white bg-clip-padding px-3 py-1.5" id="status">
                    <option>All</option>
                    <option>Upcoming</option>
                    <option>Past Events</option>
                </select>
            </div>
            <div className="p-2 relative flex items-stretch w-full mb-2 mr-sm-2 flex fill">
                <div className="FilterType">
                    <div className="flex items-center text-base font-normal leading-normal text-[#495057] text-center whitespace-nowrap bg-[#e9ecef] border rounded mb-0 px-3 py-1.5 border-solid border-[#ced4da]" id="upcoming-label">
                        Sort By
                    </div>
                </div>
                <select className="transition duration-150 ease-in-out border-[#ced4da] rounded block w-full h-[calc(1.5em_+_0.75rem_+_2px)] text-base font-normal leading-normal text-[#495057] bg-white bg-clip-padding px-3 py-1.5" id="property">
                    <option>All</option>
                    <option>Upcoming</option>
                    <option>Past Events</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;
