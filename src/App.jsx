import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [form, setForm] = useState({
    title: '',
    author: '',
    price: '',
    cover: '',
    description: ''
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:3000/books');
    const data = await response.json();
    setBooks(data);
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
  
    const newId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  
    const newBook = {
      id: newId,
      ...form
    };
  
    await fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    });
  
    setForm({ title: '', author: '', price: '', cover: '', description: '' });
    setIsAdding(false);
    fetchBooks();
  };
  

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/books/${editingBook.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setEditingBook(null);
    setForm({ title: '', author: '', price: '', cover: '', description: '' });
    fetchBooks();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/books/${id}`, {
      method: 'DELETE',
    });
    fetchBooks();
  };

  const startEdit = (book) => {
    setEditingBook(book);
    setForm(book);
  };

  return (
    <div>
      <h1>Admin - Gerenciamento de Livros</h1>

      {isAdding && (
        <div>
          <h3>Adicionar Novo Livro</h3>
          <form onSubmit={handleAddSubmit}>
            <input name="title" placeholder="Título" value={form.title} onChange={handleInputChange} />
            <input name="author" placeholder="Autor" value={form.author} onChange={handleInputChange} />
            <input name="price" type="number" placeholder="Preço" value={form.price} onChange={handleInputChange} />
            <input name="cover" placeholder="URL da Capa" value={form.cover} onChange={handleInputChange} />
            <textarea name="description" placeholder="Descrição" value={form.description} onChange={handleInputChange} />
            <button type="submit">Adicionar</button>
            <button type="button" onClick={() => setIsAdding(false)}>Cancelar</button>
          </form>
        </div>
      )}

      {editingBook && (
        <div>
          <h3>Editar Livro</h3>
          <form onSubmit={handleEditSubmit}>
            <input name="title" placeholder="Título" value={form.title} onChange={handleInputChange} />
            <input name="author" placeholder="Autor" value={form.author} onChange={handleInputChange} />
            <input name="price" type="number" placeholder="Preço" value={form.price} onChange={handleInputChange} />
            <input name="cover" placeholder="URL da Capa" value={form.cover} onChange={handleInputChange} />
            <textarea name="description" placeholder="Descrição" value={form.description} onChange={handleInputChange} />
            <button type="submit">Atualizar</button>
            <button type="button" onClick={() => setEditingBook(null)}>Cancelar</button>
          </form>
        </div>
      )}

      {!isAdding && !editingBook && (
        <div>
          <button onClick={() => setIsAdding(true)}>Adicionar Livro</button>
          <div style={{ marginTop: '20px' }}>
            {books.length === 0 ? (
              <p>Nenhum livro encontrado.</p>
            ) : (
              books.map((book) => (
                <div key={book.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                  <h3>{book.title}</h3>
                  <p><strong>Autor:</strong> {book.author}</p>
                  <p><strong>Preço:</strong> R$ {book.price}</p>
                  {book.cover && <img src={book.cover} alt={book.title} style={{ width: '100px' }} />}
                  <p>{book.description}</p>
                  <button onClick={() => startEdit(book)}>Editar</button>
                  <button onClick={() => handleDelete(book.id)}>Excluir</button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
