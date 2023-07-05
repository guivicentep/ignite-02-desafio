import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyle)`
  display: flex;
  border-radius: 6px 44px 6px 44px;
  flex-direction: column;
`;

export const TotalOrderSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
