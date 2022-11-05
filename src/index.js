import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// State
import ShowsState from './context/shows/showsState';
import AlertsState from "./context/alerts/AlertsState";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowsState>
    <AlertsState>
      <App />
    </AlertsState>
  </ShowsState>,
);


reportWebVitals();
