import { createContext, useState } from 'react';

export const TabBarContext = createContext();

export const TabBarProvider = ({ children }) => {

    const [ display, setDisplay ] = useState(true);
  return (
    <TabBarContext.Provider value={{display, setDisplay}}>
      {children}
    </TabBarContext.Provider>
  )
}