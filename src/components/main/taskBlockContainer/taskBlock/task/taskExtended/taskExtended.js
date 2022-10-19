import React, { useState } from 'react';
import css from './taskExtended.module.css';
import { useLocation, Link } from 'react-router-dom';


export default function TaskExtended(props) {
    const location = useLocation();
    const { id } = location.state;

    const tasksList = JSON.parse(localStorage.getItem("tasksToDo"));
    const task = tasksList.find((task) => task.id === id);

    const [newDescription, setNewDescription] = useState(task.description);

    const handleChange = () => {
        const newTasksList = tasksList.map(updTask => {
            if (updTask.id === task.id) {
                updTask.description = newDescription;
            }
            return updTask;
        })
        window.localStorage.setItem('tasksToDo', JSON.stringify(newTasksList))
    }
    
    return (
        <div className={css.container}>
            <div className={css.content}>
                <div className={css.topContent}>                    
                    <h1 className={css.headline}>{task.headline}</h1>
                    <Link to="/" >
                    <button className={css.button}></button>
                    </Link>
                </div>                
                <textarea 
                    className={css.description} 
                    placeholder='Your task description...'
                    value={newDescription}
                    onChange={event => setNewDescription(event.target.value)}
                    onBlur={() => handleChange()}
                ></textarea>
            </div>
        </div>
    )
}