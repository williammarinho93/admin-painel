import { MessageCircle, Ticket, LayoutDashboard, Settings, ChevronRight } from "lucide-react"
import Imagem from "../assets/ti.png"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,

  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import { Collapsible, CollapsibleContent  } from "./ui/collapsible"
import { CollapsibleTrigger } from "@radix-ui/react-collapsible"





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
    items: [
      {
        title: "Listagem de Tickets",
        url: "/tickets",
      },
      {
        title: "Cadastro",
        url: "#",
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
        <SidebarGroup className="gap-4" >
          <SidebarHeader >
          <img src={Imagem} alt="Descrição" className="size-25 " />
          </SidebarHeader>
          <Separator  />
          <SidebarGroupContent>

            
            
            <SidebarMenu>
              {items.map((item) => (
                <div key={item.title}>
                {item.items ? (
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <a href={item.url} className="text-white flex items-center justify-between  ">
                          <span className="flex items-center gap-2 ">
                            <item.icon className=" size-5 " />
                            <span>{item.title}</span>

                            </span>
                            <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        
                          </a>
                          
                        </SidebarMenuButton>
                        
                      </SidebarMenuItem>
                      
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {item.items.map((subItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton asChild>
                            <a href={subItem.url} className="text-white pl-6">
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="text-white">
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </div>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
)
}
