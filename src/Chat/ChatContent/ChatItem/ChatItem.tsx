import React, { FC } from 'react';
import styled from 'styled-components';

interface ChatItemProps {
  username: string;
  time: string;
  content: string;
  type: 'me' | 'system';
}

const StyledChatItem = styled.div`
  display: block;
  width: 100%;
  padding: 24px 28px;
  background-color: var(--base-white);
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px 0px rgba(46, 58, 90, 0.09);
`;

const StyledItemTitle = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(203, 213, 225, 0.35);

  h5 {
    margin: 0 10px 0 0;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.32px;
    color: ${props => props.type === 'me' ? `var(--emerald-600)` : `var(--orange)`};
    width: 110px;
  }

  span {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.26px;
    color: var(--slate-400);
  }
`;

const StyledItemContent = styled.p`
  margin: 0;
  padding-top: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.48px;
  color: var(--slate-800);
  white-space: pre;
  overflow: auto;
`;

const ChatItem: FC<ChatItemProps> = ({ username, time, content, type }) => (
  <StyledChatItem>
    <StyledItemTitle type={type}>
      <h5>{username}</h5>
      <span>{time}</span>
    </StyledItemTitle>
    <StyledItemContent>{content}</StyledItemContent>
  </StyledChatItem>
);

export default ChatItem;
