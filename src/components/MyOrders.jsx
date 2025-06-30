import React, { useEffect, useState } from "react";
import "../assets/styles/MyOrders.scss";

function decodeJwt(token) {
  if (!token) return null;
  const base64Url = token.split(".")[1];
  if (!base64Url) return null;
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  try {
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = decodeJwt(token);

    if (!user) {
      setError("Usuário não autenticado");
      setLoading(false);
      return;
    }

    fetch(
      `https://bookbay-backend.onrender.com/orders/pedidos?userId=${user.id}`
    )
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

  if (loading) return <p>Carregando pedidos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="my-orders">
      {pedidos.length === 0 ? (
        <p>Você ainda não fez nenhum pedido.</p>
      ) : (
        <ul className="my-orders-list">
          {pedidos.map((pedido) => (
            <li key={pedido._id} className="order-item">
              <p>
                <strong>Total:</strong> R$ {pedido.total}
              </p>
              <p>
                <strong>Produtos:</strong>
              </p>
              <ul className="produtos-list">
                {pedido.produtos.map((produto, i) => (
                  <li key={i} className="produto-item">
                    {produto.foto && (
                      <img src={produto.foto} alt={produto.title} />
                    )}
                    <div>
                      <p>
                        <strong>{produto.title}</strong>
                      </p>
                      <p>R$ {produto.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
