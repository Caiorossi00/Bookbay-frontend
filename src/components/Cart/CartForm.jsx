import React, { useState } from "react";
import "../../assets/styles/CartForm.scss";

export default function CartForm({ cart, onSubmit }) {
  const [pedido, setPedido] = useState({
    nome: "",
    email: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    complemento: "",
    pagamento: "",
  });

  const validateNumero = (value) => /^\d*$/.test(value);

  const validateCep = (value) => /^[0-9\-]*$/.test(value);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "numero" && !validateNumero(value)) return;
    if (name === "cep" && !validateCep(value)) return;

    setPedido((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nome, email, cep, rua, bairro, numero, complemento, pagamento } =
      pedido;

    if (
      !nome.trim() ||
      !cep.trim() ||
      !rua.trim() ||
      !bairro.trim() ||
      !numero.trim() ||
      !pagamento ||
      !email.trim()
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email inválido.");
      return;
    }

    console.log("Pedido para envio:", pedido);

    const produtos = cart.map((item) => item.title).join(", ");

    const total = cart
      .reduce((acc, item) => acc + Number(item.price), 0)
      .toFixed(2);

    const message =
      `Quero comprar os seguintes livros:%0A${produtos}%0AValor total: R$ ${total}%0A%0A` +
      `Nome completo: ${nome}%0A` +
      `CEP: ${cep}%0A` +
      `Endereço: ${rua}, ${bairro}, Nº ${numero}` +
      (complemento ? `, Complemento: ${complemento}` : "") +
      `%0AMeio de pagamento: ${pagamento}%0A` +
      `Email: ${email}`;

    onSubmit?.(message);
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
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={pedido.email}
          onChange={handleChange}
        />
        <input
          placeholder="CEP"
          name="cep"
          value={pedido.cep}
          onChange={handleChange}
          type="tel"
          maxLength={9}
        />
        <input
          placeholder="Rua"
          name="rua"
          value={pedido.rua}
          onChange={handleChange}
          type="text"
        />
        <input
          placeholder="Bairro"
          name="bairro"
          value={pedido.bairro}
          onChange={handleChange}
          type="text"
        />
        <input
          placeholder="Número"
          name="numero"
          value={pedido.numero}
          onChange={handleChange}
          type="text"
          inputMode="numeric"
          pattern="\d*"
        />
        <input
          placeholder="Complemento (opcional)"
          name="complemento"
          value={pedido.complemento}
          onChange={handleChange}
          type="text"
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
              />
              Boleto
            </label>
          </div>
        </div>

        <button type="submit">Comprar</button>
      </form>
    </>
  );
}
