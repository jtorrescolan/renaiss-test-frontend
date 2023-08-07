import React, { FC } from 'react';
import styled from 'styled-components';

interface ChatLoaderProps {
  text: string;
}

const StyledChatLoader = styled.div`
  display: block;
  width: 100%;
  padding: 24px 28px;
  background-color: var(--base-white);
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px 0px rgba(46, 58, 90, 0.09);
  color: var(--orange);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.32px;
`;

const ChatLoader:FC<ChatLoaderProps> = ({ text }) => (
  <StyledChatLoader>
    {text}
  </StyledChatLoader>
);

export default ChatLoader;
