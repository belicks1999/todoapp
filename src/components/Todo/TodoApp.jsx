import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { useAuth } from '../../context/AuthContext';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const { user, logout } = useAuth();

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title, description) => {
        const newTodo = { id: Date.now(), title, description, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleCompletion = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h2>Welcome, {user?.name || 'User'}!</h2>
            <button onClick={logout}>Logout</button>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} toggleCompletion={toggleCompletion} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoApp;
