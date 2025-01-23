import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header'
import { AppSidebar } from '@/components/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'






export function AppLayout(){
    
    return(
        <div className="h-screen flex">
            
            <SidebarProvider  >
            <div className="w-1/6 bg-[#023047]"> {/* Sidebar com fundo vermelho */}
                <AppSidebar />
            </div>
            
            <div className="w-5/6 flex flex-col"> {/* Container para Header e Dashboard */}
                <div className=""> {/* Header com fundo azul */}
                    <Header />
                </div>
                <div className="flex-1 bg-white p-8 pt-6"> {/* Dashboard com fundo branco */}
                    <Outlet />
                </div>
            </div>
            </SidebarProvider>
        </div>
        
        
    )
}