import React from 'react';
import css from './dropdownItem.module.css';

export default function DropdownItem(props) {
    const {id, clickedButton, handleClickedDropdown} = props;

    const tasksList = JSON.parse(localStorage.getItem("tasksToDo"));
    const task = tasksList.find((task) => task.id === id);

    const handleClick = () => {
        const newTasksList = tasksList.map(updTask => {
            if (updTask.id === task.id) {
                updTask.status++;
            }
            return updTask;
        })
        window.localStorage.setItem('tasksToDo', JSON.stringify(newTasksList));
        handleClickedDropdown(!clickedButton);
    }

    return (
        <div className={css.dropdownItem} onClick={() => handleClick()}>
            {task.headline}
        </div>
    )
}