import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../assets/styles/EditBook.scss";

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    cover: "",
    description: "",
    isDestaque: false,
    genres: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetch(`http://localhost:5000/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar o livro");
        return res.json();
      })
      .then((data) => {
        setForm({
          title: data.title || "",
          author: data.author || "",
          price: data.price || "",
          cover: data.cover || "",
          description: data.description || "",
          isDestaque: data.isDestaque || false,
          genres: data.genres || [],
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "isDestaque" ? value === "true" : value,
    }));
  };

  const handleGenresChange = (e) => {
    const genresArray = e.target.value
      .split(",")
      .map((g) => g.trim())
      .filter(Boolean);
    setForm((prev) => ({ ...prev, genres: genresArray }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = id ? "PATCH" : "POST";
    const url = id
      ? `https://bookbay-backend.onrender.com/books/${id}`
      : "https://bookbay-backend.onrender.com/books";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Erro ao salvar o livro");
      }
      navigate("/admin");
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Carregando livro...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-form-container">
      <h1>{id ? "Editar Livro" : "Adicionar Novo Livro"}</h1>
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Título"
          value={form.title}
          onChange={handleInputChange}
          required
        />
        <input
          name="author"
          placeholder="Autor"
          value={form.author}
          onChange={handleInputChange}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Preço"
          value={form.price}
          onChange={handleInputChange}
          required
          step="0.01"
          min="0"
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
        <input
          name="genres"
          placeholder="Gêneros (separados por vírgula)"
          value={form.genres.join(", ")}
          onChange={handleGenresChange}
        />
        <select
          name="isDestaque"
          value={form.isDestaque.toString()}
          onChange={handleInputChange}
        >
          <option value="false">Não é destaque</option>
          <option value="true">É destaque</option>
        </select>
        <button type="submit">{id ? "Atualizar" : "Adicionar"}</button>
      </form>
    </div>
  );
};

export default BookForm;
