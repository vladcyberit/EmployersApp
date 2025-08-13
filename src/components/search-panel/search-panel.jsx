import "./search-panel.css";

import { IoSearch } from "react-icons/io5";


const SearchPanel = () => {
    return (
        <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping"><IoSearch className="search-icon"/></span>
            <input
            type="text"
            className="form-control search-input"
            placeholder="Find employee" />
        </div>
    );
}
 
export default SearchPanel;