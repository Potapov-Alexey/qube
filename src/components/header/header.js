import React from "react";
import './style.css';
import Search from "../search/search";

const Header = function () {
    return (
        <header className="App-header">
          <h1 className="title">Simple IMDb Search</h1>
          <Search></Search>
        </header>
    )
}

export default Header;