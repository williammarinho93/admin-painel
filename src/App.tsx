import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async"
import { router } from "./routes";
import './index.css'
import { Toaster } from 'sonner'

function App() {
  
  return (
    
      < HelmetProvider>
        <Helmet titleTemplate="%s | HelpDesk"/>
        <Toaster richColors  />
        <RouterProvider  router={router} />
      </HelmetProvider>
      
        
    
  )
}

export default App
