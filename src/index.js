import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

//"https://softinsa.herokuapp.com/"
axios.defaults.baseURL = 'http://localhost:4000/'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


