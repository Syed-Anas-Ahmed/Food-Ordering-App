import { CartItem, Product } from "@/types";
import { createContext, useContext, useState } from "react";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (id: string, quantity: 1 | -1) => void;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    const newCartItem: CartItem = {
      id: (Math.floor(Math.random() * 9000) + 1000).toString(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    const existingItem = items.find(
      (item) =>
        item.product_id === newCartItem.product_id &&
        item.size === newCartItem.size
    );
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }
  };

  const updateQuantity = (id: string, amount: 1 | -1) => {
    console.log(id, amount);
    setItems(
      items
        .map((item) =>
          item.id !== id ? item : { ...item, quantity: item.quantity + amount }
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

export const useCart = () => useContext(CartContext);
