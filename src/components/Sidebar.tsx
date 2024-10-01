import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <Link to="/">Home</Link>
      <Link to="/crime">Crimes</Link>
    </div>
  );
};

export default Sidebar;
