import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { BiArchiveIn, BiLogOut } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
import { GiNotebook } from "react-icons/gi";
const Navbar = () => {
  const { isUserLoggedIn } = useAuth();
  return (
    <div className="navbar">
      <Link to="/">
        <img className="navbar-logo" src="./assets/logo1.png" alt="icon" />
      </Link>
      <div className="navbar-icons-container">
        <Link to="/login" className="navbar-icon">
          <BsPerson size={25} />
        </Link>

        <Link to="/note" className="navbar-icon">
          <GiNotebook size={25} title="add note" />
        </Link>
        <Link to="/archive" className="navbar-icon">
          <BiArchiveIn size={25} title="archive" />
        </Link>
        <Link to="/trash" className="navbar-icon">
          <VscTrash size={25} title="trash" />
        </Link>
        {/* <Link to="/login" className="navbar-icon">
          <BiLogOut size={25} />
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
