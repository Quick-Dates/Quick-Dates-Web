import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './Context/ThemeContext';
import Routes from './routes';
import './styles/global.css';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
