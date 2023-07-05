import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../Components/Input';
import { AddressFormContainer } from './styles';

interface FormStateError {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as FormStateError;

  return (
    <AddressFormContainer>
      <Input
        placeholder='Zip code'
        className='zip-code'
        type='text'
        {...register('zipCode')}
        error={errors.zipCode?.message}
      />
      <Input
        placeholder='Street'
        className='street'
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder='Number'
        className='number'
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder='Complement'
        className='complement'
        rightText='optional'
        {...register('complement')}
        error={errors.complement?.message}
      />
      <Input
        placeholder='District'
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder='City'
        {...register('city')}
        error={errors.city?.message}
      />
      <Input placeholder='UF' {...register('uf')} error={errors.uf?.message} />
    </AddressFormContainer>
  );
}
