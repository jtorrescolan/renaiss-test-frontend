import React from 'react';
import styled from 'styled-components';
import { SmallButton as Button, IconButton } from '../Button';
import { ChevronLeft as ChevronLeftIcon, Sidebar as SidebarIcon, Settings as SettingsIcon } from '../Icons';
import { useAppDispatch } from 'Chat/ChatContext';
import { Action } from 'Chat/ChatActions';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  width: 100%;
  background-color: var(--orange);
  box-sizing: border-box;
`;

const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .back-button {
    margin-right: 13px;
  }
`;

const Header = () => {
  const dispatch = useAppDispatch();

  const onOpenSidebar = () => {
    dispatch({ type: Action.TOGGLE_SIDEBAR });
  };

  return (
    <StyledHeader>
      <StyledHeaderLeft>
        <Button className="back-button" type="button" icon={<ChevronLeftIcon size={20} color="white" />}>
          Atras
        </Button>
        <IconButton onClick={onOpenSidebar}>
          <SidebarIcon size={25} color="white" />
        </IconButton>
      </StyledHeaderLeft>
      <IconButton>
        <SettingsIcon size={25} color="white" />
      </IconButton>
    </StyledHeader>
  );
}

export default Header;
