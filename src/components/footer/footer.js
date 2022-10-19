import css from './footer.module.css';

export default function Footer(props) {
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div className={css.tasks}>
                    <span>Active tasks: {props.tasksToDo.length}</span>
                    <span>Finished tasks: 0</span>
                </div>
                <div className={css.name}>Kanban board by V.Saprykin 2022</div>
            </div>
        </footer>
    )
}