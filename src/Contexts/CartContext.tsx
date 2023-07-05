import { ReactNode, createContext, useEffect, useState } from 'react';
import { Coffee } from '../Pages/Home/Components/CoffeeCards';
import { produce } from 'immer';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  removeItemInCart: (cartItemId: number) => void;
  clearCartItems: () => void;
  quantityCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void;
}

const COFFEE_ITEMS_KEY = '@ignite:coffeeDelivery-v1.0.0';

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = JSON.parse(localStorage.getItem(COFFEE_ITEMS_KEY)!);

    if (storedCartItems) {
      return storedCartItems;
    }

    return [];
  });

  const cartQuantity = cartItems.length;
  const cartItemsTotal = cartItems.reduce((acc, cartItem) => {
    acc += cartItem.price * cartItem.quantity;
    return acc;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function clearCartItems() {
    setCartItems([]);
  }

  function quantityCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeItemInCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeeToCart,
        quantityCartItemQuantity,
        removeItemInCart,
        clearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
