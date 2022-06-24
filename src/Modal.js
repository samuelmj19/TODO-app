import React from 'react';
import './Modal.css';
import { TodoContext } from './TodoContext';



export const Modal = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {addTodo, setOpenModal} = React.useContext(TodoContext);

  const onChange = (event) =>{
    setNewTodoValue(event.target.value);
  }
  const onCancel = () =>{
    setOpenModal(false)
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }


  return (
    <div className='modal-container'>
      <form className='modal-form' onSubmit={onSubmit}>

      <label>Write your new To Do </label>
      <textarea 
      placeholder='text...'
      onChange={onChange}
      className='modal-textArea'
      ></textarea>
      <div className='modal-btn-container'>
        <button
          onClick={onCancel}
        >
          Cancel
        </button>
        <button 
        type='submit'
        >
          Send
          </button>
      </div>
      </form>
    </div>
  )
}
