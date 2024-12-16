import { createContext, useState } from 'react';

export const ThemeContext = createContext();

// enum of light and dark theme
export const Theme = {
  light: 'light',
  dark: 'dark'
}

export const ThemeProvider = ({ children }) => {

    const [ theme, setTheme ] = useState(Theme.dark);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}