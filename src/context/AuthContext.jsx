import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (email, password) => {

        const users = JSON.parse(localStorage.getItem('users')) ||[];

        const user = users.find(u=>u.email===email && u.password ===password);

        if(user){
            setUser({email:user.email})
            alert('Login Succesfull')
            navigate('/todos');

        } else{
            alert('Invalid Password or Username')
        }
        
        
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    const register = (name, email, password) => {

        //check user email
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExist = users.find(u=>u.email===email);

        if(userExist){
            alert("Email Already Exist")
            navigate('/login')
        }

        const newUser = {name,email,password};
        users.push(newUser);
        localStorage.setItem('users',JSON.stringify(users))
        setUser({ name, email });
        alert("Registration Succesfull")
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
