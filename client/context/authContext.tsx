import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the context value
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Create the AuthContext with a default value
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// AuthProvider component to provide the auth state to the entire app
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const getCookie = (name: string) => {
      const cookieString = document.cookie;
      const cookie = cookieString
        .split("; ")
        .find((row) => row.startsWith(`${name}=`));
      return cookie ? cookie.split("=")[1] : null;
    };

    const token = getCookie("token");
    setIsAuthenticated(!!token); // Set to true if token exists, otherwise false
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
