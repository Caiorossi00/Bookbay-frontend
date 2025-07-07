import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import { FiPackage } from "react-icons/fi";
import "../assets/styles/MyOrders.scss";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Usuário não autenticado");
      setLoading(false);
      return;
    }

    fetch(`${API_URL}/orders/pedidos`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar pedidos");
        return res.json();
      })
      .then((data) => {
        setPedidos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="no-orders">Carregando pedidos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="my-orders">
      <h1>Meus Pedidos</h1>
      <div className="container-orders">
        {pedidos.length === 0 ? (
          <p className="no-orders">Você ainda não fez nenhum pedido.</p>
        ) : (
          pedidos.map((pedido, i) => (
            <div key={pedido._id} className="order">
              <div className="order-header">
                <div className="order-index">#{i + 1}</div>
                <div className="order-id">
                  <FiPackage className="order-icon" />
                  {pedido._id}
                </div>
              </div>

              <div className="order-body">
                {pedido.produtos.map((produto, j) => (
                  <div key={j} className="product">
                    {produto.cover && (
                      <img src={produto.cover} alt={produto.title} />
                    )}
                    <div className="product-info">
                      <p className="product-title">{produto.title}</p>
                      <p className="product-author">Resgatar Autor</p>
                      <p className="product-price">R$ {produto.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <h3>Total: R$ {pedido.total}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
