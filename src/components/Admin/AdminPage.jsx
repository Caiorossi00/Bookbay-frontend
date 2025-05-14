import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AdminPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    cover: "",
    description: "",
    isDestaque: false,
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/books/${id}`)
        .then((response) => response.json())
        .then((data) => setForm(data));
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "isDestaque" ? value === "true" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? "PUT" : "POST";
    const url = id
      ? `http://localhost:3000/books/${id}`
      : "http://localhost:3000/books";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    navigate("/admin");
  };

  return (
    <div>
      <h1>{id ? "Editar Livro" : "Adicionar Novo Livro"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleInputChange}
        />
        <input
          name="author"
          placeholder="Autor"
          value={form.author}
          onChange={handleInputChange}
        />
        <input
          name="price"
          type="number"
          placeholder="Preço"
          value={form.price}
          onChange={handleInputChange}
        />
        <input
          name="cover"
          placeholder="URL da Capa"
          value={form.cover}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Descrição"
          value={form.description}
          onChange={handleInputChange}
        />
        <select
          name="isDestaque"
          value={form.isDestaque}
          onChange={handleInputChange}
        >
          <option value={false}>Não é destaque</option>
          <option value={true}>É destaque</option>
        </select>
        <button type="submit">{id ? "Atualizar" : "Adicionar"}</button>
      </form>
    </div>
  );
};

export default AdminPage;
