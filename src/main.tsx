import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import { QuotationsWebApp } from './QuotationsWebApp';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <BrowserRouter basename='/quotations-web/'>
          <CssBaseline />
          <QuotationsWebApp />
        </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element with id 'root' not found.");
}