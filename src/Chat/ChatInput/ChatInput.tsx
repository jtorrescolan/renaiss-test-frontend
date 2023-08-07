import React, { useState } from 'react';
import styled from 'styled-components';

import { Input } from 'shared';
import { Send as SendIcon } from 'shared/Icons';
import { useChatAPI } from 'Chat/ChatAPI';

const StyledChatInput = styled.div`
  background-color: var(--base-white);
  padding: 34px 25px 25px 25px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid rgba(203, 213, 225, 0.55);
`;

const ChatInput = () => {
  const { sendMessage } = useChatAPI();
  const [text, setText] = useState('');

  const onSendMessage = async () => {
    await sendMessage(text);
    setText('');
  };

  return (
    <StyledChatInput>
      <Input
        placeholder="Insertar Prompt"
        value={text}
        onChange={(event) => setText(event.target.value)}
        iconButton={<SendIcon size={20} color="#F97316" />}
        actionButton={onSendMessage}
      />
    </StyledChatInput>
  );
};

export default ChatInput;
