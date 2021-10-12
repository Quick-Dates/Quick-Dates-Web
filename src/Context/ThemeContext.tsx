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
    if (
      localStorage.getItem('theme') === 'light'
      || (!('theme' in localStorage)
        && window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
      setTheme('light');
      changeTheme('light');
    } else {
      setTheme('dark');
      changeTheme('dark');
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
