import React, { useState, useEffect } from "react";
import "../../assets/styles/Orders.scss";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar pedidos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando pedidos...</p>;
  }

  if (orders.length === 0) {
    return <p>Nenhum pedido encontrado.</p>;
  }

  return (
    <div className="orders">
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <p>
              <strong>Nome:</strong> {order.nome}
            </p>
            <p>
              <strong>Email:</strong> {order.email}
            </p>
            <p>
              <strong>Endereço:</strong> {order.rua}, {order.bairro}, Nº{" "}
              {order.numero} {order.complemento && `- ${order.complemento}`}
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
          </li>
        ))}
      </ul>
    </div>
  );
}
