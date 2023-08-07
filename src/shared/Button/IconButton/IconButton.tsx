import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledBaseButton, ButtonProps } from '../BaseButton';

const StyledIconButton = styled(StyledBaseButton)`
  border-radius: 4px;
  border: 1px solid var(--base-white);
  padding: 10px;
  height: 45px;
  width: 45px;
`;

const IconButton: FC<Omit<ButtonProps, 'icon' | 'iconPosition'>> = ({ children, ...props}) => (
  <StyledIconButton {...props}>
    {children}
  </StyledIconButton>
);

export default IconButton;
