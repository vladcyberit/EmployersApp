import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import "./search-panel.css";


const SearchPanel = ({ handleChangeParent }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        const searchQuery = e.target.value

        setSearchQuery(searchQuery);
        handleChangeParent(searchQuery);
    }

    return (
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping"><IoSearch className="search-icon"/></span>
            <input
            type="text"
            className="form-control search-input"
            placeholder="Find employee or job title"
            value={searchQuery}
            onChange={handleChange} />
        </div>
    );
}
 
export default SearchPanel;