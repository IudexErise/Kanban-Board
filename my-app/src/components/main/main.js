import React from "react";
import css from './main.module.css';
import TaskBlock from './taskBlock';

let state = {
    backlog: [
        {
            id: 1,
            headline: 'task1',
            description: 'description1'
        },
        {
            id: 2,
            headline: 'task2',
            description: 'description2'
        }
    ],
    ready: [],
    inProgress: [],
    finished: []
}

export default function Main() {

     return (
        <div className={css.container}>
            <TaskBlock blockName='Backlog' tasksData={state.backlog} moveToList={state.ready}/>
            <TaskBlock blockName='Ready' tasksData={state.ready} moveToList={state.inProgress}/>
            <TaskBlock blockName='In Progress' tasksData={state.inProgress} moveToList={state.finished}/>
            <TaskBlock blockName='Finished' tasksData={state.finished}/>
        </div>
    )
}