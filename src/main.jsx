// Import Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

// Import Component
import App from './App.jsx'

// Import CSS
import './index.css'
import './scss/global.scss'

axios.defaults.baseURL = import.meta.env.VITE_SERVER_API;
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
