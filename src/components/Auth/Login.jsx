import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();

    // Define the form validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    });

    // Use Formik for form handling
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            // Call the login function from context
            login(values.email, values.password);
        }
    });

    return (
        <div className='flex justify-center items-center h-screen bg-gray-900'>
            <div className='bg-white rounded-lg shadow-lg max-w-md w-full p-6'>
                <h1 className='font-bold text-2xl text-center mb-6 text-gray-800'>Login</h1>

                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <label className='font-semibold text-gray-700' htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your email"
                            className={`mt-2 p-2 w-full rounded-md border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className='text-red-500 text-sm mt-1'>{formik.errors.email}</p>
                        ) : null}
                    </div>

                    <div className='mb-6'>
                        <label className='font-semibold text-gray-700' htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Enter your password"
                            className={`mt-2 p-2 w-full rounded-md border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p className='text-red-500 text-sm mt-1'>{formik.errors.password}</p>
                        ) : null}
                    </div>

                    <button
                        type="submit"
                        className='bg-blue-600 text-white p-3 rounded-md w-full text-center font-bold transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        Login
                    </button>

                    <p className='text-gray-600 text-center mt-6'>
                        Don’t have an account? <Link to='/register' className='text-blue-600'>Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
