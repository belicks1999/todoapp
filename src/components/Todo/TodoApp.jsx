import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { useAuth } from '../../context/AuthContext';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const { user, logout } = useAuth();

    useEffect(() => {
        if (user) {
            // Use user email to store/retrieve todos
            const userEmail = user.email;
            const storageKey = `todos_${userEmail}`;
            
            try {
                const savedTodos = JSON.parse(localStorage.getItem(storageKey)) || [];
                setTodos(savedTodos);
            } catch (error) {
                console.error("Failed to retrieve todos from local storage:", error);
            }
        }
    }, [user]);

    useEffect(() => {
        if (user) {
            // Use user email to store todos
            const userEmail = user.email;
            const storageKey = `todos_${userEmail}`;
            
            try {
                localStorage.setItem(storageKey, JSON.stringify(todos));
            } catch (error) {
                console.error("Failed to save todos to local storage:", error);
            }
        }
    }, [todos, user]);

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
        <>
        <div className='bg-gray-800  justify-center flex flex-col'>
            <div className='bg-purple-600 rounded-md flex justify-between lg:justify-around p-3 m-2 text-white font-bold'> 

            <h2 className='text-md lg:text-lg pt-2'>Welcome, {user?.email || 'User'}!</h2>
            <button className='p-2 bg-red-600 rounded-md shadow-md' onClick={logout}>Logout</button>

            </div>
            </div>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} toggleCompletion={toggleCompletion} deleteTodo={deleteTodo} />
        </>
    );
};

export default TodoApp;
