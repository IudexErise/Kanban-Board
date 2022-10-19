import React, { useState } from 'react';
import avatar from './user-avatar.svg';
import css from './header.module.css';
import arrow from './arrow.svg';
import arrowReverse from './arrow-reverse.svg';
import rectangle from './rectangle.svg';
import LogOutMenu from './logOutMenu';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isClicked, showMenu] = useState(false);
    return (
        <header className={css.header}>
            <div className={css.container}>
                <Link to="/" >
                    <span className={css.logo}>Awesome Kanban Board</span>
                </Link>
                <div className={css.login} onClick={() => showMenu(!isClicked)} >
                    <img src={avatar} className={css.avatar} alt="" />
                    <img src={isClicked ? arrow : arrowReverse} className={css.button} alt="" />
                    {isClicked &&
                        <>
                            <img src={rectangle} className={css.linker} alt=""></img>
                            <div className={css.logOutMenu}>
                                <LogOutMenu />
                            </div>
                        </>
                    }
                </div>

            </div>
        </header>
    )
}