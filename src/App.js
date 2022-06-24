import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import {TodoContext, TodoProvider} from './TodoContext'

// const defaultTodo = [
//   {text: 'volverse buen programador', completed: true},
//   {text: 'conseguir mucho Dinero', completed: false},
//   {text: 'comprar un mustang', completed: false}
// ];


function App() {
  // const {openModal} = React.useContext(TodoContext)
  
  return (
    <TodoProvider>
      <React.Fragment>
        <TodoCounter
       
        />
        
        <TodoSearch
        
        />

        <TodoContext.Consumer>
          {({
            searchedTodo,
            completeTodo,
            deleteTodo
          }) => (

            <TodoList>
            {
              searchedTodo.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
                />
              ))
            }
            </TodoList>

          )}
        </TodoContext.Consumer>
        
        <TodoContext.Consumer>
          {({openModal}) =>(

            !!openModal && (
              <Modal></Modal>
            )
    
          )}
        </TodoContext.Consumer>
        <CreateTodoButton/>
        
    </React.Fragment>
  </TodoProvider>
  );
}


export default App;
