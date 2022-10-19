import React from "react";
import { Routes, Route } from "react-router-dom";
import css from './main.module.css';
import TaskExtended from './taskExtended';
import TaskBlockContainer from './taskBlockContainer';

export default function Main(props) {
    const {tasksToDo, setTasksToDo} = props;
    return (
        <main className={css.main}>
            <Routes>
                <Route exact path={'/'} element={<TaskBlockContainer tasksToDo={tasksToDo} setTasksToDo={setTasksToDo}/>} />
                <Route path={'/tasks/:id'} element={<TaskExtended tasksToDo={tasksToDo} setTasksToDo={setTasksToDo}/>} />
            </Routes>
        </main>
    )
}