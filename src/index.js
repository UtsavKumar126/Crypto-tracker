import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import navcss from "./css/navbar.css"
import CoinProvider from './Context/CoinProvider';
import ThemeProvider from './Context/Theme/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
  <CoinProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </CoinProvider> 
  </ThemeProvider> 
);

