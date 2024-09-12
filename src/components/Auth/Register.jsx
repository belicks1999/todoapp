import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData.name, formData.email, formData.password);
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-900'>
          <div className='bg-white rounded-lg shadow-lg max-w-md w-full p-6'>
            <h1 className='font-bold text-2xl text-center mb-6 text-gray-800'>Registration</h1>
        <form onSubmit={handleSubmit}>
        <div className='mb-4'>
              <label className='font-semibold text-gray-700' htmlFor="username">Name</label>
              <input
                type="text"
                onChange={(e)=>setFormData( {...formData, name: e.target.value})}
                placeholder="Enter your email"
                className='mt-2 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
              />
            </div>
            <div className='mb-4'>
              <label className='font-semibold text-gray-700' htmlFor="username">Email</label>
              <input
                type="text"
                onChange={(e)=>setFormData( {...formData, email: e.target.value})}
                placeholder="Enter your email"
                className='mt-2 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
              />
            </div>
    
            <div className='mb-6'>
              <label className='font-semibold text-gray-700' htmlFor="password">Password</label>
              <input
                type="password"
                onChange={(e)=>setFormData( {...formData, password: e.target.value})}
                placeholder="Enter your password"
                className='mt-2 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
              />
            </div>
    
            <button
              className='bg-blue-600 text-white p-3 rounded-md w-full text-center font-bold transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Signup
            </button>
    
            <p className='text-gray-600 text-center mt-6'>
              have an account? <Link to='/login' className='text-blue-600'>Login</Link>
            </p>
            </form>
          </div>
        </div>
    );
};

export default Register;
