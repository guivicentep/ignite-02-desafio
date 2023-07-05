import { Bank, CreditCard, Money } from 'phosphor-react';
import { PaymentOptionsContainer } from './styles';
import { useFormContext } from 'react-hook-form';
import { PaymentOption } from '../PaymentOption';
import { RegularText } from '../../../../Components/Typography';

export const paymentMethods = {
  credit: {
    label: 'Credit Card',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Debit Card',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Money',
    icon: <Money size={16} />,
  },
} as const;

export function PaymentOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodsError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentOption
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodsError && <RegularText>{paymentMethodsError}</RegularText>}
    </PaymentOptionsContainer>
  );
}
