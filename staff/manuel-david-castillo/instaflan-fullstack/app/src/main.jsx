import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './AppContext.jsx'
import { App } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </AppProvider>
)
