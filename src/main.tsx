import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Styles/Theme/default';
import { GlobalStyle } from './Styles/global';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
