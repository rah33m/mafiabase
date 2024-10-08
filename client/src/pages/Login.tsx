import { SyntheticEvent, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
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
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
