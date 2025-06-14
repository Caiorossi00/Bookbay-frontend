import React, { useState } from "react";
import "../../assets/styles/CartForm.scss";

export default function CartForm({ cart, onSubmit }) {
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [email, setEmail] = useState("");

  const validateNumero = (value) => {
    return /^\d*$/.test(value);
  };

  const validateCep = (value) => {
    return /^[0-9\-]*$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

    if (!validateNumero(numero)) {
      alert("Número da casa inválido. Use apenas números.");
      return;
    }

    if (!validateCep(cep)) {
      alert("CEP inválido. Use apenas números e hífen.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email inválido.");
      return;
    }

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
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="CEP"
          value={cep}
          onChange={(e) => {
            if (validateCep(e.target.value)) setCep(e.target.value);
          }}
          type="tel"
          maxLength={9}
        />
        <input
          placeholder="Rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          type="text"
        />
        <input
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          type="text"
        />
        <input
          placeholder="Número"
          value={numero}
          onChange={(e) => {
            if (/^\d*$/.test(e.target.value)) setNumero(e.target.value);
          }}
          type="text"
          inputMode="numeric"
          pattern="\d*"
        />

        <input
          placeholder="Complemento (opcional)"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
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
                checked={pagamento === "Pix"}
                onChange={(e) => setPagamento(e.target.value)}
              />
              Pix
            </label>
            <label>
              <input
                type="radio"
                name="pagamento"
                value="Boleto"
                checked={pagamento === "Boleto"}
                onChange={(e) => setPagamento(e.target.value)}
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
