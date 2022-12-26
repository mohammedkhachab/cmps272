import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
<<<<<<< HEAD
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__icon"
        src="./alternatedocroots/fb0cb59e-fe83-4342-b24b-5515377c9206-VISITLEBANON.png"
        alt=""
      />
      </Link>
=======
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="logo.png"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>
>>>>>>> fbf5161330387ee9e44f8e3bff9550c0c77d4b33

            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header