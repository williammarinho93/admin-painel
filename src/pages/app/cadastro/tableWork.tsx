import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from "react-helmet-async";



export function TableWork(){
    return(
        <>
            <Helmet title="Mesa de Trabalho" />
        <div className="flex flex-col gap-4" >
            <h1 className="text-3xl font-bold tracking-tight " >Mesa de Trabalho</h1>
            <Button >Nova Mesa</Button>

            <div className="space-y-2.5" >
                <form className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filtros</span>
                    <Input placeholder="ticket" className="h-8 w-[320px]" />
                </form>

                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Ticket</TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead>Prioridade</TableHead>
                                <TableHead>Operador Mesa</TableHead>
                                <TableHead>Resposta Solução</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>#1265</TableCell>
                                <TableCell>Dr Suporte</TableCell>
                                <TableCell>Alta</TableCell>
                                <TableCell>Antônio</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>


            </div>

        </div>
        </>
    )
}