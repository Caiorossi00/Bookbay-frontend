import React, { useState, useEffect } from "react";
import "../../assets/styles/Orders.scss";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que quer excluir este pedido?")) {
      try {
        await fetch(`https://bookbay-backend.onrender.com/orders/${id}`, {
          method: "DELETE",
        });
        setOrders(orders.filter((order) => order._id !== id));
      } catch (error) {
        console.error("Erro ao excluir pedido:", error);
      }
    }
  };

  useEffect(() => {
    fetch("https://bookbay-backend.onrender.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Erro ao carregar pedidos:", error));
  }, []);

  if (orders.length === 0) {
    return <p className="no-orders">Nenhum pedido encontrado.</p>;
  }

  return (
    <div className="orders">
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order._id} className="order-item">
            <div className="order-container">
              <div className="order-details">
                <button onClick={() => handleDelete(order._id)}>×</button>
                <p>
                  <strong>User ID:</strong> {order.usuarioId}
                </p>
                <p>
                  <strong>Nome:</strong> {order.nome}
                </p>
                <p>
                  <strong>Contato:</strong> {order.contato}
                </p>
                <p>
                  <strong>Endereço:</strong> {order.rua}, {order.bairro}, Nº{" "}
                  {order.numero}
                  {order.complemento && ` - ${order.complemento}`}
                </p>
                <p>
                  <strong>CEP:</strong> {order.cep}
                </p>
                <p>
                  <strong>Pagamento:</strong> {order.pagamento}
                </p>
                <p>
                  <strong>Total:</strong> R$ {order.total}
                </p>
              </div>
              <div>
                <ul className="product-list">
                  {order.produtos.map((produto, index) => (
                    <li key={index} className="product-item">
                      {produto.cover && (
                        <img src={produto.cover} alt={produto.title} />
                      )}
                      {produto.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
