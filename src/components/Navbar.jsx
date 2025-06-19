import React, { useEffect, useState } from "react";
import logo from "../assets/BookBay.png";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import "../assets/styles/Navbar.scss";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("O usuário está logado");
        setIsLoggedIn(true);
      } else {
        console.log("Usuário não está logado");
        setIsLoggedIn(false);
      }
    };

    checkToken();
    const interval = setInterval(checkToken, 3000);

    return () => clearInterval(interval);
  }, []);

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
        <li>
          <Link to="/">Início</Link>
        </li>

        <div className="nav-right">
          <li>
            <Link to="/carrinho" className="cart-link">
              <FaShoppingCart size={18} color="#333" />
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </Link>
          </li>

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
