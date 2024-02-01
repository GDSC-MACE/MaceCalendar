import React from 'react';

import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";
export const SearchBar = () => {
    return(
        <div className="input-wrapper">
            <FaSearch id="search-icon" size={40}/>
            <input className="text-2xl font-bold" placeholder="Type to search..."/>
        </div>

    );
    
};