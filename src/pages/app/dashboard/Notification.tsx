import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"




export function Notification(){
    return (
        
            
            
        <Card   className="bg-[#BFDFED] border-none p-4 rounded-md w-80" >
          <CardHeader>
            <div className="flex items-center justify-between" >
            <CardTitle>Notificações</CardTitle>
            <span className="text-xs text-gray-400" >Ver todos</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="bg-blue-50 border-none">
              <AlertTitle>#026 - Clínica da família</AlertTitle>
              <AlertDescription className="text-xs text-muted-foreground">
                10 mins atrás
              </AlertDescription>
            </Alert>
            <Alert className="bg-purple-50 border-none">
              <AlertTitle>#027 - Clínica da família</AlertTitle>
              <AlertDescription className="text-xs text-muted-foreground">
                15 mins atrás
              </AlertDescription>
            </Alert>
            <Alert className="bg-green-50 border-none">
              <AlertTitle>#028 - Clínica da família</AlertTitle>
              <AlertDescription className="text-xs text-muted-foreground">
                20 mins atrás
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
           
        
    )
}