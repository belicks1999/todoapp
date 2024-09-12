import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (email, password) => {
        setUser({ email });
        navigate('/todos');
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    const register = (name, email, password) => {
        setUser({ name, email });
        navigate('/todos');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
