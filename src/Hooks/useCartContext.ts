import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

export function useCartContext() {
  return useContext(CartContext);
}
