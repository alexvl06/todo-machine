import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";


function TodoCounter(){
    const {completedTodos, totalTodos}=React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter" >You has completed {completedTodos} of {totalTodos} TODOs</h2>
    )
}

export {TodoCounter};