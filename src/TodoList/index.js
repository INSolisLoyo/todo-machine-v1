import './TodoList.css';

const TodoList = ({children}) => {
    //La propiedad children toma todo lo que se pase al componente y lo convierte en hijo automáticamente
    return (
       <ul className="TodoList">
        {
            children
        }
       </ul> 
    )
}

export { TodoList };