import React, { createContext, useState, useContext, useEffect } from 'react';
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

   
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('USER_TOKEN');
        if (token) {
            setIsLogin(true);
        }
    }, []);

    const handleLogin = (token) => {
        localStorage.setItem('USER_TOKEN', token);
        setIsLogin(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('USER_TOKEN');
        setIsLogin(false);
    };

    return (
        <AuthContext.Provider value={{ isLogin, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
