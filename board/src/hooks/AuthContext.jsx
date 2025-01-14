import react, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const[email, setEmail] = useState(localStorage.getItem('email'));
  const[token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (token && email) {
      const storedMember = localStorage.getItem('email');
      setEmail(storedMember);
    }
  }, [token, email])

  const login = (email, token) => {
    setEmail(email);
    setToken(token);

    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    navigate('/dashboard')
  }
  const logout = () => {
    setEmail(null);
    setToken(null);

    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/dashboard')
  }

  // token, email
  return(
    <AuthContext.Provider value={{email, token, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = ()=> useContext(AuthContext);