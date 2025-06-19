import React from "react";
import logo from "../assets/BookBay.png";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import * as jwt_decode from "jwt-decode";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  let role = null;
  if (token) {
    try {
      const decoded = jwt_decode(token);
      role = decoded.role;
    } catch {
      role = null;
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

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
            <a href="/carrinho" className="cart-link">
              <FaShoppingCart size={18} color="#333" />
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </a>
          </li>

          {!token && (
            <li>
              <a href="/register">Registrar</a>
            </li>
          )}

          {token && role === "admin" && (
            <li>
              <a href="/admin">Admin</a>
            </li>
          )}

          {token && (
            <li>
              <button
                onClick={handleLogout}
                className="logout-button"
                title="Sair"
              >
                <FiLogOut size={18} color="#333" />
              </button>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
