import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiArchiveIn } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
import { GiNotebook } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="navbar-logo" src="./assets/logo.jpg" alt="icon" />
      </Link>
      <div className="navbar-icons-container">
        <Link to="/login" className="navbar-icon">
          <BsPerson size={25} title="login" />
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
      </div>
    </div>
  );
};

export default Navbar;
