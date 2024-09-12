import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TodoApp from './components/Todo/TodoApp';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/todos" element={<ProtectedRoute><TodoApp /></ProtectedRoute>} />
                <Route path="/" element={<Login />} />
            </Routes>
        
    );
}

export default App;
