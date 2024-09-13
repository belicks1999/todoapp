import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Register = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData.name, formData.email, formData.password);
    };

    //validate using yup

    const validationSchema = yup.object({

      name:yup.string()
      .min(4,'Name must be at least 6 characters')
      .required('Name is required'),

      email:yup.string()
      .email('Invalid email format')
      .required('Email is required'),

      password:yup.string()
      .min(6,'Name must be at least 6 characters')
      .required('Email is required')

    });

    //formik for form handling
    const formik=useFormik({initialValues:{
      name:'',
      email:'',
      password:''
    },

    validationSchema,
    onSubmit:(value)=>{

      register(value.name, value.email, value.password);

    }
  
  
  })

    return (
        <div className='flex justify-center items-center h-screen bg-gray-900'>
          <div className='bg-white rounded-lg shadow-lg max-w-md w-full p-6'>
            <h1 className='font-bold text-2xl text-center mb-6 text-gray-800'>Registration</h1>
        <form onSubmit={formik.handleSubmit}>
        <div className='mb-4'>
              <label className='font-semibold text-gray-700' htmlFor="username">Name</label>
              <input
                type="text"
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
                className={`mt-2 p-2 w-full rounded-md border ${formik.errors.name && formik.touched.name?'border-red-500':' border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              />
               {formik.touched.name && formik.errors.name ? (
                            <p className='text-red-500 text-sm mt-1'>{formik.errors.name}</p>
                        ) : null}
            </div>
            <div className='mb-4'>
              <label className='font-semibold text-gray-700' htmlFor="username">Email</label>
              <input
                type="text"
                onChange={formik.handleChange}
                name='email'
                value={formik.values.email}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
                className={`mt-2 p-2 w-full rounded-md border ${formik.errors.email && formik.touched.email?'border-red-500':' border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              />
               {formik.touched.email && formik.errors.email ? (
              <p className='text-red-500 text-sm mt-1'>{formik.errors.email}</p>
              ) : null}
            </div>
           
    
            <div className='mb-6'>
              <label className='font-semibold text-gray-700' htmlFor="password">Password</label>
              <input
                type="password"
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Enter your password"
                className={`mt-2 p-2 w-full rounded-md border ${formik.errors.password && formik.touched.password?'border-red-500':' border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              />
               {formik.touched.password && formik.errors.password ? (
              <p className='text-red-500 text-sm mt-1'>{formik.errors.password}</p>
              ) : null}
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
