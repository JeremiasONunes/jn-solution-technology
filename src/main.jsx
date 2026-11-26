import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Roboto hospedada no próprio site (sem pedido bloqueante ao Google Fonts)
import '@fontsource-variable/roboto'
import './styles/globals.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
