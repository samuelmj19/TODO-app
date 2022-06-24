import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const [todos, saveTodo] = useLocalStorage('TODOS_V1', []);


    const [searchValue, setSearchValue ] = React.useState('');
    const [openModal, setOpenModal ] = React.useState(false);

    const todoCompleted = todos.filter(todo => !!todo.completed).length;
    const totalsTodo =todos.length;

    let searchedTodo = [];
    
    if(!searchValue.length>=1){
        searchedTodo = todos;
    }else{
        searchedTodo = todos.filter(todo =>{
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        })
    }


    const completeTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodo = [...todos];
        newTodo[todoIndex].completed = true;
        saveTodo(newTodo);
    }
    const addTodo = (text)=>{
        const newTodo = [...todos];
        newTodo.push({
            completed: false,
            text,
        });
        saveTodo(newTodo);
    }
    const deleteTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodo = [...todos];
        newTodo.splice(todoIndex, 1);
        saveTodo(newTodo);
    }

    return(
    
    <TodoContext.Provider value={{
        totalsTodo,
        todoCompleted,
        searchValue,
        setSearchValue,
        searchedTodo,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        setOpenModal

    }}>
        {props.children}
    </TodoContext.Provider>

    )
}

export {TodoContext, TodoProvider};