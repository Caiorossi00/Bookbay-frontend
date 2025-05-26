import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/BookPage.scss";

export default function BookPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/books/${id}`);
        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!book) return <p>Livro não encontrado.</p>;

  const precoNumero = Number(book.price.replace(",", "."));

  return (
    <div className="container-bookPage">
      <div className="bookpage-image">
        <img src={book.cover} alt={book.title} />
      </div>

      <div className="bookpage-details">
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <p className="bookpage-price">
          R$ {isNaN(precoNumero) ? "Indisponível" : precoNumero.toFixed(2)}
        </p>
        <div className="bookpage-description">
          <h5>Descrição</h5>
          <p>{book.description}</p>
        </div>
        <button onClick={() => addToCart(book)}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
