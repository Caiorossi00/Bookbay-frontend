import React, { useState, useEffect } from "react";
import "../../assets/styles/Orders.scss";
import { API_URL } from "../../config";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que quer excluir este pedido?")) {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Você precisa estar logado para excluir um pedido.");
        return;
      }

      try {
        const response = await fetch(`${API_URL}/orders/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          alert(
            `Erro ao excluir pedido: ${errorData.error || response.statusText}`
          );
          return;
        }

        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== id)
        );
      } catch (error) {
        alert("Erro na conexão. Tente novamente mais tarde.");
        console.error("Erro ao excluir pedido:", error);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token de autenticação não encontrado.");
      setLoading(false);
      return;
    }

    fetch(`${API_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar pedidos.");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          throw new Error("Formato inválido dos dados recebidos.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Erro desconhecido");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="no-orders">Carregando pedidos...</p>;
  if (error) return <p className="no-orders">{error}</p>;
  if (!Array.isArray(orders) || orders.length === 0) {
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
                  {Array.isArray(order.produtos) &&
                    order.produtos.map((produto, index) => (
                      <li key={index} className="product-item">
                        {produto.cover && (
                          <img src={produto.cover} alt={produto.title} />
                        )}
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
