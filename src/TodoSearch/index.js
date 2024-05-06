import React from 'react';
import { TodoContex } from '../TodoContext';
import './TodoSearch.css';

const TodoSearch = () => {

    const { searchValue, setSearchValue } = React.useContext(TodoContex)

    return (
        <input 
            placeholder="Cortar cebolla" 
            value={searchValue}
            className="TodoSearch" 
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    )
}

export { TodoSearch };