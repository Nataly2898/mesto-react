import React from "react";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Логотип сайта Mesto" className="header__logo"/>
    </header>
  );
}

export default Header;