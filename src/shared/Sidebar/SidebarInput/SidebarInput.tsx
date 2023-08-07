import React, { useState } from 'react';
import styled from 'styled-components';

import { Send as SendIcon } from 'shared/Icons';
import Input from 'shared/Input';
import { useChatAPI } from 'Chat/ChatAPI';

const StyledSidebarInput = styled.div`
  display: block;
  width: 100%;
  background-color: var(--base-white);
  padding: 24px 28px 42px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(46, 58, 90, 0.09);
  box-sizing: border-box;

  h3 {
    margin: 0 0 10px 0;
    font-size: 22px;
    font-weight: 600;
    color: var(--slate-800);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    margin: 0 0 33px 0;
  }
`;

const SideBarInput = () => {
  const [text, setText] = useState('');
  const { sendMessage } = useChatAPI();

  const onSendMessage = async () => {
    await sendMessage(text, 'system');
    setText('');
  };

  return (
    <StyledSidebarInput>
      <h3>Sistem</h3>
      <p>
        Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.
      </p>
      <Input
        placeholder="Insertar Prompt"
        value={text}
        onChange={(event) => setText(event.target.value)}
        iconButton={<SendIcon size={20} color="#F97316" />}
        actionButton={onSendMessage}
      />
    </StyledSidebarInput>
  );
};

export default SideBarInput;
