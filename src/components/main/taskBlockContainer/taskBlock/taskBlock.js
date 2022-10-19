import React, { useState } from "react";
import css from './taskBlock.module.css';
import plus from './plus.svg';
import { nanoid } from 'nanoid'
import Task from "./task";

export default function TaskBlock(props) {
    const { tasksToDo, setTasksToDo, blockName } = props;
    const [clickedButton, setTask] = useState(false);
    const [newTask, setNewTask] = useState('');

    const addNewTask = () => {
        if (newTask === '') {
            alert(`You can't add empty task!`);
            setTask(!clickedButton);
        } else {
            const task =
            {
                id: nanoid(),
                headline: newTask,
                description: '',
                status: 'backlog'
            }
            setTasksToDo([...tasksToDo, task]);
            setNewTask('');
            setTask(!clickedButton);
        }
    }

    const tasksList = tasksToDo.map((task) => {
        return (
            <Task headline={task.headline} id={task.id} key={task.id} />
        )
    })

    const optionsList = tasksToDo.map((task) => {
        return (
            <option className={css.option}>{task.headline}</option>            
        )
    })

       
    if (blockName === 'Backlog') {
        return (
            <div className={css.container}>
                <span className={css.blockName}>{props.blockName}</span>
                {tasksList}
                {clickedButton &&
                    <input
                        className={css.input}
                        placeholder='___________________________'
                        value={newTask}
                        onChange={event => setNewTask(event.target.value)}
                    />}
                {!clickedButton ?
                    <button
                        className={css.button}
                        onClick={() => setTask(!clickedButton)}
                    >
                        <img
                            src={plus}
                            className={css.plus}
                            alt=''
                        />Add card
                    </button>
                    :
                    <button
                        className={`${css.button} ${css.buttonClicked}`}
                        onClick={addNewTask}
                    >Submit
                    </button>}
            </div>
        )
    } else {
        return (
            <div className={css.container}>
                <span className={css.blockName}>{props.blockName}</span>
                {clickedButton &&
                    <select className={css.select}>
                        {optionsList}
                    </select>}
                {!clickedButton ?
                    <button
                        className={css.button}
                        onClick={() => setTask(!clickedButton)}
                    >
                        <img
                            src={plus}
                            className={css.plus}
                            alt=''
                        />Add card
                    </button>
                    : null}
            </div>
        )
    }
}