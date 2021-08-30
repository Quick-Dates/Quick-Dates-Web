import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './Context';
import ThemeProvider from './Context/ThemeContext';
import Routes from './routes';
import './styles/global.css';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
