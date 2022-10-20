import React, { useState } from 'react';
import css from './newTaskButton.module.css';
import plus from '../plus.svg';
import {nanoid} from "nanoid";

export default function NewTaskButton(props) {
    const {setTasksToDo, tasksToDo} = props;
    const [newTask, setNewTask] = useState('');   
    const [clickedButton, handleClickedButton] = useState(false);

    const addNewTask = () => {
        if (newTask === '') {
            alert(`You can't add empty task!`);
            handleClickedButton(!clickedButton);
        } else {
            const task =
            {
                id: nanoid(),
                headline: newTask,
                description: '',
                status: 0
            }
            setTasksToDo([...tasksToDo, task]);
            setNewTask('');
            handleClickedButton(!clickedButton);
        }
    }

    return (
        <>
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
                    onClick={() => handleClickedButton(!clickedButton)}
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
        </>
    )
}