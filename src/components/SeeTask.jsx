import PropTypes from "prop-types";
import { useState } from "react";

import "./SeeTask.scss";
import deleteIcon from "../assets/borrar.png"

const SeeTask = ({ listTask, setlistTask}) => {
    const [completed, setCompleted] = useState([]);

    const handleCompleted = (index) => {
        const newCompleted = [...completed];
        newCompleted[index] = !newCompleted[index];
        setCompleted(newCompleted);
    };

    const handleDeleted = (index) =>{
        const newList = listTask.filter((task, id) => id !== index);
        setlistTask(newList);
        console.log(setlistTask);
    };

    const elements = listTask.map((item, index) => (
    <li key={index} className={`taskItem ${completed[index] ? "completed" : "" }`} >
        <input 
            className="completedCheckbox" 
            type="checkbox" 
            checked={completed[index] || false}
            onChange={() => handleCompleted(index)} />
        <div className="taskText">
            <h3>{item.title || "Sin título"}</h3>
            <p>{item.description || "Sin descripción"} </p>
            <hr />
        </div>
        <span onClick={()=> handleDeleted(index)} className="deleted">
            <img className="deleteIcon" src={deleteIcon} alt="delete icon"/>
        </span>
    </li> 
));
    console.log(listTask);
    return (
        <div className="see-task">
            <form onSubmit={(e) => e.preventDefault()}>
                <ul className="todoList">{elements}</ul>
            </form>
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    setlistTask: PropTypes.func.isRequired,
    
};

export default SeeTask;
