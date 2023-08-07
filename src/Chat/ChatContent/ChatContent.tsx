import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAppState } from 'Chat/ChatContext';
import ChatLoader from 'Chat/ChatLoader';

import ChatItem from './ChatItem';

const StyledChatContent = styled.div`
  flex: 0 0 calc(100vh - 384px);
  padding: 30px 25px;
  overflow: auto;

  & > div {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ChatContent = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { chats, showLoader } = useAppState();

  useEffect(() => {
    contentRef.current?.scroll({
      top: contentRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [chats]);

  return (
    <StyledChatContent ref={contentRef}>
      {chats.length > 0 && chats.map(chat => {
        const { username, type, time, content} = chat;
        return <ChatItem key={time} username={username} content={content} type={type} time={new Date(time).toLocaleTimeString()} />;
      })}
      {showLoader && <ChatLoader text="OdamaChat ..." />}
    </StyledChatContent>
  );
};

export default ChatContent;
