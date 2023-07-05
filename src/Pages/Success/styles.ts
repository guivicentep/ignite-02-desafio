import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;

  > div {
    > h1 {
      color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    }
  }

  > img {
    width: 30.75rem;
    height: 18.3125rem;
  }
`;

export const ContentContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;
  align-items: space-between;
  justify-content: space-between;
  min-width: 32rem;
  gap: 2.5rem;
  position: relative;
  background: ${({ theme }) => theme.colors['base-background']};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    z-index: -1;
  }
`;
