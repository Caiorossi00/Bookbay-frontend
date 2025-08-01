import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const SHIPPING_FEE = 30;
const SHIPPING_THRESHOLD = 149;

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
      toast.warn("This book is already in the cart!");
      return;
    }

    const priceNumber = Number(book.price.replace(",", "."));
    setCart((prev) => {
      const newCart = [...prev, { ...book, price: priceNumber }];
      console.log(
        "Items in cart after addition:",
        newCart.map((item) => item.title)
      );
      return newCart;
    });

    toast.success("Added to cart!");
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from cart.");
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotals = () => {
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const shippingFee =
      subtotal > 0 && subtotal < SHIPPING_THRESHOLD ? SHIPPING_FEE : 0;
    const total = subtotal + shippingFee;

    return {
      subtotal,
      shippingFee,
      total,
    };
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getCartTotals }}
    >
      {children}
    </CartContext.Provider>
  );
};
