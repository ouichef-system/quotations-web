import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ouiChefTheme } from './ouiChefTheme';
import { BrowserRouter } from "react-router-dom";
import { QuotationsWebApp } from './QuotationsWebApp';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={ouiChefTheme}>
        <BrowserRouter>
          <CssBaseline />
          <QuotationsWebApp />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found.");
}