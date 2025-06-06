import React, { useState } from "react";
import "../../styles/NewBook.scss";

const NewBook = () => {
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    author: "",
    price: "",
    cover: "",
    description: "",
    isDestaque: false,
  });

  const [genresInput, setGenresInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "genres") {
      setGenresInput(value);
    } else {
      setNewBook((prev) => ({
        ...prev,
        [name]: name === "isDestaque" ? value === "true" : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const genresArray = genresInput
      .split(",")
      .map((g) => g.trim())
      .filter((g) => g.length > 0);

    const randomId = Math.floor(Math.random() * 1000000);
    const bookWithId = { ...newBook, id: randomId, genres: genresArray };

    const response = await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookWithId),
    });

    if (response.ok) {
      alert("Livro adicionado com sucesso!");
      setNewBook({
        id: "",
        title: "",
        author: "",
        price: "",
        cover: "",
        description: "",
        isDestaque: false,
      });
      setGenresInput("");
    } else {
      alert("Erro ao adicionar o livro.");
    }
  };

  return (
    <div className="new-book-container">
      <h1>Adicionar Novo Livro</h1>
      <form className="new-book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newBook.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={newBook.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Preço"
          value={newBook.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cover"
          placeholder="Capa (URL)"
          value={newBook.cover}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Descrição"
          value={newBook.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genres"
          placeholder="Gêneros (separados por vírgula)"
          value={genresInput}
          onChange={handleChange}
        />
        <select
          name="isDestaque"
          value={newBook.isDestaque}
          onChange={handleChange}
        >
          <option value={false}>Não é destaque</option>
          <option value={true}>É destaque</option>
        </select>

        <button type="submit">Adicionar Livro</button>
      </form>
    </div>
  );
};

export default NewBook;
