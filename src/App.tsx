import React from 'react';
import Chat from './Chat';
import { ChatProvider } from 'Chat/ChatContext';

const App = () => (
  <ChatProvider>
    <Chat />
  </ChatProvider>
);

export default App;
