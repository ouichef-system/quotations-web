import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { RequestForQuotationApp } from './features/requestForQuotation/RequestForQuotationApp';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ouiChefTheme } from './ouiChefTheme';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={ouiChefTheme}>
        <CssBaseline />
        <RequestForQuotationApp />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found.");
}