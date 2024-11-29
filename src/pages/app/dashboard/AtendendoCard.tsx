import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";




export function AtendendoCard(){
    return(
        <Card className="bg-[#E3FFE1] shadow-md">
            <CardHeader className="flex-row itens-center justify-between space-y-0 pb-2 ">
                <CardTitle className="text-base font-semibold text-green-600 " >Atendendo</CardTitle>
                <BadgeCheck className="h-4 w-4 text-muted-foreground " />
            </CardHeader>
                <CardContent className="space-y-1" >
                    <span className="text-muted-foreground text-sm " >Requisições dos ultimos 30 dias </span>
                    <h1 className="  font-bold " >Numero de interações: 7</h1>
                </CardContent>
        </Card>
    )
}