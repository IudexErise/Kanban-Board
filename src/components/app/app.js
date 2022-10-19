import React, { useEffect, useState } from 'react';
import Header from '../header'
import Main from '../main'
import Footer from '../footer'
import css from './app.module.css';
import { BrowserRouter } from 'react-router-dom';

function App() {

    let tasks = JSON.parse(window.localStorage.getItem('tasksToDo'))
    tasks = tasks ? tasks : []
    const [tasksToDo, setTasksToDo] = useState(tasks)
    useEffect(() => {
        window.localStorage.setItem('tasksToDo', JSON.stringify(tasksToDo))
    })

    return (
        <div className={css.app}>
            <BrowserRouter>
                <Header />
                <Main tasksToDo={tasksToDo} setTasksToDo={setTasksToDo} />
                <Footer tasksToDo={tasksToDo} />
            </BrowserRouter>
        </div>
    );
}

export default App;
