import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { TitleText } from '../../../../Components/Typography';
import { SectionTitle } from '../SectionTitle';
import { CheckoutFormContainer, FormSectionContainer } from './styles';
import { useTheme } from 'styled-components';
import { AddressForm } from './AddressForm';
import { PaymentOptions } from './Paymentoptions';

export function CheckoutForm() {
  const { colors } = useTheme();

  return (
    <CheckoutFormContainer>
      <TitleText size='xs' color='subtitle'>
        Finish your order
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title='Address delivery'
          subtitle='Inform your address to delivery'
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title='Payment option'
          subtitle='Inform a payment method'
          icon={
            <CurrencyDollar size={22} color={colors['brand-purple-dark']} />
          }
        />
        <PaymentOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  );
}
