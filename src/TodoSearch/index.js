import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchvalueChange = (event)=>{
        setSearchValue(event.target.value)
    }
    return(
        <input 
            className="TodoSearch" 
            placeholder="Set a search value."
            value={searchValue}
            onChange={onSearchvalueChange}
            />
    )
}

export {TodoSearch}