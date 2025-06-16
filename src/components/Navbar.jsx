import React from "react";
import logo from "../assets/BookBay.png";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  const { cart } = useCart();

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
            <a href="/admin">Admin</a>
          </li>
          <li>
            <a href="/carrinho" className="cart-link">
              <FaShoppingCart size={18} color="#333" />
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
