import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/CartForm.scss";

export default function CartForm({ cart }) {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const [pedido, setPedido] = useState({
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    pagamento: "",
  });

  const [loading, setLoading] = useState(false);

  const validateNumero = (value) => /^\d*$/.test(value);
  const validateCep = (value) => /^[0-9\-]*$/.test(value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "numero" && !validateNumero(value)) return;
    if (name === "cep" && !validateCep(value)) return;

    setPedido((prev) => ({ ...prev, [name]: value }));
  };

  const decodeJwt = (token) => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { cep, rua, bairro, numero, complemento, pagamento } = pedido;

    if (!cep || !rua || !bairro || !numero || !pagamento) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    if (cart.length === 0) {
      alert("O carrinho está vazio.");
      return;
    }

    const token = localStorage.getItem("token");
    const user = decodeJwt(token);

    if (!user) {
      alert("Usuário não autenticado.");
      return;
    }

    const total = cart
      .reduce((acc, item) => acc + Number(item.price), 0)
      .toFixed(2);

    const pedidoCompleto = {
      usuarioId: user.id,
      nome: user.nome,
      email: user.email,
      cep,
      rua,
      bairro,
      numero,
      complemento,
      pagamento,
      produtos: cart.map((item) => ({
        title: item.title,
        price: item.price,
      })),
      total,
    };

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedidoCompleto),
      });

      if (!response.ok) throw new Error("Erro ao enviar pedido");

      alert("Pedido enviado com sucesso!");

      setPedido({
        cep: "",
        rua: "",
        bairro: "",
        numero: "",
        complemento: "",
        pagamento: "",
      });

      clearCart();

      navigate("/pedidos");
    } catch (error) {
      alert(error.message || "Erro ao enviar pedido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="headline-form">Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="CEP"
          name="cep"
          value={pedido.cep}
          onChange={handleChange}
          type="tel"
          maxLength={9}
          disabled={loading}
        />
        <input
          placeholder="Rua"
          name="rua"
          value={pedido.rua}
          onChange={handleChange}
          type="text"
          disabled={loading}
        />
        <input
          placeholder="Bairro"
          name="bairro"
          value={pedido.bairro}
          onChange={handleChange}
          type="text"
          disabled={loading}
        />
        <input
          placeholder="Número"
          name="numero"
          value={pedido.numero}
          onChange={handleChange}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          disabled={loading}
        />
        <input
          placeholder="Complemento (opcional)"
          name="complemento"
          value={pedido.complemento}
          onChange={handleChange}
          type="text"
          disabled={loading}
        />

        <div className="payment-method">
          <h3>Meio de pagamento</h3>
          <div>
            <label>
              <input
                type="radio"
                name="pagamento"
                value="Pix"
                checked={pedido.pagamento === "Pix"}
                onChange={handleChange}
                disabled={loading}
              />
              Pix
            </label>
            <label>
              <input
                type="radio"
                name="pagamento"
                value="Boleto"
                checked={pedido.pagamento === "Boleto"}
                onChange={handleChange}
                disabled={loading}
              />
              Boleto
            </label>
          </div>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Comprar"}
        </button>
      </form>
    </>
  );
}
