import React from "react";
import "./Navbar.css";
import "./NavbarMblView.css";
import { BiArchiveIn, BiNote } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";
import { GiNotebook } from "react-icons/gi";
import { useLocation, Link } from "react-router-dom";
import { BsSearch, BsPerson } from "react-icons/bs";
const NavbarMblView = () => {
  const location = useLocation();
  return (
    <div className="navbar-mbl">
      <div className="navbar-mbl-part-one">
        <Link to="/">
          <img className="navbar-logo" src="./assets/logo1.png" alt="icon" />
        </Link>
      </div>
      <div className="navbar-mbl-part-two">
        <div className="navbar-icons-container navbar-mbl-icons">
          <Link to="/login" className="navbar-icon">
            <BsPerson size={25} title="login" />
          </Link>
          <Link to="/note-taking-page" className="navbar-icon">
            <GiNotebook size={25} title="add note" />
          </Link>
          <Link to="/archives" className="navbar-icon">
            <BiArchiveIn size={25} title="archive" />
          </Link>
          <Link to="/trash" className="navbar-icon">
            <VscTrash size={25} title="trash" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarMblView;
