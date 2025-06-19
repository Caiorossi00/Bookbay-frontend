import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/BookBay.png";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo Bookbay" />
      </Link>
      <ul>
        <div className="nav-left">
          <li>
            <Link to="/">Início</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/pedidos" className="orders-link" title="Meus Pedidos">
                Meus Pedidos
              </Link>
            </li>
          )}
        </div>

        <div className="nav-right">
          {isLoggedIn && (
            <li>
              <Link to="/carrinho" className="cart-link">
                <FaShoppingCart size={18} color="#333" />
                {cart.length > 0 && (
                  <span className="cart-count">{cart.length}</span>
                )}
              </Link>
            </li>
          )}

          {isLoggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="logout-button"
                title="Sair"
              >
                <FiLogOut size={18} color="#333" />
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="login-link" title="Entrar">
                Entrar
              </Link>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
