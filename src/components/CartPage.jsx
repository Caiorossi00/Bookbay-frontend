import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <p>O carrinho está vazio.</p>;

  return (
    <div>
      <h1>Seu Carrinho</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>
            R${" "}
            {isNaN(item.price) ? "Indisponível" : Number(item.price).toFixed(2)}
          </p>
          <button onClick={() => removeFromCart(item.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
}
