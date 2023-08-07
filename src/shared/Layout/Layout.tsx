import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import Header from '../Header';
import SideBar from '../Sidebar';
import { useAppState } from 'Chat/ChatContext';

interface LayoutProps {
  children: ReactNode;
}

const StyledMain = styled.main`
  padding: 30px;
  flex: 1;
`

const Layout: FC<LayoutProps> = ({ children }) => {
  const { openSidebar } = useAppState();

  return (
    <>
      <Header />
      <SideBar isOpen={openSidebar} />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default Layout;
