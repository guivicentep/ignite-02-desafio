import { ShoppingCart } from 'phosphor-react';

import { QuantityInput } from '../../../../Components/QuantityInput';
import { RegularText, TitleText } from '../../../../Components/Typography';
import {
  AddCartWrapper,
  CardFooterContainer,
  CoffeeCardsContainer,
  DescriptionCoffee,
  NameCoffee,
  Tags,
} from './styles';
import { formatNumber } from '../../../../Utils/format';
import { useCartContext } from '../../../../Hooks/useCartContext';
import { useState } from 'react';

import americano from '../../../../assets/americano.png'

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCards({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  function handleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  function handleIncrease() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrease() {
    if (quantity === 1) {
      return null;
    }
    setQuantity((prev) => prev - 1);
  }

  return (
    <CoffeeCardsContainer>
      <img
        src={coffee.photo}
        alt=''
      />
      <Tags>
        {coffee.tags.map((tag) => {
          return <span>{tag}</span>;
        })}
      </Tags>
      
      <NameCoffee>{coffee.name}</NameCoffee>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>
      <CardFooterContainer>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>
            {formatNumber.format(coffee.price)}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddCoffeeToCart}>
            <ShoppingCart weight='fill' size={22} />
          </button>
        </AddCartWrapper>
      </CardFooterContainer>
    </CoffeeCardsContainer>
  );
}
