import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClipboardCheck } from "lucide-react";




export function FinalizadoCard(){
    return(
        <Card className=" bg-[#C9F7F5] shadow " >
            <CardHeader className="flex-row itens-center justify-between space-y-0 pb-2 ">
                <CardTitle className="text-base font-semibold text-blue-600 " >Finalizados</CardTitle>
                <ClipboardCheck className="h-4 w-4 text-muted-foreground " />
            </CardHeader>
            <CardContent className="space-y-1" >
                <span className="text-muted-foreground text-sm " >Requisições dos ultimos 30 dias </span>
                <h1 className="  font-bold " >Numero de Chamados: 7</h1>
            </CardContent>
        </Card>
    )
}