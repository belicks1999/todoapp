import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompletion, deleteTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleCompletion={toggleCompletion} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
