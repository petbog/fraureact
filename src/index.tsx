import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import './style/normalize.scss'
import './style/rezet.scss'
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
