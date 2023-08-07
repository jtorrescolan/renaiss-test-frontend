import React, { FC, InputHTMLAttributes, ReactElement, MouseEvent } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconButton?: ReactElement;
  actionButton?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const StyledInputContainer = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  font-family: 'General Sans';
  padding: 10px 16px;
  border-radius: 4px;
  border: 1px solid var(--slate-300);
  background-color: #FFF;
  height: 40px;
  box-sizing: border-box;
  color: var(--slate-800);
  width: 100%;

  &::placeholder {
    color: var(--slate-400);
  }
`;

const StyledAction = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  right: 16px;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Input: FC<InputProps> = ({ iconButton, actionButton = () => {}, ...props }) => (
  <StyledInputContainer>
    <StyledInput {...props} />
    {iconButton && (
      <StyledAction type="button" onClick={actionButton}>{iconButton}</StyledAction>
    )}
  </StyledInputContainer>
)

export default Input;
