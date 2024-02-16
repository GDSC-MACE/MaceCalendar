import React from 'react';

import {AiOutlineSearch} from "react-icons/ai";

export const SearchBar = () => {
    return(
        <form className='w-[950px] relative'>
            <div className="relative">
                <input type="search" placeholder='Type Here' className="w-full p-4 rounded-full border border-solid border-slate-300 bg-white   " />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-400 rounded-full">
                    <AiOutlineSearch/>
                </button>
            </div>
        </form>

    );
    
};