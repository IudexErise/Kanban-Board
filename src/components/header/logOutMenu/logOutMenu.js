import css from './logOutMenu.module.css'

export default function logOutMenu () {
    return (
        <div className={css.container}>
            <span className={css.menuItem}>Profile</span>
            <span className={css.menuItem}>Log Out</span>
        </div>
    )
}