import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


import { Bell,  Search, User } from "lucide-react"

import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";




const schema = z.object({
    subject: z.string().min(1, "O assunto é obrigatório."),
    description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres."),
    attachment: z.string().optional(), // Pode ser ajustado para aceitar arquivos
    contact: z
      .string()
      .regex(/^\d+$/, "O número de contato deve conter apenas dígitos.")
      .min(10, "O número de contato deve ter pelo menos 10 dígitos."),
  });



export function Header(){

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
          subject: "",
          description: "",
          attachment: "",
          contact: "",
        },
      });
    
      const onSubmit = (data) => {
        console.log("Dados enviados:", data);
      };

    return(
        <div className="border-b flex itens-center justify-between p-4">

            <div className="flex items-center border rounded-lg p-2 shadow-sm h-12 ">
                <Search className="mr-2 text-gray-400" size={20}  />
                <Input type="text" 
                        placeholder="pesquise por ticket" 
                        className="focus:outline-none border-none w-80"/>

                
            </div>
                <nav className="flex items-center space-x-4 lg:space-x-4 ">
                    
                    <Dialog>
                        <DialogTrigger asChild>

                        <Button className="bg-[#FB8500]">Novo Ticket</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                Novo Ticket
                            </DialogHeader>
                            
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} >
                                    {/*campo: assunto */}
                                    <FormField 
                                    control={form.control}
                                    name="subject"
                                    render={({field}) => (
                                        <FormItem>
                                        <FormLabel>Assunto</FormLabel>
                                        <FormControl>
                                        <Input placeholder="Digite o assunto" {...field} />
                                        </FormControl>
                                        
                                        <FormMessage />
                                        </FormItem>
                                    ) } />
                                    {/* Campo: Descrição */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva o problema detalhadamente"
                    {...field}
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo: Anexo */}
          <FormField
            control={form.control}
            name="attachment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anexo</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormDescription>Envie um arquivo se necessário.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo: Número de Contato */}
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de Contato</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu número de contato" {...field} />
                </FormControl>
                <FormDescription>
                  Informe um número para entrarmos em contato.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Botão de Enviar */}
          <Button type="submit" className="mt-4 w-full">
            Criar Ticket
          </Button>

                                </form>
                            </Form>

                        </DialogContent>
                    
                    
                    </Dialog>

                    <Button>Nova Tarefa</Button>

                    {/* Icone de notificação */}
                    <Bell />

                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <User />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            Perfil
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Configuração
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Sair da conta
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    
                    </DropdownMenu>
                    
                    

                </nav>
            
        </div>
    )
}