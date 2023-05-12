import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalContextProvider } from './globalContextProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
