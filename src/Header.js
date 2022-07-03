import React from "react";
//globe
import LanguageIcon from "@material-ui/icons/Language";
//down arrow
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// search
import SearchIcon from "@material-ui/icons/Search";
// avatar component
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
