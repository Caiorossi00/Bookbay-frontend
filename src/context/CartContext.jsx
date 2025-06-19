import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    if (cart.some((item) => item.id === book.id)) {
      alert("Este livro já está no carrinho!");
      return;
    }

    const precoNumero = Number(book.price.replace(",", "."));
    setCart((prev) => {
      const newCart = [...prev, { ...book, price: precoNumero }];
      console.log(
        "Itens no carrinho após adição:",
        newCart.map((item) => item.title)
      );
      return newCart;
    });

    alert("Adicionado ao carrinho!");
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
