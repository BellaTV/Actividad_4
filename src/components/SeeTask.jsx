import PropTypes from "prop-types";
import { useState } from "react";

import "./SeeTask.scss";

const SeeTask = ({ listTask}) => {
    const [completed, setCompleted] = useState([]);

    const handleCompleted = (index) => {
        const newCompleted = [...completed];
        newCompleted[index] = !newCompleted[index];
        setCompleted(newCompleted);
    };

    const elements = listTask.map((item, index) => (
            <li key={index} className={`taskItem ${completed[index] ? "completed" : "" }`} >
                <input 
                    className="completedCheckbox" 
                    type="checkbox" 
                    checked={completed[index] || false}
                    onChange={() => handleCompleted(index)} />
                <div className="taskText">
                    <h2>{item.title || "Sin título"}</h2>
                    <p>{item.description || "Sin descripción"} </p>
                </div>
                <hr />
            </li> 
    ));


    return (
        <div className="see-task">
            <form>
            <ul className="todoList">{elements}</ul>
            </form>
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.array.isRequired,
};

export default SeeTask;
