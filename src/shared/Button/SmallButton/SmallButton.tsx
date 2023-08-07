import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledBaseButton, ButtonProps } from '../BaseButton';

const StyledSmallButton = styled(StyledBaseButton)`
  border-radius: 4px;
  border: 1px solid var(--base-white);
  padding: 0px 15px;
  font-size: 16px;
  font-weight: 500;
  height: 45px;

  svg {
    ${props => props.iconPosition === 'left' ? 'margin-right: 4px' : 'margin-left: 4px'};
  }
`;

const SmallButton: FC<ButtonProps> = ({ children, iconPosition, icon, ...props}) => (
  <StyledSmallButton iconPosition={iconPosition} {...props}>
    {iconPosition === 'left' && icon}
    {children}
    {iconPosition === 'right' && icon}
  </StyledSmallButton>
);

SmallButton.defaultProps = { iconPosition: 'left' };

export default SmallButton;
