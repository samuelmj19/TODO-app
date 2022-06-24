import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "./TodoContext";
function CreateTodoButton(props){
    const {setOpenModal} = React.useContext(TodoContext)
    const showModal =() =>{

        const modalSelector = document.querySelector('.modal-display')
        const btn = document.querySelector('.button')
        modalSelector.classList.toggle('inactive')
        btn.classList.toggle('active')
        setOpenModal(prevState => !prevState);
        
    }
    return (
        <div className="button-container">
            <div className="modal-display inactive">{props.children}</div>
            <button className="button" onClick={showModal} >+</button>
        </div>
    )
}

export {CreateTodoButton};