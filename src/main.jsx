import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

createRoot(document.getElementById('root')).render(
  <Router>
  <AuthProvider>
      <App />
  </AuthProvider>
</Router>,
)
