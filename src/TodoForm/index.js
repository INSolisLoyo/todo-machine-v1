import React, { useContext, useState} from "react";
import { TodoContex } from "../TodoContext";
import './TodoForm.css';



function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContex)

    const [ newTodoValue, setNewTodoValue ] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)      
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="A cortar cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">

                <button
                type="button"
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel">
                    Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add">
                    Añadir
                </button>

            </div>
        </form>
    )
}

export { TodoForm }