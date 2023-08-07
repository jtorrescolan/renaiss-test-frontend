import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from 'shared';
import { useAppDispatch } from 'Chat/ChatContext';
import { Action } from 'Chat/ChatActions';

interface ChatTitleProps {
  title: string;
  textButton: string;
  iconButton?: ReactNode;
}

const StyledChatTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--base-white);
  padding: 14px 25px;
  border-bottom: 1px solid rgba(203, 213, 225, 0.55);;

  h5 {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;

const ChatTitle: FC<ChatTitleProps> = ({ title, textButton, iconButton }) => {
  const dispatch = useAppDispatch();

  const onClear = () => {
    dispatch({ type: Action.CLEAR });
  };

  return (
    <StyledChatTitle>
      <h5>{title}</h5>
      <Button icon={iconButton} onClick={onClear}>{textButton}</Button>
    </StyledChatTitle>
  );
};

export default ChatTitle;
