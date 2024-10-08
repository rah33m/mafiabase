import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/mafiabase.png";
import { AuthContext } from "../../context/authContext";

const Navbar: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    // Handle the case where the context is not available (optional)
    return null; // or throw an error
  }

  const { isAuthenticated, logout } = authContext;

  return (
    <header className="flex justify-between items-center">
      <img src={Logo} width={100} height={100} alt="Logo" />
      <nav>
        <Link to="/" className="mr-2">
          Home
        </Link>
        {!isAuthenticated ? (
          <>
            <Link to="/register" className="mr-2">
              Register
            </Link>
            <Link to="/login" className="mr-2">
              Login
            </Link>
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
