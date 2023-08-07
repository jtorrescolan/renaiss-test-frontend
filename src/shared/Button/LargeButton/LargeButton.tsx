import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledBaseButton, ButtonProps } from '../BaseButton';

const StyledLargeButton = styled(StyledBaseButton)`
  border-radius: 6px;
  border: none;
  padding: 0px 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.42px;
  height: 40px;

  svg {
    ${props => props.iconPosition === 'left' ? 'margin-right: 9px' : 'margin-left: 9px'};
  }
`;

const LargeButton: FC<ButtonProps> = ({ children, iconPosition, icon, ...props}) => (
  <StyledLargeButton iconPosition={iconPosition} {...props}>
    {iconPosition === 'left' && icon}
    {children}
    {iconPosition === 'right' && icon}
  </StyledLargeButton>
);

LargeButton.defaultProps = { iconPosition: 'left' };

export default LargeButton;
