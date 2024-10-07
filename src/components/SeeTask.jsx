import PropTypes from "prop-types";




const SeeTask = ({ listTask, onDone }) => {
    const elements = listTask.map((item, index) => (
        <li key={index}>
            <h2>{item.title || "Sin título"}</h2>
            <p>{item.description || "Sin descripción"} </p>
            <hr />
        </li>
    ));



    return (
        <div className="see-task">
            <h1>Lista de tareas</h1>
            <form>
            <ul>{elements}</ul>
            </form>
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
};

export default SeeTask;
