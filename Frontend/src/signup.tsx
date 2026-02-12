import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './pages/signup.tsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
)
