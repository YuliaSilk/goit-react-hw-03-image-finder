import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyles';

const theme = {
  colors: {
    main: '#ca2222',
    header: '#460c0c',
    backgraund: '#720d27',
    border: '#f792a9',
    inputColor: '#350909',
    text: '#350909',
    error: '#de103f'
  },

spacing: value => `${value * 4}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
