import { RegularText } from '../../../../Components/Typography';
import { useCartContext } from '../../../../Hooks/useCartContext';
import { formatMoney } from '../../../../Utils/format';
import { TotalOrderSectionContainer } from './styles';

export function TotalOrderSection() {
  const { cartItemsTotal } = useCartContext();

  const totalItemsInCartFormatted = formatMoney.format(cartItemsTotal);

  const deliveryValue = cartItemsTotal <= 50 ? 3.9 : 0;

  const deliveryValueFormatted = formatMoney.format(deliveryValue);

  const totalToPay = cartItemsTotal + deliveryValue;

  const totalToPayFormatted = formatMoney.format(totalToPay);

  return (
    <TotalOrderSectionContainer>
      <div>
        <RegularText size='s'>Total items</RegularText>
        <RegularText>{totalItemsInCartFormatted}</RegularText>
      </div>
      <div>
        <RegularText size='s'>Delivery</RegularText>
        <RegularText>{deliveryValueFormatted}</RegularText>
      </div>
      <div>
        <RegularText size='l' weight={700} color='subtitle'>
          Total Order
        </RegularText>
        <RegularText size='l' weight={700} color='subtitle'>
          {totalToPayFormatted}
        </RegularText>
      </div>
    </TotalOrderSectionContainer>
  );
}
