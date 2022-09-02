import React, {useState} from 'react';
import { ChatListContext } from '../contexts/chatContext';

const ChatListProvider = ({children}) => {
  const [chatState, setChatState] = useState([]);
  const getChat = (sender,receiver) =>{
    if(chatState[sender+receiver]) return chatState[sender+receiver]
    return []
  }
  const setChat = (sender,receiver,msg) =>{
    setChatState({...chatState,[sender+receiver]:[...getChat(sender,receiver),{text:msg,datetime:new Date()}]})
  }
  return (
    <ChatListContext.Provider
      value={{
        chatList: chatState,
        setChatList: setChatState,
        getChat:getChat,
        setChat:setChat
      }}>
      {children}
    </ChatListContext.Provider>
  );
};

export default ChatListProvider;