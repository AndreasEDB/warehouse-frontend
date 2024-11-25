import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import App from './App.tsx'
import ProductContextProvider from './contexts/ProductContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductContextProvider>
    <App />
    </ProductContextProvider>
  </StrictMode>,
)
