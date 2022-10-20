import React, { useState } from 'react';
import css from './moveTaskButton.module.css';
import plus from '../plus.svg';
import dropdown from './dropdown.svg';
import DropdownItem from './dropdownItem'

export default function MoveTaskButton(props) {
    const { tasksToDo, blockStatus } = props;
    const [clickedButton, handleClickedButton] = useState(false);
    const [clickedDropdown, handleClickedDropdown] = useState(false);

    const backlogTasks = tasksToDo.filter(task => (blockStatus - 1) === task.status)
    const tasksToMoveList = backlogTasks.map((task) => {
        return (
            <DropdownItem
                id={task.id}
                key={task.id}
                tasksToDo={tasksToDo}
                clickedButton={clickedButton}
                handleClickedDropdown={handleClickedDropdown}
            />
        )
    })    

    return (
        <>           
            {!clickedButton &&
                <button
                    className={tasksToMoveList.length > 0 ? css.button : css.buttonDisabled}
                    onClick={tasksToMoveList.length > 0 ? () => handleClickedButton(!clickedButton) : null}
                >
                    <img
                        src={plus}
                        className={css.plus}
                        alt=''
                    />Add card
                </button>
            }
            {clickedButton &&
                <div className={css.dropdownContainer}>
                    <button
                        className={css.dropdownToggle}
                        onClick={() => handleClickedDropdown(!clickedDropdown)}
                    >
                        <img src={dropdown} alt='' className={css.dropdownArrow} />
                    </button>
                    {clickedDropdown &&
                        <div className={css.tasksToMoveList}>
                            {tasksToMoveList}
                        </div>}
                </div>
            }
        </>
    )
}