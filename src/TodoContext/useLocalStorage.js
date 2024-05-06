import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {

    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {//si no lo está parsedItem es igual a su valor
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem)
      }

      setLoading(false);
    } catch(error) {
      setLoading(false);
      setError(true)
    }

  }, [])


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item, 
    saveItem,
    loading,
    error
  };
  
}

export { useLocalStorage };


//Copiar y pegar en el navegador
// const defaultTodos = [ 
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la llorona', completed: false},
//   { text: 'LALALA', completed: false},
//   { text: 'Usar estados derivados', completed: true}
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))