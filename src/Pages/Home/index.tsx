import { CoffeeCards } from './Components/CoffeeCards';
import { Intro } from './Components/Intro';
import { OurCoffees } from './Components/OurCoffees';
import { CoffeeListContainer, HomeContainer } from './styles';

import { coffees } from '../../Data/coffees';

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
      <CoffeeListContainer className='container'>
        {coffees.map((coffee) => {
          return <CoffeeCards coffee={coffee} key={coffee.id} />;
        })}
      </CoffeeListContainer>
    </HomeContainer>
  );
}
