import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',    
  transition: transitions.SCALE
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
