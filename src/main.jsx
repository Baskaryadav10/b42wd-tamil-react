import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'; // default import
import './index.css'
//import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
  
)
