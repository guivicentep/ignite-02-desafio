import { RegularText, TitleText } from '../../Components/Typography';
import {
  ContentContainer,
  OrderDetailsContainer,
  SuccessContainer,
} from './styles';

import motorcycleImg from '../../assets/motorcycle.svg';
import { InfoWithIcon } from '../../Components/InfoWithIcon';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { Coffee } from '../Home/Components/CoffeeCards';
import { useEffect } from 'react';

interface DataOrderProps {
  state: {
    city: string;
    coffee: Coffee[];
    complement: string;
    district: string;
    number: string;
    paymentMethod: string;
    street: string;
    uf: string;
    zipCode: string;
  };
}

export function SuccessPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as DataOrderProps;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  if (!state) {
    return <></>;
  }

  return (
    <SuccessContainer className='container'>
      <div>
        <TitleText size='l' color='title'>
          Wow! Order confirmed.
        </TitleText>
        <RegularText size='l' color='subtitle'>
          Now just wait for your coffee to come to you
        </RegularText>
      </div>

      <ContentContainer>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin size={16} weight='fill' />}
            iconColor={colors['brand-purple-dark']}
            text={
              <p>
                Delivery on <strong>{state.street}</strong>, number{' '}
                {state.number}
              </p>
            }
          />
          <InfoWithIcon
            icon={<Timer size={16} weight='fill' />}
            iconColor={colors['brand-yellow']}
            text={
              <p>
                Previous arrives <br />
                <strong>20min - 30min</strong>
              </p>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar size={16} weight='fill' />}
            iconColor={colors['brand-yellow-dark']}
            text={
              <p>
                Payment on arrives <br />
                <strong>{state.paymentMethod}</strong>
              </p>
            }
          />
        </OrderDetailsContainer>
        <img src={motorcycleImg} alt='' />
      </ContentContainer>
    </SuccessContainer>
  );
}
