import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { Theme } from './theme';

import { worker } from './mocks/worker';
import { getClient } from './queryClient';

if (import.meta.env.DEV) {
  worker.start();
}

let clientQuery = getClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
