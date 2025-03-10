import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = ({ onSidebar }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <Link to="#" onClick={() => onSidebar(true)}>
        <FaIcons.FaBars />
      </Link>
      <input
        className="input"
        type="search"
        placeholder="Search"
        name="search"
      />
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogin}>Logout</button>
      )}
    </div>
  );
};

export default Navbar;
