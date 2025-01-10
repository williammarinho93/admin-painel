//import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
//import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"

const schema = z.object({
  contract: z.enum(['Pro', 'Bussiness', 'Enterprise'], {
    required_error: 'Contrato é obrigatório',
  }),
});

const AddClient = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contrato Clientes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Novo Cliente
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo Cliente</DialogTitle>
              </DialogHeader>
              
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="contract"
                    control={control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contrato</FormLabel>
                        <FormControl>
                          <Select {...field}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o contrato" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Pro">Pro</SelectItem>
                              <SelectItem value="Bussiness">Bussiness</SelectItem>
                              <SelectItem value="Enterprise">Enterprise</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        {errors.contract && <FormMessage>{String(errors.contract.message)}</FormMessage>}
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end mt-6">
                    <Button type="submit">Salvar</Button>
                  </div>
                </form>
              
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Pagamento</TableCell>
              <TableCell>Contrato</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Empresa 1</TableCell>
              <TableCell>Rua 1</TableCell>
              <TableCell>98 9123456789</TableCell>
              <TableCell> <Badge className='bg-green-700'>Ativo</Badge>  </TableCell>
              <TableCell> <Badge variant={'outline'} >Pro</Badge> </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Empresa 2</TableCell>
              <TableCell>Rua 2</TableCell>
              <TableCell>98 9123456789</TableCell>
              <TableCell><Badge className='bg-green-700'>Ativo</Badge></TableCell>
              <TableCell><Badge variant={'outline'}>Bussiness</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Empresa 3</TableCell>
              <TableCell>Rua 3</TableCell>
              <TableCell>98 9123456789</TableCell>
              <TableCell><Badge className='bg-yellow-400'>Pendente</Badge></TableCell>
              <TableCell><Badge variant={'outline'}>Enterprise</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AddClient;