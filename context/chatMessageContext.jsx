import { createContext, useState, useMemo } from 'react';

export const ChatMessageContext = createContext();

export const ChatMessageProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);


    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    }
  return (
    <ChatMessageContext.Provider value={{messages, addMessage}}>
      {children}
    </ChatMessageContext.Provider>
  )
}