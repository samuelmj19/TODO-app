import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoSearch.css';


function TodoSearch() {
    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
    };
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    return(
        <div className="search-input-container">
            <input 
            placeholder="Search" 
            className="search-input"
            value={searchValue}
            onChange={onSearchValueChange}
            />
        </div>
    )
}

export {TodoSearch};