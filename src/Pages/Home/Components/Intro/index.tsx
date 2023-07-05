import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles';
import coffeeIntro from '../../../../assets/coffee-intro.svg';
import { RegularText } from '../../../../Components/Typography';
import { InfoWithIcon } from '../../../../Components/InfoWithIcon';

import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className='container'>
        <div>
          <section>
            <IntroTitle size='xl'>
              Find the perfect coffee for any time of day
            </IntroTitle>
            <RegularText size='l' color='subtitle' as='h3' weight={400}>
              With Coffee Delivery, you receive your coffee anywhere any time
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight='fill' />}
              iconColor={colors['brand-yellow-dark']}
              text='Simple and secure purchase'
            />
            <InfoWithIcon
              icon={<Package weight='fill' />}
              iconColor={colors['base-text']}
              text='Packaging keeps the coffee intact'
            />
            <InfoWithIcon
              icon={<Timer weight='fill' />}
              iconColor={colors['brand-yellow']}
              text='Delivery fast and trackable'
            />
            <InfoWithIcon
              icon={<Coffee weight='fill' />}
              iconColor={colors['brand-purple-dark']}
              text='Coffee arrives fresh to you'
            />
          </BenefitsContainer>
        </div>
        <img src={coffeeIntro} alt='' />
      </IntroContent>
    </IntroContainer>
  );
}
