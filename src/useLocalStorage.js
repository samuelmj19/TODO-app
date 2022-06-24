import React from "react";

function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
    
    const [items, setItems ] = React.useState(parsedItem);
    
    const saveItem = (newItems)=>{
      const ItemStringified = JSON.stringify(newItems);
      localStorage.setItem(itemName, ItemStringified);
      setItems(newItems)
    }
  
    return [
      items,
      saveItem,
    ]
  }
  
  export {useLocalStorage};