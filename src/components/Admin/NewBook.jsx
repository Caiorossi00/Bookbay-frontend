import React, { useState } from 'react';

const NewBook = () => {
  const [newBook, setNewBook] = useState({
    id: '',  // O ID será gerado aqui
    title: '',
    author: '',
    price: '',
    cover: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gerar um ID aleatório para o livro
    const randomId = Math.floor(Math.random() * 1000000); // Pode ser ajustado conforme necessário

    // Adicionar o ID ao novo livro
    const bookWithId = { ...newBook, id: randomId };

    // Enviar o livro para o backend via POST
    const response = await fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookWithId),
    });

    if (response.ok) {
      alert('Livro adicionado com sucesso!');
      setNewBook({
        id: '', // Reset ID após o envio
        title: '',
        author: '',
        price: '',
        cover: '',
        description: '',
      });
    } else {
      alert('Erro ao adicionar o livro.');
    }
  };

  return (
    <div>
      <h1>Adicionar Novo Livro</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Adicionar Livro</button>
      </form>
    </div>
  );
};

export default NewBook;
