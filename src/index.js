import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App as Apppes } from './components/app/';
import reportWebVitals from './reportWebVitals';
import { Store } from "./store";
import { BrowserRouter as Router } from 'react-router-dom';

const store = new Store();

export const renderAll = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Apppes store={store} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderAll();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
