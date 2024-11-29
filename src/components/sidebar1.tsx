import { LayoutDashboard, MessageCircle, Ticket } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

export function Sidebar1() {
    return (
        <div className='w-57 p-5 '>
            <img src={Logo} alt="Dr suporte" className="w-30 h-20" />
            
            <Separator orientation="horizontal" className="w-20 bg-[#219EBC] " />
            <div className="flex flex-col gap-2 ">

                <ul className= "   text-white ">
                    <li className="flex flex-row ">
                        <Link to="/"  >
                            <LayoutDashboard  size={24} /> 
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/">
                            <Ticket />
                            <span>Ticket</span>
                        </Link>
                        
                    </li>

                    <li>
                        <Link to="/" >
                            <MessageCircle />
                            <span>Chat</span>
                        </Link>
                        
                    </li>
                </ul>
                

                

                
            </div>
        </div>
    );
}