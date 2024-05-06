import React from 'react';
import { TodoContex } from '../TodoContext';
import './TodoCounter.css'

const TodoCounter = () => {

    //le indicamos el contexto que vamos a utilizar
    const { completedTodos, totalTodos } = React.useContext(TodoContex)

    return (
       <h1 className='TodoCounter'>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h1> 
    );
}

export { TodoCounter };