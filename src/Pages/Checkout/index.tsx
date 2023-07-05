import { CheckoutForm } from './Components/CheckoutForm';
import { CheckoutContainer } from './styles';
import { SelectedCoffees } from './Components/SelectedCoffees';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { useCartContext } from '../../Hooks/useCartContext';
import { useNavigate } from 'react-router-dom';

enum PaymentMethod {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const checkoutFormValidatorSchema = zod.object({
  zipCode: zod.string().min(1, 'Zip-code is required. Please type this field'),
  street: zod.string().min(1, 'Fill this field'),
  number: zod.string().min(1, 'Fill this field'),
  complement: zod.string().nullable(),
  district: zod.string().min(1, 'Fill this field'),
  city: zod.string().min(1, 'Fill this field'),
  uf: zod.string().min(1, 'Fill this field'),
  paymentMethod: zod.nativeEnum(PaymentMethod, {
    errorMap: () => {
      return { message: 'Select a paymentMethods' };
    },
  }),
});

export type OrderData = zod.infer<typeof checkoutFormValidatorSchema>;

type ConfirmOrderFormData = OrderData;

export function CheckoutPage() {
  const { cartItems, clearCartItems } = useCartContext();

  const navigate = useNavigate();

  const checkoutForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(checkoutFormValidatorSchema),
  });

  const { handleSubmit, reset } = checkoutForm;

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    const newData = {
      ...data,
      coffee: cartItems,
    };

    navigate('/success', {
      state: newData,
    });

    clearCartItems();
    reset();
  }

  return (
    <FormProvider {...checkoutForm}>
      <CheckoutContainer
        className='container'
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  );
}
