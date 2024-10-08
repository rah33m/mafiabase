import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import useAuth from "../authcheck/checkToken";

export default function Dashboard() {
  useAuth();
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{!!user && <h2>Hi {user.name}</h2>}</p>
    </div>
  );
}
