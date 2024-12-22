import { MessageCircle, Ticket, LayoutDashboard, Settings, ChevronRight, FolderPen } from "lucide-react"
import Imagem from "../assets/ti.png"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  
  
  
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import { Collapsible, CollapsibleContent  } from "./ui/collapsible"
import { CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { Link } from "react-router-dom"




// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Tickets",
    url: "#",
    icon: Ticket,
    isActive: true,
    items: [
      {
        title: "Listagem de Tickets",
        url: "/tickets",
      },
      
   ],  
  },
  {
    title: "Cadastro",
    icon: FolderPen,
    url: "#",
    items: [
      {
        title: "Tipos de Tickets",
        url: "/tickets/tipos",
      },
      {
        title: "Catalogo de Categoria",
        url: "/tickets/catalogo",
      },
      {
        title: "Grupo de Categoria",
        url: "/tickets/grupocatalogo",
      },
      {
        title: "Mesa de Trabalho",
        url: "/mesatrabalho",
      },
      {
        title: "Perfil de Operadores",
        url: "/tickets/perfiloperadores",
      },
      {
        title: "Equipe de Operadores",
        url: "/tickets/equipeoperadores",
      },
      {
        title: "Cliente",
        url: "/cliente",
      },
    ],
  },
  {
    title: "Chat",
    url: "#",
    icon: MessageCircle,
  },
  
  {
    title: "Configuração",
    url: "#",
    icon: Settings,
  },
  
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="gap-4">
          <SidebarHeader>
            <img src={Imagem} alt="Descrição" className="size-25 " />
          </SidebarHeader>
          <Separator />
          
          <SidebarGroupContent >
            <SidebarMenu className="text-white">
              {items.map((item) => {
                const hasSubItems = item.items && item.items.length > 0;

                return hasSubItems ? (
                  <Collapsible
                    key={item.title}
                    title={item.title}
                    //defaultOpen={item.isActive}
                  >
                    <SidebarContent>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent >
                        <SidebarMenuSubItem className="ml-2  border-l border-white  ">
                        
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              
                              <SidebarMenuSubButton asChild className="text-white " >
                              
                                <a href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </a>
                                
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSubItem>
                      </CollapsibleContent>
                    </SidebarContent>
                  </Collapsible>
                ) : item.title === "Dashboard" ? (
                  // Usando Link para redirecionar para a página principal
                  <Link to="/" key={item.title}>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                ) : (
                  // Renderiza como um botão normal se não tiver sub-itens
                  <SidebarMenuButton key={item.title} tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
