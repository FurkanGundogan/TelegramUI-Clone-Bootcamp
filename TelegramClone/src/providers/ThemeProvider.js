import React, {useState} from 'react';
import darkTheme from '../constants/darkTheme';
import lightTheme from '../constants/lightTheme';
import { ThemeContext } from '../contexts/themeContext';




const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);

  const handleToggleTheme = () => {
    if (theme.type === 'light') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        darkTheme,
        lightTheme,
        toggleTheme: handleToggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;