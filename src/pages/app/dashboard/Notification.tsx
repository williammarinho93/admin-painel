import React, { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const Notification = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Card className="bg-[#BFDFED] border-none p-4 rounded-md w-80">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Notificações</CardTitle>
            <span className="text-xs text-gray-400">Ver todos</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            className="bg-blue-50 border-none p-4 rounded-md cursor-pointer hover:bg-blue-100"
            onClick={openDialog}
          >
            <AlertTitle>#026 - Clínica da família</AlertTitle>
            <AlertDescription className="text-xs text-muted-foreground">
              10 mins atrás
            </AlertDescription>
          </div>
          <div
            className="bg-purple-50 border-none p-4 rounded-md cursor-pointer hover:bg-purple-100"
            onClick={openDialog}
          >
            <AlertTitle>#027 - Clínica da família</AlertTitle>
            <AlertDescription className="text-xs text-muted-foreground">
              15 mins atrás
            </AlertDescription>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="hidden">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova Tarefa</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={closeDialog}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Notification;