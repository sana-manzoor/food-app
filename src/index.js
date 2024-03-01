import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './Context/ContextShare';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextShare>
    <ToastContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ToastContainer>
    </ContextShare>
  </React.StrictMode>
);
