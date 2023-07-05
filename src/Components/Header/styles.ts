import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface HeaderButtonProps {
  variant: 'purple' | 'yellow';
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  .quantity-cart {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    background: ${({ theme }) => theme.colors['brand-yellow-dark']};
    color: ${({ theme }) => theme.colors['base-white']};
    border-radius: 999px;
    height: 1.25rem;
    width: 1.25rem;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    svg {
      color: ${theme.colors[`brand-${variant}-dark`]};
    }
  `};

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      span {
        color: ${({ theme }) => theme.colors['brand-purple']};
      }

      svg {
        color: ${theme.colors[`brand-purple-dark`]};
      }
    `};
`;
