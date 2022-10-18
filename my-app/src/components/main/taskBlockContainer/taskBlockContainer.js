import React from "react";
import css from './taskBlockContainer.module.css';
import TaskBlock from './taskBlock';

export default function TaskBlockContainer(props) {
    const {tasksToDo, setTasksToDo} = props;
    return (
        <div className={css.container}>
            <TaskBlock blockName='Backlog' tasksToDo={tasksToDo} setTasksToDo={setTasksToDo} />
            <TaskBlock blockName='Ready' tasksToDo={tasksToDo} setTasksToDo={setTasksToDo} />
            <TaskBlock blockName='In Progress' tasksToDo={tasksToDo} setTasksToDo={setTasksToDo} />
            <TaskBlock blockName='Finished' tasksToDo={tasksToDo} setTasksToDo={setTasksToDo} />
        </div>
    )
}