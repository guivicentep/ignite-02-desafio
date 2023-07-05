import { Button } from '../../../../Components/Button';
import { TitleText } from '../../../../Components/Typography';
import { useCartContext } from '../../../../Hooks/useCartContext';
import { CoffeeCards } from '../../../Home/Components/CoffeeCards';
import { CardCoffeeCart } from '../CardCoffeeCart';
import { TotalOrderSection } from './TotalOrderSection';
import { DetailsContainer, SelectedCoffeesContainer } from './styles';

export function SelectedCoffees() {
  const { cartItems } = useCartContext();

  return (
    <SelectedCoffeesContainer>
      <TitleText size='xs' color='subtitle'>
        Selected Coffees
      </TitleText>

      <DetailsContainer>
        {cartItems.map((cartItem) => {
          return <CardCoffeeCart coffee={cartItem} key={cartItem.id} />;
        })}

        <TotalOrderSection />
        <Button
          type='submit'
          text='Confirm order'
          disabled={cartItems.length === 0}
        />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
