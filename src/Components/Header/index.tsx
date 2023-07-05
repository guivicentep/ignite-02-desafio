import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles';
import logoCoffee from '../../assets/logo-coffee.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../Hooks/useCartContext';

export function Header() {
  const { cartQuantity } = useCartContext();

  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to={'/'}>
          <img src={logoCoffee} alt='' />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight='fill' />
            <span>Barueri - SP</span>
          </HeaderButton>
          <HeaderButton variant='yellow'>
            {cartQuantity >= 1 && (
              <span className='quantity-cart'>{cartQuantity}</span>
            )}
            <NavLink to={'/checkout'}>
              <ShoppingCart size={20} weight='fill' />
            </NavLink>
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}
