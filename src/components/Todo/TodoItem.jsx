const TodoItem = ({ todo, toggleCompletion, deleteTodo }) => {
    return (
        <div className="bg-gray-100 text-black shadow-md rounded-lg p-6 w-full h-full flex flex-col justify-between">
            <div>
                <h3 className="text-xl font-semibold mb-2">{todo.title}</h3>
                <p className="text-gray-600 mb-4">{todo.description}</p>
                <p className="font-bold mb-4">
                    Status: <span className={todo.completed ? 'text-green-500' : 'text-red-500'}>
                        {todo.completed ? 'Completed' : 'Incomplete'}
                    </span>
                </p>
            </div>
            <div className="flex justify-between">
                <button
                    className={`px-4 py-2 rounded-md text-white ${todo.completed ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} transition`}
                    onClick={() => toggleCompletion(todo.id)}
                >
                    {todo.completed ? 'Mark Incomplete' : 'Mark Completed'}
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                    onClick={() => deleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
