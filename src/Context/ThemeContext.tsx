import React, {
  createContext, useState, useEffect, ReactNode,
} from 'react';
import { themes } from '../styles/themes';

export const ThemeContext = createContext({});

interface IProps{
  children: ReactNode
}

const ThemeProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if ((!('theme' in localStorage))) {
      setTheme('light');
      changeTheme('light');
    } else if (
      localStorage.getItem('theme') === 'dark'
          && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      changeTheme('dark');
    } else {
      setTheme('light');
      changeTheme('light');
    }
  }, []);

  function toggleThemeMode() {
    if (
      !localStorage.getItem('theme')
      || localStorage.getItem('theme') === 'light'
    ) {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
      changeTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
      changeTheme('light');
    }
  }
  function changeTheme(newTheme: string) {
    const themeColors: any = newTheme === 'light' ? themes.light : themes.dark; // Seleciona o tema para aplicar
    Object.keys(themeColors).forEach((key) => {
      document.documentElement.style.setProperty(`--${key}`, themeColors[key]);
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
