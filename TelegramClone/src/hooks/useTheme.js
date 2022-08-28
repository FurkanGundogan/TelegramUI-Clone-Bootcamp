import {useContext} from 'react';
import { ThemeContext } from '../contexts/themeContext';

const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  return themeContext;
};

export default useTheme;