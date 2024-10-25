import { useState } from "react";

import AddTask from "../components/AddTask";
import Header from "../components/header/Header";
import SeeTask from "../components/SeeTask";

import logo from "../assets/todo.png";


function Home() {
    const [showCmponent, setShowComponent] = useState(true);
    const [listTask, setlistTask] = useState([]);

    return (
        <>
            <section className="logo">
                <img src={logo} alt="Logo"/>
                <h1 className="mainTitle">Lista de Tareas</h1>
            </section>

            
                <Header setShowComponent={setShowComponent} />
            <div className="card">
                {showCmponent ? <AddTask listTask={listTask} setlistTask={setlistTask} /> : <SeeTask listTask={listTask} setlistTask={setlistTask} />}
            </div>
        </>
    );
}

export default Home;
