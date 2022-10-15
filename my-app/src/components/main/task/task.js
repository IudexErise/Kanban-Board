import React from "react";
import css from './task.module.css';

export default function Task(props) {
    return (
        <div className={css.item}>
            <span className={css.text}>{props.headline}</span>        
        </div>
    )
}