import React from 'react'
import styled from 'styled-components';
import { Layout } from 'shared';
import { PlusCircle as PlusCircleIcon} from 'shared/Icons';

import ChatTitle from './ChatTitle';
import ChatInput from './ChatInput';
import ChatContent from './ChatContent';
import { useAppState } from './ChatContext';

const ChatContainer = styled.div<{ openSidebar: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid rgba(204, 204, 204, 0.55);
  overflow: hidden;
  height: 100%;
  width: ${props => props.openSidebar ? '60%' : '100%'};
  margin-left: auto;
  transition: all 0.3s ease;
`;

const Chat = () => {
  const { openSidebar } = useAppState();
  
  return (
    <Layout>
      <ChatContainer openSidebar={openSidebar}>
        <ChatTitle title="OdamaChat" textButton="Nueva Busqueda" iconButton={<PlusCircleIcon size={20} color="white" />} />
        <ChatContent />
        <ChatInput />
      </ChatContainer>
    </Layout>
  );
}

export default Chat;
