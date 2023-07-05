import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../Components/QuantityInput';
import { RegularText } from '../../../../Components/Typography';
import {
  ActionsContainer,
  CardCoffeeCartContainer,
  RemoveButton,
} from './styles';
import { CartItem } from '../../../../Contexts/CartContext';
import { formatMoney } from '../../../../Utils/format';
import { useCartContext } from '../../../../Hooks/useCartContext';

interface CardCoffeeCartProps {
  coffee: CartItem;
}

export function CardCoffeeCart({ coffee }: CardCoffeeCartProps) {
  const { quantityCartItemQuantity, removeItemInCart } = useCartContext();

  const coffeeTotal = coffee.quantity * coffee.price;
  const formattedPrice = formatMoney.format(coffeeTotal);

  function handleIncrease() {
    quantityCartItemQuantity(coffee.id, 'increase');
  }

  function handleDecrease() {
    quantityCartItemQuantity(coffee.id, 'decrease');
  }

  function handleRemoveItemInCart() {
    removeItemInCart(coffee.id);
  }

  return (
    <CardCoffeeCartContainer>
      <div>
        <img
          src='https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1672617600&Signature=o5HQ7rktxEAPlsaiMfosMhEMBPH7WWxfdUa~QIAOB~2AY8XDsGGPIIGeYUQglzpQeIZjWDTeONJylTJvI8wjInPfgeZUEOt3LTKJbXWsHz2U1K49q0q2NbsdYjBkRsX00P5J5-4WFu47KEHl1nueeuO7zBmJndp14pxPHh8NIZDKwL0w2MlMuvybJxkuXqqo3BzrFjHCdgglzieXBt7GntOQP~rkczIiG00cxcg5-WnBqdoDyefNfnhQtlo1hhyHKFZzdwDo3Mj2XeVXp7ynSMk~fy6IQkqbtNLTdvnyGF6h3zozJZYsrikDYTI7QVywGLDcMFK0BT5eqAl7QRDddg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt=''
        />
        <div>
          <RegularText color='subtitle'>{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size='small'
              quantity={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <RemoveButton onClick={handleRemoveItemInCart}>
              <Trash size={16} />
              Remove item
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>{formattedPrice}</p>
    </CardCoffeeCartContainer>
  );
}
