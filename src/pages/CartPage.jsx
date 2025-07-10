import { useCart } from "../context/CartContext";
import "../assets/styles/CartPage.scss";
import { useState } from "react";
import CartModal from "../components/Cart/CartModal";
import LoginPromptModal from "../components/Cart/LoginPromptModal";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  if (cart.length === 0)
    return <p className="empty-cart">O seu carrinho ainda está vazio.</p>;

  const handleCheckoutClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginModal(true);
      return;
    }
    setIsOpen(true);
  };

  return (
    <div className="cart-page">
      <h1>Seu Carrinho</h1>

      <div className="container-cartPage">
        <div className="cart-display">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.cover}
                alt={`Capa do livro ${item.title}`}
                className="cart-item-cover"
              />
              <div className="cart-item-info">
                <div>
                  <h2>{item.title}</h2>
                  <p className="author-cart">{item.author}</p>
                  <p>
                    R${" "}
                    {isNaN(item.price)
                      ? "Indisponível"
                      : Number(item.price).toFixed(2)}
                  </p>
                </div>
                <div>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Resumo do Pedido</h2>
          <div className="order-summary-details">
            <p>
              Total: R${" "}
              {cart
                .reduce((acc, item) => acc + Number(item.price), 0)
                .toFixed(2)}
            </p>
          </div>
          <button className="checkout-button" onClick={handleCheckoutClick}>
            Finalizar Compra
          </button>
        </div>
      </div>

      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} cart={cart} />
      <LoginPromptModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </div>
  );
}
