import styled from 'styled-components';

export const PaymentOptionsContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label > div {
    background: ${({ theme }) => theme.colors['brand-purple-light']};
    border-color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: solid 1px ${({ theme }) => theme.colors['base-button']};
  user-select: none;

  &:hover {
    transition: 0.4s;
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`;
