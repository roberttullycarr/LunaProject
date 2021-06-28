import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Store/store";
import {ThemeProvider} from "styled-components";
import {defaultTheme, GlobalStyle} from "./Styles";
import {Provider} from "react-redux";


ReactDOM.render(
<React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
