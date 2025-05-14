import React from "react";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <h1>Bookbay</h1>
      <ul>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
