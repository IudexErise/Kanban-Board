import css from './footer.module.css';

export default function Footer(props) {
    const {tasksToDo} = props;
    const activeTasks = tasksToDo.filter(task => (task.status < 3));
    const finishedTasks = tasksToDo.filter(task => (task.status == 3));

    console.log(activeTasks)

    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div className={css.tasks}>
                    <span>Active tasks: {activeTasks.length}</span>
                    <span>Finished tasks: {finishedTasks.length}</span>
                </div>
                <div className={css.name}>Kanban board by V.Saprykin 2022</div>
            </div>
        </footer>
    )
}