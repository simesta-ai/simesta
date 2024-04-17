import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {

    const [ headerType, setHeaderType ] = useState("notification");
  return (
    <HeaderContext.Provider value={{ headerType, setHeaderType }}>
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeaderState = () => useContext(HeaderContext)