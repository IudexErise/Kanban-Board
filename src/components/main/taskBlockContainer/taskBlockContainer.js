import React from "react";
import css from './taskBlockContainer.module.css';
import TaskBlock from './taskBlock';

export default function TaskBlockContainer(props) {
    const {tasksToDo, setTasksToDo} = props;
    return (
        <div className={css.container}>
            <TaskBlock blockName='Backlog' blockStatus='0' tasksToDo={tasksToDo} setTasksToDo={setTasksToDo} />
            <TaskBlock blockName='Ready' blockStatus='1' tasksToDo={tasksToDo} setTasksToDo={setTasksToDo} />
            <TaskBlock blockName='In Progress' blockStatus='2' tasksToDo={tasksToDo} setTasksToDo={setTasksToDo} />
            <TaskBlock blockName='Finished' blockStatus='3' tasksToDo={tasksToDo} setTasksToDo={setTasksToDo} />
        </div>
    )
}