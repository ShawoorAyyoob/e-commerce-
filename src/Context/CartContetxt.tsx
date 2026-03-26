import {createContext, useContext, useState, type ReactNode } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type Item = {
  id: number;
  title: string;
  price: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Item) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = (props: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

const addToCart = (item: { id: number; title: string; price: number }) => {
  setCart((prev) => {
    const found = prev.find((c) => c.id === item.id);
    if (found) {
        return prev.map((c)=>
            c.id == item.id? {...c, quantity: c. quantity + 1} :c
   ); }
   return[...prev, {...item, quantity: 1}];
  });
};

const clearCart = ()=> setCart([]);

return (
     <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {props.children}
    </CartContext.Provider>
)
};
export default CartContext;