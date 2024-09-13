import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompletion, deleteTodo }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleCompletion={toggleCompletion} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
};

export default TodoList;
