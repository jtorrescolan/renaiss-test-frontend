import React, { FC } from 'react';
import styled from 'styled-components';
import SideBarInput from './SidebarInput/SidebarInput';

interface SidebarProps {
  isOpen: boolean;
}

const StyledSidebar = styled.div<SidebarProps>`
  position: absolute;
  top: 123px;
  left: 30px;
  height: 100%;
  width: 37%;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease;
  z-index: 10;
`;

const SideBar: FC<SidebarProps> = ({ isOpen }) => (
  <StyledSidebar isOpen={isOpen}>
    <SideBarInput />
  </StyledSidebar>
);

export default SideBar;
