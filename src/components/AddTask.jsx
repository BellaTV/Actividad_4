import PropTypes from "prop-types";
import "./AddTask.scss"

const AddTask = ({ listTask, setlistTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target[0].value; // Obtén el valor del input
        const description = e.target[1].value; // Obtén el valor del textarea

        setlistTask([...listTask, { title, description }]);
        e.target[0].value = "";
        e.target[1].value = "";
    };

    return (
        <section className="addSection">

            <form onSubmit={handleSubmit}>
                <input className="formText" type="text" placeholder=" Titulo de tarea" />
                <textarea className="formText" placeholder="Descripción de tarea"></textarea>
                <button className="submitButton" type="submit">Agregar</button>
            </form> 
        </section>
    );
};

AddTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    setlistTask: PropTypes.func.isRequired,
};

export default AddTask;
