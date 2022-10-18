import React from "react";
import css from './task.module.css';
import { Link } from 'react-router-dom';

export default function Task(props) {
    const { headline, id, description } = props;
    return (
        <div className={css.container}>
            <Link to={`/tasks/${id}`} state={{ headline, description }}>
                <div className={css.item}>
                    <span className={css.text}>{headline}</span>
                </div>
            </Link>
        </div>
    )
}