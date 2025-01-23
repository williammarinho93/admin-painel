import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const clientSchema = z.object({
  type: z.enum(["Físico", "Jurídico"], { required_error: "Tipo é obrigatório" }),
  nome: z.string().min(1, "Nome é obrigatório").optional(),
  cpf: z.string().regex(/^\d{11}$/, "CPF deve ter 11 dígitos").optional(),
  telefone: z.string().regex(/^\d{10,11}$/, "Telefone deve ter entre 10 e 11 dígitos").optional(),
  inscricaoEstadual: z.string().optional(),
  dataNascimento: z.string().optional(),
  genero: z.enum(["Feminino", "Masculino"]).optional(),
  razaoSocial: z.string().min(1, "Razão social é obrigatória").optional(),
  cnpj: z.string().regex(/^\d{14}$/, "CNPJ deve ter 14 dígitos").optional(),
  nomeFantasia: z.string().optional(),
  horarioExpediente: z.enum(["comercial", "integral"], {
    required_error: "Horário de expediente é obrigatório",
  }).optional(),
});

type ClientType = z.infer<typeof clientSchema>;

export default function AddClient() {
  const [clients, setClients] = useState<ClientType[]>([]);
  const [clientType, setClientType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ClientType>({
    resolver: zodResolver(clientSchema),
  });

  function handleFormData(data: ClientType) {
    if (editingIndex !== null) {
      const updatedClients = [...clients];
      updatedClients[editingIndex] = data;
      setClients(updatedClients);
      toast.success("Cliente atualizado com sucesso!");
    } else {
      setClients((prev) => [...prev, data]);
      toast.success("Cliente cadastrado com sucesso!");
    }

    reset();
    setIsModalOpen(false);
    setEditingIndex(null);
  }

  function handleEdit(index: number) {
    const clientToEdit = clients[index];
    setEditingIndex(index);
    setClientType(clientToEdit.type);
    reset(clientToEdit);
    setIsModalOpen(true);
  }

  function handleDelete(index: number) {
    const updatedClients = clients.filter((_, i) => i !== index);
    setClients(updatedClients);
    toast.success("Cliente deletado com sucesso!");
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Contrato Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-6">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="ml-auto" onClick={() => reset()}>
                  Novo Cliente
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px]">
                <DialogHeader>
                  <DialogTitle>{editingIndex !== null ? "Editar Cliente" : "Novo Cliente"}</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(handleFormData)} className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo</Label>
                      <Controller
                        name="type"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={(value) => {
                              field.onChange(value);
                              setClientType(value);
                            }}
                            value={field.value}
                          >
                            <SelectTrigger className="border p-2 rounded-md">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Físico">Pessoa Física</SelectItem>
                              <SelectItem value="Jurídico">Pessoa Jurídica</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.type && <span className="text-red-500">{errors.type.message}</span>}
                    </div>
                  </div>

                  {clientType === "Físico" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome Completo</Label>
                          <Input id="nome" placeholder="Digite" {...register("nome")} />
                          {errors.nome && <span className="text-red-500">{errors.nome.message}</span>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cpf">CPF</Label>
                          <Input id="cpf" placeholder="Digite" {...register("cpf")} />
                          {errors.cpf && <span className="text-red-500">{errors.cpf.message}</span>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone">Telefone</Label>
                          <Input id="telefone" placeholder="Digite" {...register("telefone")} />
                          {errors.telefone && <span className="text-red-500">{errors.telefone.message}</span>}
                        </div>
                      </div>
                    </>
                  )}

                  {clientType === "Jurídico" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="razaoSocial">Razão Social</Label>
                          <Input id="razaoSocial" placeholder="Digite" {...register("razaoSocial")} />
                          {errors.razaoSocial && (
                            <span className="text-red-500">{errors.razaoSocial.message}</span>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cnpj">CNPJ</Label>
                          <Input id="cnpj" placeholder="Digite" {...register("cnpj")} />
                          {errors.cnpj && <span className="text-red-500">{errors.cnpj.message}</span>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone">Telefone</Label>
                          <Input id="telefone" placeholder="Digite" {...register("telefone")} />
                          {errors.telefone && <span className="text-red-500">{errors.telefone.message}</span>}
                        </div>
                      </div>
                    </>
                  )}

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
                <TableCell>Tipo</TableCell>
                <TableCell>Nome/Razão Social</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>Ações</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((client, index) => (
                <TableRow key={index}>
                  <TableCell>{client.type}</TableCell>
                  <TableCell>{client.type === "Físico" ? client.nome : client.razaoSocial}</TableCell>
                  <TableCell>{client.telefone}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEdit(index)}>Editar</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(index)}>Deletar</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
