import React from "react";
import './TodoList.css'
function TodoList(props){
    return(
        <section className="list-section-container">
            <ul className="list-container">
                {props.children}
            </ul>
        </section>
    )
}
export {TodoList};