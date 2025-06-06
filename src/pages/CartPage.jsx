import { useCart } from "../context/CartContext";
import "../assets/styles/CartPage.scss";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0)
    return <p className="empty-cart">O seu carrinho ainda está vazio.</p>;

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
          <button className="checkout-button">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}
