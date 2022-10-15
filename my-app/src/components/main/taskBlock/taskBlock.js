import React, { useState } from "react";
import css from './taskBlock.module.css';
import plus from './plus.svg';
import { useId } from "react-id-generator";
import Task from "../task";

export default function TaskBlock(props) {
    const [clickedButton, addTask] = useState(false);

    let tasksList = props.tasksData.map((task) => {
        return (
            <Task headline={task.headline} />
        )
    })
    
    return (
        <div className={css.container}>
            <span className={css.blockName}>{props.blockName}</span>
            {tasksList}
            {clickedButton && <input className={css.input} placeholder='___________________________'/>} 
            
            {!clickedButton ? 
            <button className={css.button} onClick={() => addTask(!clickedButton)}><img src={plus} className={css.plus} alt='' />Add card</button>
            :
            <button className={`${css.button} ${css.buttonClicked}`}>Submit</button>}                    
        </div>
    )
}