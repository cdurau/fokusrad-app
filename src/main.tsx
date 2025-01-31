import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FocusWheelApp from "./FokusradApp.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FocusWheelApp />
  </StrictMode>,
)
