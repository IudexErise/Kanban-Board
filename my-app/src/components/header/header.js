import React, { useState } from 'react';
import avatar from './user-avatar.svg';
import css from './header.module.css';
import arrow from './arrow.svg';
import rectangle from './rectangle.svg';
import LogOutMenu from './logOutMenu';

export default function Header() {
    const [isClicked, showMenu] = useState(false);
    return (
        <header className={css.header}>
            <div className={css.container}>
                <span className={css.name}>Awesome Kanban Board</span>
                <div className={css.login} onClick={() => showMenu(!isClicked)} >
                    <img src={avatar} className={css.avatar} alt="" />
                    <img src={arrow} className={css.button} alt="" />
                    {isClicked &&
                        <div>
                            <img src={rectangle} className={css.linker} alt=""></img>
                            <div className={css.logOutMenu}>
                                <LogOutMenu />
                            </div>
                        </div>

                    }
                </div>

            </div>
        </header>
    )
}