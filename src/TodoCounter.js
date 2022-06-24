import React from "react";
import { TodoContext } from "./TodoContext";
import './TodoCounter.css';

function TodoCounter(){
    const { totalsTodo,todoCompleted,} = React.useContext(TodoContext)
    return(
        <h2 className="Counter-tittle">You´ve done {todoCompleted} of {totalsTodo}.</h2>
    )
}

export {TodoCounter};