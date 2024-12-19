'use client'


import { MoreHorizontal } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog'

// Types for our task data
type Task = {
  
  descricao: string
  tecnico: string
  status: string
  
}

// Sample data
const tasks: Task[] = [
  
  {
    
    descricao: "Equipe Roberto",
    tecnico: "antônio",
    status: "ativo",
  },
  {
    
    descricao: "Equipe Samuel",
    tecnico: "antônio",
    status: "ativo",
  },
  {
    
    descricao: "Equipe Davi",
    tecnico: "antônio",
    status: "ativo",
  },
  
  
  
  
]

export function TableWork() {
 

  return (
    <Card className="w-full max-w-[1200px] mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Mesa de Trabalho</CardTitle>
       
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
              


            </DialogContent>
          </Dialog>
          



        </div>
        <Table>
          <TableHeader>
            <TableRow>
              
              <TableHead>Descrição</TableHead>
              <TableHead>Técnicos</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.descricao}>
                
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      
                      
                    </div>
                    <span className="font-bold">{task.descricao}</span>
                    
                  </div>
                </TableCell>
                
                <TableCell>{task.tecnico}</TableCell>
                <TableCell>
                    <Badge variant={task.status === "ativo" ? "default" : "destructive"} className={task.status === "ativo" ? "bg-green-500" : "bg-red-500"}>{task.status}</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Deletar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

