import { createContext, useContext, useState } from 'react'
import { COLORS } from '../../constants/constants';

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev)
  };

  const theme = isDarkTheme ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const lightTheme = {
    bodyBackground: COLORS.homeWhite,
    containerBackground: COLORS.lightRedGray,
    textColor1: COLORS.black,
    textColor2: COLORS.gray,
    borderColor: COLORS.black
};

const darkTheme = {
    bodyBackground: COLORS.lightBlack,
    containerBackground: COLORS.lightGray,
    textColor1: COLORS.white,
    textColor2: COLORS.gray,
    borderColor: COLORS.homeWhite
};
