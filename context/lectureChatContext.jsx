import { createContext, useState, useMemo } from 'react';

export const LectureChatContext = createContext();

export const LectureChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);


    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    }
  return (
    <LectureChatContext.Provider value={{messages, addMessage}}>
      {children}
    </LectureChatContext.Provider>
  )
}