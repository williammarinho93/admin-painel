import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async"
import { router } from "./routes";
import './index.css'
//import { Toaster } from 'sonner'
import { Toaster } from "@/components/ui/sonner"

function App() {
  
  return (
    
      < HelmetProvider>
        <Helmet titleTemplate="%s | HelpDesk"/>
        <Toaster  position="top-right"  richColors />
        <RouterProvider  router={router} />
      </HelmetProvider>
      
        
    
  )
}

export default App
