const TodoItem = ({ todo, toggleCompletion, deleteTodo }) => {
    return (
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>
            <button onClick={() => toggleCompletion(todo.id)}>
                {todo.completed ? 'Mark Incomplete' : 'Mark Completed'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default TodoItem;
