import { Card, CardHeader, CardTitle } from "@/components/ui/card";




export function Notification(){
    return (
        <div className=" bg-[#BFDFED] p-4 rounded-md w-80  " >
            <div className="flex items-center justify-between" >
                <h1 className=" font-bold " >Notificação</h1>
                <span className="text-xs text-gray-400" >Ver todos</span>
            </div>
            <div className="flex flex-col gap-4 mt-4" >
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <h1 className="text-lg font-bold">Você foi convidado para uma reuni</h1>
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <h1 className="text-lg font-bold">Você foi convidado para uma reuni</h1>
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <h1 className="text-lg font-bold">Você foi convidado para uma reuni</h1>
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}