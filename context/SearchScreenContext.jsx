import { createContext, useState } from 'react';

export const SearchScreenContext = createContext();

export const SearchScreenProvider = ({ children }) => {

    const [ displaySearch, setDisplaySearch ] = useState(false);
  return (
    <SearchScreenContext.Provider value={{displaySearch, setDisplaySearch}}>
      {children}
    </SearchScreenContext.Provider>
  )
}