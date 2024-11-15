import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './Context/Context.jsx'

<link href="https://fonts.googleapis.com/css2?family=Barlow&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:wght@400;600;700&family=Kanit&family=Poppins&family=Roboto&display=swap" rel="stylesheet"></link>



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>

      <App />
    </CartProvider>
    
  </React.StrictMode>,
)
