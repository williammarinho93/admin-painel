import { Helmet } from "react-helmet-async";

import { AtendendoCard } from "./AtendendoCard";
import { AfazerCard } from "./AfazerCard";
import { PausadoCard } from "./PausadoCard";
import { FinalizadoCard } from "./FinalizadoCard";
import { TicketChart } from "./TicketChart";
import { Notification } from "./Notification";



export function Dashboard(){
    return (
        <>
            <Helmet title="Login" />
            <div className="flex flex-col gap-4" >
                <h1 className="text-3xl font-bold tracking-tighter " >Dashboard</h1>

                <div className=" grid grid-cols-4 gap-4 ">
                    <AfazerCard/>
                    <AtendendoCard/>
                    <PausadoCard/>
                    <FinalizadoCard/>
                </div>

                <div className="grid grid-cols-9 gap-4  " >
                    <TicketChart/>
                    <Notification/>
                </div>

            </div>
        </>
        
    )
}