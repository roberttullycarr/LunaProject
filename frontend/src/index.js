import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Store/store";
import {ThemeProvider} from "styled-components";
import {defaultTheme, GlobalStyle} from "./Styles";
import {Provider} from "react-redux";

const token = localStorage.getItem('token')
if(token) store.dispatch({type: 'ADD_TOKEN', payload: token})

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
