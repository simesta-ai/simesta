import { createContext, useContext, useState } from 'react';

const TabBarContext = createContext();

export const TabBarProvider = ({ children }) => {

    const [ displayTabBar, setDisplayTabBar ] = useState(true);
  return (
    <TabBarContext.Provider value={{ displayTabBar, setDisplayTabBar }}>
      {children}
    </TabBarContext.Provider>
  )
}

export const useTabBar = () => useContext(TabBarContext)
