import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";
import Logo from "../assets/logo-mb.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [userProps, setUserProps] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    // Use axios to fetch data
    axios
      .get("/mockdata.json")
      .then((response) => {
        // Assuming the structure of your JSON file is known
        const userStats = response.data.user;

        setUserProps({
          rank: userStats.rank,
          money: userStats.money,
          health: userStats.health,
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex items-center justify-between px-4 py-2">
      {/* Center logo */}
      <div className="flex-1 flex justify-center">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>

      {/* Right-side authentication buttons */}
      <div className="flex items-center space-x-4">
        <SignedIn>
          <ul>
            <li>Rank: {userProps.rank}</li>
            <li>${userProps.money}</li>
            <li>{userProps.health}% Health</li>
          </ul>
          <p>{user?.username}</p>
          <UserButton />
        </SignedIn>
        <SignedOut>Logged out</SignedOut>
      </div>
    </div>
  );
};

export default Header;
