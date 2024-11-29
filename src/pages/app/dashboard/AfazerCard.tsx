import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flag } from "lucide-react";
import { Link } from "react-router-dom";


export function AfazerCard(){
    return(
        <Link to={""}>
        <Card className=" bg-[#FFE2E5] shadow " >
            <CardHeader className="flex-row itens-center justify-between space-y-0 pb-2 ">
                <CardTitle className="text-base font-semibold text-red-500 " >A Fazer</CardTitle>
                <Flag className="h-4 w-4 text-muted-foreground " />
            </CardHeader>
            <CardContent className="space-y-1" >
                <span className="text-muted-foreground text-sm " >Requisições dos ultimos 30 dias </span>
                <h1 className="  font-bold " >Numero de Chamados: 7</h1>
            </CardContent>
        </Card>
        </Link>
    )
}