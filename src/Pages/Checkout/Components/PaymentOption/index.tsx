import { useFormContext } from 'react-hook-form';
import { ContentContainer, PaymentOptionsContainer } from './styles';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentOption = forwardRef<HTMLInputElement, PaymentMethodProps>(
  ({ icon, id, label, ...props }, ref) => {
    return (
      <PaymentOptionsContainer>
        <input {...props} type='radio' name='paymentMethod' id={id} ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </PaymentOptionsContainer>
    );
  }
);
