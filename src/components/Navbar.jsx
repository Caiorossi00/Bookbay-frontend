import React from "react";
import logo from "../assets/BookBay.png";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo Bookbay" />
      </a>
      <ul>
        <li>
          <a href="/">Início</a>
        </li>

        <div className="nav-right">
          <li>
            <a href="/carrinho">Carrinho</a>
          </li>
          <li>
            <a href="/admin">Admin</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
