import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Form } from "react-router-dom";



export function AddClient(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Contrato Clientes</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex items-center gap-4 mb-6">
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className=" ml-auto">
                Nova mesa
              </Button>
            </DialogTrigger>
            <DialogContent >
              <DialogHeader>
                <DialogTitle>Nova Mesa</DialogTitle>
              </DialogHeader>
              
              <Form>
                <Label>
                  <span>Nome</span>
                  <Input className="mt-1" placeholder="Nome" />
                </Label>
                <Label>
                  <span>Endereço</span>
                  <Input className="mt-1" placeholder="Endereço" />
                </Label>
                <Label>
                  <span>Telefone</span>
                  <Input className="mt-1" placeholder="Telefone" />
                </Label>
                <Label>
                  <span>Email</span>
                  <Input className="mt-1" placeholder="Email" />
                </Label>
                <Label>
                  <span>Contrato</span>
                  <Select >
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione o contrato" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Pro" >Pro</SelectItem>
                        <SelectItem value="Bussiness" >Bussiness</SelectItem>
                        <SelectItem value="Enterprise" >Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </Label>
                <div className="flex justify-end mt-6">
                  <Button>Salvar</Button>
                </div>
              </Form>
            </DialogContent>
          </Dialog>
          

        </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Endereço</TableCell>
                            <TableCell>Telefone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Contrato</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Empresa 1</TableCell>
                            <TableCell>Rua 1</TableCell>
                            <TableCell>98 9123456789</TableCell>
                            <TableCell> </TableCell>
                            <TableCell>Pro</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Empresa 2</TableCell>
                            <TableCell>Rua 2</TableCell>
                            <TableCell>98 9123456789</TableCell>
                            <TableCell> </TableCell>
                            <TableCell>Bussiness</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Empresa 3</TableCell>
                            <TableCell>Rua 3</TableCell>
                            <TableCell>98 9123456789</TableCell>
                            <TableCell> </TableCell>
                            <TableCell>Enterprise</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            </Card>
    )
}