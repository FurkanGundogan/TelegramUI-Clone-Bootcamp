import React, {useState} from 'react';
import { ChatListContext } from '../contexts/chatContext';

const ChatListProvider = ({children}) => {
  const [chatState, setChatState] = useState(null);

  return (
    <ChatListContext.Provider
      value={{
        chatList: chatState,
        setChatList: setChatState,
      }}>
      {children}
    </ChatListContext.Provider>
  );
};

export default ChatListProvider;