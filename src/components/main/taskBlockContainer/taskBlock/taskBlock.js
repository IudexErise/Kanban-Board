import React from "react";
import css from './taskBlock.module.css';
import Task from "./task";
import NewTaskButton from './newTaskButton';
import MoveTaskButton from './moveTaskButton';

export default function TaskBlock(props) {
    const { tasksToDo, setTasksToDo, blockName, blockStatus } = props;
    
    const sortedTasks = tasksToDo.filter(task => (blockStatus == task.status))

    const tasksList = sortedTasks.map((task) =>  {
        return (
            <Task headline={task.headline} id={task.id} key={task.id} />
        )
    })

    return (
        <div className={css.container}>
            <span className={css.blockName}>{props.blockName}</span>
            {tasksList}
            {blockName === 'Backlog' ?
                <NewTaskButton
                    setTasksToDo={setTasksToDo}
                    tasksToDo={tasksToDo}
                />
                :
                <MoveTaskButton
                    setTasksToDo={setTasksToDo}
                    tasksToDo={tasksToDo}
                    blockStatus={blockStatus}
                />
            }
        </div>
    )

}