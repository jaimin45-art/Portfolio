import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Common/ThemeContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-njsd0eyt5x5f1ysd.us.auth0.com"
    clientId="E0LZ6GYCG2yLwUOuBgeVrsZbfsmL4S2K"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <BrowserRouter>
    <ThemeProvider>

    <App />
    </ThemeProvider>
    </BrowserRouter>
    
    </Auth0Provider>
 ,
)
