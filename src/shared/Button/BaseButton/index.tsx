import { ReactNode, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right'
}

export const StyledBaseButton = styled.button<PropsWithChildren<ButtonProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--orange);
  color: var(--base-white);
  cursor: pointer;
`;
