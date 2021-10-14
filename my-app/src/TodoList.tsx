type TodoListPropsType = {
    title: string,
}

export default function TodoList(props: TodoListPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <input />
            <button>+</button>
            <ul>
                <li><input type='checkbox' checked={true} /><span>HTML and CSS</span></li>
                <li><input type='checkbox' checked={false} /><span>React</span></li>
                <li><input type='checkbox' checked={true} /><span>JavaScript</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
}