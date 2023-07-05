import { InputHTMLAttributes, forwardRef } from 'react';
import {
  InputStyled,
  InputStyledContainer,
  RightText,
  WrapperInput,
} from './styles';
import { RegularText } from '../Typography';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  className?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <WrapperInput className={className}>
        <InputStyledContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyledContainer>
        {error && <RegularText size='s'>{error}</RegularText>}
      </WrapperInput>
    );
  }
);
