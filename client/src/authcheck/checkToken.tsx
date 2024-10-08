import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getCookie = (name: string) => {
      const cookieString = document.cookie;
      const cookies = cookieString
        .split("; ")
        .find((row) => row.startsWith(`${name}=`));
      return cookies ? cookies.split("=")[1] : null;
    };

    const token = getCookie("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
};

export default useAuth;
