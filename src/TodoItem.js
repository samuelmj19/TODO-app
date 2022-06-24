import React from "react";
import './TodoItem.css'
function TodoItem(props){
    return(
        <li className="Todo-list">
            <span
            onClick={props.onComplete}
            >
                <i className={`fa-solid fa-check ${props.completed && 'active'}`}></i>
            </span>
            
            <p className={`Todo-list-text ${props.completed && 'active'}`}>{props.text}</p>
            
            <span 
            onClick={props.onDelete}
            >
                <i className="fa-solid fa-xmark"></i>
            </span>
        </li>

    )
}

export {TodoItem};