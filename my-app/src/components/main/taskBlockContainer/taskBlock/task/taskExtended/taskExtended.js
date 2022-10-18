import React from 'react';
import css from './taskExtended.module.css';
import { useLocation, Link } from 'react-router-dom';


export default function TaskExtended() {
    const location = useLocation();
    const { headline, description } = location.state;
    const fish = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <div className={css.container}>
            <div className={css.content}>
                <div className={css.topContent}>                    
                    <h1 className={css.headline}>{headline}</h1>
                    <Link to="/" >
                    <button className={css.button}></button>
                    </Link>
                </div>                
                <textarea className={css.description} placeholder='Your task description...'>{description}</textarea>
            </div>
        </div>
    )
}