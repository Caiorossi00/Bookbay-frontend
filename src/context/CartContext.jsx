import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    if (cart.some((item) => item.id === book.id)) {
      toast.warn("Este livro já está no carrinho!");
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

    toast.success("Adicionado ao carrinho!");
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removido do carrinho.");
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
