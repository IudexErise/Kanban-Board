import css from './footer.module.css';

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div className={css.tasks}>
                    <span>Active tasks: 0</span>
                    <span>Finished tasks: 0</span>
                </div>
                <div>Kanban board by V.Saprykin 2022</div>
            </div>
        </footer>
    )
}