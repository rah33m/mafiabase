import axios from "axios";
import { toast } from "react-hot-toast";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
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
    username: "",
    email: "",
    password: "",
  });
  const registerUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { username, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        username,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful. Welcome!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
