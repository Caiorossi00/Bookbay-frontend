import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/CartForm.scss";
import { API_URL } from "../../config";

export default function CartForm({ cart }) {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const [pedido, setPedido] = useState({
    nome: "",
    contato: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    pagamento: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "numero" && !/^\d*$/.test(value)) return;

    if (name === "cep") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 8);
      setPedido((prev) => ({ ...prev, cep: onlyDigits }));
      return;
    }

    if (name === "contato") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 15);
      setPedido((prev) => ({ ...prev, contato: onlyDigits }));
      return;
    }

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

    const { nome, contato, cep, rua, bairro, numero, complemento, pagamento } =
      pedido;

    if (!nome || !contato || !cep || !rua || !bairro || !numero || !pagamento) {
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
      nome,
      contato,
      cep,
      rua,
      bairro,
      numero,
      complemento,
      pagamento,
      produtos: cart.map((item) => item._id),
      total,
    };

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(pedidoCompleto),
      });

      if (!response.ok) throw new Error("Erro ao enviar pedido");

      alert("Pedido enviado com sucesso!");

      setPedido({
        nome: "",
        contato: "",
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
          placeholder="Nome completo"
          name="nome"
          value={pedido.nome}
          onChange={handleChange}
          type="text"
          disabled={loading}
        />
        <input
          placeholder="Whatsapp (com DDD)"
          name="contato"
          value={pedido.contato}
          onChange={handleChange}
          type="tel"
          maxLength={15}
          disabled={loading}
        />
        <input
          placeholder="CEP"
          name="cep"
          value={pedido.cep}
          onChange={handleChange}
          type="tel"
          maxLength={8}
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
          {loading ? "Enviando..." : "Confirmar Pedido"}
        </button>
      </form>
    </>
  );
}
