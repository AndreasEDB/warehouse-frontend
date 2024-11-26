import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import App from './App.tsx'
import ProductContextProvider from './contexts/ProductContext.tsx'
import { IconContext } from 'react-icons'
import SidebarContextProvider from './contexts/SidebarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductContextProvider>
    <IconContext.Provider value={{ className: 'align-middle aspect-square' }}>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
      </IconContext.Provider>
    </ProductContextProvider>
  </StrictMode>,
)
