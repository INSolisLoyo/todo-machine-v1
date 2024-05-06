import React from "react";
import { ReactComponent as CheckSVG} from './check.svg';
import { ReactComponent as DeleteSVG} from './delete.svg';
import './TodoIcon.css';

//creación de un objeto para que funcione como condicional
const iconTypes = {
    //Las clases que definimos para los componentes también se definen para los svg
    'check': (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    'delete': (color) => <DeleteSVG className="Icon-svg" fill={color}/>   
}

//creamos una librería de íconos
function TodoIcon({ type, color, onClick }) {
    return (
        <span 
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {/* Enviamos el color como si fuera una función */}
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };