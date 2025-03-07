import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider >
        <Provider store={store}>
          <App />
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);